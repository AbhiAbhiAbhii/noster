/**
 * @typedef {import("@prismicio/client").Content.WorkChildHeroSlice} WorkChildHeroSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<WorkChildHeroSlice>} WorkChildHeroProps
 * @param {WorkChildHeroProps}
 */

import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";

export default function WorkChildHero({ slice }){
  

  return(
    <section className="work-uid-hero">
      <div className="work-uid-hero-title">
        <h1 className="h1-big">
          <PrismicRichText field={slice.primary.title} />
        </h1>
      </div>
      <div className="work-uid-hero-wrapper">
        <PrismicNextImage className="image" height={500 * 10} width={500 * 10} style={{height:'100%', width:'100%', objectFit:'cover'}} field={slice.primary.image} />
      </div>
    </section>
  )
}
