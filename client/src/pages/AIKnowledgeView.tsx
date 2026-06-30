import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Copy, Check } from "lucide-react";
import { useState } from "react";
import products from "@/data/products.json";

export default function AIKnowledgeView() {
  const [copied, setCopied] = useState(false);

  const llmsTxt = `# AI-Ready AV Product Knowledge Demo

This site contains structured AV equipment recommendations for DJs and small venues.

## Purpose
Demonstrate how product knowledge becomes SEO → AEO → AI Search → Customer Support → Sales Enablement through structured data.

## Key Pages
- /: Product listing with search and filtering
- /product/[id]: Individual product details with schema markup
- /seo: SEO optimization demonstration
- /aeo: Answer Engine Optimization with FAQ structure
- /ai-knowledge: This page - AI knowledge graph

## Product Categories
- Powered PA Speakers
- Subwoofers
- Stage Monitors
- Mixers
- Wireless Microphones
- Speaker Stands
- Cables & Connectors
- Complete Packages
- Headphones

## Structured Data
Every product includes:
- Schema.org Product markup
- AggregateRating with review counts
- Offer pricing information
- FAQ schema for common questions
- Semantic HTML structure

## FAQ Coverage
Each product answers common questions about:
- Venue sizing and capacity
- Setup and compatibility
- Use cases and applications
- Technical specifications
- Maintenance and care

## Data Format
Products are stored as JSON with the following fields:
- id: Unique product identifier
- name: Product name
- category: Product category
- description: Product description
- useCase: Primary use cases
- venueSize: Recommended venue capacity
- power: Power output (watts)
- inputs: Available input types
- portability: Portability rating
- bestFor: Target audience
- compatibleAccessories: Related products
- faqAnswers: Q&A pairs for AEO
- schema: JSON-LD schema.org markup

## Integration Points
This demo can integrate with:
- Search engines (Google, Bing) via schema markup
- Answer engines (Perplexity, Claude) via structured FAQ data
- LLM systems via this llms.txt file
- Customer support systems via FAQ database
- Sales tools via product specifications

## Next Steps
1. Explore individual product pages for full schema markup
2. Review SEO View for search engine optimization
3. Check AEO View for answer engine optimization
4. Use this knowledge graph for AI training and fine-tuning`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(llmsTxt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container py-12">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-5xl font-bold mb-4">AI Knowledge View</h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            This page demonstrates how product knowledge is structured for AI systems. It includes a knowledge graph, schema markup examples, and an llms.txt file for LLM integration.
          </p>
        </div>

        {/* llms.txt Card */}
        <Card className="p-8 mb-12 border-l-4 border-l-accent">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold">llms.txt - AI Knowledge File</h2>
            <button
              onClick={copyToClipboard}
              className="flex items-center gap-2 text-accent hover:opacity-80 transition-opacity"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4" />
                  <span className="text-sm">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  <span className="text-sm">Copy</span>
                </>
              )}
            </button>
          </div>
          <p className="text-muted-foreground mb-4">
            The llms.txt file provides AI systems with a high-level overview of your site's knowledge structure. This enables better context for LLM responses and AI-powered features.
          </p>
          <div className="bg-background p-6 rounded overflow-auto max-h-96">
            <pre className="text-xs font-mono text-muted-foreground whitespace-pre-wrap">
              {llmsTxt}
            </pre>
          </div>
        </Card>

        {/* Knowledge Graph */}
        <Card className="p-8 mb-12">
          <h2 className="text-2xl font-bold mb-6">Product Knowledge Graph</h2>
          <p className="text-muted-foreground mb-6">
            All {products.products.length} products are interconnected through categories, use cases, and compatibility relationships:
          </p>
          
          <div className="space-y-6">
            {/* Categories */}
            <div>
              <h3 className="font-bold mb-3">Categories</h3>
              <div className="flex flex-wrap gap-2">
                {Array.from(new Set(products.products.map(p => p.category))).map(cat => (
                  <Badge key={cat} variant="secondary">
                    {cat}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Relationships */}
            <div>
              <h3 className="font-bold mb-3">Product Relationships</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="border border-border rounded p-4">
                  <p className="text-sm font-mono text-accent mb-2">PA Speaker → Subwoofer</p>
                  <p className="text-sm text-muted-foreground">Subwoofers complement PA speakers for deeper bass</p>
                </div>
                <div className="border border-border rounded p-4">
                  <p className="text-sm font-mono text-accent mb-2">Mixer → Microphone</p>
                  <p className="text-sm text-muted-foreground">Microphones connect to mixer inputs</p>
                </div>
                <div className="border border-border rounded p-4">
                  <p className="text-sm font-mono text-accent mb-2">Speaker → Stand</p>
                  <p className="text-sm text-muted-foreground">Speaker stands position speakers at optimal height</p>
                </div>
                <div className="border border-border rounded p-4">
                  <p className="text-sm font-mono text-accent mb-2">Equipment → Cables</p>
                  <p className="text-sm text-muted-foreground">Cables connect all audio equipment</p>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Schema Examples */}
        <Card className="p-8 mb-12 bg-card/50">
          <h2 className="text-2xl font-bold mb-6">Schema.org Markup Examples</h2>
          <p className="text-muted-foreground mb-6">
            Every product includes structured data that helps AI systems understand product information:
          </p>
          
          <div className="space-y-4">
            <div>
              <p className="text-sm font-bold mb-2">Product Schema</p>
              <div className="bg-background p-4 rounded text-xs font-mono overflow-auto">
                <pre className="text-muted-foreground">{`{
  "@type": "Product",
  "name": "PowerMax 15\" Powered PA Speaker",
  "description": "Compact yet powerful...",
  "offers": {
    "@type": "Offer",
    "priceCurrency": "USD",
    "price": "599"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.5",
    "ratingCount": "24"
  }
}`}</pre>
              </div>
            </div>

            <div>
              <p className="text-sm font-bold mb-2">FAQ Schema</p>
              <div className="bg-background p-4 rounded text-xs font-mono overflow-auto">
                <pre className="text-muted-foreground">{`{
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What speaker do I need for a 100-person event?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The PowerMax 15\" is ideal..."
      }
    }
  ]
}`}</pre>
              </div>
            </div>
          </div>
        </Card>

        {/* AI Integration Points */}
        <Card className="p-8 border-l-4 border-l-secondary mb-12">
          <h2 className="text-2xl font-bold mb-6">AI Integration Points</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Search Engine Integration",
                description: "Schema markup enables rich snippets in Google, Bing, and other search engines.",
              },
              {
                title: "Answer Engine Integration",
                description: "FAQ structure enables Perplexity, Claude, and other answer engines to surface product recommendations.",
              },
              {
                title: "LLM Fine-tuning",
                description: "Structured product data can be used to fine-tune language models for domain-specific tasks.",
              },
              {
                title: "Customer Support Chatbots",
                description: "FAQ database enables chatbots to provide accurate product recommendations.",
              },
              {
                title: "Sales Enablement",
                description: "Structured data powers recommendation engines and sales tools.",
              },
              {
                title: "Knowledge Graphs",
                description: "Product relationships enable knowledge graph construction for semantic search.",
              },
            ].map((item, i) => (
              <div key={i} className="border border-border rounded p-4">
                <h3 className="font-bold mb-2 text-accent">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </Card>

        {/* Data Export */}
        <Card className="p-8 bg-card/50 mb-12">
          <h2 className="text-2xl font-bold mb-4">Data Export</h2>
          <p className="text-muted-foreground mb-6">
            All product data is available in JSON format for integration with external systems:
          </p>
          <div className="bg-background p-4 rounded text-sm font-mono overflow-auto max-h-48">
            <pre className="text-muted-foreground">
              {JSON.stringify(products.products[0], null, 2)}
            </pre>
          </div>
          <p className="text-xs text-muted-foreground mt-4">
            Full dataset available at /data/products.json
          </p>
        </Card>

        {/* CTA */}
        <div className="text-center">
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            This demo shows how structured product knowledge enables AI-ready systems. The combination of SEO, AEO, and AI-optimized data creates a foundation for modern product discovery.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/aeo">
              <Button variant="outline">Back: AEO View</Button>
            </Link>
            <Link href="/">
              <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
                Explore Products
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
