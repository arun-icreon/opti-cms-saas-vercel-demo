import { type CmsComponent } from "@remkoj/optimizely-cms-react";
import { BlockbysuneelDataFragmentDoc, type BlockbysuneelDataFragment } from "@/gql/graphql";

/**
 * BLOCK by SUNEEL
 * this is a test block don't use it
 */
export const BlockbysuneelComponent : CmsComponent<BlockbysuneelDataFragment> = ({ data, children }) => {
    const componentName = 'BLOCK by SUNEEL'
    const componentInfo = 'this is a test block don\'t use it'
    return <div className="w-full border-y border-y-solid border-y-slate-900 py-2 mb-4">
        <div className="font-bold italic">{ componentName }</div>
        <div>{ componentInfo }</div>
        { Object.getOwnPropertyNames(data).length > 0 && <pre className="w-full overflow-x-hidden font-mono text-sm bg-slate-200 p-2 rounded-sm border border-solid border-slate-900 text-slate-900">{ JSON.stringify(data, undefined, 4) }</pre> }
        { children && <div className="mt-4 mx-4 flex flex-col">{ children }</div>}
    </div>
}
BlockbysuneelComponent.displayName = "BLOCK by SUNEEL (Component/Blockbysuneel)"
BlockbysuneelComponent.getDataFragment = () => ['BlockbysuneelData', BlockbysuneelDataFragmentDoc]

export default BlockbysuneelComponent