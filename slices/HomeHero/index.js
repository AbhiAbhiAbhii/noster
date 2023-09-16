/**
 * @typedef {import("@prismicio/client").Content.HomeHeroSlice} HomeHeroSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<HomeHeroSlice>} HomeHeroProps
 * @param {HomeHeroProps}
 */

import { PrismicRichText } from "@prismicio/react";

export default function HomeHero({ slice }){
  return(
    <section className="home-hero">
      <div className="home-hero-title">
        <h1 className="haffer-R h1-small">
          <PrismicRichText field={slice.primary.title} />
        </h1>
      </div>
      <div className="home-hero-vid-main">
        <div className="home-hero-vid-inner-wrap">
          <div className="home-hero-vid">
            <video  autoPlay="true" muted="true" loop="true" preload="auto" playsInline="true">
              <source src="/video/home/home_hero_vid.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </section>
  )
}
