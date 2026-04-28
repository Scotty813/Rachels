import { Oswald } from "next/font/google";
import "../index.css";
import "../App.css";

const siteTitle = "Rachel's Place | Tampa Neighborhood Bar & Grill";
const siteDescription =
  "Rachel's Place is a casual Tampa neighborhood bar and grill on W Hillsborough Ave with cold drinks, bar food, pool, darts, sports, and late-night hours.";
const siteUrl = "https://rachels.vercel.app/";

const oswald = Oswald({
  subsets: ["latin"],
  weight: "700",
  display: "swap",
  variable: "--font-oswald",
});

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["BarOrPub", "Restaurant"],
  name: "Rachel's Place",
  description:
    "Casual Tampa neighborhood bar and grill with cold drinks, bar food, pool, darts, sports, and late-night hours.",
  telephone: "+18133743957",
  priceRange: "$",
  servesCuisine: ["Bar food", "American"],
  address: {
    "@type": "PostalAddress",
    streetAddress: "10061 W Hillsborough Ave",
    addressLocality: "Tampa",
    addressRegion: "FL",
    postalCode: "33615",
    addressCountry: "US",
  },
  hasMap:
    "https://www.google.com/maps/search/?api=1&query=Rachel%27s%20Place%2010061%20W%20Hillsborough%20Ave%20Tampa%20FL%2033615",
  amenityFeature: [
    {
      "@type": "LocationFeatureSpecification",
      name: "Pool tables",
      value: true,
    },
    {
      "@type": "LocationFeatureSpecification",
      name: "Darts",
      value: true,
    },
    {
      "@type": "LocationFeatureSpecification",
      name: "Sports TVs",
      value: true,
    },
    {
      "@type": "LocationFeatureSpecification",
      name: "Wheelchair accessible entrance",
      value: true,
    },
    {
      "@type": "LocationFeatureSpecification",
      name: "Free parking",
      value: true,
    },
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "15:00",
      closes: "03:00",
    },
  ],
};

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: siteTitle,
  description: siteDescription,
  keywords: [
    "Rachel's Place Tampa",
    "Tampa bar and grill",
    "W Hillsborough Ave bar",
    "pool tables Tampa",
    "darts Tampa",
    "sports bar Tampa",
    "late night food Tampa",
  ],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    type: "website",
    title: siteTitle,
    description:
      "Cold drinks, bar food, pool, darts, sports, and late-night local energy at Rachel's Place in Tampa, FL.",
    locale: "en_US",
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description:
      "A cozy Tampa bar and grill with cold drinks, bar food, pool, darts, sports, and daily late-night hours.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={oswald.variable}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
        {children}
      </body>
    </html>
  );
}
