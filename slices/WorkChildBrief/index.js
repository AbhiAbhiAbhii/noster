/**
 * @typedef {import("@prismicio/client").Content.WorkChildBriefSlice} WorkChildBriefSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<WorkChildBriefSlice>} WorkChildBriefProps
 * @param {WorkChildBriefProps}
 */

import { PrismicRichText } from "@prismicio/react";


export default function WorkChildBrief({ slice }){

  let Data = [
    {
      title: 'Client',
      content: slice.primary.client
    },
    {
      title: 'Sector',
      content: slice.primary.sector
    },
    {
      title: 'Status',
      content: slice.primary.status
    },
    {
      title: 'Location',
      content: slice.primary.location
    },
    {
      title: 'Scope',
      content: slice.primary.scope
    },
    {
      title: 'Scale',
      content: slice.primary.scale
    }
  ]



  return(
    <section className="work-brief snow">
      <div className="work-brief-text-container">
        <div className="work-brief-left">
          <p className="p-tag black-txt">
            The Brief
          </p>
        </div>
        <div className="work-brief-right">  
          <div className="work-brief-right-top">
            <p className="p-tag black-txt" style={{color:'black'}}>
              <PrismicRichText  field={slice.primary.description} />
            </p>
          </div>
          <div className="work-brief-right-bottom">
           {
            Data.map((item, i) => {
              return(
                <div className="work-brief-item" key={i}>
                  <p className="p-s" style={{color:'#31331B'}}>
                    { item.title }
                  </p>
                  <p className="work-brief-item-content p-r black-txt">
                    <PrismicRichText field={item.content} />
                  </p>
                </div>
              )
            })
           }
          </div>
        </div>
      </div>
    </section>
  )
}
