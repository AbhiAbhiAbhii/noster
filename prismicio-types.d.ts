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

type WorksDocumentDataSlicesSlice =
  | WorksShowcaseLeftSlice
  | WorksShowcaseRightSlice;

/**
 * Content for Works documents
 */
interface WorksDocumentData {
  /**
   * Title field in *Works*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: works.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.RichTextField;

  /**
   * Slice Zone field in *Works*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: works.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<WorksDocumentDataSlicesSlice>
  /**
   * Meta Description field in *Works*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: works.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Works*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: works.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;

  /**
   * Meta Title field in *Works*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: works.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_title: prismic.KeyTextField;
}

/**
 * Works document from Prismic
 *
 * - **API ID**: `works`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type WorksDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<Simplify<WorksDocumentData>, "works", Lang>;

type WorksChildDocumentDataSlicesSlice =
  | NextProjectLinkSlice
  | BehindTheScenesSlice
  | WorkChildImageSlice
  | WorkChildVisionSlice
  | WorkChildBriefSlice
  | WorkChildHeroSlice;

/**
 * Content for Works Child documents
 */
interface WorksChildDocumentData {
  /**
   * Slice Zone field in *Works Child*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: works_child.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<WorksChildDocumentDataSlicesSlice>
  /**
   * Meta Description field in *Works Child*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: works_child.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Works Child*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: works_child.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;

  /**
   * Meta Title field in *Works Child*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: works_child.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_title: prismic.KeyTextField;
}

/**
 * Works Child document from Prismic
 *
 * - **API ID**: `works_child`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type WorksChildDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<
    Simplify<WorksChildDocumentData>,
    "works_child",
    Lang
  >;

export type AllDocumentTypes =
  | HomeDocument
  | WorksDocument
  | WorksChildDocument;

/**
 * Primary content in *BehindTheScenes → Primary*
 */
export interface BehindTheScenesSliceDefaultPrimary {
  /**
   * CTA Link field in *BehindTheScenes → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: behind_the_scenes.primary.cta_link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  cta_link: prismic.LinkField;
}

/**
 * Primary content in *BehindTheScenes → Items*
 */
export interface BehindTheScenesSliceDefaultItem {
  /**
   * Image field in *BehindTheScenes → Items*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: behind_the_scenes.items[].image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;
}

/**
 * Default variation for BehindTheScenes Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type BehindTheScenesSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<BehindTheScenesSliceDefaultPrimary>,
  Simplify<BehindTheScenesSliceDefaultItem>
>;

/**
 * Slice variation for *BehindTheScenes*
 */
type BehindTheScenesSliceVariation = BehindTheScenesSliceDefault;

/**
 * BehindTheScenes Shared Slice
 *
 * - **API ID**: `behind_the_scenes`
 * - **Description**: BehindTheScenes
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type BehindTheScenesSlice = prismic.SharedSlice<
  "behind_the_scenes",
  BehindTheScenesSliceVariation
>;

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

  /**
   * CursorImage field in *ContactShowcase → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: contact_showcase.primary.cursorimage
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  cursorimage: prismic.ImageField<never>;

  /**
   * CTA Link field in *ContactShowcase → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: contact_showcase.primary.cta_link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  cta_link: prismic.LinkField;
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

/**
 * Primary content in *NextProjectLink → Primary*
 */
export interface NextProjectLinkSliceDefaultPrimary {
  /**
   * CTA Link field in *NextProjectLink → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: next_project_link.primary.cta_link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  cta_link: prismic.LinkField;
}

/**
 * Default variation for NextProjectLink Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type NextProjectLinkSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<NextProjectLinkSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *NextProjectLink*
 */
type NextProjectLinkSliceVariation = NextProjectLinkSliceDefault;

/**
 * NextProjectLink Shared Slice
 *
 * - **API ID**: `next_project_link`
 * - **Description**: NextProjectLink
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type NextProjectLinkSlice = prismic.SharedSlice<
  "next_project_link",
  NextProjectLinkSliceVariation
>;

/**
 * Primary content in *WorkChildBrief → Primary*
 */
export interface WorkChildBriefSliceDefaultPrimary {
  /**
   * Description field in *WorkChildBrief → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: work_child_brief.primary.description
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  description: prismic.RichTextField;

  /**
   * Client field in *WorkChildBrief → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: work_child_brief.primary.client
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  client: prismic.RichTextField;

  /**
   * Sector field in *WorkChildBrief → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: work_child_brief.primary.sector
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  sector: prismic.RichTextField;

  /**
   * Status field in *WorkChildBrief → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: work_child_brief.primary.status
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  status: prismic.RichTextField;

  /**
   * Location field in *WorkChildBrief → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: work_child_brief.primary.location
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  location: prismic.RichTextField;

  /**
   * Scope field in *WorkChildBrief → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: work_child_brief.primary.scope
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  scope: prismic.RichTextField;

  /**
   * Scale field in *WorkChildBrief → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: work_child_brief.primary.scale
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  scale: prismic.RichTextField;
}

/**
 * Default variation for WorkChildBrief Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type WorkChildBriefSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<WorkChildBriefSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *WorkChildBrief*
 */
type WorkChildBriefSliceVariation = WorkChildBriefSliceDefault;

/**
 * WorkChildBrief Shared Slice
 *
 * - **API ID**: `work_child_brief`
 * - **Description**: WorkChildBrief
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type WorkChildBriefSlice = prismic.SharedSlice<
  "work_child_brief",
  WorkChildBriefSliceVariation
>;

/**
 * Primary content in *WorkChildHero → Primary*
 */
export interface WorkChildHeroSliceDefaultPrimary {
  /**
   * Image field in *WorkChildHero → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: work_child_hero.primary.image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;

  /**
   * Title field in *WorkChildHero → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: work_child_hero.primary.title
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.RichTextField;
}

/**
 * Default variation for WorkChildHero Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type WorkChildHeroSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<WorkChildHeroSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *WorkChildHero*
 */
type WorkChildHeroSliceVariation = WorkChildHeroSliceDefault;

/**
 * WorkChildHero Shared Slice
 *
 * - **API ID**: `work_child_hero`
 * - **Description**: WorkChildHero
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type WorkChildHeroSlice = prismic.SharedSlice<
  "work_child_hero",
  WorkChildHeroSliceVariation
>;

/**
 * Primary content in *WorkChildImage → Primary*
 */
export interface WorkChildImageSliceDefaultPrimary {
  /**
   * Image field in *WorkChildImage → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: work_child_image.primary.image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;
}

/**
 * Default variation for WorkChildImage Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type WorkChildImageSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<WorkChildImageSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *WorkChildImage*
 */
type WorkChildImageSliceVariation = WorkChildImageSliceDefault;

/**
 * WorkChildImage Shared Slice
 *
 * - **API ID**: `work_child_image`
 * - **Description**: WorkChildImage
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type WorkChildImageSlice = prismic.SharedSlice<
  "work_child_image",
  WorkChildImageSliceVariation
>;

/**
 * Primary content in *WorkChildVision → Primary*
 */
export interface WorkChildVisionSliceDefaultPrimary {
  /**
   * Title field in *WorkChildVision → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: work_child_vision.primary.title
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.RichTextField;

  /**
   * Description field in *WorkChildVision → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: work_child_vision.primary.description
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  description: prismic.RichTextField;
}

/**
 * Default variation for WorkChildVision Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type WorkChildVisionSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<WorkChildVisionSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *WorkChildVision*
 */
type WorkChildVisionSliceVariation = WorkChildVisionSliceDefault;

/**
 * WorkChildVision Shared Slice
 *
 * - **API ID**: `work_child_vision`
 * - **Description**: WorkChildVision
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type WorkChildVisionSlice = prismic.SharedSlice<
  "work_child_vision",
  WorkChildVisionSliceVariation
>;

/**
 * Primary content in *WorksShowcaseLeft → Primary*
 */
export interface WorksShowcaseLeftSliceDefaultPrimary {
  /**
   * Company Name A field in *WorksShowcaseLeft → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: works_showcase_left.primary.company_name_a
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  company_name_a: prismic.RichTextField;

  /**
   * Description A field in *WorksShowcaseLeft → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: works_showcase_left.primary.description_a
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  description_a: prismic.RichTextField;

  /**
   * Image A field in *WorksShowcaseLeft → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: works_showcase_left.primary.image_a
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image_a: prismic.ImageField<never>;

  /**
   * CTA Link A field in *WorksShowcaseLeft → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: works_showcase_left.primary.cta_link_a
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  cta_link_a: prismic.LinkField;

  /**
   * Company Name B field in *WorksShowcaseLeft → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: works_showcase_left.primary.company_name_b
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  company_name_b: prismic.RichTextField;

  /**
   * Description B field in *WorksShowcaseLeft → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: works_showcase_left.primary.description_b
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  description_b: prismic.RichTextField;

  /**
   * Image B field in *WorksShowcaseLeft → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: works_showcase_left.primary.image_b
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image_b: prismic.ImageField<never>;

  /**
   * CTA Link B field in *WorksShowcaseLeft → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: works_showcase_left.primary.cta_link_b
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  cta_link_b: prismic.LinkField;

  /**
   * Company Name C field in *WorksShowcaseLeft → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: works_showcase_left.primary.company_name_c
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  company_name_c: prismic.RichTextField;

  /**
   * Description C field in *WorksShowcaseLeft → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: works_showcase_left.primary.description_c
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  description_c: prismic.RichTextField;

  /**
   * Image C field in *WorksShowcaseLeft → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: works_showcase_left.primary.image_c
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image_c: prismic.ImageField<never>;

  /**
   * CTA Link C field in *WorksShowcaseLeft → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: works_showcase_left.primary.cta_link_c
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  cta_link_c: prismic.LinkField;
}

/**
 * Default variation for WorksShowcaseLeft Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type WorksShowcaseLeftSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<WorksShowcaseLeftSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *WorksShowcaseLeft*
 */
type WorksShowcaseLeftSliceVariation = WorksShowcaseLeftSliceDefault;

/**
 * WorksShowcaseLeft Shared Slice
 *
 * - **API ID**: `works_showcase_left`
 * - **Description**: WorksShowcaseLeft
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type WorksShowcaseLeftSlice = prismic.SharedSlice<
  "works_showcase_left",
  WorksShowcaseLeftSliceVariation
>;

/**
 * Primary content in *WorksShowcaseRight → Primary*
 */
export interface WorksShowcaseRightSliceDefaultPrimary {
  /**
   * Company Name A field in *WorksShowcaseRight → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: works_showcase_right.primary.company_name_a
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  company_name_a: prismic.RichTextField;

  /**
   * Description A field in *WorksShowcaseRight → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: works_showcase_right.primary.description_a
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  description_a: prismic.RichTextField;

  /**
   * Image A field in *WorksShowcaseRight → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: works_showcase_right.primary.image_a
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image_a: prismic.ImageField<never>;

  /**
   * CTA Link A field in *WorksShowcaseRight → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: works_showcase_right.primary.cta_link_a
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  cta_link_a: prismic.LinkField;

  /**
   * Company Name B field in *WorksShowcaseRight → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: works_showcase_right.primary.company_name_b
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  company_name_b: prismic.RichTextField;

  /**
   * Description B field in *WorksShowcaseRight → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: works_showcase_right.primary.description_b
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  description_b: prismic.RichTextField;

  /**
   * Image B field in *WorksShowcaseRight → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: works_showcase_right.primary.image_b
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image_b: prismic.ImageField<never>;

  /**
   * CTA Link B field in *WorksShowcaseRight → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: works_showcase_right.primary.cta_link_b
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  cta_link_b: prismic.LinkField;

  /**
   * Company Name C field in *WorksShowcaseRight → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: works_showcase_right.primary.company_name_c
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  company_name_c: prismic.RichTextField;

  /**
   * Description C field in *WorksShowcaseRight → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: works_showcase_right.primary.description_c
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  description_c: prismic.RichTextField;

  /**
   * Image C field in *WorksShowcaseRight → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: works_showcase_right.primary.image_c
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image_c: prismic.ImageField<never>;

  /**
   * CTA Link C field in *WorksShowcaseRight → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: works_showcase_right.primary.cta_link_c
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  cta_link_c: prismic.LinkField;
}

/**
 * Default variation for WorksShowcaseRight Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type WorksShowcaseRightSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<WorksShowcaseRightSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *WorksShowcaseRight*
 */
type WorksShowcaseRightSliceVariation = WorksShowcaseRightSliceDefault;

/**
 * WorksShowcaseRight Shared Slice
 *
 * - **API ID**: `works_showcase_right`
 * - **Description**: WorksShowcaseRight
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type WorksShowcaseRightSlice = prismic.SharedSlice<
  "works_showcase_right",
  WorksShowcaseRightSliceVariation
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
      WorksDocument,
      WorksDocumentData,
      WorksDocumentDataSlicesSlice,
      WorksChildDocument,
      WorksChildDocumentData,
      WorksChildDocumentDataSlicesSlice,
      AllDocumentTypes,
      BehindTheScenesSlice,
      BehindTheScenesSliceDefaultPrimary,
      BehindTheScenesSliceDefaultItem,
      BehindTheScenesSliceVariation,
      BehindTheScenesSliceDefault,
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
      NextProjectLinkSlice,
      NextProjectLinkSliceDefaultPrimary,
      NextProjectLinkSliceVariation,
      NextProjectLinkSliceDefault,
      WorkChildBriefSlice,
      WorkChildBriefSliceDefaultPrimary,
      WorkChildBriefSliceVariation,
      WorkChildBriefSliceDefault,
      WorkChildHeroSlice,
      WorkChildHeroSliceDefaultPrimary,
      WorkChildHeroSliceVariation,
      WorkChildHeroSliceDefault,
      WorkChildImageSlice,
      WorkChildImageSliceDefaultPrimary,
      WorkChildImageSliceVariation,
      WorkChildImageSliceDefault,
      WorkChildVisionSlice,
      WorkChildVisionSliceDefaultPrimary,
      WorkChildVisionSliceVariation,
      WorkChildVisionSliceDefault,
      WorksShowcaseLeftSlice,
      WorksShowcaseLeftSliceDefaultPrimary,
      WorksShowcaseLeftSliceVariation,
      WorksShowcaseLeftSliceDefault,
      WorksShowcaseRightSlice,
      WorksShowcaseRightSliceDefaultPrimary,
      WorksShowcaseRightSliceVariation,
      WorksShowcaseRightSliceDefault,
    };
  }
}
