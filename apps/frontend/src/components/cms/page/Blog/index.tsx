import { type OptimizelyNextPage as CmsComponent } from "@remkoj/optimizely-cms-nextjs";
import { BlogDataFragmentDoc, type BlogDataFragment } from "@/gql/graphql";
import { getSdk } from "@/gql"

/**
 * Blog
 * Blog content
 */
export const BlogPage : CmsComponent<BlogDataFragment> = ({ data, children }) => {
    const componentName = 'Blog'
    const componentInfo = 'Blog content'
    return <div className="mx-auto px-2 container">
        <div className="font-bold italic">{ componentName }</div>
        <div>{ componentInfo }</div>
        { Object.getOwnPropertyNames(data).length > 0 && <pre className="w-full overflow-x-hidden font-mono text-sm bg-slate-200 p-2 rounded-sm border border-solid border-slate-900 text-slate-900">{ JSON.stringify(data, undefined, 4) }</pre> }
        { children && <div className="flex flex-col mt-4 mx-4">{ children }</div>}
    </div>
}
BlogPage.displayName = "Blog (Page/Blog)"
BlogPage.getDataFragment = () => ['BlogData', BlogDataFragmentDoc]
BlogPage.getMetaData = async (contentLink, locale, client) => {
    const sdk = getSdk(client);
    // Add your metadata logic here
    return {}
}

export default BlogPage