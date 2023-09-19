/**
 * @typedef {import("@prismicio/client").Content.HomeBriefSlice} HomeBriefSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<HomeBriefSlice>} HomeBriefProps
 * @param {HomeBriefProps}
 */

import CTA from "@/app/Component/CTA/CTA";
import { PrismicRichText } from "@prismicio/react";

export default function HomeBrief({ slice }){
  return(
    <section id="homeBrief" className="home-brief">
      <div className="home-brief-wrapper">
        <div className="home-brief-title haffer-R">
          <p className="p-tag">
            <PrismicRichText field={slice.primary.title} />
          </p>
        </div>
        <div className="home-brief-desc-wrapper">
          <div className="home-brief-desc haffer-R">
            <p className="p-tag">
              <PrismicRichText field={slice.primary.description} />
            </p>
          </div>
          <div className="home-brief-desc-CTA cta-prop">
            <CTA link={slice.primary.cta_link} text={slice.primary.cta_text} />
          </div>
        </div>
      </div>
    </section>
  )
}
