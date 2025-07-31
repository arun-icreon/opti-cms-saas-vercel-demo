import type * as Schema from "./graphql";
import type { GraphQLClient, RequestOptions } from 'graphql-request';
import gql from 'graphql-tag';
type GraphQLClientRequestHeaders = RequestOptions['requestHeaders'];
export const LinkDataFragmentDoc = gql`
    fragment LinkData on ContentUrl {
  base
  default
}
    `;
export const ReferenceDataFragmentDoc = gql`
    fragment ReferenceData on ContentReference {
  key
  url {
    ...LinkData
  }
}
    `;
export const PageSeoSettingsPropertyDataFragmentDoc = gql`
    fragment PageSeoSettingsPropertyData on PageSeoSettingsProperty {
  MetaTitle
  MetaDescription
  MetaKeywords
  SharingImage {
    ...ReferenceData
  }
  GraphType
}
    `;
export const CompositionNodeDataFragmentDoc = gql`
    fragment CompositionNodeData on ICompositionNode {
  name: displayName
  layoutType: nodeType
  type
  key
  template: displayTemplateKey
  settings: displaySettings {
    key
    value
  }
}
    `;
export const IContentInfoFragmentDoc = gql`
    fragment IContentInfo on IContentMetadata {
  key
  locale
  types
  displayName
  version
  url {
    ...LinkData
  }
}
    `;
export const IContentDataFragmentDoc = gql`
    fragment IContentData on _IContent {
  _metadata {
    ...IContentInfo
  }
  _type: __typename
}
    `;
export const BlockDataFragmentDoc = gql`
    fragment BlockData on _IComponent {
  ...IContentData
}
    `;
export const IElementDataFragmentDoc = gql`
    fragment IElementData on _IComponent {
  _metadata {
    ...IContentInfo
  }
  _type: __typename
}
    `;
export const ElementDataFragmentDoc = gql`
    fragment ElementData on _IComponent {
  ...IElementData
}
    `;
export const ArticleListElementDataFragmentDoc = gql`
    fragment ArticleListElementData on ArticleListElement {
  articleListCount
  topics
}
    `;
export const IContentListItemFragmentDoc = gql`
    fragment IContentListItem on _IContent {
  ...IContentData
}
    `;
export const ImageMediaComponentDataFragmentDoc = gql`
    fragment ImageMediaComponentData on ImageMedia {
  alt: AltText
  meta: _metadata {
    url {
      default
    }
    name: displayName
  }
}
    `;
export const VideoMediaComponentDataFragmentDoc = gql`
    fragment VideoMediaComponentData on VideoMedia {
  meta: _metadata {
    url {
      default
    }
    name: displayName
  }
}
    `;
export const CTAElementPropertyDataFragmentDoc = gql`
    fragment CTAElementPropertyData on CTAElementProperty {
  Text
  Link {
    ...LinkData
  }
}
    `;
export const BlockbysuneelDataFragmentDoc = gql`
    fragment BlockbysuneelData on Blockbysuneel {
  BaseText
  content {
    ...IContentListItem
    ...ImageMediaComponentData
    ...VideoMediaComponentData
  }
  block {
    ...CTAElementPropertyData
  }
  Dropdown
  Number
  checkBox
}
    `;
export const ButtonBlockDataFragmentDoc = gql`
    fragment ButtonBlockData on ButtonBlock {
  children: ButtonText
  url: ButtonUrl {
    ...LinkData
  }
  className: ButtonClass
  buttonType: ButtonType
  buttonVariant: ButtonVariant
}
    `;
export const CTAElementDataFragmentDoc = gql`
    fragment CTAElementData on CTAElement {
  cta_text: Text
  cta_link: Link {
    ...LinkData
  }
}
    `;
export const CategoriesDataFragmentDoc = gql`
    fragment CategoriesData on Categories {
  empty: _metadata {
    key
  }
}
    `;
export const ContentRecsElementDataFragmentDoc = gql`
    fragment ContentRecsElementData on ContentRecsElement {
  ElementDeliveryApiKey
  ElementRecommendationCount
}
    `;
export const ContentTileDataFragmentDoc = gql`
    fragment ContentTileData on ContentTile {
  Heading
  ContentTiles {
    ...IContentListItem
    ...ImageMediaComponentData
    ...VideoMediaComponentData
  }
}
    `;
export const HeadingElementDataFragmentDoc = gql`
    fragment HeadingElementData on HeadingElement {
  headingText
}
    `;
export const ButtonBlockPropertyDataFragmentDoc = gql`
    fragment ButtonBlockPropertyData on ButtonBlockProperty {
  children: ButtonText
  url: ButtonUrl {
    ...LinkData
  }
  className: ButtonClass
  buttonType: ButtonType
  buttonVariant: ButtonVariant
}
    `;
export const HeroBlockDataFragmentDoc = gql`
    fragment HeroBlockData on HeroBlock {
  heroImage: HeroImage {
    ...ReferenceData
  }
  eyebrow: Eyebrow
  heroHeading: Heading
  heroSubheading: SubHeading
  heroDescription: Description {
    json
    html
  }
  heroColor: HeroColor
  heroButton: HeroButton {
    ...ButtonBlockPropertyData
  }
}
    `;
export const ImageElementDataFragmentDoc = gql`
    fragment ImageElementData on ImageElement {
  altText
  imageLink {
    ...ReferenceData
    item {
      graphId: _id
      ... on cmp_PublicImageAsset {
        alt: Title
        src: Url
      }
    }
  }
}
    `;
export const LinkItemDataFragmentDoc = gql`
    fragment LinkItemData on Link {
  title
  text
  target
  url {
    ...LinkData
  }
}
    `;
export const LayoutSettingsBlockDataFragmentDoc = gql`
    fragment LayoutSettingsBlockData on LayoutSettingsBlock {
  mainMenu {
    ...IContentListItem
    ...ImageMediaComponentData
    ...VideoMediaComponentData
  }
  contactInfoHeading
  serviceButtons {
    ...IContentListItem
    ...ImageMediaComponentData
    ...VideoMediaComponentData
  }
  contactInfo {
    json
    html
  }
  footerMenus {
    ...IContentListItem
    ...ImageMediaComponentData
    ...VideoMediaComponentData
  }
  copyright
  legalLinks {
    ...LinkItemData
  }
  appIdentifiers
}
    `;
export const Masthead_bannerDataFragmentDoc = gql`
    fragment Masthead_bannerData on Masthead_banner {
  Left_Image {
    ...ImageMediaComponentData
  }
  Right_Image {
    ...ImageMediaComponentData
  }
  Title
  Main_Content {
    json
    html
  }
  CTA {
    ...CTAElementPropertyData
  }
}
    `;
export const MenuNavigationBlockDataFragmentDoc = gql`
    fragment MenuNavigationBlockData on MenuNavigationBlock {
  _metadata {
    displayName
  }
  MenuNavigationHeading
  NavigationLinks {
    ...LinkItemData
  }
}
    `;
export const BlogPostPageMenuBlockFragmentDoc = gql`
    fragment BlogPostPageMenuBlock on BlogPostPage {
  meta: _metadata {
    published
    url {
      ...LinkData
    }
  }
  topics: Topic
  heading: Heading
  author: ArticleAuthor
  image: BlogPostPromoImage {
    ...ReferenceData
  }
  sharing: SeoSettings {
    description: MetaDescription
    image: SharingImage {
      ...ReferenceData
    }
  }
}
    `;
export const MegaMenuGroupBlockDataFragmentDoc = gql`
    fragment MegaMenuGroupBlockData on MegaMenuGroupBlock {
  _metadata {
    displayName
  }
  MenuMenuHeading
  MegaMenuUrl {
    ...LinkData
  }
  MegaMenuContentArea {
    ...IContentData
    ...MenuNavigationBlockData
    ...BlogPostPageMenuBlock
  }
}
    `;
export const NextCompDataFragmentDoc = gql`
    fragment NextCompData on NextComp {
  Title
}
    `;
export const OdpEmbedBlockDataFragmentDoc = gql`
    fragment OdpEmbedBlockData on OdpEmbedBlock {
  ContentId
}
    `;
export const PageBlockDataFragmentDoc = gql`
    fragment PageBlockData on PageBlock {
  BlogItems {
    ...IContentListItem
    ...ImageMediaComponentData
    ...VideoMediaComponentData
  }
}
    `;
export const PageSeoSettingsDataFragmentDoc = gql`
    fragment PageSeoSettingsData on PageSeoSettings {
  MetaTitle
  MetaDescription
  MetaKeywords
  SharingImage {
    ...ReferenceData
  }
  GraphType
}
    `;
export const ParagraphElementDataFragmentDoc = gql`
    fragment ParagraphElementData on ParagraphElement {
  text {
    json
  }
}
    `;
export const QuoteBlockDataFragmentDoc = gql`
    fragment QuoteBlockData on QuoteBlock {
  quote: QuoteText
  color: QuoteColor
  active: QuoteActive
  name: QuoteProfileName
  profilePicture: QuoteProfilePicture {
    ...ReferenceData
  }
  location: QuoteProfileLocation
}
    `;
export const RichTextElementDataFragmentDoc = gql`
    fragment RichTextElementData on RichTextElement {
  text {
    json
    html
  }
}
    `;
export const HeroBlockPropertyDataFragmentDoc = gql`
    fragment HeroBlockPropertyData on HeroBlockProperty {
  HeroImage {
    ...ReferenceData
  }
  Icon
  Eyebrow
  Heading
  SubHeading
  Description {
    json
    html
  }
  HeroColor
  HeroButton {
    ...ButtonBlockPropertyData
  }
}
    `;
export const TestComponentDataFragmentDoc = gql`
    fragment TestComponentData on TestComponent {
  Title
  Content {
    ...HeroBlockPropertyData
  }
}
    `;
export const TestimonialElementDataFragmentDoc = gql`
    fragment TestimonialElementData on TestimonialElement {
  customerName
  customerLocation
  customerImage {
    ...ReferenceData
  }
  referenceTitle
  referenceText {
    json
  }
}
    `;
export const TextBlockDataFragmentDoc = gql`
    fragment TextBlockData on TextBlock {
  overline: TextBlockOverline
  headingSize: TextBlockHeadingSize
  heading: TextBlockHeading
  description: TextBlockDescription {
    json
    html
  }
  center: TextCenter
  width: TextBlockWidth
  className: TextClassName
}
    `;
export const VideoElementDataFragmentDoc = gql`
    fragment VideoElementData on VideoElement {
  title
  video {
    ...ReferenceData
  }
  placeholder {
    ...ReferenceData
  }
}
    `;
export const testDataFragmentDoc = gql`
    fragment testData on test {
  empty: _metadata {
    key
  }
}
    `;
export const BlankSectionDataFragmentDoc = gql`
    fragment BlankSectionData on BlankSection {
  _metadata {
    key
  }
}
    `;
export const CustomSectionDataFragmentDoc = gql`
    fragment CustomSectionData on CustomSection {
  empty: _metadata {
    key
  }
}
    `;
export const ContinueReadingComponentDataFragmentDoc = gql`
    fragment ContinueReadingComponentData on ContinueReadingComponent {
  topline
  shared
  heading
  content {
    ...IContentData
    ...BlockData
    ...ArticleListElementData
    ...BlockbysuneelData
    ...ButtonBlockData
    ...CTAElementData
    ...CarouselBlockData
    ...CategoriesData
    ...ContentRecsElementData
    ...ContentTileData
    ...ContinueReadingComponentData
    ...HeadingElementData
    ...HeroBlockData
    ...ImageElementData
    ...LayoutSettingsBlockData
    ...Masthead_bannerData
    ...MegaMenuGroupBlockData
    ...MenuNavigationBlockData
    ...NextCompData
    ...OdpEmbedBlockData
    ...PageBlockData
    ...PageSeoSettingsData
    ...ParagraphElementData
    ...QuoteBlockData
    ...RichTextElementData
    ...TestComponentData
    ...TestimonialElementData
    ...TextBlockData
    ...VideoElementData
    ...testData
    ...BlankSectionData
    ...CustomSectionData
  }
}
    `;
export const CarouselBlockDataFragmentDoc = gql`
    fragment CarouselBlockData on CarouselBlock {
  CarouselItemsContentArea {
    ...IContentListItem
    ...BlockData
    ...ImageMediaComponentData
    ...VideoMediaComponentData
    ...ArticleListElementData
    ...BlockbysuneelData
    ...ButtonBlockData
    ...CTAElementData
    ...CarouselBlockData
    ...CategoriesData
    ...ContentRecsElementData
    ...ContentTileData
    ...ContinueReadingComponentData
    ...HeadingElementData
    ...HeroBlockData
    ...ImageElementData
    ...LayoutSettingsBlockData
    ...Masthead_bannerData
    ...MegaMenuGroupBlockData
    ...MenuNavigationBlockData
    ...NextCompData
    ...OdpEmbedBlockData
    ...PageBlockData
    ...PageSeoSettingsData
    ...ParagraphElementData
    ...QuoteBlockData
    ...RichTextElementData
    ...TestComponentData
    ...TestimonialElementData
    ...TextBlockData
    ...VideoElementData
    ...testData
    ...BlankSectionData
    ...CustomSectionData
  }
}
    `;
export const CompositionComponentNodeDataFragmentDoc = gql`
    fragment CompositionComponentNodeData on ICompositionComponentNode {
  component {
    ...BlockData
    ...ElementData
    ...ArticleListElementData
    ...BlockbysuneelData
    ...ButtonBlockData
    ...CTAElementData
    ...CarouselBlockData
    ...CategoriesData
    ...ContentRecsElementData
    ...ContentTileData
    ...ContinueReadingComponentData
    ...HeadingElementData
    ...HeroBlockData
    ...ImageElementData
    ...LayoutSettingsBlockData
    ...Masthead_bannerData
    ...MegaMenuGroupBlockData
    ...MenuNavigationBlockData
    ...NextCompData
    ...OdpEmbedBlockData
    ...PageBlockData
    ...PageSeoSettingsData
    ...ParagraphElementData
    ...QuoteBlockData
    ...RichTextElementData
    ...TestComponentData
    ...TestimonialElementData
    ...TextBlockData
    ...VideoElementData
    ...testData
    ...BlankSectionData
    ...CustomSectionData
  }
}
    `;
export const ExperienceDataFragmentDoc = gql`
    fragment ExperienceData on _IExperience {
  composition {
    ...CompositionNodeData
    nodes {
      ...CompositionNodeData
      ... on ICompositionStructureNode {
        nodes {
          ...CompositionNodeData
          ... on ICompositionStructureNode {
            nodes {
              ...CompositionNodeData
              ... on ICompositionStructureNode {
                nodes {
                  ...CompositionNodeData
                  ...CompositionComponentNodeData
                }
              }
            }
          }
        }
      }
      ...CompositionComponentNodeData
    }
  }
}
    `;
export const BlankExperienceDataFragmentDoc = gql`
    fragment BlankExperienceData on BlankExperience {
  BlankExperienceSeoSettings {
    ...PageSeoSettingsPropertyData
  }
  ...ExperienceData
}
    `;
export const BlogSectionExperienceDataFragmentDoc = gql`
    fragment BlogSectionExperienceData on BlogSectionExperience {
  ...ExperienceData
}
    `;
export const TestExpDataFragmentDoc = gql`
    fragment TestExpData on TestExp {
  BlankExperienceSeoSettings {
    ...PageSeoSettingsPropertyData
  }
  ...ExperienceData
}
    `;
export const BlogDataFragmentDoc = gql`
    fragment BlogData on Blog {
  Title
}
    `;
export const BlogPostPageDataFragmentDoc = gql`
    fragment BlogPostPageData on BlogPostPage {
  blogTitle: Heading
  blogSubtitle: ArticleSubHeading
  blogImage: BlogPostPromoImage {
    ...ReferenceData
  }
  blogBody: BlogPostBody {
    json
  }
  blogAuthor: ArticleAuthor
  blogTopics: Topic
  continueReading {
    ...IContentListItem
    ...BlockData
    ...ImageMediaComponentData
    ...VideoMediaComponentData
    ...ArticleListElementData
    ...BlockbysuneelData
    ...ButtonBlockData
    ...CTAElementData
    ...CarouselBlockData
    ...CategoriesData
    ...ContentRecsElementData
    ...ContentTileData
    ...ContinueReadingComponentData
    ...HeadingElementData
    ...HeroBlockData
    ...ImageElementData
    ...LayoutSettingsBlockData
    ...Masthead_bannerData
    ...MegaMenuGroupBlockData
    ...MenuNavigationBlockData
    ...NextCompData
    ...OdpEmbedBlockData
    ...PageBlockData
    ...PageSeoSettingsData
    ...ParagraphElementData
    ...QuoteBlockData
    ...RichTextElementData
    ...TestComponentData
    ...TestimonialElementData
    ...TextBlockData
    ...VideoElementData
    ...testData
    ...BlankSectionData
    ...CustomSectionData
  }
}
    `;
export const BlogPostPageSearchResultFragmentDoc = gql`
    fragment BlogPostPageSearchResult on BlogPostPage {
  title: Heading
  image: BlogPostPromoImage {
    ...ReferenceData
  }
  author: ArticleAuthor
  seodata: SeoSettings {
    MetaTitle
    MetaDescription
  }
  _metadata {
    published
  }
}
    `;
export const HomePageDataFragmentDoc = gql`
    fragment HomePageData on HomePage {
  Meta {
    ...PageSeoSettingsPropertyData
  }
}
    `;
export const LandingPageDataFragmentDoc = gql`
    fragment LandingPageData on LandingPage {
  TopContentArea {
    ...BlockData
    ...ArticleListElementData
    ...BlockbysuneelData
    ...ButtonBlockData
    ...CTAElementData
    ...CarouselBlockData
    ...CategoriesData
    ...ContentRecsElementData
    ...ContentTileData
    ...ContinueReadingComponentData
    ...HeadingElementData
    ...HeroBlockData
    ...ImageElementData
    ...LayoutSettingsBlockData
    ...Masthead_bannerData
    ...MegaMenuGroupBlockData
    ...MenuNavigationBlockData
    ...NextCompData
    ...OdpEmbedBlockData
    ...PageBlockData
    ...PageSeoSettingsData
    ...ParagraphElementData
    ...QuoteBlockData
    ...RichTextElementData
    ...TestComponentData
    ...TestimonialElementData
    ...TextBlockData
    ...VideoElementData
    ...testData
    ...BlankSectionData
    ...CustomSectionData
  }
  MainContentArea {
    ...BlockData
    ...ArticleListElementData
    ...BlockbysuneelData
    ...ButtonBlockData
    ...CTAElementData
    ...CarouselBlockData
    ...CategoriesData
    ...ContentRecsElementData
    ...ContentTileData
    ...ContinueReadingComponentData
    ...HeadingElementData
    ...HeroBlockData
    ...ImageElementData
    ...LayoutSettingsBlockData
    ...Masthead_bannerData
    ...MegaMenuGroupBlockData
    ...MenuNavigationBlockData
    ...NextCompData
    ...OdpEmbedBlockData
    ...PageBlockData
    ...PageSeoSettingsData
    ...ParagraphElementData
    ...QuoteBlockData
    ...RichTextElementData
    ...TestComponentData
    ...TestimonialElementData
    ...TextBlockData
    ...VideoElementData
    ...testData
    ...BlankSectionData
    ...CustomSectionData
  }
}
    `;
export const NextCompPropertyDataFragmentDoc = gql`
    fragment NextCompPropertyData on NextCompProperty {
  Title
}
    `;
export const NextjsPageDataFragmentDoc = gql`
    fragment NextjsPageData on NextjsPage {
  Title
  block {
    ...NextCompPropertyData
  }
}
    `;
export const RacesDataFragmentDoc = gql`
    fragment RacesData on Races {
  Race_Title
}
    `;
export const TemplateBySuneelDataFragmentDoc = gql`
    fragment TemplateBySuneelData on TemplateBySuneel {
  Choice
}
    `;
export const examplePageDataFragmentDoc = gql`
    fragment examplePageData on examplePage {
  heading
}
    `;
export const examplePage1DataFragmentDoc = gql`
    fragment examplePage1Data on examplePage1 {
  heading
}
    `;
export const examplePage3DataFragmentDoc = gql`
    fragment examplePage3Data on examplePage3 {
  heading
}
    `;
export const SearchDataFragmentDoc = gql`
    fragment SearchData on _IContent {
  ...IContentData
}
    `;
export const PageDataFragmentDoc = gql`
    fragment PageData on _IContent {
  ...IContentData
}
    `;
export const getArticleListElementItemsDocument = gql`
    query getArticleListElementItems($count: Int!, $locale: [Locales], $topics: [String], $excludeKeys: [String]) {
  BlogPostPage(
    orderBy: {_metadata: {published: DESC}}
    limit: $count
    locale: $locale
    where: {_metadata: {status: {eq: "Published"}, key: {notIn: $excludeKeys}}, Topic: {in: $topics}}
  ) {
    items {
      ...IContentData
      articleMeta: _metadata {
        key
        published
        lastModified
      }
      blogTitle: Heading
      blogSubtitle: ArticleSubHeading
      blogImage: BlogPostPromoImage {
        ...ReferenceData
      }
      blogBody: BlogPostBody {
        json
      }
      blogAuthor: ArticleAuthor
    }
  }
}
    ${IContentDataFragmentDoc}
${IContentInfoFragmentDoc}
${LinkDataFragmentDoc}
${ReferenceDataFragmentDoc}`;
export const getDefaultArticleListDocument = gql`
    query getDefaultArticleList($locale: [Locales!]) {
  ArticleListElement(
    where: {_metadata: {displayName: {startsWith: "[DEFAULT]"}, status: {eq: "Published"}}}
    locale: $locale
    orderBy: {_metadata: {published: DESC}}
    limit: 1
  ) {
    items {
      ...IContentData
      ...ArticleListElementData
    }
  }
}
    ${IContentDataFragmentDoc}
${IContentInfoFragmentDoc}
${LinkDataFragmentDoc}
${ArticleListElementDataFragmentDoc}`;
export const getSharedContinueReadingDocument = gql`
    query getSharedContinueReading($locale: [Locales]) {
  ContinueReadingComponent(where: {shared: {eq: true}}, locale: $locale) {
    total
    item {
      ...IContentData
      ...ContinueReadingComponentData
    }
  }
}
    ${IContentDataFragmentDoc}
${IContentInfoFragmentDoc}
${LinkDataFragmentDoc}
${ContinueReadingComponentDataFragmentDoc}
${BlockDataFragmentDoc}
${ArticleListElementDataFragmentDoc}
${BlockbysuneelDataFragmentDoc}
${IContentListItemFragmentDoc}
${ImageMediaComponentDataFragmentDoc}
${VideoMediaComponentDataFragmentDoc}
${CTAElementPropertyDataFragmentDoc}
${ButtonBlockDataFragmentDoc}
${CTAElementDataFragmentDoc}
${CarouselBlockDataFragmentDoc}
${CategoriesDataFragmentDoc}
${ContentRecsElementDataFragmentDoc}
${ContentTileDataFragmentDoc}
${HeadingElementDataFragmentDoc}
${HeroBlockDataFragmentDoc}
${ReferenceDataFragmentDoc}
${ButtonBlockPropertyDataFragmentDoc}
${ImageElementDataFragmentDoc}
${LayoutSettingsBlockDataFragmentDoc}
${LinkItemDataFragmentDoc}
${Masthead_bannerDataFragmentDoc}
${MegaMenuGroupBlockDataFragmentDoc}
${MenuNavigationBlockDataFragmentDoc}
${BlogPostPageMenuBlockFragmentDoc}
${NextCompDataFragmentDoc}
${OdpEmbedBlockDataFragmentDoc}
${PageBlockDataFragmentDoc}
${PageSeoSettingsDataFragmentDoc}
${ParagraphElementDataFragmentDoc}
${QuoteBlockDataFragmentDoc}
${RichTextElementDataFragmentDoc}
${TestComponentDataFragmentDoc}
${HeroBlockPropertyDataFragmentDoc}
${TestimonialElementDataFragmentDoc}
${TextBlockDataFragmentDoc}
${VideoElementDataFragmentDoc}
${testDataFragmentDoc}
${BlankSectionDataFragmentDoc}
${CustomSectionDataFragmentDoc}`;
export const getBlankExperienceMetaDataDocument = gql`
    query getBlankExperienceMetaData($key: String!, $locale: [Locales]) {
  page: BlankExperience(where: {_metadata: {key: {eq: $key}}}, locale: $locale) {
    items {
      meta: _metadata {
        url {
          base
        }
        displayName
      }
      seo: BlankExperienceSeoSettings {
        title: MetaTitle
        description: MetaDescription
        image: SharingImage {
          ...ReferenceData
        }
        type: GraphType
      }
    }
  }
}
    ${ReferenceDataFragmentDoc}
${LinkDataFragmentDoc}`;
export const getChildBlogPostsDocument = gql`
    query getChildBlogPosts($parentKey: String!, $locale: [Locales!]! = ALL, $author: [String!], $topic: [String!], $limit: Int! = 9, $skip: Int! = 0) {
  result: BlogSectionExperience(
    where: {_metadata: {key: {eq: $parentKey}}}
    locale: $locale
  ) {
    items {
      container: _metadata {
        key
        displayName
      }
      items: _link(type: ITEMS) {
        BlogPostPage(skip: $skip, limit: $limit, locale: $locale) {
          total
          items {
            ...IContentData
            metadata: _metadata {
              key
              url {
                base
                default
              }
              published
            }
            heading: Heading
            subheading: ArticleSubHeading
            author: ArticleAuthor
            topic: Topic
            image: BlogPostPromoImage {
              src: url {
                base
                default
              }
            }
          }
          facets {
            author: ArticleAuthor(filters: $author) {
              name
              count
            }
            topic: Topic(orderBy: ASC, filters: $topic) {
              name
              count
            }
            metadata: _metadata {
              published(unit: DAY) {
                name
                count
              }
            }
          }
        }
      }
    }
  }
}
    ${IContentDataFragmentDoc}
${IContentInfoFragmentDoc}
${LinkDataFragmentDoc}`;
export const getBlogSectionExperienceMetaDataDocument = gql`
    query getBlogSectionExperienceMetaData($key: String!, $version: String, $locale: [Locales!]) {
  page: BlogSectionExperience(
    where: {_metadata: {key: {eq: $key}, version: {eq: $version}}}
    locale: $locale
  ) {
    items {
      _metadata {
        displayName
        published
        url {
          base
          default
        }
      }
      seo_data {
        ...PageSeoSettingsPropertyData
      }
    }
  }
}
    ${PageSeoSettingsPropertyDataFragmentDoc}
${ReferenceDataFragmentDoc}
${LinkDataFragmentDoc}`;
export const getBlogPostPageMetaDataDocument = gql`
    query getBlogPostPageMetaData($key: String!, $version: String, $locale: [Locales!]) {
  BlogPostPage(
    where: {_metadata: {key: {eq: $key}, version: {eq: $version}}}
    locale: $locale
  ) {
    pages: items {
      cms: _metadata {
        title: displayName
        published
        url {
          base
          default
        }
      }
      title: Heading
      author: ArticleAuthor
      image: BlogPostPromoImage {
        ...ReferenceData
      }
      topics: Topic
      seo: SeoSettings {
        title: MetaTitle
        description: MetaDescription
        keywords: MetaKeywords
        image: SharingImage {
          ...ReferenceData
        }
        type: GraphType
      }
    }
  }
}
    ${ReferenceDataFragmentDoc}
${LinkDataFragmentDoc}`;
export const getLandingPageMetaDataDocument = gql`
    query getLandingPageMetaData($key: String!, $version: String, $locale: [Locales]) {
  LandingPage(
    where: {_metadata: {key: {eq: $key}, version: {eq: $version}}}
    locale: $locale
  ) {
    pages: items {
      _metadata {
        displayName
        key
        version
        locale
        url {
          base
        }
      }
      SeoSettings {
        MetaTitle
        MetaDescription
        SharingImage {
          ...ReferenceData
        }
        GraphType
      }
    }
  }
}
    ${ReferenceDataFragmentDoc}
${LinkDataFragmentDoc}`;
export const getFooterDataDocument = gql`
    query getFooterData($domain: String, $locale: [Locales!]) {
  appLayout: LayoutSettingsBlock(
    where: {_or: [{appIdentifiers: {exist: false}}, {_and: [{appIdentifiers: {exist: true}}, {appIdentifiers: {eq: $domain}}]}]}
    locale: $locale
  ) {
    items {
      _metadata {
        key
        displayName
      }
      copyright
      footerMenus {
        ...IContentData
        ...MenuNavigationBlockData
      }
      legalLinks {
        ...LinkItemData
      }
      contactInfoHeading
      contactInfo {
        json
      }
    }
  }
}
    ${IContentDataFragmentDoc}
${IContentInfoFragmentDoc}
${LinkDataFragmentDoc}
${MenuNavigationBlockDataFragmentDoc}
${LinkItemDataFragmentDoc}`;
export const getHeaderDataDocument = gql`
    query getHeaderData($domain: String, $locale: [Locales!]) {
  appLayout: LayoutSettingsBlock(
    where: {_or: [{appIdentifiers: {exist: false}}, {_and: [{appIdentifiers: {exist: true}}, {appIdentifiers: {eq: $domain}}]}]}
    locale: $locale
  ) {
    items {
      _metadata {
        key
        displayName
      }
      appIdentifiers
      mainMenu {
        ...IContentData
        ...MegaMenuGroupBlockData
      }
      serviceButtons {
        ...IContentData
        ...ButtonBlockData
      }
    }
  }
}
    ${IContentDataFragmentDoc}
${IContentInfoFragmentDoc}
${LinkDataFragmentDoc}
${MegaMenuGroupBlockDataFragmentDoc}
${MenuNavigationBlockDataFragmentDoc}
${LinkItemDataFragmentDoc}
${BlogPostPageMenuBlockFragmentDoc}
${ReferenceDataFragmentDoc}
${ButtonBlockDataFragmentDoc}`;
export const getLocalesDocument = gql`
    query getLocales {
  schema: __schema {
    types {
      kind
      name
      enumValues {
        name
      }
    }
  }
}
    `;
export const getArticlesDocument = gql`
    query getArticles($pageSize: Int! = 10, $start: Int! = 0, $locale: [Locales], $author: [String!], $published: Date, $publishedEnd: Date) {
  getArticles: BlogPostPage(
    where: {_and: [{_metadata: {published: {gte: $published}}}, {_metadata: {published: {lte: $publishedEnd}}}], _metadata: {status: {eq: "Published"}}}
    locale: $locale
    limit: $pageSize
    skip: $start
    orderBy: {_metadata: {published: DESC}}
  ) {
    total
    items {
      ...IContentData
      _metadata {
        status
        published
      }
      title: Heading
      description: SeoSettings {
        text: MetaDescription
      }
      author: ArticleAuthor
      image: BlogPostPromoImage {
        ...ReferenceData
      }
    }
    facets {
      author: ArticleAuthor(orderType: VALUE, orderBy: ASC, filters: $author) {
        count
        name
      }
      _metadata {
        published(unit: DAY) {
          count
          name
        }
      }
    }
  }
}
    ${IContentDataFragmentDoc}
${IContentInfoFragmentDoc}
${LinkDataFragmentDoc}
${ReferenceDataFragmentDoc}`;
export const searchContentDocument = gql`
    query searchContent($term: String!, $locale: [String!], $withinLocale: [Locales], $types: [String!], $pageSize: Int! = 25, $start: Int! = 0) {
  Content: _Page(
    where: {_fulltext: {match: $term}, _metadata: {url: {base: {exist: true}}}}
    orderBy: {_ranking: SEMANTIC}
    limit: $pageSize
    skip: $start
    locale: $withinLocale
  ) {
    total
    items {
      _score
      ...SearchData
      _metadata {
        published
      }
      preview: _fulltext(
        highlight: {enabled: true, startToken: "<span>", endToken: "</span>"}
      )
      ...BlogPostPageSearchResult
    }
    facets {
      _metadata {
        types(filters: $types) {
          name
          count
        }
        locale(filters: $locale) {
          name
          count
        }
      }
    }
  }
}
    ${SearchDataFragmentDoc}
${IContentDataFragmentDoc}
${IContentInfoFragmentDoc}
${LinkDataFragmentDoc}
${BlogPostPageSearchResultFragmentDoc}
${ReferenceDataFragmentDoc}`;
export const personalizedSearchContentDocument = gql`
    query personalizedSearchContent($term: String!, $topInterest: String, $locale: [String!], $withinLocale: [Locales], $types: [String!], $pageSize: Int! = 25, $start: Int! = 0, $boost: Int! = 100) {
  Content: _Page(
    where: {_or: [{_fulltext: {match: $term}}, {_fulltext: {match: $topInterest, boost: $boost}}], _metadata: {url: {base: {exist: true}}}}
    orderBy: {_ranking: SEMANTIC}
    limit: $pageSize
    skip: $start
    locale: $withinLocale
  ) {
    total
    items {
      _score
      ...SearchData
      _metadata {
        published
      }
      preview: _fulltext(
        highlight: {enabled: true, startToken: "<span>", endToken: "</span>"}
      )
      ...BlogPostPageSearchResult
    }
    facets {
      _metadata {
        types(filters: $types) {
          name
          count
        }
        locale(filters: $locale) {
          name
          count
        }
      }
    }
  }
}
    ${SearchDataFragmentDoc}
${IContentDataFragmentDoc}
${IContentInfoFragmentDoc}
${LinkDataFragmentDoc}
${BlogPostPageSearchResultFragmentDoc}
${ReferenceDataFragmentDoc}`;
export const getContentByIdDocument = gql`
    query getContentById($key: String!, $version: String, $locale: [Locales!], $path: String = "-", $domain: String, $changeset: String) {
  content: _Content(
    variation: {include: ALL}
    where: {_or: [{_metadata: {key: {eq: $key}, version: {eq: $version}}}, {_metadata: {url: {default: {eq: $path}, base: {eq: $domain}}, version: {eq: $version}}}], _metadata: {changeset: {eq: $changeset}}}
    locale: $locale
  ) {
    total
    items: item {
      ...IContentData
      ...BlockData
      ...PageData
      ...ArticleListElementData
      ...BlockbysuneelData
      ...ButtonBlockData
      ...CTAElementData
      ...CarouselBlockData
      ...CategoriesData
      ...ContentRecsElementData
      ...ContentTileData
      ...ContinueReadingComponentData
      ...HeadingElementData
      ...HeroBlockData
      ...ImageElementData
      ...LayoutSettingsBlockData
      ...Masthead_bannerData
      ...MegaMenuGroupBlockData
      ...MenuNavigationBlockData
      ...NextCompData
      ...OdpEmbedBlockData
      ...PageBlockData
      ...PageSeoSettingsData
      ...ParagraphElementData
      ...QuoteBlockData
      ...RichTextElementData
      ...TestComponentData
      ...TestimonialElementData
      ...TextBlockData
      ...VideoElementData
      ...testData
      ...BlankSectionData
      ...CustomSectionData
      ...BlankExperienceData
      ...BlogSectionExperienceData
      ...TestExpData
      ...BlogData
      ...BlogPostPageData
      ...HomePageData
      ...LandingPageData
      ...NextjsPageData
      ...RacesData
      ...TemplateBySuneelData
      ...examplePageData
      ...examplePage1Data
      ...examplePage3Data
    }
  }
}
    ${IContentDataFragmentDoc}
${IContentInfoFragmentDoc}
${LinkDataFragmentDoc}
${BlockDataFragmentDoc}
${PageDataFragmentDoc}
${ArticleListElementDataFragmentDoc}
${BlockbysuneelDataFragmentDoc}
${IContentListItemFragmentDoc}
${ImageMediaComponentDataFragmentDoc}
${VideoMediaComponentDataFragmentDoc}
${CTAElementPropertyDataFragmentDoc}
${ButtonBlockDataFragmentDoc}
${CTAElementDataFragmentDoc}
${CarouselBlockDataFragmentDoc}
${CategoriesDataFragmentDoc}
${ContentRecsElementDataFragmentDoc}
${ContentTileDataFragmentDoc}
${ContinueReadingComponentDataFragmentDoc}
${HeadingElementDataFragmentDoc}
${HeroBlockDataFragmentDoc}
${ReferenceDataFragmentDoc}
${ButtonBlockPropertyDataFragmentDoc}
${ImageElementDataFragmentDoc}
${LayoutSettingsBlockDataFragmentDoc}
${LinkItemDataFragmentDoc}
${Masthead_bannerDataFragmentDoc}
${MegaMenuGroupBlockDataFragmentDoc}
${MenuNavigationBlockDataFragmentDoc}
${BlogPostPageMenuBlockFragmentDoc}
${NextCompDataFragmentDoc}
${OdpEmbedBlockDataFragmentDoc}
${PageBlockDataFragmentDoc}
${PageSeoSettingsDataFragmentDoc}
${ParagraphElementDataFragmentDoc}
${QuoteBlockDataFragmentDoc}
${RichTextElementDataFragmentDoc}
${TestComponentDataFragmentDoc}
${HeroBlockPropertyDataFragmentDoc}
${TestimonialElementDataFragmentDoc}
${TextBlockDataFragmentDoc}
${VideoElementDataFragmentDoc}
${testDataFragmentDoc}
${BlankSectionDataFragmentDoc}
${CustomSectionDataFragmentDoc}
${BlankExperienceDataFragmentDoc}
${PageSeoSettingsPropertyDataFragmentDoc}
${ExperienceDataFragmentDoc}
${CompositionNodeDataFragmentDoc}
${CompositionComponentNodeDataFragmentDoc}
${ElementDataFragmentDoc}
${IElementDataFragmentDoc}
${BlogSectionExperienceDataFragmentDoc}
${TestExpDataFragmentDoc}
${BlogDataFragmentDoc}
${BlogPostPageDataFragmentDoc}
${HomePageDataFragmentDoc}
${LandingPageDataFragmentDoc}
${NextjsPageDataFragmentDoc}
${NextCompPropertyDataFragmentDoc}
${RacesDataFragmentDoc}
${TemplateBySuneelDataFragmentDoc}
${examplePageDataFragmentDoc}
${examplePage1DataFragmentDoc}
${examplePage3DataFragmentDoc}`;
export const getContentByPathDocument = gql`
    query getContentByPath($path: [String!]!, $locale: [Locales!], $siteId: String, $changeset: String = null) {
  content: _Content(
    where: {_metadata: {url: {default: {in: $path}, base: {eq: $siteId}}, changeset: {eq: $changeset}}}
    locale: $locale
  ) {
    total
    items: item {
      ...IContentData
      ...PageData
      ...BlankExperienceData
      ...BlogSectionExperienceData
      ...TestExpData
      ...BlogData
      ...BlogPostPageData
      ...HomePageData
      ...LandingPageData
      ...NextjsPageData
      ...RacesData
      ...TemplateBySuneelData
      ...examplePageData
      ...examplePage1Data
      ...examplePage3Data
    }
  }
}
    ${IContentDataFragmentDoc}
${IContentInfoFragmentDoc}
${LinkDataFragmentDoc}
${PageDataFragmentDoc}
${BlankExperienceDataFragmentDoc}
${PageSeoSettingsPropertyDataFragmentDoc}
${ReferenceDataFragmentDoc}
${ExperienceDataFragmentDoc}
${CompositionNodeDataFragmentDoc}
${CompositionComponentNodeDataFragmentDoc}
${BlockDataFragmentDoc}
${ElementDataFragmentDoc}
${IElementDataFragmentDoc}
${ArticleListElementDataFragmentDoc}
${BlockbysuneelDataFragmentDoc}
${IContentListItemFragmentDoc}
${ImageMediaComponentDataFragmentDoc}
${VideoMediaComponentDataFragmentDoc}
${CTAElementPropertyDataFragmentDoc}
${ButtonBlockDataFragmentDoc}
${CTAElementDataFragmentDoc}
${CarouselBlockDataFragmentDoc}
${CategoriesDataFragmentDoc}
${ContentRecsElementDataFragmentDoc}
${ContentTileDataFragmentDoc}
${ContinueReadingComponentDataFragmentDoc}
${HeadingElementDataFragmentDoc}
${HeroBlockDataFragmentDoc}
${ButtonBlockPropertyDataFragmentDoc}
${ImageElementDataFragmentDoc}
${LayoutSettingsBlockDataFragmentDoc}
${LinkItemDataFragmentDoc}
${Masthead_bannerDataFragmentDoc}
${MegaMenuGroupBlockDataFragmentDoc}
${MenuNavigationBlockDataFragmentDoc}
${BlogPostPageMenuBlockFragmentDoc}
${NextCompDataFragmentDoc}
${OdpEmbedBlockDataFragmentDoc}
${PageBlockDataFragmentDoc}
${PageSeoSettingsDataFragmentDoc}
${ParagraphElementDataFragmentDoc}
${QuoteBlockDataFragmentDoc}
${RichTextElementDataFragmentDoc}
${TestComponentDataFragmentDoc}
${HeroBlockPropertyDataFragmentDoc}
${TestimonialElementDataFragmentDoc}
${TextBlockDataFragmentDoc}
${VideoElementDataFragmentDoc}
${testDataFragmentDoc}
${BlankSectionDataFragmentDoc}
${CustomSectionDataFragmentDoc}
${BlogSectionExperienceDataFragmentDoc}
${TestExpDataFragmentDoc}
${BlogDataFragmentDoc}
${BlogPostPageDataFragmentDoc}
${HomePageDataFragmentDoc}
${LandingPageDataFragmentDoc}
${NextjsPageDataFragmentDoc}
${NextCompPropertyDataFragmentDoc}
${RacesDataFragmentDoc}
${TemplateBySuneelDataFragmentDoc}
${examplePageDataFragmentDoc}
${examplePage1DataFragmentDoc}
${examplePage3DataFragmentDoc}`;
export const getContentTypeDocument = gql`
    query getContentType($key: String!, $version: String, $locale: [Locales!], $path: String = "-", $domain: String) {
  content: _Content(
    variation: {include: ALL}
    where: {_or: [{_metadata: {key: {eq: $key}, version: {eq: $version}}}, {_metadata: {url: {hierarchical: {eq: $path}, base: {eq: $domain}}, version: {eq: $version}}}]}
    locale: $locale
  ) {
    total
    items: item {
      _metadata {
        types
      }
    }
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string, variables?: any) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType, _variables) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    getArticleListElementItems(variables: Schema.getArticleListElementItemsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<Schema.getArticleListElementItemsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Schema.getArticleListElementItemsQuery>({ document: getArticleListElementItemsDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'getArticleListElementItems', 'query', variables);
    },
    getDefaultArticleList(variables?: Schema.getDefaultArticleListQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<Schema.getDefaultArticleListQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Schema.getDefaultArticleListQuery>({ document: getDefaultArticleListDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'getDefaultArticleList', 'query', variables);
    },
    getSharedContinueReading(variables?: Schema.getSharedContinueReadingQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<Schema.getSharedContinueReadingQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Schema.getSharedContinueReadingQuery>({ document: getSharedContinueReadingDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'getSharedContinueReading', 'query', variables);
    },
    getBlankExperienceMetaData(variables: Schema.getBlankExperienceMetaDataQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<Schema.getBlankExperienceMetaDataQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Schema.getBlankExperienceMetaDataQuery>({ document: getBlankExperienceMetaDataDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'getBlankExperienceMetaData', 'query', variables);
    },
    getChildBlogPosts(variables: Schema.getChildBlogPostsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<Schema.getChildBlogPostsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Schema.getChildBlogPostsQuery>({ document: getChildBlogPostsDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'getChildBlogPosts', 'query', variables);
    },
    getBlogSectionExperienceMetaData(variables: Schema.getBlogSectionExperienceMetaDataQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<Schema.getBlogSectionExperienceMetaDataQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Schema.getBlogSectionExperienceMetaDataQuery>({ document: getBlogSectionExperienceMetaDataDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'getBlogSectionExperienceMetaData', 'query', variables);
    },
    getBlogPostPageMetaData(variables: Schema.getBlogPostPageMetaDataQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<Schema.getBlogPostPageMetaDataQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Schema.getBlogPostPageMetaDataQuery>({ document: getBlogPostPageMetaDataDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'getBlogPostPageMetaData', 'query', variables);
    },
    getLandingPageMetaData(variables: Schema.getLandingPageMetaDataQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<Schema.getLandingPageMetaDataQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Schema.getLandingPageMetaDataQuery>({ document: getLandingPageMetaDataDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'getLandingPageMetaData', 'query', variables);
    },
    getFooterData(variables?: Schema.getFooterDataQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<Schema.getFooterDataQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Schema.getFooterDataQuery>({ document: getFooterDataDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'getFooterData', 'query', variables);
    },
    getHeaderData(variables?: Schema.getHeaderDataQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<Schema.getHeaderDataQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Schema.getHeaderDataQuery>({ document: getHeaderDataDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'getHeaderData', 'query', variables);
    },
    getLocales(variables?: Schema.getLocalesQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<Schema.getLocalesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Schema.getLocalesQuery>({ document: getLocalesDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'getLocales', 'query', variables);
    },
    getArticles(variables?: Schema.getArticlesQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<Schema.getArticlesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Schema.getArticlesQuery>({ document: getArticlesDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'getArticles', 'query', variables);
    },
    searchContent(variables: Schema.searchContentQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<Schema.searchContentQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Schema.searchContentQuery>({ document: searchContentDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'searchContent', 'query', variables);
    },
    personalizedSearchContent(variables: Schema.personalizedSearchContentQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<Schema.personalizedSearchContentQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Schema.personalizedSearchContentQuery>({ document: personalizedSearchContentDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'personalizedSearchContent', 'query', variables);
    },
    getContentById(variables: Schema.getContentByIdQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<Schema.getContentByIdQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Schema.getContentByIdQuery>({ document: getContentByIdDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'getContentById', 'query', variables);
    },
    getContentByPath(variables: Schema.getContentByPathQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<Schema.getContentByPathQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Schema.getContentByPathQuery>({ document: getContentByPathDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'getContentByPath', 'query', variables);
    },
    getContentType(variables: Schema.getContentTypeQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<Schema.getContentTypeQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Schema.getContentTypeQuery>({ document: getContentTypeDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'getContentType', 'query', variables);
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;