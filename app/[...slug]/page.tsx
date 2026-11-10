import Site from '../../components/site';
import {contentFor} from '../../lib/page-content';
import source from '../../lib/content.json';
type Props={params:Promise<{slug:string[]}>,searchParams:Promise<{page?:string}>};
export async function generateMetadata({params}:Props){const {slug}=await params;const path=slug.join('/');const page=(source.pages as Record<string,{title:string}>)[path];return {title:page?`${page.title} — АристократЪ`:'АристократЪ — гастробар в Уфе'}}
export default async function Page({params,searchParams}:Props){const {slug}=await params;const query=await searchParams;const path=slug.join('/')+(query.page?'?page='+encodeURIComponent(query.page):'');return <Site path={path} content={contentFor(path)}/>}
