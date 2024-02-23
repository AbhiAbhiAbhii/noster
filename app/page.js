import { SliceZone } from "@prismicio/react";

import { createClient } from "@/prismicio";
import { components } from "@/slices";
import Curtain from "./Component/Curtain/Curtain";

export default async function Page() {
  const client = createClient();
  const page = await client.getSingle("home");

  return (
    <>
    {/* <Curtain /> */}
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
