import { type CmsComponent } from "@remkoj/optimizely-cms-react";
import { Masthead_bannerDataFragmentDoc, type Masthead_bannerDataFragment } from "@/gql/graphql";

/**
 * Masthead_banner
 * Masthead_banner
https://docs.developers.optimizely.com/content-management-system/v1.0.0-CMS-SaaS/docs/content-modeling-saas
 */
export const Masthead_bannerComponent: CmsComponent<Masthead_bannerDataFragment> = ({ data, children }) => {
    const componentName = 'Masthead_banner';
    const componentInfo = 'Masthead_banner';
    https://docs.developers.optimizely.com/content-management-system/v1.0.0-CMS-SaaS/docs/content-modeling-saas'
    return <div className="w-full border-y border-y-solid border-y-slate-900 py-2 mb-4">
        <div className="font-bold italic">{componentName}</div>
        <div>{componentInfo}</div>
        {Object.getOwnPropertyNames(data).length > 0 && <pre className="w-full overflow-x-hidden font-mono text-sm bg-slate-200 p-2 rounded-sm border border-solid border-slate-900 text-slate-900">{JSON.stringify(data, undefined, 4)}</pre>}
        {children && <div className="mt-4 mx-4 flex flex-col">{children}</div>}
    </div>
}
Masthead_bannerComponent.displayName = "Masthead_banner (Component/Masthead_banner)"
Masthead_bannerComponent.getDataFragment = () => ['Masthead_bannerData', Masthead_bannerDataFragmentDoc]

export default Masthead_bannerComponent