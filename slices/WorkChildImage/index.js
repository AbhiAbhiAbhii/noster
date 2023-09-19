/**
 * @typedef {import("@prismicio/client").Content.WorkChildImageSlice} WorkChildImageSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<WorkChildImageSlice>} WorkChildImageProps
 * @param {WorkChildImageProps}
 */

import { PrismicNextImage } from "@prismicio/next";

export default function WorkChildImage({ slice }){
  return(
    <section className="snow" style={{height:'120vh', overflowY:'hidden', display:'flex', alignItems:'center', justifyContent:'center'}}>
      <div style={{height:'98%', width:'98%'}}>
        <PrismicNextImage 
          field={slice.primary.image}  
          style={{height:'100%', width:'100%'}} 
          imgixParams={{ar:'1:1'}} loading="eager" />
      </div>
    </section>
  )
}
