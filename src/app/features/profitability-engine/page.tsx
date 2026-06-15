import { buildMetadata, softwareAppSchema, webPageSchema, breadcrumbSchema, SITE } from "@/lib/seo";
import JsonLd from "@/components/JsonLd";
import PageContent from "./PageContent";

export const metadata = buildMetadata({
  title: "Retail Profitability Analytics Software | Tapito",
  description:
    "Improve profitability with AI-powered analytics, revenue optimization, and retail performance insights.",
  path: "/features/profitability-engine",
});

export default function ProfitabilityEnginePage() {
  const url = `${SITE.url}/features/profitability-engine`;
  return (
    <>
      <JsonLd
        schema={[
          softwareAppSchema(
            "Real-Time Profitability Engine",
            "Stop scaling losses. Identify and block profit leaks while spend is active with live margin-protection intelligence.",
            url,
          ),
          webPageSchema("Real-Time Profitability Engine | Tapito", "Stop scaling losses. Identify and block profit leaks while spend is active with live margin-protection intelligence.", url),
          breadcrumbSchema([
            { name: "Home", url: SITE.url },
            { name: "Features", url: `${SITE.url}/features` },
            { name: "Real-Time Profitability Engine", url },
          ]),
        ]}
      />
      <PageContent />
    </>
  );
}
