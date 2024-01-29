// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from '@prismicio/client'

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] }

type AboutDocumentDataSlicesSlice = ButtonSlice | ImagesSlice | HistorySlice

/**
 * Content for About documents
 */
interface AboutDocumentData {
  /**
   * Title field in *About*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: about.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.TitleField

  /**
   * Slice Zone field in *About*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: about.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<AboutDocumentDataSlicesSlice> /**
   * Meta Description field in *About*
   *
   * - **Field Type**: Text
   * - **Placeholder**: About Oconee Winds
   * - **API ID Path**: about.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField

  /**
   * Meta Image field in *About*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: about.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>

  /**
   * Meta Title field in *About*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: about.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_title: prismic.KeyTextField
}

/**
 * About document from Prismic
 *
 * - **API ID**: `about`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type AboutDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<Simplify<AboutDocumentData>, 'about', Lang>

type CampDocumentDataSlicesSlice =
  | FaqSlice
  | MoreDetailsSlice
  | ExperienceSlice
  | CampInformationSlice

/**
 * Content for Camp documents
 */
interface CampDocumentData {
  /**
   * Page Title field in *Camp*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: camp.page_title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  page_title: prismic.TitleField

  /**
   * Banner field in *Camp*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: camp.banner
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  banner: prismic.ImageField<never>

  /**
   * Slice Zone field in *Camp*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: camp.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<CampDocumentDataSlicesSlice> /**
   * Meta Description field in *Camp*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: camp.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField

  /**
   * Meta Image field in *Camp*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: camp.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>

  /**
   * Meta Title field in *Camp*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: camp.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_title: prismic.KeyTextField
}

/**
 * Camp document from Prismic
 *
 * - **API ID**: `camp`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type CampDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<Simplify<CampDocumentData>, 'camp', Lang>

type EventDocumentDataSlicesSlice = never

/**
 * Content for Event documents
 */
interface EventDocumentData {
  /**
   * Title field in *Event*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: event.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.TitleField

  /**
   * Description field in *Event*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: event.description
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  description: prismic.RichTextField

  /**
   * Image field in *Event*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: event.image
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>

  /**
   * Time field in *Event*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: event.time
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  time: prismic.RichTextField

  /**
   * Address field in *Event*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: event.address
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  address: prismic.RichTextField

  /**
   * Conductor field in *Event*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: event.conductor
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  conductor: prismic.RichTextField

  /**
   * Facebook Event field in *Event*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: event.facebook_event
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  facebook_event: prismic.LinkField

  /**
   * Program Link field in *Event*
   *
   * - **Field Type**: Link to Media
   * - **Placeholder**: *None*
   * - **API ID Path**: event.program_link
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  program_link: prismic.LinkToMediaField

  /**
   * Archive field in *Event*
   *
   * - **Field Type**: Boolean
   * - **Placeholder**: *None*
   * - **Default Value**: false
   * - **API ID Path**: event.archive
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#boolean
   */
  archive: prismic.BooleanField

  /**
   * Video Iframe field in *Event*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: event.video_iframe
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  video_iframe: prismic.KeyTextField

  /**
   * Location Link field in *Event*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: event.location_link
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  location_link: prismic.LinkField

  /**
   * Date field in *Event*
   *
   * - **Field Type**: Date
   * - **Placeholder**: *None*
   * - **API ID Path**: event.date
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#date
   */
  date: prismic.DateField

  /**
   * Slice Zone field in *Event*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: event.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<EventDocumentDataSlicesSlice>
}

/**
 * Event document from Prismic
 *
 * - **API ID**: `event`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type EventDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<Simplify<EventDocumentData>, 'event', Lang>

type HomepageDocumentDataSlicesSlice = HeroSlice

/**
 * Content for Homepage documents
 */
interface HomepageDocumentData {
  /**
   * Slice Zone field in *Homepage*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<HomepageDocumentDataSlicesSlice> /**
   * Meta Description field in *Homepage*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: homepage.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField

  /**
   * Meta Image field in *Homepage*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>

  /**
   * Meta Title field in *Homepage*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: homepage.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_title: prismic.KeyTextField
}

/**
 * Homepage document from Prismic
 *
 * - **API ID**: `homepage`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type HomepageDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<HomepageDocumentData>,
    'homepage',
    Lang
  >

/**
 * Content for Settings documents
 */
interface SettingsDocumentData {
  /**
   * Site Title field in *Settings*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.site_title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  site_title: prismic.KeyTextField

  /**
   * Meta Description field in *Settings*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.meta_description
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField

  /**
   * OG Image field in *Settings*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.og_image
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  og_image: prismic.ImageField<never>

  /**
   * Donate Link field in *Settings*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.donate_link
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  donate_link: prismic.LinkField
}

/**
 * Settings document from Prismic
 *
 * - **API ID**: `settings`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type SettingsDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<SettingsDocumentData>,
    'settings',
    Lang
  >

export type AllDocumentTypes =
  | AboutDocument
  | CampDocument
  | EventDocument
  | HomepageDocument
  | SettingsDocument

/**
 * Primary content in *Button → Primary*
 */
export interface ButtonSliceDefaultPrimary {
  /**
   * Button Name field in *Button → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: button.primary.button_name
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  button_name: prismic.KeyTextField

  /**
   * Button Link field in *Button → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: button.primary.button_link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  button_link: prismic.LinkField
}

/**
 * Default variation for Button Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ButtonSliceDefault = prismic.SharedSliceVariation<
  'default',
  Simplify<ButtonSliceDefaultPrimary>,
  never
>

/**
 * Slice variation for *Button*
 */
type ButtonSliceVariation = ButtonSliceDefault

/**
 * Button Shared Slice
 *
 * - **API ID**: `button`
 * - **Description**: Button
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ButtonSlice = prismic.SharedSlice<'button', ButtonSliceVariation>

/**
 * Primary content in *CampInformation → Primary*
 */
export interface CampInformationSliceDefaultPrimary {
  /**
   * Description field in *CampInformation → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: camp_information.primary.description
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  description: prismic.RichTextField

  /**
   * Date field in *CampInformation → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: camp_information.primary.date
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  date: prismic.RichTextField

  /**
   * Deadline field in *CampInformation → Primary*
   *
   * - **Field Type**: Date
   * - **Placeholder**: *None*
   * - **API ID Path**: camp_information.primary.deadline
   * - **Documentation**: https://prismic.io/docs/field#date
   */
  deadline: prismic.DateField

  /**
   * Location field in *CampInformation → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: camp_information.primary.location
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  location: prismic.RichTextField

  /**
   * Cost field in *CampInformation → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: camp_information.primary.cost
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  cost: prismic.RichTextField

  /**
   * Staff field in *CampInformation → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: camp_information.primary.staff
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  staff: prismic.RichTextField

  /**
   * Who can attend field in *CampInformation → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: camp_information.primary.who_can_attend
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  who_can_attend: prismic.RichTextField

  /**
   * Acceptance Date field in *CampInformation → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: camp_information.primary.acceptance_date
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  acceptance_date: prismic.RichTextField

  /**
   * Registration Form field in *CampInformation → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: camp_information.primary.registration_form
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  registration_form: prismic.LinkField

  /**
   * Deadline Info field in *CampInformation → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: camp_information.primary.deadline_info
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  deadline_info: prismic.RichTextField

  /**
   * Sample Schedule field in *CampInformation → Primary*
   *
   * - **Field Type**: Link to Media
   * - **Placeholder**: *None*
   * - **API ID Path**: camp_information.primary.sample_schedule
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  sample_schedule: prismic.LinkToMediaField
}

/**
 * Default variation for CampInformation Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type CampInformationSliceDefault = prismic.SharedSliceVariation<
  'default',
  Simplify<CampInformationSliceDefaultPrimary>,
  never
>

/**
 * Slice variation for *CampInformation*
 */
type CampInformationSliceVariation = CampInformationSliceDefault

/**
 * CampInformation Shared Slice
 *
 * - **API ID**: `camp_information`
 * - **Description**: CampInformation
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type CampInformationSlice = prismic.SharedSlice<
  'camp_information',
  CampInformationSliceVariation
>

/**
 * Primary content in *Experience → Primary*
 */
export interface ExperienceSliceDefaultPrimary {
  /**
   * Title field in *Experience → Primary*
   *
   * - **Field Type**: Title
   * - **Placeholder**: Camp Experience
   * - **API ID Path**: experience.primary.title
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.TitleField
}

/**
 * Primary content in *Experience → Items*
 */
export interface ExperienceSliceDefaultItem {
  /**
   * Subtitle field in *Experience → Items*
   *
   * - **Field Type**: Title
   * - **Placeholder**: Jr High or Sr High Experience
   * - **API ID Path**: experience.items[].subtitle
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  subtitle: prismic.TitleField

  /**
   * Description field in *Experience → Items*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: Paragraph explaining the experience
   * - **API ID Path**: experience.items[].description
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  description: prismic.RichTextField
}

/**
 * Default variation for Experience Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ExperienceSliceDefault = prismic.SharedSliceVariation<
  'default',
  Simplify<ExperienceSliceDefaultPrimary>,
  Simplify<ExperienceSliceDefaultItem>
>

/**
 * Slice variation for *Experience*
 */
type ExperienceSliceVariation = ExperienceSliceDefault

/**
 * Experience Shared Slice
 *
 * - **API ID**: `experience`
 * - **Description**: Experience
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ExperienceSlice = prismic.SharedSlice<
  'experience',
  ExperienceSliceVariation
>

/**
 * Primary content in *Faq → Primary*
 */
export interface FaqSliceDefaultPrimary {
  /**
   * Title field in *Faq → Primary*
   *
   * - **Field Type**: Title
   * - **Placeholder**: Frequently Asked Questions
   * - **API ID Path**: faq.primary.title
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.TitleField
}

/**
 * Primary content in *Faq → Items*
 */
export interface FaqSliceDefaultItem {
  /**
   * Question field in *Faq → Items*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: Question
   * - **API ID Path**: faq.items[].question
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  question: prismic.RichTextField

  /**
   * Answer field in *Faq → Items*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: faq.items[].answer
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  answer: prismic.RichTextField
}

/**
 * Default variation for Faq Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type FaqSliceDefault = prismic.SharedSliceVariation<
  'default',
  Simplify<FaqSliceDefaultPrimary>,
  Simplify<FaqSliceDefaultItem>
>

/**
 * Slice variation for *Faq*
 */
type FaqSliceVariation = FaqSliceDefault

/**
 * Faq Shared Slice
 *
 * - **API ID**: `faq`
 * - **Description**: Faq
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type FaqSlice = prismic.SharedSlice<'faq', FaqSliceVariation>

/**
 * Primary content in *Hero → Primary*
 */
export interface HeroSliceDefaultPrimary {
  /**
   * Heading field in *Hero → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.primary.heading
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  heading: prismic.RichTextField

  /**
   * Main Image field in *Hero → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.primary.main_image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  main_image: prismic.ImageField<never>

  /**
   * Button1 Label field in *Hero → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.primary.button1_label
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  button1_label: prismic.KeyTextField

  /**
   * Button1 Link field in *Hero → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.primary.button1_link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  button1_link: prismic.LinkField

  /**
   * Button2 Label field in *Hero → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.primary.button2_label
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  button2_label: prismic.KeyTextField

  /**
   * Button2 Link field in *Hero → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.primary.button2_link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  button2_link: prismic.LinkField
}

/**
 * Default variation for Hero Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroSliceDefault = prismic.SharedSliceVariation<
  'default',
  Simplify<HeroSliceDefaultPrimary>,
  never
>

/**
 * Slice variation for *Hero*
 */
type HeroSliceVariation = HeroSliceDefault

/**
 * Hero Shared Slice
 *
 * - **API ID**: `hero`
 * - **Description**: Hero
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroSlice = prismic.SharedSlice<'hero', HeroSliceVariation>

/**
 * Primary content in *History → Primary*
 */
export interface HistorySliceDefaultPrimary {
  /**
   * Title field in *History → Primary*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: history.primary.title
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.TitleField

  /**
   * Body field in *History → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: history.primary.body
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  body: prismic.RichTextField
}

/**
 * Default variation for History Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HistorySliceDefault = prismic.SharedSliceVariation<
  'default',
  Simplify<HistorySliceDefaultPrimary>,
  never
>

/**
 * Slice variation for *History*
 */
type HistorySliceVariation = HistorySliceDefault

/**
 * History Shared Slice
 *
 * - **API ID**: `history`
 * - **Description**: History
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HistorySlice = prismic.SharedSlice<'history', HistorySliceVariation>

/**
 * Primary content in *Images → Primary*
 */
export interface ImagesSliceDefaultPrimary {
  /**
   * Title field in *Images → Primary*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: images.primary.title
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.TitleField
}

/**
 * Primary content in *Images → Items*
 */
export interface ImagesSliceDefaultItem {
  /**
   * Image field in *Images → Items*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: images.items[].image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>
}

/**
 * Default variation for Images Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ImagesSliceDefault = prismic.SharedSliceVariation<
  'default',
  Simplify<ImagesSliceDefaultPrimary>,
  Simplify<ImagesSliceDefaultItem>
>

/**
 * Slice variation for *Images*
 */
type ImagesSliceVariation = ImagesSliceDefault

/**
 * Images Shared Slice
 *
 * - **API ID**: `images`
 * - **Description**: Images
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ImagesSlice = prismic.SharedSlice<'images', ImagesSliceVariation>

/**
 * Primary content in *MoreDetails → Primary*
 */
export interface MoreDetailsSliceDefaultPrimary {
  /**
   * Title field in *MoreDetails → Primary*
   *
   * - **Field Type**: Title
   * - **Placeholder**: More Details
   * - **API ID Path**: more_details.primary.title
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.TitleField

  /**
   * Description field in *MoreDetails → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: more_details.primary.description
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  description: prismic.RichTextField
}

/**
 * Primary content in *MoreDetails → Items*
 */
export interface MoreDetailsSliceDefaultItem {
  /**
   * Subtitle field in *MoreDetails → Items*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: more_details.items[].subtitle_1
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  subtitle_1: prismic.TitleField

  /**
   * Paragraph field in *MoreDetails → Items*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: more_details.items[].paragraph
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  paragraph: prismic.RichTextField
}

/**
 * Default variation for MoreDetails Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type MoreDetailsSliceDefault = prismic.SharedSliceVariation<
  'default',
  Simplify<MoreDetailsSliceDefaultPrimary>,
  Simplify<MoreDetailsSliceDefaultItem>
>

/**
 * Slice variation for *MoreDetails*
 */
type MoreDetailsSliceVariation = MoreDetailsSliceDefault

/**
 * MoreDetails Shared Slice
 *
 * - **API ID**: `more_details`
 * - **Description**: MoreDetails
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type MoreDetailsSlice = prismic.SharedSlice<
  'more_details',
  MoreDetailsSliceVariation
>

declare module '@prismicio/client' {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig,
    ): prismic.Client<AllDocumentTypes>
  }

  namespace Content {
    export type {
      AboutDocument,
      AboutDocumentData,
      AboutDocumentDataSlicesSlice,
      CampDocument,
      CampDocumentData,
      CampDocumentDataSlicesSlice,
      EventDocument,
      EventDocumentData,
      EventDocumentDataSlicesSlice,
      HomepageDocument,
      HomepageDocumentData,
      HomepageDocumentDataSlicesSlice,
      SettingsDocument,
      SettingsDocumentData,
      AllDocumentTypes,
      ButtonSlice,
      ButtonSliceDefaultPrimary,
      ButtonSliceVariation,
      ButtonSliceDefault,
      CampInformationSlice,
      CampInformationSliceDefaultPrimary,
      CampInformationSliceVariation,
      CampInformationSliceDefault,
      ExperienceSlice,
      ExperienceSliceDefaultPrimary,
      ExperienceSliceDefaultItem,
      ExperienceSliceVariation,
      ExperienceSliceDefault,
      FaqSlice,
      FaqSliceDefaultPrimary,
      FaqSliceDefaultItem,
      FaqSliceVariation,
      FaqSliceDefault,
      HeroSlice,
      HeroSliceDefaultPrimary,
      HeroSliceVariation,
      HeroSliceDefault,
      HistorySlice,
      HistorySliceDefaultPrimary,
      HistorySliceVariation,
      HistorySliceDefault,
      ImagesSlice,
      ImagesSliceDefaultPrimary,
      ImagesSliceDefaultItem,
      ImagesSliceVariation,
      ImagesSliceDefault,
      MoreDetailsSlice,
      MoreDetailsSliceDefaultPrimary,
      MoreDetailsSliceDefaultItem,
      MoreDetailsSliceVariation,
      MoreDetailsSliceDefault,
    }
  }
}
