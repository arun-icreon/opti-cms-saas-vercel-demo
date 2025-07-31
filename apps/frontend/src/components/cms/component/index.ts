// Auto generated dictionary
// @not-modified => When this line is removed, the "force" parameter of the CLI tool is required to overwrite this file
import { type ComponentTypeDictionary } from "@remkoj/optimizely-cms-react";
import VideoElementComponent from "./VideoElement";
import TextBlockComponent from "./TextBlock";
import TestimonialElementComponent from "./TestimonialElement";
import TestComponentComponent from "./TestComponent";
import TestComponent from "./test";
import RichTextElementComponent from "./RichTextElement";
import QuoteBlockComponent from "./QuoteBlock";
import ParagraphElementComponent from "./ParagraphElement";
import PageSeoSettingsComponent from "./PageSeoSettings";
import PageBlockComponent from "./PageBlock";
import OdpEmbedBlockComponent from "./OdpEmbedBlock";
import NextCompComponent from "./NextComp";
import MenuNavigationBlockComponent from "./MenuNavigationBlock";
import MegaMenuGroupBlockMobileComponent from "./MegaMenuGroupBlock/mobile";
import MegaMenuGroupBlockComponent from "./MegaMenuGroupBlock";
import MastheadBannerComponent from "./Masthead_banner";
import LayoutSettingsBlockComponent from "./LayoutSettingsBlock";
import ImageElementComponent from "./ImageElement";
import HeroBlockComponent from "./HeroBlock";
import HeadingElementComponent from "./HeadingElement";
import CTAElementComponent from "./CTAElement";
import ContinueReadingComponentComponent from "./ContinueReadingComponent";
import ContentTileComponent from "./ContentTile";
import ContentRecsElementComponent from "./ContentRecsElement";
import CategoriesComponent from "./Categories";
import CarouselBlockComponent from "./CarouselBlock";
import ButtonBlockComponent from "./ButtonBlock";
import BlockbysuneelComponent from "./Blockbysuneel";
import ArticleListElementComponent from "./ArticleListElement";
import ArticleListElementLoader from "./ArticleListElement/loading";
import ComponentPageFactory from "./Page";

// Prefix entries - if needed
prefixDictionaryEntries(ComponentPageFactory, "Page");

// Build dictionary
export const ComponentFactory : ComponentTypeDictionary = [
    { 
        type: "VideoElement", 
        component: VideoElementComponent 
    },
    { 
        type: "TextBlock", 
        component: TextBlockComponent 
    },
    { 
        type: "TestimonialElement", 
        component: TestimonialElementComponent 
    },
    { 
        type: "TestComponent", 
        component: TestComponentComponent 
    },
    { 
        type: "test", 
        component: TestComponent 
    },
    { 
        type: "RichTextElement", 
        component: RichTextElementComponent 
    },
    { 
        type: "QuoteBlock", 
        component: QuoteBlockComponent 
    },
    { 
        type: "ParagraphElement", 
        component: ParagraphElementComponent 
    },
    { 
        type: "PageSeoSettings", 
        component: PageSeoSettingsComponent 
    },
    { 
        type: "PageBlock", 
        component: PageBlockComponent 
    },
    { 
        type: "OdpEmbedBlock", 
        component: OdpEmbedBlockComponent 
    },
    { 
        type: "NextComp", 
        component: NextCompComponent 
    },
    { 
        type: "MenuNavigationBlock", 
        component: MenuNavigationBlockComponent 
    },
    { 
        type: "MegaMenuGroupBlock/mobile", 
        component: MegaMenuGroupBlockMobileComponent 
    },
    { 
        type: "MegaMenuGroupBlock", 
        component: MegaMenuGroupBlockComponent 
    },
    { 
        type: "Masthead_banner", 
        component: MastheadBannerComponent 
    },
    { 
        type: "LayoutSettingsBlock", 
        component: LayoutSettingsBlockComponent 
    },
    { 
        type: "ImageElement", 
        component: ImageElementComponent 
    },
    { 
        type: "HeroBlock", 
        component: HeroBlockComponent 
    },
    { 
        type: "HeadingElement", 
        component: HeadingElementComponent 
    },
    { 
        type: "CTAElement", 
        component: CTAElementComponent 
    },
    { 
        type: "ContinueReadingComponent", 
        component: ContinueReadingComponentComponent 
    },
    { 
        type: "ContentTile", 
        component: ContentTileComponent 
    },
    { 
        type: "ContentRecsElement", 
        component: ContentRecsElementComponent 
    },
    { 
        type: "Categories", 
        component: CategoriesComponent 
    },
    { 
        type: "CarouselBlock", 
        component: CarouselBlockComponent 
    },
    { 
        type: "ButtonBlock", 
        component: ButtonBlockComponent 
    },
    { 
        type: "Blockbysuneel", 
        component: BlockbysuneelComponent 
    },
    { 
        type: "ArticleListElement", 
        component: ArticleListElementComponent,
        useSuspense: true,
        loader: ArticleListElementLoader
    },
    ...ComponentPageFactory
];

// Export dictionary
export default ComponentFactory;

// Helper functions
function prefixDictionaryEntries(list: ComponentTypeDictionary, prefix: string) : ComponentTypeDictionary
{
    list.forEach((component, idx, dictionary) => {
        dictionary[idx].type = typeof component.type == 'string' ? prefix + "/" + component.type : [ prefix, ...component.type ]
    });
    return list;
}
