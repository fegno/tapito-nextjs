import { CaseStudiesHero } from "@/components/case-studies/CaseStudiesHero";
import { CaseStudiesListing } from "@/components/case-studies/CaseStudiesListing";
import { PageBackground } from "@/components/PageBackground";

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
      
      <PageBackground />

      <CaseStudiesHero />
      <CaseStudiesListing />

    </main>
  );
};

export default CaseStudiesPage;
