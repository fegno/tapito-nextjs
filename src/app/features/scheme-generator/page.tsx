import { buildMetadata, softwareAppSchema, webPageSchema, breadcrumbSchema, SITE } from "@/lib/seo";
import JsonLd from "@/components/JsonLd";
import PageContent from "./PageContent";

export const metadata = buildMetadata({
  title: "Retail Promotion Management Software | Tapito",
  description:
    "Create, optimize, and manage retail offers, promotions, and incentive programs using AI-powered retail software.",
  path: "/features/scheme-generator",
});

export default function SchemeGeneratorPage() {
  const url = `${SITE.url}/features/scheme-generator`;
  return (
    <>
      <JsonLd
        schema={[
          softwareAppSchema(
            "Smart Scheme Generator",
            "AI-driven staff incentives. Turn single purchases into multi-category revenue.",
            url,
          ),
          webPageSchema("Smart Scheme Generator | Tapito", "AI-driven staff incentives. Turn single purchases into multi-category revenue.", url),
          breadcrumbSchema([
            { name: "Home", url: SITE.url },
            { name: "Features", url: `${SITE.url}/features` },
            { name: "Smart Scheme Generator", url },
          ]),
        ]}
      />
      <PageContent />
    </>
  );
}
