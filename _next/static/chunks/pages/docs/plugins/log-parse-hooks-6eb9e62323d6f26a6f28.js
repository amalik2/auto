_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[80],{"0oBi":function(e,t,a){"use strict";var c=a("63Ad");Object.defineProperty(t,"__esModule",{value:!0}),t.isDarkMode=function(){if(window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches)return!0;return!1},t.useDarkMode=function(){const[e,t]=o.default.useState(!1);return(0,n.default)((()=>{const e=window.matchMedia("(prefers-color-scheme: dark)"),a=()=>{t(window.matchMedia("(prefers-color-scheme: dark)").matches)};return a(),e.addListener(a),()=>{e.removeListener(a)}}),[]),e};var o=c(a("mXGw")),n=c(a("YO29"))},"63Ad":function(e,t){e.exports=function(e){return e&&e.__esModule?e:{default:e}}},"6f/q":function(e,t,a){"use strict";var c=a("63Ad");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=c(a("mXGw")),n=c(a("pWCa")),r=a("I08b"),l=a("GDok"),d=a("nZpd"),m=a("AFBu"),s=a("0oBi");var p=({children:e,...t})=>{const a=o.default.useState(!1);o.default.useEffect((()=>{if("undefined"!==typeof document)return document.addEventListener("keydown",e),()=>{document.removeEventListener("keydown",e)};function e(e){"/"===e.key&&(document.getElementById("search").focus(),e.preventDefault())}}),[]);const c=(0,s.useDarkMode)();return o.default.createElement(d.MobileMenuContext.Provider,{value:t.menuState||a},o.default.createElement(n.default,null,o.default.createElement("link",{rel:"shortcut icon",media:"(prefers-color-scheme:dark)",href:(0,m.formatPath)(c?"favicon-dark.png":"favicon.png")})),o.default.createElement(r.SkipNavLink,null),o.default.createElement("div",{id:"ignite",className:"min-h-screen flex flex-col bg-white dark:bg-gray-1000"},o.default.createElement(l.NavBar,{sections:JSON.parse('["docs","blog"]'),hasHomePage:"true"}),e))};t.default=p},AFBu:function(e,t,a){"use strict";var c=a("63Ad");Object.defineProperty(t,"__esModule",{value:!0}),t.formatPath=function(e){return o.default.join("/auto",`/${e.replace(/\.mdx$/,"")}`)},t.postFixHTML=function(e){return e;if(e.startsWith("#"))return e;if(o.default.basename(e).includes("#"))return e.replace("#",".html#");return`${e}.html`};var o=c(a("O2/E"))},C3pV:function(e,t,a){"use strict";(function(e){var c=a("63Ad");Object.defineProperty(t,"__esModule",{value:!0}),t.Sidebar=t.SidebarActiveItem=void 0;var o=c(a("mXGw")),n=c(a("5dyF")),r=c(a("pWCa")),l=c(a("O2/E")),d=c(a("PDtE")),m=a("/FXl"),s=a("dAGg"),p=a("nZpd"),i=a("AFBu");const b=o.default.createContext({pathname:"",sidebarFileLocation:""});t.SidebarActiveItem=b;const u=({href:e,children:t})=>{const a=o.default.useContext(b),{SidebarLink:c}=(0,m.useMDXComponents)(),r=l.default.join(a.sidebarFileLocation,e);let d=e;return a.sidebarFileLocation&&(d=r,d.endsWith("/index")&&(d=d.replace("/index","")),d.endsWith("/")&&(d=d.slice(0,-1))),o.default.createElement(n.default,{passHref:!0,href:(0,i.postFixHTML)(d)},o.default.createElement(c,{isActive:a.pathname.replace("/index","")===(0,i.formatPath)(d)},t))};t.Sidebar=({links:t,folder:c})=>{const[n]=o.default.useContext(p.MobileMenuContext),O=`/${c}`,j=(e=>{try{return a("f+ue")("./pages"+e+"/_sidebar.mdx").default}catch(t){try{return a("NDOZ")("./pages"+e+"/_sidebar.js").default}catch(t){}}})(O),x=(t=>{const a=(0,s.useRouter)(),c="phase-production-build"!==e.env.NEXT_PHASE&&a.pathname.includes("/auto")?l.default.relative("/auto",a.pathname):l.default.relative("/",a.pathname);let o=t.find((e=>e.__resourcePath.replace(".mdx","")===c));return o||(o=t.find((e=>{const t=e.__resourcePath.replace(".mdx","");return t.endsWith("index")&&a.pathname.includes(t.replace("/index",""))}))),{title:o.title||"auto",pathname:(0,i.formatPath)(o.__resourcePath)}})(t),{SidebarItemWrapper:E,SidebarLink:f,SidebarTitle:N,SidebarDivider:g,SidebarList:y,Sidebar:h,...v}=(0,m.useMDXComponents)();return o.default.createElement(b.Provider,{value:{...x,sidebarFileLocation:j?O:""}},o.default.createElement(m.MDXProvider,{components:{...v,li:E,ul:y,a:u,p:N,hr:g}},o.default.createElement(r.default,null,o.default.createElement("title",null,x.title.replace(/\\`/g,"`"))),o.default.createElement(h,{className:(0,d.default)(!n&&"hidden","lg:block")},j?o.default.createElement(j,null):o.default.createElement(y,null,t.map((e=>o.default.createElement(E,{key:e.__resourcePath},o.default.createElement(u,{href:e.__resourcePath},e.title))))))))}}).call(this,a("5IsQ"))},D8SK:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/plugins/log-parse-hooks",function(){return a("lnlL")}])},GDok:function(e,t,a){"use strict";var c=a("63Ad");Object.defineProperty(t,"__esModule",{value:!0}),t.NavBar=void 0;var o=c(a("8VmE")),n=c(a("mXGw")),r=c(a("5dyF")),l=a("V5Fo"),d=a("/FXl"),m=c(a("PDtE")),s=a("nZpd"),p=a("AFBu");const i=({className:e,...t})=>n.default.createElement("svg",(0,o.default)({className:(0,m.default)("fill-current w-5 h-5",e),xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},t),n.default.createElement("path",{d:"M10 0a10 10 0 0 0-3.16 19.49c.5.1.68-.22.68-.48l-.01-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.1.39-1.99 1.03-2.69a3.6 3.6 0 0 1 .1-2.64s.84-.27 2.75 1.02a9.58 9.58 0 0 1 5 0c1.91-1.3 2.75-1.02 2.75-1.02.55 1.37.2 2.4.1 2.64.64.7 1.03 1.6 1.03 2.69 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85l-.01 2.75c0 .26.18.58.69.48A10 10 0 0 0 10 0"})),b=()=>{const{SearchInput:e}=(0,d.useMDXComponents)();return n.default.createElement("div",{className:"h-full flex items-center w-full lg:w-auto lg:flex-1 lg:mr-4 lg:pr-4"},n.default.createElement(e,null))};t.NavBar=({sections:e,hasHomePage:t})=>{const[a,c]=n.default.useContext(s.MobileMenuContext),{Logo:o,NavBarWrapper:m,NavBar:u,NavBarItem:O,MobileMenuButton:j}=(0,d.useMDXComponents)();return n.default.createElement(n.default.Fragment,null,n.default.createElement(m,null,n.default.createElement(u,null,t?n.default.createElement(r.default,{passHref:!0,href:(0,p.postFixHTML)("/index")},n.default.createElement(o,null)):n.default.createElement(o,null),n.default.createElement("div",{className:"w-full h-full flex items-center lg:flex flex-1 lg:pl-12 lg:pr-6 lg:mx-auto"},n.default.createElement(b,null),n.default.createElement(j,{open:a,setOpen:c,className:"lg:hidden"}),n.default.createElement("div",{className:"hidden lg:flex h-full"},e.map((e=>n.default.createElement(r.default,{passHref:!0,key:e,href:(0,p.postFixHTML)(`/${e}`)},n.default.createElement(O,null,(0,l.titleCase)(e))))),n.default.createElement(O,{href:"https://github.com/intuit/auto",target:"_blank","aria-label":"Open on GitHub"},n.default.createElement(i,null)))))),a&&n.default.createElement("div",{className:"lg:hidden"},e.map((e=>n.default.createElement(r.default,{passHref:!0,key:e,href:(0,p.postFixHTML)(`/${e}`)},n.default.createElement(O,null,(0,l.titleCase)(e))))),n.default.createElement(O,{href:"https://github.com/intuit/auto",target:"_blank"},n.default.createElement(i,{className:"mr-2"}),"Open on GitHub")))}},TJl4:function(e,t,a){"use strict";var c=a("63Ad");Object.defineProperty(t,"__esModule",{value:!0}),t.OpenGraphTags=void 0;var o=c(a("mXGw")),n=a("dAGg"),r=c(a("ghLh")),l=c(a("pWCa"));t.OpenGraphTags=({title:e,description:t,image:a})=>{const c=(0,n.useRouter)(),d=(0,r.default)("https://intuit.github.io/auto",c.pathname);return o.default.createElement(l.default,null,o.default.createElement("title",null,e),t&&o.default.createElement("meta",{name:"description",content:t}),o.default.createElement("meta",{property:"og:url",content:d}),o.default.createElement("meta",{property:"og:type",content:"website"}),o.default.createElement("meta",{property:"og:title",content:e}),t&&o.default.createElement("meta",{name:"og:description",content:t}),a&&o.default.createElement("meta",{name:"og:image",content:a}),d&&o.default.createElement("meta",{property:"twitter:domain",content:new URL(d).hostname}),o.default.createElement("meta",{property:"twitter:url",content:d}),o.default.createElement("meta",{name:"twitter:title",content:e}),t&&o.default.createElement("meta",{name:"twitter:description",content:t}),a&&o.default.createElement("meta",{name:"twitter:image",content:a}))}},lnlL:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return s})),a.d(t,"default",(function(){return b}));var c=a("Fcif"),o=a("dV/x"),n=a("mXGw"),r=a.n(n),l=a("/FXl"),d=a("pu0P"),m=a.n(d),s=(r.a.createElement,{title:"Log Parser Hooks",layout:"docs",description:void 0,date:null,author:"",email:"",__resourcePath:"docs/plugins/log-parse-hooks.mdx",__scans:{}}),p={frontMatter:s},i=m.a;function b(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(l.mdx)(i,Object(c.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(l.mdx)("p",null,"The core of ",Object(l.mdx)("inlineCode",{parentName:"p"},"auto")," is built around parsing information from the output of ",Object(l.mdx)("inlineCode",{parentName:"p"},"git log")," in your repository.\nWe take that output and iterate over it to extract information from the commits.\nThe construct that does that work is the ",Object(l.mdx)("inlineCode",{parentName:"p"},"LogParse")," class."),Object(l.mdx)("p",null,"The ",Object(l.mdx)("inlineCode",{parentName:"p"},"LogParse")," class is involved in any command that interacts with the git log.\nYou can use its hooks to attach information to the commit object (",Object(l.mdx)("a",Object(c.a)({parentName:"p"},{href:"#parsecommit"}),"parseCommit"),") or make ",Object(l.mdx)("inlineCode",{parentName:"p"},"auto")," ignore commits entirely (",Object(l.mdx)("a",Object(c.a)({parentName:"p"},{href:"#omitcommit"}),"omitCommit"),")."),Object(l.mdx)("nav",{className:"toc"},Object(l.mdx)("ol",Object(c.a)({parentName:"nav"},{className:"toc-level toc-level-1"}),Object(l.mdx)("li",Object(c.a)({parentName:"ol"},{className:"toc-item toc-item-h2"}),Object(l.mdx)("a",Object(c.a)({parentName:"li"},{className:"toc-link toc-link-h2",href:"#oncreatelogparse"}),"onCreateLogParse")),Object(l.mdx)("li",Object(c.a)({parentName:"ol"},{className:"toc-item toc-item-h2"}),Object(l.mdx)("a",Object(c.a)({parentName:"li"},{className:"toc-link toc-link-h2",href:"#parsecommit"}),"parseCommit")),Object(l.mdx)("li",Object(c.a)({parentName:"ol"},{className:"toc-item toc-item-h2"}),Object(l.mdx)("a",Object(c.a)({parentName:"li"},{className:"toc-link toc-link-h2",href:"#omitcommit"}),"omitCommit")))),Object(l.mdx)("h2",{id:"oncreatelogparse"},Object(l.mdx)("a",Object(c.a)({parentName:"h2"},{className:'header-link no-underline text-gray-900" hover:underline',href:"#oncreatelogparse"}),"onCreateLogParse")),Object(l.mdx)("p",null,"This is where you hook into the log parser's hooks.\nSee examples below."),Object(l.mdx)("h2",{id:"parsecommit"},Object(l.mdx)("a",Object(c.a)({parentName:"h2"},{className:'header-link no-underline text-gray-900" hover:underline',href:"#parsecommit"}),"parseCommit")),Object(l.mdx)("p",null,"Parse information about a commit from a commit.\nHere is where ",Object(l.mdx)("inlineCode",{parentName:"p"},"auto")," gets the PR number from the merge commits."),Object(l.mdx)("pre",null,Object(l.mdx)("code",Object(c.a)({parentName:"pre"},{className:"language-ts syntax-light",style:{background:"#fff"}}),Object(l.mdx)("span",Object(c.a)({parentName:"code"},{style:{color:"#24292E"}}),"auto.hooks.onCreateLogParse."),Object(l.mdx)("span",Object(c.a)({parentName:"code"},{style:{color:"#6F42C1"}}),"tapPromise"),Object(l.mdx)("span",Object(c.a)({parentName:"code"},{style:{color:"#24292E"}}),"("),Object(l.mdx)("span",Object(c.a)({parentName:"code"},{style:{color:"#032F62"}}),"'Stars'"),Object(l.mdx)("span",Object(c.a)({parentName:"code"},{style:{color:"#24292E"}}),", "),Object(l.mdx)("span",Object(c.a)({parentName:"code"},{style:{color:"#E36209"}}),"logParse"),Object(l.mdx)("span",Object(c.a)({parentName:"code"},{style:{color:"#24292E"}})," "),Object(l.mdx)("span",Object(c.a)({parentName:"code"},{style:{color:"#D73A49"}}),"=>"),"\n",Object(l.mdx)("span",Object(c.a)({parentName:"code"},{style:{color:"#24292E"}}),"  logParse.hooks.parseCommit."),Object(l.mdx)("span",Object(c.a)({parentName:"code"},{style:{color:"#6F42C1"}}),"tap"),Object(l.mdx)("span",Object(c.a)({parentName:"code"},{style:{color:"#24292E"}}),"("),"\n",Object(l.mdx)("span",Object(c.a)({parentName:"code"},{style:{color:"#24292E"}}),"    "),Object(l.mdx)("span",Object(c.a)({parentName:"code"},{style:{color:"#032F62"}}),"'test'"),Object(l.mdx)("span",Object(c.a)({parentName:"code"},{style:{color:"#24292E"}}),","),"\n",Object(l.mdx)("span",Object(c.a)({parentName:"code"},{style:{color:"#24292E"}}),"    ("),Object(l.mdx)("span",Object(c.a)({parentName:"code"},{style:{color:"#E36209"}}),"commit"),Object(l.mdx)("span",Object(c.a)({parentName:"code"},{style:{color:"#24292E"}}),") "),Object(l.mdx)("span",Object(c.a)({parentName:"code"},{style:{color:"#D73A49"}}),"=>"),Object(l.mdx)("span",Object(c.a)({parentName:"code"},{style:{color:"#24292E"}})," {"),"\n",Object(l.mdx)("span",Object(c.a)({parentName:"code"},{style:{color:"#24292E"}}),"      "),Object(l.mdx)("span",Object(c.a)({parentName:"code"},{style:{color:"#D73A49"}}),"const"),Object(l.mdx)("span",Object(c.a)({parentName:"code"},{style:{color:"#24292E"}})," "),Object(l.mdx)("span",Object(c.a)({parentName:"code"},{style:{color:"#005CC5"}}),"bump"),Object(l.mdx)("span",Object(c.a)({parentName:"code"},{style:{color:"#24292E"}})," "),Object(l.mdx)("span",Object(c.a)({parentName:"code"},{style:{color:"#D73A49"}}),"="),Object(l.mdx)("span",Object(c.a)({parentName:"code"},{style:{color:"#24292E"}})," "),Object(l.mdx)("span",Object(c.a)({parentName:"code"},{style:{color:"#6F42C1"}}),"getBump"),Object(l.mdx)("span",Object(c.a)({parentName:"code"},{style:{color:"#24292E"}}),"(commit.subject, logParse.options.versionLabels);"),"\n",Object(l.mdx)("span",Object(c.a)({parentName:"code"},{style:{color:"#24292E"}}),"      commit.labels "),Object(l.mdx)("span",Object(c.a)({parentName:"code"},{style:{color:"#D73A49"}}),"="),Object(l.mdx)("span",Object(c.a)({parentName:"code"},{style:{color:"#24292E"}})," [bump]"),"\n",Object(l.mdx)("span",Object(c.a)({parentName:"code"},{style:{color:"#24292E"}}),"      "),Object(l.mdx)("span",Object(c.a)({parentName:"code"},{style:{color:"#D73A49"}}),"return"),Object(l.mdx)("span",Object(c.a)({parentName:"code"},{style:{color:"#24292E"}})," commit;"),"\n",Object(l.mdx)("span",Object(c.a)({parentName:"code"},{style:{color:"#24292E"}}),"    }"),"\n",Object(l.mdx)("span",Object(c.a)({parentName:"code"},{style:{color:"#24292E"}}),"  );"),"\n",Object(l.mdx)("span",Object(c.a)({parentName:"code"},{style:{color:"#24292E"}}),");"),"\n"),Object(l.mdx)("code",Object(c.a)({parentName:"pre"},{className:"language-ts syntax-light syntax-dark",style:{background:"#24292e"}}),Object(l.mdx)("span",Object(c.a)({parentName:"code"},{style:{color:"#E1E4E8"}}),"auto.hooks.onCreateLogParse."),Object(l.mdx)("span",Object(c.a)({parentName:"code"},{style:{color:"#B392F0"}}),"tapPromise"),Object(l.mdx)("span",Object(c.a)({parentName:"code"},{style:{color:"#E1E4E8"}}),"("),Object(l.mdx)("span",Object(c.a)({parentName:"code"},{style:{color:"#9ECBFF"}}),"'Stars'"),Object(l.mdx)("span",Object(c.a)({parentName:"code"},{style:{color:"#E1E4E8"}}),", "),Object(l.mdx)("span",Object(c.a)({parentName:"code"},{style:{color:"#FFAB70"}}),"logParse"),Object(l.mdx)("span",Object(c.a)({parentName:"code"},{style:{color:"#E1E4E8"}})," "),Object(l.mdx)("span",Object(c.a)({parentName:"code"},{style:{color:"#F97583"}}),"=>"),"\n",Object(l.mdx)("span",Object(c.a)({parentName:"code"},{style:{color:"#E1E4E8"}}),"  logParse.hooks.parseCommit."),Object(l.mdx)("span",Object(c.a)({parentName:"code"},{style:{color:"#B392F0"}}),"tap"),Object(l.mdx)("span",Object(c.a)({parentName:"code"},{style:{color:"#E1E4E8"}}),"("),"\n",Object(l.mdx)("span",Object(c.a)({parentName:"code"},{style:{color:"#E1E4E8"}}),"    "),Object(l.mdx)("span",Object(c.a)({parentName:"code"},{style:{color:"#9ECBFF"}}),"'test'"),Object(l.mdx)("span",Object(c.a)({parentName:"code"},{style:{color:"#E1E4E8"}}),","),"\n",Object(l.mdx)("span",Object(c.a)({parentName:"code"},{style:{color:"#E1E4E8"}}),"    ("),Object(l.mdx)("span",Object(c.a)({parentName:"code"},{style:{color:"#FFAB70"}}),"commit"),Object(l.mdx)("span",Object(c.a)({parentName:"code"},{style:{color:"#E1E4E8"}}),") "),Object(l.mdx)("span",Object(c.a)({parentName:"code"},{style:{color:"#F97583"}}),"=>"),Object(l.mdx)("span",Object(c.a)({parentName:"code"},{style:{color:"#E1E4E8"}})," {"),"\n",Object(l.mdx)("span",Object(c.a)({parentName:"code"},{style:{color:"#E1E4E8"}}),"      "),Object(l.mdx)("span",Object(c.a)({parentName:"code"},{style:{color:"#F97583"}}),"const"),Object(l.mdx)("span",Object(c.a)({parentName:"code"},{style:{color:"#E1E4E8"}})," "),Object(l.mdx)("span",Object(c.a)({parentName:"code"},{style:{color:"#79B8FF"}}),"bump"),Object(l.mdx)("span",Object(c.a)({parentName:"code"},{style:{color:"#E1E4E8"}})," "),Object(l.mdx)("span",Object(c.a)({parentName:"code"},{style:{color:"#F97583"}}),"="),Object(l.mdx)("span",Object(c.a)({parentName:"code"},{style:{color:"#E1E4E8"}})," "),Object(l.mdx)("span",Object(c.a)({parentName:"code"},{style:{color:"#B392F0"}}),"getBump"),Object(l.mdx)("span",Object(c.a)({parentName:"code"},{style:{color:"#E1E4E8"}}),"(commit.subject, logParse.options.versionLabels);"),"\n",Object(l.mdx)("span",Object(c.a)({parentName:"code"},{style:{color:"#E1E4E8"}}),"      commit.labels "),Object(l.mdx)("span",Object(c.a)({parentName:"code"},{style:{color:"#F97583"}}),"="),Object(l.mdx)("span",Object(c.a)({parentName:"code"},{style:{color:"#E1E4E8"}})," [bump]"),"\n",Object(l.mdx)("span",Object(c.a)({parentName:"code"},{style:{color:"#E1E4E8"}}),"      "),Object(l.mdx)("span",Object(c.a)({parentName:"code"},{style:{color:"#F97583"}}),"return"),Object(l.mdx)("span",Object(c.a)({parentName:"code"},{style:{color:"#E1E4E8"}})," commit;"),"\n",Object(l.mdx)("span",Object(c.a)({parentName:"code"},{style:{color:"#E1E4E8"}}),"    }"),"\n",Object(l.mdx)("span",Object(c.a)({parentName:"code"},{style:{color:"#E1E4E8"}}),"  );"),"\n",Object(l.mdx)("span",Object(c.a)({parentName:"code"},{style:{color:"#E1E4E8"}}),");"),"\n")),Object(l.mdx)("p",null,Object(l.mdx)("em",{parentName:"p"},"Other examples:")),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"In core:",Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},"Find PR number from commits message"),Object(l.mdx)("li",{parentName:"ul"},"Attaches labels from pull requests"),Object(l.mdx)("li",{parentName:"ul"},"Attaches GitHub author information"))),Object(l.mdx)("li",{parentName:"ul"},Object(l.mdx)("a",Object(c.a)({parentName:"li"},{href:"../generated/conventional-commits"}),"conventional-commits")," - Parse change types from commit messages")),Object(l.mdx)("h2",{id:"omitcommit"},Object(l.mdx)("a",Object(c.a)({parentName:"h2"},{className:'header-link no-underline text-gray-900" hover:underline',href:"#omitcommit"}),"omitCommit")),Object(l.mdx)("p",null,"Choose to omit certain commits.\nIf you return true the commit will be omitted.\nBe sure to return nothing if you don't want the commit omitted."),Object(l.mdx)("pre",null,Object(l.mdx)("code",Object(c.a)({parentName:"pre"},{className:"language-ts syntax-light",style:{background:"#fff"}}),Object(l.mdx)("span",Object(c.a)({parentName:"code"},{style:{color:"#24292E"}}),"auto.hooks.onCreateLogParse."),Object(l.mdx)("span",Object(c.a)({parentName:"code"},{style:{color:"#6F42C1"}}),"tapPromise"),Object(l.mdx)("span",Object(c.a)({parentName:"code"},{style:{color:"#24292E"}}),"("),Object(l.mdx)("span",Object(c.a)({parentName:"code"},{style:{color:"#032F62"}}),"'Stars'"),Object(l.mdx)("span",Object(c.a)({parentName:"code"},{style:{color:"#24292E"}}),", "),Object(l.mdx)("span",Object(c.a)({parentName:"code"},{style:{color:"#E36209"}}),"changelog"),Object(l.mdx)("span",Object(c.a)({parentName:"code"},{style:{color:"#24292E"}})," "),Object(l.mdx)("span",Object(c.a)({parentName:"code"},{style:{color:"#D73A49"}}),"=>"),"\n",Object(l.mdx)("span",Object(c.a)({parentName:"code"},{style:{color:"#24292E"}}),"  changelog.hooks.omitCommit."),Object(l.mdx)("span",Object(c.a)({parentName:"code"},{style:{color:"#6F42C1"}}),"tap"),Object(l.mdx)("span",Object(c.a)({parentName:"code"},{style:{color:"#24292E"}}),"("),"\n",Object(l.mdx)("span",Object(c.a)({parentName:"code"},{style:{color:"#24292E"}}),"    "),Object(l.mdx)("span",Object(c.a)({parentName:"code"},{style:{color:"#032F62"}}),"'test'"),Object(l.mdx)("span",Object(c.a)({parentName:"code"},{style:{color:"#24292E"}}),","),"\n",Object(l.mdx)("span",Object(c.a)({parentName:"code"},{style:{color:"#24292E"}}),"    ("),Object(l.mdx)("span",Object(c.a)({parentName:"code"},{style:{color:"#E36209"}}),"commit"),Object(l.mdx)("span",Object(c.a)({parentName:"code"},{style:{color:"#24292E"}}),") "),Object(l.mdx)("span",Object(c.a)({parentName:"code"},{style:{color:"#D73A49"}}),"=>"),Object(l.mdx)("span",Object(c.a)({parentName:"code"},{style:{color:"#24292E"}})," {"),"\n",Object(l.mdx)("span",Object(c.a)({parentName:"code"},{style:{color:"#24292E"}}),"      "),Object(l.mdx)("span",Object(c.a)({parentName:"code"},{style:{color:"#D73A49"}}),"if"),Object(l.mdx)("span",Object(c.a)({parentName:"code"},{style:{color:"#24292E"}})," ("),Object(l.mdx)("span",Object(c.a)({parentName:"code"},{style:{color:"#6F42C1"}}),"someTest"),Object(l.mdx)("span",Object(c.a)({parentName:"code"},{style:{color:"#24292E"}}),"(commit.subject)) {"),"\n",Object(l.mdx)("span",Object(c.a)({parentName:"code"},{style:{color:"#24292E"}}),"        "),Object(l.mdx)("span",Object(c.a)({parentName:"code"},{style:{color:"#D73A49"}}),"return"),Object(l.mdx)("span",Object(c.a)({parentName:"code"},{style:{color:"#24292E"}})," "),Object(l.mdx)("span",Object(c.a)({parentName:"code"},{style:{color:"#005CC5"}}),"true"),Object(l.mdx)("span",Object(c.a)({parentName:"code"},{style:{color:"#24292E"}}),";"),"\n",Object(l.mdx)("span",Object(c.a)({parentName:"code"},{style:{color:"#24292E"}}),"      }"),"\n",Object(l.mdx)("span",Object(c.a)({parentName:"code"},{style:{color:"#24292E"}}),"    }"),"\n",Object(l.mdx)("span",Object(c.a)({parentName:"code"},{style:{color:"#24292E"}}),"  );"),"\n",Object(l.mdx)("span",Object(c.a)({parentName:"code"},{style:{color:"#24292E"}}),");"),"\n"),Object(l.mdx)("code",Object(c.a)({parentName:"pre"},{className:"language-ts syntax-light syntax-dark",style:{background:"#24292e"}}),Object(l.mdx)("span",Object(c.a)({parentName:"code"},{style:{color:"#E1E4E8"}}),"auto.hooks.onCreateLogParse."),Object(l.mdx)("span",Object(c.a)({parentName:"code"},{style:{color:"#B392F0"}}),"tapPromise"),Object(l.mdx)("span",Object(c.a)({parentName:"code"},{style:{color:"#E1E4E8"}}),"("),Object(l.mdx)("span",Object(c.a)({parentName:"code"},{style:{color:"#9ECBFF"}}),"'Stars'"),Object(l.mdx)("span",Object(c.a)({parentName:"code"},{style:{color:"#E1E4E8"}}),", "),Object(l.mdx)("span",Object(c.a)({parentName:"code"},{style:{color:"#FFAB70"}}),"changelog"),Object(l.mdx)("span",Object(c.a)({parentName:"code"},{style:{color:"#E1E4E8"}})," "),Object(l.mdx)("span",Object(c.a)({parentName:"code"},{style:{color:"#F97583"}}),"=>"),"\n",Object(l.mdx)("span",Object(c.a)({parentName:"code"},{style:{color:"#E1E4E8"}}),"  changelog.hooks.omitCommit."),Object(l.mdx)("span",Object(c.a)({parentName:"code"},{style:{color:"#B392F0"}}),"tap"),Object(l.mdx)("span",Object(c.a)({parentName:"code"},{style:{color:"#E1E4E8"}}),"("),"\n",Object(l.mdx)("span",Object(c.a)({parentName:"code"},{style:{color:"#E1E4E8"}}),"    "),Object(l.mdx)("span",Object(c.a)({parentName:"code"},{style:{color:"#9ECBFF"}}),"'test'"),Object(l.mdx)("span",Object(c.a)({parentName:"code"},{style:{color:"#E1E4E8"}}),","),"\n",Object(l.mdx)("span",Object(c.a)({parentName:"code"},{style:{color:"#E1E4E8"}}),"    ("),Object(l.mdx)("span",Object(c.a)({parentName:"code"},{style:{color:"#FFAB70"}}),"commit"),Object(l.mdx)("span",Object(c.a)({parentName:"code"},{style:{color:"#E1E4E8"}}),") "),Object(l.mdx)("span",Object(c.a)({parentName:"code"},{style:{color:"#F97583"}}),"=>"),Object(l.mdx)("span",Object(c.a)({parentName:"code"},{style:{color:"#E1E4E8"}})," {"),"\n",Object(l.mdx)("span",Object(c.a)({parentName:"code"},{style:{color:"#E1E4E8"}}),"      "),Object(l.mdx)("span",Object(c.a)({parentName:"code"},{style:{color:"#F97583"}}),"if"),Object(l.mdx)("span",Object(c.a)({parentName:"code"},{style:{color:"#E1E4E8"}})," ("),Object(l.mdx)("span",Object(c.a)({parentName:"code"},{style:{color:"#B392F0"}}),"someTest"),Object(l.mdx)("span",Object(c.a)({parentName:"code"},{style:{color:"#E1E4E8"}}),"(commit.subject)) {"),"\n",Object(l.mdx)("span",Object(c.a)({parentName:"code"},{style:{color:"#E1E4E8"}}),"        "),Object(l.mdx)("span",Object(c.a)({parentName:"code"},{style:{color:"#F97583"}}),"return"),Object(l.mdx)("span",Object(c.a)({parentName:"code"},{style:{color:"#E1E4E8"}})," "),Object(l.mdx)("span",Object(c.a)({parentName:"code"},{style:{color:"#79B8FF"}}),"true"),Object(l.mdx)("span",Object(c.a)({parentName:"code"},{style:{color:"#E1E4E8"}}),";"),"\n",Object(l.mdx)("span",Object(c.a)({parentName:"code"},{style:{color:"#E1E4E8"}}),"      }"),"\n",Object(l.mdx)("span",Object(c.a)({parentName:"code"},{style:{color:"#E1E4E8"}}),"    }"),"\n",Object(l.mdx)("span",Object(c.a)({parentName:"code"},{style:{color:"#E1E4E8"}}),"  );"),"\n",Object(l.mdx)("span",Object(c.a)({parentName:"code"},{style:{color:"#E1E4E8"}}),");"),"\n")),Object(l.mdx)("p",null,Object(l.mdx)("em",{parentName:"p"},"Other examples:")),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},Object(l.mdx)("a",Object(c.a)({parentName:"li"},{href:"../generated/gradle"}),"gradle")," - Omit commits from the Gradle Release plugin"),Object(l.mdx)("li",{parentName:"ul"},Object(l.mdx)("a",Object(c.a)({parentName:"li"},{href:"../generated/maven"}),"maven")," - Omit commits from the Maven Release plugin"),Object(l.mdx)("li",{parentName:"ul"},Object(l.mdx)("a",Object(c.a)({parentName:"li"},{href:"../generated/omit-commit"}),"omit-commit")," - Omit commits from authors, labels, and more")))}b.isMDXComponent=!0},nZpd:function(e,t,a){"use strict";var c=a("63Ad");Object.defineProperty(t,"__esModule",{value:!0}),t.MobileMenuContext=void 0;const o=c(a("mXGw")).default.createContext([!1,()=>{}]);t.MobileMenuContext=o},pu0P:function(e,t,a){"use strict";var c=a("63Ad");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=c(a("mXGw")),n=c(a("O2/E")),r=a("/FXl"),l=c(a("PDtE")),d=a("I08b"),m=a("C3pV"),s=c(a("6f/q")),p=c(a("x3GE")),i=a("TJl4");const b=/([^`]*)`([^`]*)`(.*)/m;var u=({children:e,frontMatter:t})=>{const[a,c]=o.default.useState(!1),u=(0,r.useMDXComponents)(),O=t.__resourcePath.split("/")[0],j=(0,p.default)(),x=JSON.parse('["index.mdx","blog/both-worlds.mdx","blog/npm-canary-scope.mdx","blog/pr-in-progress.mdx","blog/using-shipit.mdx","blog/v8.mdx","blog/why.mdx","docs/_sidebar.mdx","docs/index.mdx","docs/build-platforms/circleci.mdx","docs/build-platforms/github-actions.mdx","docs/build-platforms/jenkins.mdx","docs/build-platforms/travis.mdx","docs/configuration/autorc.mdx","docs/configuration/non-npm.mdx","docs/configuration/plugins.mdx","docs/configuration/troubleshooting.mdx","docs/generated/all-contributors.mdx","docs/generated/brew.mdx","docs/generated/canary.mdx","docs/generated/changelog.mdx","docs/generated/chrome.mdx","docs/generated/cocoapods.mdx","docs/generated/comment.mdx","docs/generated/conventional-commits.mdx","docs/generated/crates.mdx","docs/generated/create-labels.mdx","docs/generated/defaultLabelsRenderer.mdx","docs/generated/docker.mdx","docs/generated/exec.mdx","docs/generated/first-time-contributor.mdx","docs/generated/gem.mdx","docs/generated/gh-pages.mdx","docs/generated/git-tag.mdx","docs/generated/gradle.mdx","docs/generated/info.mdx","docs/generated/init.mdx","docs/generated/jira.mdx","docs/generated/label.mdx","docs/generated/latest.mdx","docs/generated/magic-zero.mdx","docs/generated/maven.mdx","docs/generated/microsoft-teams.mdx","docs/generated/next.mdx","docs/generated/npm.mdx","docs/generated/omit-commits.mdx","docs/generated/omit-release-notes.mdx","docs/generated/pr-body-labels.mdx","docs/generated/pr-body.mdx","docs/generated/pr-check.mdx","docs/generated/pr-status.mdx","docs/generated/release.mdx","docs/generated/released.mdx","docs/generated/s3.mdx","docs/generated/sbt.mdx","docs/generated/shipit.mdx","docs/generated/slack.mdx","docs/generated/twitter.mdx","docs/generated/upload-assets.mdx","docs/generated/version.mdx","docs/generated/vscode.mdx","docs/plugins/changelog-hooks.mdx","docs/plugins/configuration-hooks.mdx","docs/plugins/hook-api-docs.mdx","docs/plugins/init-hooks.mdx","docs/plugins/log-parse-hooks.mdx","docs/plugins/release-lifecycle-hooks.mdx","docs/plugins/writing-plugins.mdx","docs/plugins/writing-publishing-plugins.mdx","docs/welcome/getting-started.mdx","docs/welcome/quick-merge.mdx"]').map((e=>n.default.relative("./",e))).filter((e=>e.startsWith(O))).map((e=>j.find((t=>t.__resourcePath===e))));return o.default.createElement(o.default.Fragment,null,o.default.createElement(i.OpenGraphTags,t),o.default.createElement(s.default,{menuState:[a,c]},o.default.createElement("div",{className:"flex-1 w-full lg:max-w-6xl mx-auto flex"},o.default.createElement(m.Sidebar,{links:x,folder:O}),o.default.createElement(d.SkipNavContent,null),o.default.createElement("main",{className:(0,l.default)("DocSearch-content","pt-8 pb-16 px-4 sm:px-6 xl:px-12 lg:mx-auto w-full","flex-1 overflow-hidden","lg:block",a&&"hidden")},t.title&&o.default.createElement(u.h1,null,function(e,t){if(!t)return;const a=[];let c=t.replace(/\\`/g,"`");for(;b.test(c);){const[,t,n,r]=c.match(b);a.push(t),a.push(o.default.createElement(e.inlineCode,null,n)),c=r}return a.push(c),o.default.createElement("div",null,a)}(u,t.title)),e))))};t.default=u},x3GE:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;let c=[];try{const e=a("jmz1");c=e.keys().map(e)}catch(n){0}var o=()=>{try{return c}catch(n){return[]}};t.default=o}},[["D8SK",0,1,2,3,4]]]);