import { buildMetadata, softwareAppSchema, mobileAppSchema, webPageSchema, breadcrumbSchema, SITE } from "@/lib/seo";
import JsonLd from "@/components/JsonLd";
import PageContent from "./PageContent";

export const metadata = buildMetadata({
  title: "Mobile Retail Management App | Tapito",
  description:
    "Access real-time retail intelligence, business analytics, and revenue insights from anywhere with the Tapito mobile app.",
  path: "/features/mobile-app",
});

export default function MobileAppPage() {
  const url = `${SITE.url}/features/mobile-app`;
  return (
    <>
      <JsonLd
        schema={[
          mobileAppSchema(),
          softwareAppSchema(
            "Voice-Powered AI Command Center",
            "Command your retail empire hands-free with real-time voice and chat decisions.",
            url,
          ),
          webPageSchema("Voice-Powered AI Mobile App | Tapito", "Command your retail empire hands-free with real-time voice and chat decisions.", url),
          breadcrumbSchema([
            { name: "Home", url: SITE.url },
            { name: "Features", url: `${SITE.url}/features` },
            { name: "Mobile App", url },
          ]),
        ]}
      />
      <PageContent />
    </>
  );
}
