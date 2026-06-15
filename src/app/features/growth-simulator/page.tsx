import { buildMetadata, softwareAppSchema, webPageSchema, breadcrumbSchema, SITE } from "@/lib/seo";
import JsonLd from "@/components/JsonLd";
import PageContent from "./PageContent";

export const metadata = buildMetadata({
  title: "Retail Growth Forecasting Software | Tapito",
  description:
    "Simulate growth scenarios, forecast revenue, and make smarter investment decisions with predictive retail analytics.",
  path: "/features/growth-simulator",
});

export default function GrowthSimulatorPage() {
  const url = `${SITE.url}/features/growth-simulator`;
  return (
    <>
      <JsonLd
        schema={[
          softwareAppSchema(
            "Growth Simulator",
            "Model customer growth carefully. Utilize AI to predict mounting changes and avert migrations.",
            url,
          ),
          webPageSchema("Growth Simulator | Tapito", "Model customer growth carefully. Utilize AI to predict mounting changes and avert migrations.", url),
          breadcrumbSchema([
            { name: "Home", url: SITE.url },
            { name: "Features", url: `${SITE.url}/features` },
            { name: "Growth Simulator", url },
          ]),
        ]}
      />
      <PageContent />
    </>
  );
}
