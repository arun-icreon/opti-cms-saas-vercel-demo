import { type OptimizelyNextPage as CmsComponent } from "@remkoj/optimizely-cms-nextjs";
import { examplePage3DataFragmentDoc, type examplePage3DataFragment } from "@/gql/graphql";
import { getSdk } from "@/gql"

/**
 * Example page3
 * 
 */
export const examplePage3Page : CmsComponent<examplePage3DataFragment> = ({ data, children }) => {
    const componentName = 'Example page3'
    const componentInfo = ''
    return <div className="mx-auto px-2 container">
        <div className="font-bold italic">{ componentName }</div>
        <div>{ componentInfo }</div>
        { Object.getOwnPropertyNames(data).length > 0 && <pre className="w-full overflow-x-hidden font-mono text-sm bg-slate-200 p-2 rounded-sm border border-solid border-slate-900 text-slate-900">{ JSON.stringify(data, undefined, 4) }</pre> }
        { children && <div className="flex flex-col mt-4 mx-4">{ children }</div>}
    </div>
}
examplePage3Page.displayName = "Example page3 (Page/examplePage3)"
examplePage3Page.getDataFragment = () => ['examplePage3Data', examplePage3DataFragmentDoc]
examplePage3Page.getMetaData = async (contentLink, locale, client) => {
    const sdk = getSdk(client);
    // Add your metadata logic here
    return {}
}

export default examplePage3Page