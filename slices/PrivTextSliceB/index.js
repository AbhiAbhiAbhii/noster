/**
 * @typedef {import("@prismicio/client").Content.PrivTextSliceBSlice} PrivTextSliceBSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<PrivTextSliceBSlice>} PrivTextSliceBProps
 * @param {PrivTextSliceBProps}
 */
const PrivTextSliceB = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for priv_text_slice_b (variation: {slice.variation})
      Slices
    </section>
  );
};

export default PrivTextSliceB;
