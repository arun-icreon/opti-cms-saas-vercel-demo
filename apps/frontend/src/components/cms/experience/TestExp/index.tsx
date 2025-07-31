import { type OptimizelyNextPage as CmsComponent } from "@remkoj/optimizely-cms-nextjs";
import { getFragmentData } from "@/gql/fragment-masking";
import { ExperienceDataFragmentDoc, CompositionDataFragmentDoc, TestExpDataFragmentDoc, type TestExpDataFragment } from "@/gql/graphql";
import { OptimizelyComposition, isNode, CmsEditable } from "@remkoj/optimizely-cms-react/rsc";
import { getSdk } from "@/gql"

/**
 * TestExp
 * Test Exp
 */
export const TestExpExperience : CmsComponent<TestExpDataFragment> = ({ data, ctx }) => {
    const composition = getFragmentData(CompositionDataFragmentDoc, getFragmentData(ExperienceDataFragmentDoc, data)?.composition)
    return <CmsEditable as="div" className="mx-auto px-2 container" cmsFieldName="unstructuredData" ctx={ctx}>
        { composition && isNode(composition) && <OptimizelyComposition node={composition} /> }
    </CmsEditable>
}
TestExpExperience.displayName = "TestExp (Experience/TestExp)"
TestExpExperience.getDataFragment = () => ['TestExpData', TestExpDataFragmentDoc]
TestExpExperience.getMetaData = async (contentLink, locale, client) => {
    const sdk = getSdk(client);
    // Add your metadata logic here
    return {}
}

export default TestExpExperience