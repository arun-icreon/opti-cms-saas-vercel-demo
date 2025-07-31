import { type OptimizelyNextPage as CmsComponent } from "@remkoj/optimizely-cms-nextjs";
import { examplePage1DataFragmentDoc, type examplePage1DataFragment } from "@/gql/graphql";
import { getSdk } from "@/gql"

/**
 * Example page1
 * 
 */
export const examplePage1Page : CmsComponent<examplePage1DataFragment> = ({ data, children }) => {
    const componentName = 'Example page1'
    const componentInfo = ''
    return <div className="mx-auto px-2 container">
        <div className="font-bold italic">{ componentName }</div>
        <div>{ componentInfo }</div>
        { Object.getOwnPropertyNames(data).length > 0 && <pre className="w-full overflow-x-hidden font-mono text-sm bg-slate-200 p-2 rounded-sm border border-solid border-slate-900 text-slate-900">{ JSON.stringify(data, undefined, 4) }</pre> }
        { children && <div className="flex flex-col mt-4 mx-4">{ children }</div>}
    </div>
}
examplePage1Page.displayName = "Example page1 (Page/examplePage1)"
examplePage1Page.getDataFragment = () => ['examplePage1Data', examplePage1DataFragmentDoc]
examplePage1Page.getMetaData = async (contentLink, locale, client) => {
    const sdk = getSdk(client);
    // Add your metadata logic here
    return {}
}

export default examplePage1Page