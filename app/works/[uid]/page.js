import { notFound } from "next/navigation";
import { SliceZone } from "@prismicio/react";

import { createClient } from "@/prismicio";
import { components } from "@/slices";
import MobNav from "@/app/Component/Nav/MobNav";
import Footer from "@/app/Component/Footer/Footer";

export default async function Page({ params }) {
  const client = createClient();
  const page = await client
    .getByUID("works_child", params.uid)
    .catch(() => notFound());

  return <div className="workChildRef" style={{}}>
      <MobNav uid={page.uid} />
      <SliceZone  slices={page.data.slices} components={components} />
    </div>
}

export async function generateMetadata({ params }) {
  const client = createClient();
  const page = await client
    .getByUID("works_child", params.uid)
    .catch(() => notFound());

  return {
    title: page.data.meta_title,
    description: page.data.meta_description,
  };
}

export async function generateStaticParams() {
  const client = createClient();
  const pages = await client.getAllByType("works_child");

  return pages.map((page) => {
    return { uid: page.uid };
  });
}
