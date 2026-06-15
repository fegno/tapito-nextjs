import { buildMetadata, webPageSchema, breadcrumbSchema, SITE } from "@/lib/seo";
import JsonLd from "@/components/JsonLd";
import EnterprisePageContent from "./EnterprisePageContent";

export const metadata = buildMetadata({
  title: "Enterprise Retail Intelligence Platform | Tapito",
  description:
    "Scalable AI-powered retail intelligence, predictive analytics, and customer engagement automation for enterprise retailers.",
  path: "/enterprise",
});

export default function EnterprisePage() {
  const url = `${SITE.url}/enterprise`;
  return (
    <>
      <JsonLd
        schema={[
          webPageSchema("Enterprise | Tapito", "Tapito Enterprise delivers scalable AI-powered retail intelligence for large retail groups.", url),
          breadcrumbSchema([
            { name: "Home", url: SITE.url },
            { name: "Enterprise", url },
          ]),
        ]}
      />
      <EnterprisePageContent />
    </>
  );
}
