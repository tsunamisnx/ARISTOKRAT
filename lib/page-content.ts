import source from './content.json';
const data=source as any;
export function contentFor(path:string){
 if(!path)return {home:data.home,assets:Object.fromEntries(Object.entries(data.assets).filter(([url])=>/atmosphera-(23|24|29)-min/.test(url)))};
 if(path==='menu')return {food:data.food};
 if(path==='bar-map')return {drinks:data.drinks};
 if(path==='contacts')return {home:{interior:data.home.interior}};
 return {pages:{[path]:data.pages[path]||null}};
}
