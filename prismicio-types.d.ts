// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from "@prismicio/client";

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

type HomeDocumentDataSlicesSlice =
  | ContactShowcaseSlice
  | NewsAndInsightsSlice
  | FeaturedWorksShowCaseSlice
  | HomeBriefSlice
  | HomeHeroSlice;

/**
 * Content for Home documents
 */
interface HomeDocumentData {
  /**
   * Slice Zone field in *Home*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: home.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<HomeDocumentDataSlicesSlice>
  /**
   * Meta Description field in *Home*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: home.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Home*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: home.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;

  /**
   * Meta Title field in *Home*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: home.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_title: prismic.KeyTextField;
}

/**
 * Home document from Prismic
 *
 * - **API ID**: `home`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type HomeDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<Simplify<HomeDocumentData>, "home", Lang>;

export type AllDocumentTypes = HomeDocument;

/**
 * Primary content in *ContactShowcase → Primary*
 */
export interface ContactShowcaseSliceDefaultPrimary {
  /**
   * Showcase Title field in *ContactShowcase → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: contact_showcase.primary.showcase_title
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  showcase_title: prismic.RichTextField;

  /**
   * Email field in *ContactShowcase → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: contact_showcase.primary.email
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  email: prismic.RichTextField;

  /**
   * Phone field in *ContactShowcase → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: contact_showcase.primary.phone
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  phone: prismic.RichTextField;

  /**
   * Contact Info Text field in *ContactShowcase → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: contact_showcase.primary.contact_info_text
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  contact_info_text: prismic.RichTextField;
}

/**
 * Default variation for ContactShowcase Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ContactShowcaseSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<ContactShowcaseSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *ContactShowcase*
 */
type ContactShowcaseSliceVariation = ContactShowcaseSliceDefault;

/**
 * ContactShowcase Shared Slice
 *
 * - **API ID**: `contact_showcase`
 * - **Description**: ContactShowcase
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ContactShowcaseSlice = prismic.SharedSlice<
  "contact_showcase",
  ContactShowcaseSliceVariation
>;

/**
 * Primary content in *FeaturedWorksShowCase → Primary*
 */
export interface FeaturedWorksShowCaseSliceDefaultPrimary {
  /**
   * Title field in *FeaturedWorksShowCase → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: featured_works_show_case.primary.title
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.RichTextField;

  /**
   * CTA Text field in *FeaturedWorksShowCase → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: featured_works_show_case.primary.cta_text
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  cta_text: prismic.RichTextField;

  /**
   * CTA Link field in *FeaturedWorksShowCase → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: featured_works_show_case.primary.cta_link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  cta_link: prismic.LinkField;
}

/**
 * Primary content in *FeaturedWorksShowCase → Items*
 */
export interface FeaturedWorksShowCaseSliceDefaultItem {
  /**
   * Company Name field in *FeaturedWorksShowCase → Items*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: featured_works_show_case.items[].company_name
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  company_name: prismic.RichTextField;

  /**
   * Description field in *FeaturedWorksShowCase → Items*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: featured_works_show_case.items[].description
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  description: prismic.RichTextField;

  /**
   * Image field in *FeaturedWorksShowCase → Items*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: featured_works_show_case.items[].image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;

  /**
   * Work CTA Link field in *FeaturedWorksShowCase → Items*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: featured_works_show_case.items[].work_cta_link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  work_cta_link: prismic.LinkField;
}

/**
 * Default variation for FeaturedWorksShowCase Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type FeaturedWorksShowCaseSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<FeaturedWorksShowCaseSliceDefaultPrimary>,
  Simplify<FeaturedWorksShowCaseSliceDefaultItem>
>;

/**
 * Slice variation for *FeaturedWorksShowCase*
 */
type FeaturedWorksShowCaseSliceVariation = FeaturedWorksShowCaseSliceDefault;

/**
 * FeaturedWorksShowCase Shared Slice
 *
 * - **API ID**: `featured_works_show_case`
 * - **Description**: FeaturedWorksShowCase
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type FeaturedWorksShowCaseSlice = prismic.SharedSlice<
  "featured_works_show_case",
  FeaturedWorksShowCaseSliceVariation
>;

/**
 * Primary content in *HomeBrief → Primary*
 */
export interface HomeBriefSliceDefaultPrimary {
  /**
   * Title field in *HomeBrief → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: home_brief.primary.title
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.RichTextField;

  /**
   * Description field in *HomeBrief → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: home_brief.primary.description
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  description: prismic.RichTextField;

  /**
   * CTA Text field in *HomeBrief → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: home_brief.primary.cta_text
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  cta_text: prismic.RichTextField;

  /**
   * CTA Link field in *HomeBrief → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: home_brief.primary.cta_link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  cta_link: prismic.LinkField;
}

/**
 * Default variation for HomeBrief Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HomeBriefSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<HomeBriefSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *HomeBrief*
 */
type HomeBriefSliceVariation = HomeBriefSliceDefault;

/**
 * HomeBrief Shared Slice
 *
 * - **API ID**: `home_brief`
 * - **Description**: HomeBrief
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HomeBriefSlice = prismic.SharedSlice<
  "home_brief",
  HomeBriefSliceVariation
>;

/**
 * Primary content in *HomeHero → Primary*
 */
export interface HomeHeroSliceDefaultPrimary {
  /**
   * Title field in *HomeHero → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: home_hero.primary.title
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.RichTextField;
}

/**
 * Default variation for HomeHero Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HomeHeroSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<HomeHeroSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *HomeHero*
 */
type HomeHeroSliceVariation = HomeHeroSliceDefault;

/**
 * HomeHero Shared Slice
 *
 * - **API ID**: `home_hero`
 * - **Description**: HomeHero
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HomeHeroSlice = prismic.SharedSlice<
  "home_hero",
  HomeHeroSliceVariation
>;

/**
 * Primary content in *NewsAndInsights → Primary*
 */
export interface NewsAndInsightsSliceDefaultPrimary {
  /**
   * Title field in *NewsAndInsights → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: news_and_insights.primary.title
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.RichTextField;
}

/**
 * Primary content in *NewsAndInsights → Items*
 */
export interface NewsAndInsightsSliceDefaultItem {
  /**
   * Image field in *NewsAndInsights → Items*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: news_and_insights.items[].image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;

  /**
   * Title field in *NewsAndInsights → Items*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: news_and_insights.items[].title
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.RichTextField;

  /**
   * CTA Link field in *NewsAndInsights → Items*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: news_and_insights.items[].cta_link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  cta_link: prismic.LinkField;
}

/**
 * Default variation for NewsAndInsights Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type NewsAndInsightsSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<NewsAndInsightsSliceDefaultPrimary>,
  Simplify<NewsAndInsightsSliceDefaultItem>
>;

/**
 * Slice variation for *NewsAndInsights*
 */
type NewsAndInsightsSliceVariation = NewsAndInsightsSliceDefault;

/**
 * NewsAndInsights Shared Slice
 *
 * - **API ID**: `news_and_insights`
 * - **Description**: NewsAndInsights
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type NewsAndInsightsSlice = prismic.SharedSlice<
  "news_and_insights",
  NewsAndInsightsSliceVariation
>;

declare module "@prismicio/client" {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig
    ): prismic.Client<AllDocumentTypes>;
  }

  namespace Content {
    export type {
      HomeDocument,
      HomeDocumentData,
      HomeDocumentDataSlicesSlice,
      AllDocumentTypes,
      ContactShowcaseSlice,
      ContactShowcaseSliceDefaultPrimary,
      ContactShowcaseSliceVariation,
      ContactShowcaseSliceDefault,
      FeaturedWorksShowCaseSlice,
      FeaturedWorksShowCaseSliceDefaultPrimary,
      FeaturedWorksShowCaseSliceDefaultItem,
      FeaturedWorksShowCaseSliceVariation,
      FeaturedWorksShowCaseSliceDefault,
      HomeBriefSlice,
      HomeBriefSliceDefaultPrimary,
      HomeBriefSliceVariation,
      HomeBriefSliceDefault,
      HomeHeroSlice,
      HomeHeroSliceDefaultPrimary,
      HomeHeroSliceVariation,
      HomeHeroSliceDefault,
      NewsAndInsightsSlice,
      NewsAndInsightsSliceDefaultPrimary,
      NewsAndInsightsSliceDefaultItem,
      NewsAndInsightsSliceVariation,
      NewsAndInsightsSliceDefault,
    };
  }
}
