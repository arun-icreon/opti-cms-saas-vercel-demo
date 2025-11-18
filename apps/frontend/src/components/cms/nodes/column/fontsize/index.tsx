import { extractSettings, type CmsLayoutComponent } from "@remkoj/optimizely-cms-react/rsc";

export const fontsize: CmsLayoutComponent<{}> = ({ children }) => {
    //const layout = extractSettings(layoutProps);
    return (<div className="vb:column vb:column:fontsize">{children}</div>);
}

export default fontsize;