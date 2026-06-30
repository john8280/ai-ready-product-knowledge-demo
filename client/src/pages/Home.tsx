import { useState, useMemo } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import products from "@/data/products.json";
import { Zap, Users, Zap as Power } from "lucide-react";

const CATEGORIES = ["All", ...Array.from(new Set(products.products.map(p => p.category)))];
const VENUE_SIZES = ["All", "50–200 people", "50–300 people", "100–500 people", "200–1000 people", "Any"];

export default function Home() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [venueSize, setVenueSize] = useState("All");

  const filtered = useMemo(() => {
    return products.products.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(search.toLowerCase()) ||
        product.description.toLowerCase().includes(search.toLowerCase());
      const matchesCategory = category === "All" || product.category === category;
      const matchesVenue = venueSize === "All" || product.venueSize === venueSize;
      return matchesSearch && matchesCategory && matchesVenue;
    });
  }, [search, category, venueSize]);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 border-b border-border">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 text-accent">
              Find Your Perfect PA System
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Structured AV equipment knowledge for DJs, venues, and audio professionals. Discover products optimized for SEO, AEO, and AI discoverability.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/seo">
                <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
                  Explore SEO View
                </Button>
              </Link>
              <Link href="/ai-knowledge">
                <Button variant="outline">
                  View AI Knowledge
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 border-b border-border bg-card/50">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="text-sm font-medium mb-2 block">Search Products</label>
              <Input
                placeholder="Speaker, mixer, cable..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="bg-background"
              />
            </div>
            <div>
              <label className="text-sm font-medium mb-2 block">Category</label>
              <Select value={category} onValueChange={setCategory}>
                <SelectTrigger className="bg-background">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {CATEGORIES.map(cat => (
                    <SelectItem key={cat} value={cat}>{cat}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="text-sm font-medium mb-2 block">Venue Size</label>
              <Select value={venueSize} onValueChange={setVenueSize}>
                <SelectTrigger className="bg-background">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {VENUE_SIZES.map(size => (
                    <SelectItem key={size} value={size}>{size}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
          <p className="text-sm text-muted-foreground mt-4">
            Showing {filtered.length} of {products.products.length} products
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12">
        <div className="container">
          {filtered.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">No products found matching your criteria.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((product, idx) => (
                <Link key={product.id} href={`/product/${product.id}`}>
                  <a className="group">
                    <Card className="h-full overflow-hidden hover:border-accent transition-colors duration-200 cursor-pointer border-l-4 border-l-accent">
                      <div className="p-6">
                        <Badge variant="secondary" className="mb-3">
                          {product.category}
                        </Badge>
                        <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors">
                          {product.name}
                        </h3>
                        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                          {product.description}
                        </p>

                        <div className="space-y-2 mb-4">
                          <div className="flex items-center gap-2 text-sm">
                            <Users className="w-4 h-4 text-accent" />
                            <span>{product.venueSize}</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm">
                            <Power className="w-4 h-4 text-accent" />
                            <span>{product.power}</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm">
                            <Zap className="w-4 h-4 text-accent" />
                            <span className="capitalize">{product.portability}</span>
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-1">
                          {product.inputs.slice(0, 2).map((input, i) => (
                            <Badge key={i} variant="outline" className="text-xs">
                              {input}
                            </Badge>
                          ))}
                          {product.inputs.length > 2 && (
                            <Badge variant="outline" className="text-xs">
                              +{product.inputs.length - 2}
                            </Badge>
                          )}
                        </div>
                      </div>
                    </Card>
                  </a>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 border-t border-border bg-card/50">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-4">Structured for AI</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Every product includes schema.org markup, FAQ answers, and structured data. Explore how this demo showcases SEO, AEO, and AI-ready product knowledge.
          </p>
          <Link href="/ai-knowledge">
            <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
              View AI Knowledge Graph
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
