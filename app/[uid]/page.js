// import { notFound } from "next/navigation";
// import { SliceZone } from "@prismicio/react";

// import { createClient } from "@/prismicio";
// import { components } from "@/slices";

// export default async function Page({ params }) {
//   const client = createClient();
//   const page = await client
//     .getByUID("works_child", params.uid)
//     .catch(() => notFound());


//     let data = [
//       {
//         text:'Brief',
//         link:'#workBrief'
//       },
//       {
//         text:'Vision',
//         link:'#workVision'
//       },
//       {
//         text:'Execution',
//         link:'/'
//       },
//     ]

//   return(
//     <>
//     <div style={{position:'fixed', bottom:'20%', left:'50%', transform:'translateX(-50%)', border:'1px black solid', background:'white', display:'flex', alignItems:'center', justifyContent:'space-between', padding:'1em 0.5em', zIndex:'200'}}>
//       {
//         data.map((item, i) => {
//           return(
//             <div key={i} style={{width:'33.33%', padding:'0 1.5em',  borderRight: i != 2 ? '1px #000 solid':'', display:'flex', alignItems:'center', justifyContent:'center', background:'#FFF'}}>
//               <a className="black-txt" href={item.link}>
//                 { item.text }
//               </a>
//             </div>
//           )
//         })
//       }
//     </div>
//     <SliceZone slices={page.data.slices} components={components} />
//     </>
//   )
// }

// export async function generateMetadata({ params }) {
//   const client = createClient();
//   const page = await client
//     .getByUID("works_child", params.uid)
//     .catch(() => notFound());

//   return {
//     title: page.data.meta_title,
//     description: page.data.meta_description,
//   };
// }

// export async function generateStaticParams() {
//   const client = createClient();
//   const pages = await client.getAllByType("works_child");

//   return pages.map((page) => {
//     return { uid: page.uid };
//   });
// }
