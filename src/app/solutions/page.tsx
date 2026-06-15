import { buildMetadata, collectionPageSchema, breadcrumbSchema, softwareAppSchema, SITE } from "@/lib/seo";
import JsonLd from "@/components/JsonLd";
import SolutionsPageContent from "./SolutionsPageContent";

export const metadata = buildMetadata({
  title: "AI Retail Solutions Platform | Tapito",
  description:
    "Discover AI-powered retail solutions designed to improve customer retention, revenue growth, and business performance.",
  path: "/solutions",
});

export default function SolutionsPage() {
  const url = `${SITE.url}/solutions`;
  return (
    <>
      <JsonLd
        schema={[
          collectionPageSchema(
            "Tapito Industry Solutions",
            "Tailored AI-powered retail solutions for every industry vertical.",
            url,
          ),
          softwareAppSchema("Tapito", "AI-powered customer engagement platform for modern retail.", SITE.url),
          breadcrumbSchema([
            { name: "Home", url: SITE.url },
            { name: "Solutions", url },
          ]),
        ]}
      />
      <SolutionsPageContent />
    </>
  );
}
