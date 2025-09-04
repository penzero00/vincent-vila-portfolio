import { Switch, Route, Router } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Portfolio from "@/pages/Portfolio";

function AppRouter() {
  // Get the base path for GitHub Pages
  const basePath = import.meta.env.PROD ? "/vincent-vila-portfolio" : "";
  
  return (
    <Router base={basePath}>
      <Switch>
        <Route path="/" component={Portfolio} />
        <Route path="/*" component={Portfolio} />
        <Route>
          <div className="min-h-screen flex items-center justify-center bg-background text-foreground">
            <div className="text-center">
              <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
              <p className="text-muted-foreground">The page you're looking for doesn't exist.</p>
            </div>
          </div>
        </Route>
      </Switch>
    </Router>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <AppRouter />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
