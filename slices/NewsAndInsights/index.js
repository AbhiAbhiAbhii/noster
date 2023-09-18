/**
 * @typedef {import("@prismicio/client").Content.NewsAndInsightsSlice} NewsAndInsightsSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<NewsAndInsightsSlice>} NewsAndInsightsProps
 * @param {NewsAndInsightsProps}
 */

import { PrismicNextImage } from "@prismicio/next"
import { PrismicLink, PrismicRichText } from "@prismicio/react"

export default function NewsAndInsights({ slice }){
  return(
    <section className="news-showcase snow" style={{border:'1px red solid'}}>
      <div className="eyebrow-title">
        <h1 className="h1-big black-txt">
          <PrismicRichText field={slice.primary.title} />
        </h1>
      </div>
      <div className="news-showcase-item-wrapper">
        {
          slice.items.map((item, i) => {
            return(
              <PrismicLink className="news-showcase-item" key={i}>
                <PrismicNextImage 
                  style={{height:'100%', width:'100%'}} sizes="100vw"
                  imgixParams={{ar:'1:1'}}
                  field={item.image} />
                  <div className="news-showcase-item-overlay">
                    <div className="news-showcase-item-text-wrapper">
                        <div className="news-showcase-item-text">
                          <h1 className="h1-small">
                            <PrismicRichText field={item.title} />
                          </h1>
                        </div>
                    </div>
                  </div>
              </PrismicLink>
            )
          })
        }
      </div>
    </section>
  )
}
