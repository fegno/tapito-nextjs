import { buildMetadata, softwareAppSchema, webPageSchema, breadcrumbSchema, SITE } from "@/lib/seo";
import JsonLd from "@/components/JsonLd";
import PageContent from "./PageContent";

export const metadata = buildMetadata({
  title: "Retail Marketing Automation Software | Tapito",
  description:
    "Automate customer engagement, retention campaigns, and personalized promotions with AI-powered retail marketing automation.",
  path: "/features/campaign-automation",
});

export default function CampaignAutomationPage() {
  const url = `${SITE.url}/features/campaign-automation`;
  return (
    <>
      <JsonLd
        schema={[
          softwareAppSchema(
            "Campaign Automation",
            "Set once. Run forever. Fully automated customer engagement that scales.",
            url,
          ),
          webPageSchema("Campaign Automation | Tapito", "Set once. Run forever. Fully automated customer engagement that scales.", url),
          breadcrumbSchema([
            { name: "Home", url: SITE.url },
            { name: "Features", url: `${SITE.url}/features` },
            { name: "Campaign Automation", url },
          ]),
        ]}
      />
      <PageContent />
    </>
  );
}
