import { SliceZone } from "@prismicio/react";

import { createClient } from "@/prismicio";
import { components } from "@/slices";
import Curtain from "./Component/Curtain/Curtain";
import Marquee from "./Component/slices/marquee/marquee";

export default async function Page() {
  const client = createClient();
  const page = await client.getSingle("home");

  return (
    
    <>
    {/* <Marquee /> */}
    <SliceZone slices={page.data.slices} components={components} />
    </>
  )
}

export async function generateMetadata() {
  const client = createClient();
  const page = await client.getSingle("home");

  return {
    title: page.data.meta_title,
    description: page.data.meta_description,
    meta_image: page.data.meta_image
  };
}
