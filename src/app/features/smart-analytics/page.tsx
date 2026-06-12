import { buildMetadata, softwareAppSchema, webPageSchema, breadcrumbSchema, SITE } from "@/lib/seo";
import JsonLd from "@/components/JsonLd";
import PageContent from "./PageContent";

export const metadata = buildMetadata({
  title: "Predictive Retail Analytics Platform | Tapito",
  description:
    "Forecast demand, analyze customer behavior, and identify growth opportunities using AI-powered predictive retail analytics.",
  path: "/features/smart-analytics",
});

export default function SmartAnalyticsPage() {
  const url = `${SITE.url}/features/smart-analytics`;
  return (
    <>
      <JsonLd
        schema={[
          softwareAppSchema(
            "AI Smart Analytics Engine",
            "Your data starts thinking for you. Identify revenue drivers and customer risks automatically.",
            url,
          ),
          webPageSchema("AI Smart Analytics Engine | Tapito", "Your data starts thinking for you. Identify revenue drivers and customer risks automatically.", url),
          breadcrumbSchema([
            { name: "Home", url: SITE.url },
            { name: "Features", url: `${SITE.url}/features` },
            { name: "AI Smart Analytics Engine", url },
          ]),
        ]}
      />
      <PageContent />
    </>
  );
}
