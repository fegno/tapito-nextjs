import { InteractiveGrid } from "@/components/InteractiveGrid";
import Particles from "@/components/Particles";
import { CaseStudiesHero } from "@/components/case-studies/CaseStudiesHero";
import { CaseStudiesListing } from "@/components/case-studies/CaseStudiesListing";

export const metadata = {
  title: "Case Studies | Tapito",
  description:
    "Discover how 500+ retail brands use Tapito AI to grow revenue, retain customers, and make smarter decisions.",
};

const CaseStudiesPage = () => {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#fafbfc]">

      {/* ── Background ──────────────── */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:32px_32px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20 pointer-events-none" />
      
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <InteractiveGrid />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-30">
          <Particles />
        </div>
        
        {/* Subtle Light Beams */}
        <div className="absolute top-0 right-[10%] w-[500px] h-[800px] bg-blue-400/5 blur-[120px] rounded-full -rotate-12 pointer-events-none" />
        <div className="absolute bottom-0 left-[5%] w-[600px] h-[600px] bg-sky-400/5 blur-[120px] rounded-full pointer-events-none" />
      </div>

      <CaseStudiesHero />
      <CaseStudiesListing />

    </main>
  );
};

export default CaseStudiesPage;
