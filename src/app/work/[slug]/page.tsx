import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { FiArrowLeft, FiArrowUpRight } from "react-icons/fi";
import { CustomMDX } from "@/components/mdx";
import { getPosts } from "@/app/utils/utils";
import { baseURL, about, person, work } from "@/app/resources";
import { Meta, Schema } from "@/once-ui/modules";
import styles from "./project.module.scss";

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  return getPosts(["src", "app", "work", "projects"]).map((post) => ({ slug: post.slug }));
}

type RouteParams = { params: Promise<{ slug: string | string[] }> };
async function findPost(params: RouteParams["params"]) {
  const route = await params;
  const slug = Array.isArray(route.slug) ? route.slug.join("/") : route.slug || "";
  return getPosts(["src", "app", "work", "projects"]).find((post) => post.slug === slug);
}

export async function generateMetadata({ params }: RouteParams): Promise<Metadata> {
  const post = await findPost(params);
  if (!post) return {};
  return Meta.generate({
    title: `${post.metadata.title} – ${person.name}`,
    description: post.metadata.summary,
    baseURL,
    image: post.metadata.image ? `${baseURL}${post.metadata.image}` : `${baseURL}/og?title=${encodeURIComponent(post.metadata.title)}`,
    path: `${work.path}/${post.slug}`,
  });
}

export default async function Project({ params }: RouteParams) {
  const post = await findPost(params);
  if (!post) notFound();
  const images: string[] = post.metadata.images ?? [];

  return (
    <main className={styles.page}>
      <div className={styles.shell}>
        <Schema as="blogPosting" baseURL={baseURL} path={`${work.path}/${post.slug}`} title={post.metadata.title} description={post.metadata.summary} datePublished={post.metadata.publishedAt} dateModified={post.metadata.publishedAt} image={`${baseURL}/og?title=${encodeURIComponent(post.metadata.title)}`} author={{ name: person.name, url: `${baseURL}${about.path}`, image: `${baseURL}${person.avatar}` }} />
        <header className={styles.hero}>
          <span className={styles.kicker}>CASE STUDY <i /> {new Date(`${post.metadata.publishedAt}T00:00:00`).getFullYear()}</span>
          <h1>{post.metadata.title}</h1>
          <p>{post.metadata.summary}</p>
          <Link href="/work/" className={styles.back}><FiArrowLeft aria-hidden="true" /> Back to selected work</Link>
        </header>
        {images.length > 0 && <section className={styles.visuals} aria-label="Project images">
          <div className={styles.cover}><Image src={images[0]} alt={`${post.metadata.title} preview`} fill sizes="(max-width: 760px) 100vw, 1100px" priority unoptimized /></div>
          {images.length > 1 && <div className={styles.supporting}>{images.slice(1).map((image, index) => <div className={styles.supportImage} key={image}><Image src={image} alt={`${post.metadata.title}, additional view ${index + 1}`} fill sizes="(max-width: 760px) 100vw, 550px" unoptimized /></div>)}</div>}
        </section>}
        <section className={styles.story} aria-label="Case study details"><aside><span>THE STORY</span><i />{post.metadata.team?.[0]?.role ?? "Data & Analytics"}</aside><article className={styles.prose}><CustomMDX source={post.content} /></article></section>
        <footer className={styles.footer}><Link href="/work/"><FiArrowLeft aria-hidden="true" /> All projects</Link><Link href="/about">About Me <FiArrowUpRight aria-hidden="true" /></Link></footer>
      </div>
    </main>
  );
}
