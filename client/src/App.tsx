import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "./contexts/ThemeContext";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import Intro from "./components/Intro";
import PhotoSlider from "./components/PhotoSlider";
import Menu from "./components/Menu";
import Reviews from "./components/Reviews";
import StayWithUs from "./components/StayWithUs";
import HoursAndMap from "./components/HoursAndMap";
import Footer from "./components/Footer";
import GalleryPage from "./pages/GalleryPage";
import NotFound from "./pages/NotFound";
import { Route, Switch } from "wouter";

function HomePage() {
  return (
    <div className="w-full overflow-x-hidden">
      <Navigation />
      <Hero />
      <Intro />
      <PhotoSlider />
      <Menu />
      <Reviews />
      <StayWithUs />
      <HoursAndMap />
      <Footer />
    </div>
  );
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={HomePage} />
      <Route path="/gallery" component={GalleryPage} />
      <Route path="/404" component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

// Simple Error Boundary
function ErrorBoundary({ children }: { children: React.ReactNode }) {
  try {
    return <>{children}</>;
  } catch (error) {
    console.error(error);
    return <div className="p-4 text-red-600">Something went wrong. Please refresh the page.</div>;
  }
}

export default App;
