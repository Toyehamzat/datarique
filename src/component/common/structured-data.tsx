export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://datariqueltd.com/#organization",
        name: "Datarique Limited",
        url: "https://datariqueltd.com",
        logo: {
          "@type": "ImageObject",
          url: "https://datariqueltd.com/images/logo.svg",
        },
        description:
          "Expert data analytics training, consultation, and analytics-as-a-service provider",
        sameAs: [
          // Add your social media links here
          // "https://twitter.com/datarique",
          // "https://linkedin.com/company/datarique",
        ],
      },
      {
        "@type": "WebSite",
        "@id": "https://datariqueltd.com/#website",
        url: "https://datariqueltd.com",
        name: "Datarique",
        publisher: {
          "@id": "https://datariqueltd.com/#organization",
        },
        potentialAction: {
          "@type": "SearchAction",
          target: "https://datariqueltd.com/search?q={search_term_string}",
          "query-input": "required name=search_term_string",
        },
      },
      {
        "@type": "EducationalOrganization",
        "@id": "https://datariqueltd.com/#educational",
        name: "Datarique",
        url: "https://datariqueltd.com",
        description:
          "Professional data analytics training courses for individuals and businesses",
        offers: {
          "@type": "Offer",
          category: "Data Analytics Training",
        },
      },
      {
        "@type": "ProfessionalService",
        "@id": "https://datariqueltd.com/#service",
        name: "Datarique Analytics Services",
        url: "https://datariqueltd.com",
        description:
          "Data analytics consultation and analytics-as-a-service for businesses",
        serviceType: ["Data Analytics", "Business Intelligence", "Data Consultation"],
        areaServed: "Worldwide",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
