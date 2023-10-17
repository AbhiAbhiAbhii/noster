import { PrismicLink } from "@prismicio/react"

/**
 * @typedef {import("@prismicio/client").Content.NextProjectLinkSlice} NextProjectLinkSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<NextProjectLinkSlice>} NextProjectLinkProps
 * @param {NextProjectLinkProps}
 */
export default function NextProjectLink({slice}) {
  let arrow = "->"
  return(
    <div className="next-project-cta">
      <div className="b-scene-cta">
        <PrismicLink field={slice.primary.cta_link} className="b-scene-cta-text p-26">View Next Project {arrow}</PrismicLink>
      </div>
    </div>
  )
}
