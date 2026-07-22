import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Index from "./pages/Index";
import About from "./pages/About";
import Solutions from "./pages/Solutions";
import Methodology from "./pages/Methodology";
import Services from "./pages/Services";
import Materials from "./pages/Materials";
import Ebooks from "./pages/Ebooks";
import Platform from "./pages/Platform";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
  <Route path="/" element={<Index />} />

<Route path="/sobre" element={<AboutSection />} />

<Route path="/solucoes" element={<Solutions />} />
<Route
  path="/solucoes/metodologia"
  element={<Methodology />}
/>
<Route
  path="/solucoes/servicos"
  element={<Services />}
/>

<Route path="/materiais" element={<Materials />} />
<Route
  path="/materiais/ebooks"
  element={<Ebooks />}
/>
<Route
  path="/materiais/plataforma"
  element={<Platform />}
/>

<Route path="/contato" element={<Contact />} />

<Route path="*" element={<NotFound />} />
</Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
