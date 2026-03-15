import { Helmet } from "react-helmet-async";
import { personal } from "@/data/portfolio";

interface SEOHeadProps {
  title?: string;
  description?: string;
  path?: string;
}

const SEOHead = ({ title, description, path = "/" }: SEOHeadProps) => {
  const fullTitle = title
    ? `${title} — ${personal.name}`
    : `${personal.name} — ${personal.role}`;
  const desc =
    description ||
    `${personal.role} with ${personal.yearsExp} years of experience building scalable SaaS platforms, fintech systems, and secure browser extensions.`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={desc} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={desc} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={`${personal.website}${path}`} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={desc} />
      <link rel="canonical" href={`${personal.website}${path}`} />
    </Helmet>
  );
};

export default SEOHead;
