import { baseURL, work, person } from "@/app/resources";
import { Meta } from "@/once-ui/modules";
import { getPosts } from "@/app/utils/utils";
import { WorkIndex, type WorkItem } from "@/components/work/WorkIndex";

export async function generateMetadata() {
  return Meta.generate({
    title: `Selected Work – ${person.name}`,
    description: "Selected analytics, automation, and data projects by Samuel Kim.",
    baseURL,
    path: work.path,
  });
}

const projectDetails: Record<string, { category: string; technologies: string[] }> = {
  "Gen7-DataCentre-Platform": { category: "DATA PLATFORM / ANALYTICS", technologies: ["Azure", "SQL Server", "Synapse", "ADLS Gen2", "Power BI"] },
  "Automated-Telecom-Invoice-Analysis": { category: "AUTOMATION / REPORTING", technologies: ["C#", "ADO.NET", "Excel Interop"] },
  "Crypto-Currency-Market-Dashboard": { category: "ANALYTICS / MARKET DATA", technologies: ["Power BI", "Market indicators", "DAX"] },
  "Sales-Analysis_Dashboard-sample": { category: "ANALYTICS / SALES", technologies: ["Power BI", "Data analysis", "Business reporting"] },
  "Sales-Revenue-Dashboard-sample": { category: "ANALYTICS / PERFORMANCE", technologies: ["Power BI", "Regional sales", "Performance metrics"] },
};

export default function Work() {
  const items: WorkItem[] = getPosts(["src", "app", "work", "projects"])
    .sort((a, b) => new Date(b.metadata.publishedAt).getTime() - new Date(a.metadata.publishedAt).getTime())
    .map(({ slug, metadata }) => ({
      slug,
      title: metadata.title,
      summary: metadata.summary,
      publishedAt: metadata.publishedAt,
      images: metadata.images,
      ...(projectDetails[slug] ?? { category: "DATA / ANALYTICS", technologies: [] }),
    }));

  return <WorkIndex items={items} />;
}
