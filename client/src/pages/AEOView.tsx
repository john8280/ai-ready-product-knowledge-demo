import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Lightbulb } from "lucide-react";

export default function AEOView() {
  const aeoAnswers = [
    {
      question: "What speaker do I need for a 100-person event?",
      answer: "The PowerMax 15\" is ideal for 100-person venues. Its 600W output and 15-inch woofer provide clear, punchy sound. Pair with a subwoofer for deeper bass.",
      source: "PowerMax 15\" Powered PA Speaker",
      category: "Venue Planning",
    },
    {
      question: "Do I need a subwoofer for a DJ setup?",
      answer: "Not always required, but highly recommended. A subwoofer adds depth and impact, especially for electronic music and bass-heavy genres.",
      source: "DeepBass 18\" Subwoofer",
      category: "DJ Setup",
    },
    {
      question: "What PA system works for outdoor gigs?",
      answer: "The Outdoor Event DJ Setup includes 2x 15\" speakers, a 1000W subwoofer, and a professional mixer. Covers 200–1000 people with clear, punchy sound.",
      source: "Outdoor Event DJ Setup",
      category: "Outdoor Events",
    },
    {
      question: "What wireless microphone system works for outdoor events?",
      answer: "The ProVoice system operates on UHF frequencies with 100ft range, making it ideal for outdoor events. Ensure line-of-sight between transmitter and receiver.",
      source: "ProVoice Wireless Microphone System",
      category: "Wireless Audio",
    },
    {
      question: "What is a stage monitor used for?",
      answer: "Stage monitors let performers hear themselves on stage. They're angled toward the performer and connected to a separate monitor mix from the main PA.",
      source: "StagePro 10\" Stage Monitor",
      category: "Live Performance",
    },
    {
      question: "What cable length do I need for my PA system?",
      answer: "Use the shortest cable that reaches your equipment. Longer cables can introduce noise. The ProGrade 25ft is ideal for most small to medium venues.",
      source: "ProGrade XLR Cable 25ft",
      category: "Audio Cables",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="container py-12">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-5xl font-bold mb-4">AEO View</h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Answer Engine Optimization (AEO) focuses on providing direct, concise answers to common questions. This demo shows how product FAQs are structured for AI-powered search engines and answer engines.
          </p>
        </div>

        {/* What is AEO */}
        <Card className="p-8 mb-12 border-l-4 border-l-secondary">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Lightbulb className="w-6 h-6 text-accent" />
            What is AEO?
          </h2>
          <p className="text-lg text-muted-foreground mb-4">
            Answer Engine Optimization is the practice of structuring content to provide direct answers to specific questions. Unlike traditional SEO which targets keywords and rankings, AEO focuses on:
          </p>
          <ul className="space-y-2 text-muted-foreground">
            <li className="flex gap-3">
              <span className="text-accent">•</span>
              <span><strong>Direct Answers:</strong> Clear, concise responses to user questions</span>
            </li>
            <li className="flex gap-3">
              <span className="text-accent">•</span>
              <span><strong>Structured Data:</strong> FAQ schema, Q&A markup for machine readability</span>
            </li>
            <li className="flex gap-3">
              <span className="text-accent">•</span>
              <span><strong>Answer Snippets:</strong> Content formatted for extraction by AI systems</span>
            </li>
            <li className="flex gap-3">
              <span className="text-accent">•</span>
              <span><strong>Context & Authority:</strong> Providing source attribution and expertise signals</span>
            </li>
          </ul>
        </Card>

        {/* FAQ Answers */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Product FAQs Optimized for AEO</h2>
          <div className="space-y-4">
            {aeoAnswers.map((item, idx) => (
              <Card key={idx} className="p-6 hover:border-accent transition-colors">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <h3 className="text-lg font-bold flex-1">{item.question}</h3>
                  <Badge variant="outline">{item.category}</Badge>
                </div>
                <p className="text-muted-foreground mb-4">{item.answer}</p>
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-muted-foreground">Source:</span>
                  <Link href={`/product/${item.source.toLowerCase().replace(/\s+/g, '-')}`}>
                    <a className="text-accent hover:underline">{item.source}</a>
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* AEO Schema Example */}
        <Card className="p-8 bg-card/50 mb-12">
          <h2 className="text-2xl font-bold mb-4">FAQ Schema Markup Example</h2>
          <p className="text-muted-foreground mb-4">
            This structured data helps answer engines understand and surface answers:
          </p>
          <div className="bg-background p-4 rounded overflow-auto">
            <pre className="text-xs font-mono text-muted-foreground">
{`{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What speaker do I need for a 100-person event?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The PowerMax 15\" is ideal for 100-person venues..."
      }
    }
  ]
}`}
            </pre>
          </div>
        </Card>

        {/* AEO Best Practices */}
        <Card className="p-8 border-l-4 border-l-accent mb-12">
          <h2 className="text-2xl font-bold mb-6">AEO Best Practices Demonstrated</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Question-Answer Format",
                description: "Each product includes FAQ pairs that directly answer common user questions.",
              },
              {
                title: "Concise Answers",
                description: "Answers are 1-3 sentences, optimized for extraction and display.",
              },
              {
                title: "Context & Authority",
                description: "Answers include product source attribution and expertise signals.",
              },
              {
                title: "Structured Data",
                description: "FAQ schema markup enables AI systems to parse and understand answers.",
              },
              {
                title: "Natural Language",
                description: "Questions and answers use conversational language matching user queries.",
              },
              {
                title: "Comprehensive Coverage",
                description: "Multiple FAQ pairs cover different aspects and use cases of each product.",
              },
            ].map((item, i) => (
              <div key={i} className="border border-border rounded p-4">
                <h3 className="font-bold mb-2 text-accent">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </Card>

        {/* CTA */}
        <div className="text-center">
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Answer-ready content is the future of product discovery. Explore how structured FAQs improve both traditional search and AI-powered answer engines.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/seo">
              <Button variant="outline">Back: SEO View</Button>
            </Link>
            <Link href="/ai-knowledge">
              <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
                Next: AI Knowledge View
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
