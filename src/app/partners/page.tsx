import { buildMetadata, webPageSchema, breadcrumbSchema, SITE } from "@/lib/seo";
import JsonLd from "@/components/JsonLd";
import PartnersPageContent from "./PartnersPageContent";

export const metadata = buildMetadata({
  title: "Retail Technology Partner Program | Tapito",
  description:
    "Partner with Tapito and help retail businesses unlock growth through AI-powered retail intelligence and automation.",
  path: "/partners",
});

export default function PartnersPage() {
  const url = `${SITE.url}/partners`;
  return (
    <>
      <JsonLd
        schema={[
          webPageSchema("Partners | Tapito", "Partner with Tapito to bring AI-powered retail intelligence to your clients.", url),
          breadcrumbSchema([
            { name: "Home", url: SITE.url },
            { name: "Partners", url },
          ]),
        ]}
      />
      <PartnersPageContent />
    </>
  );
}
