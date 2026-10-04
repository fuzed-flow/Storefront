import { Toaster } from "@/components/ui/toaster";
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClientInstance } from '@/lib/query-client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async'; // 👈 1. Import the provider
import PageNotFound from './lib/PageNotFound';
import ScrollToTop from './components/ScrollToTop';

// Public Marketing Pages
import Home from '@/pages/Home';
import FeatureDetail from '@/pages/FeatureDetail';
import FloatingTrialButton from '@/components/FloatingTrialButton';
import Terms from '@/pages/Terms';
import Privacy from '@/pages/Privacy';
import Contact from '@/pages/Contact';
import FAQ from '@/pages/FAQ';

const StorefrontApp = () => {
  return (
    <>
      <FloatingTrialButton />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/features/:slug" element={<FeatureDetail />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/FAQ" element={<FAQ />} />
        
        {/* Catch-all for 404 pages */}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
};

function App() {
  return (
    <QueryClientProvider client={queryClientInstance}>
      {/* 👇 2. Wrap your routing tree inside the HelmetProvider */}
      <HelmetProvider>
        <Router>
          <ScrollToTop />
          <StorefrontApp />
        </Router>
        <Toaster />
      </HelmetProvider>
    </QueryClientProvider>
  );
}

export default App;