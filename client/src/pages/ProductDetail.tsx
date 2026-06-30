import { useParams, Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import products from "@/data/products.json";
import { ChevronLeft, Copy, Check } from "lucide-react";
import { useState } from "react";

export default function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const product = products.products.find(p => p.id === id);
  const [copied, setCopied] = useState(false);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
          <Link href="/">
            <Button>Back to Products</Button>
          </Link>
        </div>
      </div>
    );
  }

  const copySchema = () => {
    navigator.clipboard.writeText(JSON.stringify(product.schema, null, 2));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container py-8">
        <Link href="/">
          <a className="flex items-center gap-2 text-accent hover:opacity-80 mb-8 transition-opacity">
            <ChevronLeft className="w-4 h-4" />
            Back to Products
          </a>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Product Header */}
            <div>
              <Badge className="mb-4">{product.category}</Badge>
              <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
              <p className="text-lg text-muted-foreground">{product.description}</p>
            </div>

            {/* Specs Grid */}
            <Card className="p-6 border-l-4 border-l-accent">
              <h2 className="text-2xl font-bold mb-6">Specifications</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Power</p>
                  <p className="font-mono font-bold text-accent">{product.power}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Portability</p>
                  <p className="font-mono font-bold">{product.portability}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Venue Size</p>
                  <p className="font-mono font-bold">{product.venueSize}</p>
                </div>
              </div>
            </Card>

            {/* Inputs */}
            <Card className="p-6">
              <h2 className="text-2xl font-bold mb-4">Inputs & Connections</h2>
              <div className="flex flex-wrap gap-2">
                {product.inputs.map((input, i) => (
                  <Badge key={i} variant="secondary" className="text-base py-2 px-3">
                    {input}
                  </Badge>
                ))}
              </div>
            </Card>

            {/* Best For */}
            <Card className="p-6 bg-card/50">
              <h2 className="text-2xl font-bold mb-4">Best For</h2>
              <p className="text-lg">{product.bestFor}</p>
            </Card>

            {/* FAQ Section */}
            <Card className="p-6 border-l-4 border-l-secondary">
              <h2 className="text-2xl font-bold mb-6">Common Questions</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-bold text-lg mb-2">{product.faqAnswers.q1}</h3>
                  <p className="text-muted-foreground">{product.faqAnswers.a1}</p>
                </div>
                <div className="border-t border-border pt-6">
                  <h3 className="font-bold text-lg mb-2">{product.faqAnswers.q2}</h3>
                  <p className="text-muted-foreground">{product.faqAnswers.a2}</p>
                </div>
              </div>
            </Card>

            {/* Compatible Accessories */}
            <Card className="p-6">
              <h2 className="text-2xl font-bold mb-4">Compatible Accessories</h2>
              <div className="flex flex-wrap gap-2">
                {product.compatibleAccessories.map((acc, i) => (
                  <Badge key={i} variant="outline">
                    {acc}
                  </Badge>
                ))}
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Schema Card */}
            <Card className="p-6 border-l-4 border-l-accent sticky top-24">
              <h3 className="font-bold mb-4 flex items-center justify-between">
                Schema.org Markup
                <button
                  onClick={copySchema}
                  className="text-xs text-accent hover:opacity-80 transition-opacity"
                >
                  {copied ? (
                    <Check className="w-4 h-4" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </h3>
              <pre className="bg-background p-3 rounded text-xs overflow-auto max-h-64 text-muted-foreground">
                {JSON.stringify(product.schema, null, 2)}
              </pre>
            </Card>

            {/* Use Case Card */}
            <Card className="p-6">
              <h3 className="font-bold mb-2">Use Case</h3>
              <p className="text-sm text-muted-foreground">{product.useCase}</p>
            </Card>

            {/* Related Products */}
            <Card className="p-6">
              <h3 className="font-bold mb-4">Related Products</h3>
              <div className="space-y-2">
                {products.products
                  .filter(p => p.category === product.category && p.id !== product.id)
                  .slice(0, 3)
                  .map(related => (
                    <Link key={related.id} href={`/product/${related.id}`}>
                      <a className="text-sm text-accent hover:underline block">
                        {related.name}
                      </a>
                    </Link>
                  ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
