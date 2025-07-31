import { type CmsComponent } from "@remkoj/optimizely-cms-react";
import { TestComponentDataFragmentDoc, type TestComponentDataFragment } from "@/gql/graphql";

/**
 * Test Component
 * Test Component
 */
export const TestComponentComponent : CmsComponent<TestComponentDataFragment> = ({ data, children }) => {
    const componentName = 'Test Component'
    const componentInfo = 'Test Component'
    return <div className="w-full border-y border-y-solid border-y-slate-900 py-2 mb-4">
        <div className="font-bold italic">{ componentName }</div>
        <div>{ componentInfo }</div>
        { Object.getOwnPropertyNames(data).length > 0 && <pre className="w-full overflow-x-hidden font-mono text-sm bg-slate-200 p-2 rounded-sm border border-solid border-slate-900 text-slate-900">{ JSON.stringify(data, undefined, 4) }</pre> }
        { children && <div className="mt-4 mx-4 flex flex-col">{ children }</div>}
    </div>
}
TestComponentComponent.displayName = "Test Component (Component/TestComponent)"
TestComponentComponent.getDataFragment = () => ['TestComponentData', TestComponentDataFragmentDoc]

export default TestComponentComponent