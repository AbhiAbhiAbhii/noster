import { notFound } from "next/navigation";
import { SliceZone } from "@prismicio/react";

import { createClient } from "@/prismicio";
import { components } from "@/slices";

export default async function Page({ params }) {
  const client = createClient();
  const page = await client
    .getByUID("works_child", params.uid)
    .catch(() => notFound());


    let data = [
      {
        text:'Brief',
        link:'#workBrief'
      },
      {
        text:'Vision',
        link:'#workVision'
      },
      {
        text:'Execution',
        link:'/'
      },
    ]

  return(
    <>
    <div className="works-nav snow">
      {
        data.map((item, i) => {
          return(
            <div className="works-nav-item snow" key={i} style={{borderRight: i != 2 ? '1px #000 solid':''}}>
              <a className="black-txt" href={item.link}>
                { item.text }
              </a>
            </div>
          )
        })
      }
    </div>
    <SliceZone slices={page.data.slices} components={components} />
    </>
  )
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
