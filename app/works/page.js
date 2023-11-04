import { PrismicRichText, SliceZone } from "@prismicio/react";

import { createClient } from "@/prismicio";
import { components } from "@/slices";

export default async function Page({}) {
  const client = createClient();
  const page = await client.getSingle("works");


  return(
    <section className="work snow">
        <div className="work-title">
        <h1 className="h1-big black-txt" style={{letterSpacing:'-2.2px'}}>
          <PrismicRichText field={page.data.title} />
        </h1>
      </div>
        <SliceZone slices={page.data.slices} components={components} />
    </section>
    )
}

export async function generateMetadata() {
  const client = createClient();
  const page = await client.getSingle("works");

  return {
    title: page.data.meta_title,
    description: page.data.meta_description,
  };
}
