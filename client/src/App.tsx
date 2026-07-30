import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";
import SEOView from "./pages/SEOView";
import AEOView from "./pages/AEOView";
import AIKnowledgeView from "./pages/AIKnowledgeView";
import CarAudioFitment from "./pages/CarAudioFitment";
import Header from "./components/Header";

function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/product/:id"} component={ProductDetail} />
      <Route path={"/seo"} component={SEOView} />
      <Route path={"/aeo"} component={AEOView} />
      <Route path={"/ai-knowledge"} component={AIKnowledgeView} />
      <Route path={"/car-audio-fitment"} component={CarAudioFitment} />
      <Route path={"/404"} component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="dark">
        <TooltipProvider>
          <Toaster />
          <div className="min-h-screen bg-background text-foreground flex flex-col">
            <Header />
            <main className="flex-1">
              <Router />
            </main>
          </div>
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
