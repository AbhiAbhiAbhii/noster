/**
 * @typedef {import("@prismicio/client").Content.PrivTextSliceASlice} PrivTextSliceASlice
 * @typedef {import("@prismicio/react").SliceComponentProps<PrivTextSliceASlice>} PrivTextSliceAProps
 * @param {PrivTextSliceAProps}
 */
const PrivTextSliceA = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for priv_text_slice_a (variation: {slice.variation})
      Slices
    </section>
  );
};

export default PrivTextSliceA;
