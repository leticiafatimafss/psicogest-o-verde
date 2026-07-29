import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Blog from "./pages/blog/Blog";
import DiagnosticoPsicossocial from "./pages/blog/DiagnosticoPsicossocial";
import EbookNR1 from "./pages/EbookNR1";
import Index from "./pages/Index";
import Metodologia from "./pages/Metodologia";
import NotFound from "./pages/NotFound";
import QuemSomos from "./pages/QuemSomos";
import Servicos from "./pages/Servicos";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />

          <Route path="/quem-somos" element={<QuemSomos />} />

          <Route path="/metodologia" element={<Metodologia />} />

          <Route path="/servicos" element={<Servicos />} />

          <Route path="/guia-nr1" element={<EbookNR1 />} />

          {/* BLOG */}
          <Route path="/blog" element={<Blog />} />

          <Route
            path="/blog/diagnostico-psicossocial-organizacional"
            element={<DiagnosticoPsicossocial />}
          />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
