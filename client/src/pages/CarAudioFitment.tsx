import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Car, FileSearch, Search, Sparkles } from "lucide-react";

const fitmentFlow = [
  "Vehicle year",
  "Make",
  "Model",
  "Installation location",
  "Compatible product",
  "Technical PDF",
];

const intentExamples = [
  {
    query: "2018 F-150 double DIN dash kit",
    signals: ["vehicle fitment", "product type", "installation location"],
    result: "Compatible dash kits and installation documentation",
  },
  {
    query: "Toyota Camry front door speaker size",
    signals: ["vehicle fitment", "location intent", "specification question"],
    result: "Front-door speaker fitment, adapters, and related guides",
  },
  {
    query: "radio harness for 2016 Silverado",
    signals: ["common terminology", "vehicle fitment", "accessory relationship"],
    result: "Compatible wiring harnesses and installation PDFs",
  },
];

export default function CarAudioFitment() {
  return (
    <div className="container py-10 space-y-8">
      <section className="space-y-4 max-w-4xl">
        <div className="flex flex-wrap gap-2">
          <Badge variant="secondary">Search Product Case Study</Badge>
          <Badge variant="outline">SEO</Badge>
          <Badge variant="outline">AEO</Badge>
          <Badge variant="outline">GEO</Badge>
        </div>
        <h1 className="text-4xl font-bold tracking-tight">Car Audio Fitment Search</h1>
        <p className="text-lg text-muted-foreground">
          A product-discovery concept that turns technical PDF fitment data into an intent-based search experience organized around the customer&apos;s vehicle, installation location, and compatibility question.
        </p>
      </section>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2"><Car className="h-5 w-5" /> From document search to intent search</CardTitle>
          <CardDescription>
            Customers should not need to know the internal document name or catalog taxonomy before they can find a compatible product.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap items-center gap-2">
            {fitmentFlow.map((step, index) => (
              <div key={step} className="flex items-center gap-2">
                <div className="rounded-md border bg-card px-3 py-2 text-sm font-medium">{step}</div>
                {index < fitmentFlow.length - 1 && <ArrowRight className="h-4 w-4 text-muted-foreground" />}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <section className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader>
            <Search className="h-6 w-6" />
            <CardTitle>SEO relevance</CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">
            Structured vehicle, product, and installation terminology creates indexable pages that match high-intent searches.
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <FileSearch className="h-6 w-6" />
            <CardTitle>AEO relevance</CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">
            Compatibility data can answer direct questions such as what fits, where it installs, and which accessories are required.
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <Sparkles className="h-6 w-6" />
            <CardTitle>GEO relevance</CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">
            Clear entities and relationships make product knowledge easier for AI systems to retrieve, explain, and cite accurately.
          </CardContent>
        </Card>
      </section>

      <section className="space-y-4">
        <div>
          <h2 className="text-2xl font-semibold">Intent examples</h2>
          <p className="text-muted-foreground">The search experience interprets the customer&apos;s meaning instead of requiring exact catalog language.</p>
        </div>
        <div className="grid gap-4">
          {intentExamples.map((item) => (
            <Card key={item.query}>
              <CardContent className="pt-6 grid gap-4 md:grid-cols-[1fr_1.2fr_1.4fr]">
                <div>
                  <div className="text-xs uppercase tracking-wide text-muted-foreground">Customer query</div>
                  <div className="font-medium mt-1">“{item.query}”</div>
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wide text-muted-foreground">Detected signals</div>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {item.signals.map((signal) => <Badge key={signal} variant="secondary">{signal}</Badge>)}
                  </div>
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wide text-muted-foreground">Expected result</div>
                  <div className="font-medium mt-1">{item.result}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <Card>
        <CardHeader>
          <CardTitle>Transferable product lesson</CardTitle>
        </CardHeader>
        <CardContent className="text-muted-foreground">
          The same model applies to roofing and building materials: map contractor terminology, brand abbreviations, dimensions, accessories, compatibility rules, and technical documents to the customer&apos;s underlying job intent.
        </CardContent>
      </Card>
    </div>
  );
}
