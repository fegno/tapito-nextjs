import React from "react";
import Navbar from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import Pricing from "@/components/Pricing";
import { buildMetadata, webPageSchema, breadcrumbSchema, SITE } from "@/lib/seo";
import JsonLd from "@/components/JsonLd";

export const metadata = buildMetadata({
  title: "AI Retail Platform Pricing & Plans | Tapito",
  description:
    "Explore flexible pricing plans for Tapito's AI retail intelligence and revenue optimization platform.",
  path: "/plans",
});

export default function PricingPage() {
  const url = `${SITE.url}/plans`;
  return (
    <main className="flex flex-col w-full">
      <JsonLd
        schema={[
          webPageSchema("Pricing Plans | Tapito", "Choose the right plan for your retail growth.", url),
          breadcrumbSchema([
            { name: "Home", url: SITE.url },
            { name: "Pricing Plans", url },
          ]),
        ]}
      />
      <Pricing />
    </main>
  );
}
