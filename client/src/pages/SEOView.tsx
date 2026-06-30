import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";

export default function SEOView() {
  const seoExamples = [
    {
      title: "Product Pages with Meta Tags",
      description: "Each product has optimized meta titles, descriptions, and H1 tags for search engines.",
      example: {
        title: "PowerMax 15\" Powered PA Speaker | AI-Ready Product Knowledge Demo",
        description: "Compact yet powerful 15-inch powered PA speaker ideal for small to medium venues. Perfect for DJs and small clubs.",
      },
    },
    {
      title: "Clean URL Structure",
      description: "Semantic URLs that clearly indicate content hierarchy and improve crawlability.",
      example: {
        urls: ["/", "/product/pa-1", "/seo", "/aeo", "/ai-knowledge"],
      },
    },
    {
      title: "Internal Linking Strategy",
      description: "Related products and categories linked throughout to improve site structure and authority flow.",
      example: {
        links: ["Related products in sidebar", "Category pages", "Cross-category recommendations"],
      },
    },
    {
      title: "Schema.org Markup",
      description: "Structured data for products, ratings, and offers to help search engines understand content.",
      example: {
        schema: "@type: Product, aggregateRating, offers",
      },
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="container py-12">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-5xl font-bold mb-4">SEO View</h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            This demo showcases how product knowledge is structured for search engine optimization. Each page includes optimized meta tags, semantic HTML, and internal linking.
          </p>
        </div>

        {/* SEO Elements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {seoExamples.map((item, idx) => (
            <Card key={idx} className="p-6 border-l-4 border-l-accent hover:border-l-secondary transition-colors">
              <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-accent" />
                {item.title}
              </h3>
              <p className="text-muted-foreground mb-4">{item.description}</p>
              
              {item.example.title && (
                <div className="bg-card/50 p-4 rounded text-sm space-y-2">
                  <p className="text-xs text-muted-foreground">Example Meta Title:</p>
                  <p className="font-mono text-accent">{item.example.title}</p>
                  {item.example.description && (
                    <>
                      <p className="text-xs text-muted-foreground mt-3">Example Meta Description:</p>
                      <p className="font-mono text-sm">{item.example.description}</p>
                    </>
                  )}
                </div>
              )}

              {item.example.urls && (
                <div className="bg-card/50 p-4 rounded text-sm space-y-2">
                  <p className="text-xs text-muted-foreground">Example URLs:</p>
                  {item.example.urls.map((url, i) => (
                    <p key={i} className="font-mono text-accent">{url}</p>
                  ))}
                </div>
              )}

              {item.example.links && (
                <div className="bg-card/50 p-4 rounded text-sm space-y-2">
                  <p className="text-xs text-muted-foreground">Internal Links:</p>
                  {item.example.links.map((link, i) => (
                    <p key={i} className="text-accent">• {link}</p>
                  ))}
                </div>
              )}

              {item.example.schema && (
                <div className="bg-card/50 p-4 rounded text-sm space-y-2">
                  <p className="text-xs text-muted-foreground">Schema.org Types:</p>
                  <p className="font-mono text-accent">{item.example.schema}</p>
                </div>
              )}
            </Card>
          ))}
        </div>

        {/* SEO Checklist */}
        <Card className="p-8 mb-12 border-l-4 border-l-secondary">
          <h2 className="text-3xl font-bold mb-6">SEO Implementation Checklist</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              "Meta titles (50-60 characters)",
              "Meta descriptions (150-160 characters)",
              "H1 tags (one per page)",
              "Semantic HTML structure",
              "Internal linking between related products",
              "Clean, descriptive URLs",
              "Schema.org structured data",
              "Mobile-responsive design",
              "Fast page load times",
              "Keyword optimization in headings",
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </Card>

        {/* Example Product Card */}
        <Card className="p-8 bg-card/50 mb-12">
          <h2 className="text-2xl font-bold mb-4">Example: Product Page Structure</h2>
          <div className="space-y-4 font-mono text-sm">
            <div className="bg-background p-4 rounded">
              <p className="text-muted-foreground">&lt;title&gt;</p>
              <p className="text-accent">PowerMax 15" PA Speaker | Best for Small Venues | AI-Ready Demo</p>
              <p className="text-muted-foreground">&lt;/title&gt;</p>
            </div>
            <div className="bg-background p-4 rounded">
              <p className="text-muted-foreground">&lt;meta name="description"&gt;</p>
              <p className="text-accent">Compact 600W powered PA speaker for 50-200 person venues. Ideal for DJs, small clubs, and rehearsal spaces.</p>
              <p className="text-muted-foreground">&lt;/meta&gt;</p>
            </div>
            <div className="bg-background p-4 rounded">
              <p className="text-muted-foreground">&lt;h1&gt;</p>
              <p className="text-accent">PowerMax 15" Powered PA Speaker</p>
              <p className="text-muted-foreground">&lt;/h1&gt;</p>
            </div>
          </div>
        </Card>

        {/* CTA */}
        <div className="text-center">
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Explore how this structured approach to product knowledge enables better SEO, AEO, and AI discoverability.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/">
              <Button variant="outline">View Products</Button>
            </Link>
            <Link href="/aeo">
              <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
                Next: AEO View
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
