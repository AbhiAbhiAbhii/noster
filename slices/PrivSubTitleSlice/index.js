/**
 * @typedef {import("@prismicio/client").Content.PrivSubTitleSliceSlice} PrivSubTitleSliceSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<PrivSubTitleSliceSlice>} PrivSubTitleSliceProps
 * @param {PrivSubTitleSliceProps}
 */
const PrivSubTitleSlice = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for priv_sub_title_slice (variation:{" "}
      {slice.variation}) Slices
    </section>
  );
};

export default PrivSubTitleSlice;
