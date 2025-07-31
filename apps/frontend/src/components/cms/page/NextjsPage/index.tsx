import { type OptimizelyNextPage as CmsComponent } from "@remkoj/optimizely-cms-nextjs";
import { NextjsPageDataFragmentDoc, type NextjsPageDataFragment } from "@/gql/graphql";
import { getSdk } from "@/gql"

/**
 * Nextjs Page
 * This is used for nextsjs template page
 */
export const NextjsPagePage : CmsComponent<NextjsPageDataFragment> = ({ data, children }) => {
    const componentName = 'Nextjs Page'
    const componentInfo = 'This is used for nextsjs template page'
    return <div className="mx-auto px-2 container">
        <div className="font-bold italic">{ componentName }</div>
        <div>{ componentInfo }</div>
        { Object.getOwnPropertyNames(data).length > 0 && <pre className="w-full overflow-x-hidden font-mono text-sm bg-slate-200 p-2 rounded-sm border border-solid border-slate-900 text-slate-900">{ JSON.stringify(data, undefined, 4) }</pre> }
        { children && <div className="flex flex-col mt-4 mx-4">{ children }</div>}
    </div>
}
NextjsPagePage.displayName = "Nextjs Page (Page/NextjsPage)"
NextjsPagePage.getDataFragment = () => ['NextjsPageData', NextjsPageDataFragmentDoc]
NextjsPagePage.getMetaData = async (contentLink, locale, client) => {
    const sdk = getSdk(client);
    // Add your metadata logic here
    return {}
}

export default NextjsPagePage