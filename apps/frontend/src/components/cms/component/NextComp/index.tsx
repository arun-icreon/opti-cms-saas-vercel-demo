import { type CmsComponent } from "@remkoj/optimizely-cms-react";
import { NextCompDataFragmentDoc, type NextCompDataFragment } from "@/gql/graphql";

/**
 * Nextjs Component
 * This complement is use for nextjs setup
 */
export const NextCompComponent : CmsComponent<NextCompDataFragment> = ({ data, children }) => {
    const componentName = 'Nextjs Component'
    const componentInfo = 'This complement is use for nextjs setup'
    return <div className="w-full border-y border-y-solid border-y-slate-900 py-2 mb-4">
        <div className="font-bold italic">{ componentName }</div>
        <div>{ componentInfo }</div>
        { Object.getOwnPropertyNames(data).length > 0 && <pre className="w-full overflow-x-hidden font-mono text-sm bg-slate-200 p-2 rounded-sm border border-solid border-slate-900 text-slate-900">{ JSON.stringify(data, undefined, 4) }</pre> }
        { children && <div className="mt-4 mx-4 flex flex-col">{ children }</div>}
    </div>
}
NextCompComponent.displayName = "Nextjs Component (Component/NextComp)"
NextCompComponent.getDataFragment = () => ['NextCompData', NextCompDataFragmentDoc]

export default NextCompComponent