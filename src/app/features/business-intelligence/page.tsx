import { buildMetadata, softwareAppSchema, webPageSchema, breadcrumbSchema, SITE } from "@/lib/seo";
import JsonLd from "@/components/JsonLd";
import PageContent from "./PageContent";

export const metadata = buildMetadata({
  title: "Retail Business Intelligence Software | Tapito",
  description:
    "Monitor store performance, customer behavior, and operational metrics with AI-powered retail business intelligence software.",
  path: "/features/business-intelligence",
});

export default function BusinessIntelligencePage() {
  const url = `${SITE.url}/features/business-intelligence`;
  return (
    <>
      <JsonLd
        schema={[
          softwareAppSchema(
            "Business Intelligence Dashboard",
            "Comprehensive real-time reporting with raw data sync across all your retail outlets.",
            url,
          ),
          webPageSchema("Business Intelligence Dashboard | Tapito", "Comprehensive real-time reporting with raw data sync across all your retail outlets.", url),
          breadcrumbSchema([
            { name: "Home", url: SITE.url },
            { name: "Features", url: `${SITE.url}/features` },
            { name: "Business Intelligence Dashboard", url },
          ]),
        ]}
      />
      <PageContent />
    </>
  );
}
