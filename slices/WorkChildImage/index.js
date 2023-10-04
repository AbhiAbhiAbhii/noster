/**
 * @typedef {import("@prismicio/client").Content.WorkChildImageSlice} WorkChildImageSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<WorkChildImageSlice>} WorkChildImageProps
 * @param {WorkChildImageProps}
 */

import { PrismicNextImage } from "@prismicio/next";

export default function WorkChildImage({ slice }){
  return(
    <section className="worksImg snow">
      <div style={{height:'98%', width:'100%'}}>
        <PrismicNextImage 
          field={slice.primary.image}  
          style={{height:'100%', width:'100%', objectFit:'cover'}} 
          imgixParams={{ar:'3:2'}} loading="eager" />
      </div>
    </section>
  )
}
