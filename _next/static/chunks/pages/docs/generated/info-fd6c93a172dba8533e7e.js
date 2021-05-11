_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[50],{"0oBi":function(e,t,a){"use strict";var n=a("63Ad");Object.defineProperty(t,"__esModule",{value:!0}),t.isDarkMode=function(){if(window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches)return!0;return!1},t.useDarkMode=function(){const[e,t]=d.default.useState(!1);return(0,r.default)((()=>{const e=window.matchMedia("(prefers-color-scheme: dark)"),a=()=>{t(window.matchMedia("(prefers-color-scheme: dark)").matches)};return a(),e.addListener(a),()=>{e.removeListener(a)}}),[]),e};var d=n(a("mXGw")),r=n(a("YO29"))},"4ObC":function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/generated/info",function(){return a("92E/")}])},"63Ad":function(e,t){e.exports=function(e){return e&&e.__esModule?e:{default:e}}},"6f/q":function(e,t,a){"use strict";var n=a("63Ad");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var d=n(a("mXGw")),r=n(a("pWCa")),l=a("I08b"),o=a("GDok"),c=a("nZpd"),s=a("AFBu"),u=a("0oBi");var i=({children:e,...t})=>{const a=d.default.useState(!1);d.default.useEffect((()=>{if("undefined"!==typeof document)return document.addEventListener("keydown",e),()=>{document.removeEventListener("keydown",e)};function e(e){"/"===e.key&&(document.getElementById("search").focus(),e.preventDefault())}}),[]);const n=(0,u.useDarkMode)();return d.default.createElement(c.MobileMenuContext.Provider,{value:t.menuState||a},d.default.createElement(r.default,null,d.default.createElement("link",{rel:"shortcut icon",media:"(prefers-color-scheme:dark)",href:(0,s.formatPath)(n?"favicon-dark.png":"favicon.png")})),d.default.createElement(l.SkipNavLink,null),d.default.createElement("div",{id:"ignite",className:"min-h-screen flex flex-col bg-white dark:bg-gray-1000"},d.default.createElement(o.NavBar,{sections:JSON.parse('["docs","blog"]'),hasHomePage:"true"}),e))};t.default=i},"92E/":function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return u})),a.d(t,"default",(function(){return f}));var n=a("Fcif"),d=a("dV/x"),r=a("mXGw"),l=a.n(r),o=a("/FXl"),c=a("pu0P"),s=a.n(c),u=(l.a.createElement,{title:"`info`",layout:"docs",description:void 0,date:null,author:"",email:"",__resourcePath:"docs/generated/info.mdx",__scans:{}}),i={frontMatter:u},m=s.a;function f(e){var t=e.components,a=Object(d.a)(e,["components"]);return Object(o.mdx)(m,Object(n.a)({},i,a,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"Determine the environment, check if auto is set up correctly, and list plugins."),Object(o.mdx)("h2",{id:"options"},Object(o.mdx)("a",Object(n.a)({parentName:"h2"},{className:'header-link no-underline text-gray-900" hover:underline',href:"#options"}),"Options")),Object(o.mdx)("table",null,Object(o.mdx)("thead",{parentName:"table"},Object(o.mdx)("tr",{parentName:"thead"},Object(o.mdx)("th",Object(n.a)({parentName:"tr"},{align:null}),"Flag"),Object(o.mdx)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(o.mdx)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(o.mdx)("tbody",{parentName:"table"},Object(o.mdx)("tr",{parentName:"tbody"},Object(o.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.mdx)("inlineCode",{parentName:"td"},"--list-plugins")),Object(o.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),"Boolean"),Object(o.mdx)("td",Object(n.a)({parentName:"tr"},{align:null}),"List the available plugins")))),Object(o.mdx)("h2",{id:"examples"},Object(o.mdx)("a",Object(n.a)({parentName:"h2"},{className:'header-link no-underline text-gray-900" hover:underline',href:"#examples"}),"Examples")),Object(o.mdx)("pre",null,Object(o.mdx)("code",Object(n.a)({parentName:"pre"},{className:"language-bash syntax-light",style:{background:"#fff"}}),Object(o.mdx)("span",Object(n.a)({parentName:"code"},{style:{color:"#24292E"}}),"auto info"),"\n"),Object(o.mdx)("code",Object(n.a)({parentName:"pre"},{className:"language-bash syntax-light syntax-dark",style:{background:"#24292e"}}),Object(o.mdx)("span",Object(n.a)({parentName:"code"},{style:{color:"#E1E4E8"}}),"auto info"),"\n")))}f.isMDXComponent=!0},AFBu:function(e,t,a){"use strict";var n=a("63Ad");Object.defineProperty(t,"__esModule",{value:!0}),t.formatPath=function(e){return d.default.join("/auto",`/${e.replace(/\.mdx$/,"")}`)},t.postFixHTML=function(e){return e;if(e.startsWith("#"))return e;if(d.default.basename(e).includes("#"))return e.replace("#",".html#");return`${e}.html`};var d=n(a("O2/E"))},C3pV:function(e,t,a){"use strict";(function(e){var n=a("63Ad");Object.defineProperty(t,"__esModule",{value:!0}),t.Sidebar=t.SidebarActiveItem=void 0;var d=n(a("mXGw")),r=n(a("5dyF")),l=n(a("pWCa")),o=n(a("O2/E")),c=n(a("PDtE")),s=a("/FXl"),u=a("dAGg"),i=a("nZpd"),m=a("AFBu");const f=d.default.createContext({pathname:"",sidebarFileLocation:""});t.SidebarActiveItem=f;const p=({href:e,children:t})=>{const a=d.default.useContext(f),{SidebarLink:n}=(0,s.useMDXComponents)(),l=o.default.join(a.sidebarFileLocation,e);let c=e;return a.sidebarFileLocation&&(c=l,c.endsWith("/index")&&(c=c.replace("/index","")),c.endsWith("/")&&(c=c.slice(0,-1))),d.default.createElement(r.default,{passHref:!0,href:(0,m.postFixHTML)(c)},d.default.createElement(n,{isActive:a.pathname.replace("/index","")===(0,m.formatPath)(c)},t))};t.Sidebar=({links:t,folder:n})=>{const[r]=d.default.useContext(i.MobileMenuContext),g=`/${n}`,x=(e=>{try{return a("f+ue")("./pages"+e+"/_sidebar.mdx").default}catch(t){try{return a("NDOZ")("./pages"+e+"/_sidebar.js").default}catch(t){}}})(g),h=(t=>{const a=(0,u.useRouter)(),n="phase-production-build"!==e.env.NEXT_PHASE&&a.pathname.includes("/auto")?o.default.relative("/auto",a.pathname):o.default.relative("/",a.pathname);let d=t.find((e=>e.__resourcePath.replace(".mdx","")===n));return d||(d=t.find((e=>{const t=e.__resourcePath.replace(".mdx","");return t.endsWith("index")&&a.pathname.includes(t.replace("/index",""))}))),{title:d.title||"auto",pathname:(0,m.formatPath)(d.__resourcePath)}})(t),{SidebarItemWrapper:b,SidebarLink:E,SidebarTitle:v,SidebarDivider:O,SidebarList:w,Sidebar:_,...y}=(0,s.useMDXComponents)();return d.default.createElement(f.Provider,{value:{...h,sidebarFileLocation:x?g:""}},d.default.createElement(s.MDXProvider,{components:{...y,li:b,ul:w,a:p,p:v,hr:O}},d.default.createElement(l.default,null,d.default.createElement("title",null,h.title.replace(/\\`/g,"`"))),d.default.createElement(_,{className:(0,c.default)(!r&&"hidden","lg:block")},x?d.default.createElement(x,null):d.default.createElement(w,null,t.map((e=>d.default.createElement(b,{key:e.__resourcePath},d.default.createElement(p,{href:e.__resourcePath},e.title))))))))}}).call(this,a("5IsQ"))},GDok:function(e,t,a){"use strict";var n=a("63Ad");Object.defineProperty(t,"__esModule",{value:!0}),t.NavBar=void 0;var d=n(a("8VmE")),r=n(a("mXGw")),l=n(a("5dyF")),o=a("V5Fo"),c=a("/FXl"),s=n(a("PDtE")),u=a("nZpd"),i=a("AFBu");const m=({className:e,...t})=>r.default.createElement("svg",(0,d.default)({className:(0,s.default)("fill-current w-5 h-5",e),xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},t),r.default.createElement("path",{d:"M10 0a10 10 0 0 0-3.16 19.49c.5.1.68-.22.68-.48l-.01-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.1.39-1.99 1.03-2.69a3.6 3.6 0 0 1 .1-2.64s.84-.27 2.75 1.02a9.58 9.58 0 0 1 5 0c1.91-1.3 2.75-1.02 2.75-1.02.55 1.37.2 2.4.1 2.64.64.7 1.03 1.6 1.03 2.69 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85l-.01 2.75c0 .26.18.58.69.48A10 10 0 0 0 10 0"})),f=()=>{const{SearchInput:e}=(0,c.useMDXComponents)();return r.default.createElement("div",{className:"h-full flex items-center w-full lg:w-auto lg:flex-1 lg:mr-4 lg:pr-4"},r.default.createElement(e,null))};t.NavBar=({sections:e,hasHomePage:t})=>{const[a,n]=r.default.useContext(u.MobileMenuContext),{Logo:d,NavBarWrapper:s,NavBar:p,NavBarItem:g,MobileMenuButton:x}=(0,c.useMDXComponents)();return r.default.createElement(r.default.Fragment,null,r.default.createElement(s,null,r.default.createElement(p,null,t?r.default.createElement(l.default,{passHref:!0,href:(0,i.postFixHTML)("/index")},r.default.createElement(d,null)):r.default.createElement(d,null),r.default.createElement("div",{className:"w-full h-full flex items-center lg:flex flex-1 lg:pl-12 lg:pr-6 lg:mx-auto"},r.default.createElement(f,null),r.default.createElement(x,{open:a,setOpen:n,className:"lg:hidden"}),r.default.createElement("div",{className:"hidden lg:flex h-full"},e.map((e=>r.default.createElement(l.default,{passHref:!0,key:e,href:(0,i.postFixHTML)(`/${e}`)},r.default.createElement(g,null,(0,o.titleCase)(e))))),r.default.createElement(g,{href:"https://github.com/intuit/auto",target:"_blank","aria-label":"Open on GitHub"},r.default.createElement(m,null)))))),a&&r.default.createElement("div",{className:"lg:hidden"},e.map((e=>r.default.createElement(l.default,{passHref:!0,key:e,href:(0,i.postFixHTML)(`/${e}`)},r.default.createElement(g,null,(0,o.titleCase)(e))))),r.default.createElement(g,{href:"https://github.com/intuit/auto",target:"_blank"},r.default.createElement(m,{className:"mr-2"}),"Open on GitHub")))}},TJl4:function(e,t,a){"use strict";var n=a("63Ad");Object.defineProperty(t,"__esModule",{value:!0}),t.OpenGraphTags=void 0;var d=n(a("mXGw")),r=a("dAGg"),l=n(a("ghLh")),o=n(a("pWCa"));t.OpenGraphTags=({title:e,description:t,image:a})=>{const n=(0,r.useRouter)(),c=(0,l.default)("https://intuit.github.io/auto",n.pathname);return d.default.createElement(o.default,null,d.default.createElement("title",null,e),t&&d.default.createElement("meta",{name:"description",content:t}),d.default.createElement("meta",{property:"og:url",content:c}),d.default.createElement("meta",{property:"og:type",content:"website"}),d.default.createElement("meta",{property:"og:title",content:e}),t&&d.default.createElement("meta",{name:"og:description",content:t}),a&&d.default.createElement("meta",{name:"og:image",content:a}),c&&d.default.createElement("meta",{property:"twitter:domain",content:new URL(c).hostname}),d.default.createElement("meta",{property:"twitter:url",content:c}),d.default.createElement("meta",{name:"twitter:title",content:e}),t&&d.default.createElement("meta",{name:"twitter:description",content:t}),a&&d.default.createElement("meta",{name:"twitter:image",content:a}))}},nZpd:function(e,t,a){"use strict";var n=a("63Ad");Object.defineProperty(t,"__esModule",{value:!0}),t.MobileMenuContext=void 0;const d=n(a("mXGw")).default.createContext([!1,()=>{}]);t.MobileMenuContext=d},pu0P:function(e,t,a){"use strict";var n=a("63Ad");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var d=n(a("mXGw")),r=n(a("O2/E")),l=a("/FXl"),o=n(a("PDtE")),c=a("I08b"),s=a("C3pV"),u=n(a("6f/q")),i=n(a("x3GE")),m=a("TJl4");const f=/([^`]*)`([^`]*)`(.*)/m;var p=({children:e,frontMatter:t})=>{const[a,n]=d.default.useState(!1),p=(0,l.useMDXComponents)(),g=t.__resourcePath.split("/")[0],x=(0,i.default)(),h=JSON.parse('["index.mdx","blog/both-worlds.mdx","blog/npm-canary-scope.mdx","blog/pr-in-progress.mdx","blog/using-shipit.mdx","blog/v8.mdx","blog/why.mdx","docs/_sidebar.mdx","docs/index.mdx","docs/build-platforms/circleci.mdx","docs/build-platforms/github-actions.mdx","docs/build-platforms/jenkins.mdx","docs/build-platforms/travis.mdx","docs/configuration/autorc.mdx","docs/configuration/non-npm.mdx","docs/configuration/plugins.mdx","docs/configuration/troubleshooting.mdx","docs/generated/all-contributors.mdx","docs/generated/brew.mdx","docs/generated/canary.mdx","docs/generated/changelog.mdx","docs/generated/chrome.mdx","docs/generated/cocoapods.mdx","docs/generated/comment.mdx","docs/generated/conventional-commits.mdx","docs/generated/crates.mdx","docs/generated/create-labels.mdx","docs/generated/defaultLabelsRenderer.mdx","docs/generated/docker.mdx","docs/generated/exec.mdx","docs/generated/first-time-contributor.mdx","docs/generated/gem.mdx","docs/generated/gh-pages.mdx","docs/generated/git-tag.mdx","docs/generated/gradle.mdx","docs/generated/info.mdx","docs/generated/init.mdx","docs/generated/jira.mdx","docs/generated/label.mdx","docs/generated/latest.mdx","docs/generated/magic-zero.mdx","docs/generated/maven.mdx","docs/generated/microsoft-teams.mdx","docs/generated/next.mdx","docs/generated/npm.mdx","docs/generated/omit-commits.mdx","docs/generated/omit-release-notes.mdx","docs/generated/pr-body-labels.mdx","docs/generated/pr-body.mdx","docs/generated/pr-check.mdx","docs/generated/pr-status.mdx","docs/generated/release.mdx","docs/generated/released.mdx","docs/generated/s3.mdx","docs/generated/sbt.mdx","docs/generated/shipit.mdx","docs/generated/slack.mdx","docs/generated/twitter.mdx","docs/generated/upload-assets.mdx","docs/generated/version.mdx","docs/generated/vscode.mdx","docs/plugins/changelog-hooks.mdx","docs/plugins/configuration-hooks.mdx","docs/plugins/hook-api-docs.mdx","docs/plugins/init-hooks.mdx","docs/plugins/log-parse-hooks.mdx","docs/plugins/release-lifecycle-hooks.mdx","docs/plugins/writing-plugins.mdx","docs/plugins/writing-publishing-plugins.mdx","docs/welcome/getting-started.mdx","docs/welcome/quick-merge.mdx"]').map((e=>r.default.relative("./",e))).filter((e=>e.startsWith(g))).map((e=>x.find((t=>t.__resourcePath===e))));return d.default.createElement(d.default.Fragment,null,d.default.createElement(m.OpenGraphTags,t),d.default.createElement(u.default,{menuState:[a,n]},d.default.createElement("div",{className:"flex-1 w-full lg:max-w-6xl mx-auto flex"},d.default.createElement(s.Sidebar,{links:h,folder:g}),d.default.createElement(c.SkipNavContent,null),d.default.createElement("main",{className:(0,o.default)("DocSearch-content","pt-8 pb-16 px-4 sm:px-6 xl:px-12 lg:mx-auto w-full","flex-1 overflow-hidden","lg:block",a&&"hidden")},t.title&&d.default.createElement(p.h1,null,function(e,t){if(!t)return;const a=[];let n=t.replace(/\\`/g,"`");for(;f.test(n);){const[,t,r,l]=n.match(f);a.push(t),a.push(d.default.createElement(e.inlineCode,null,r)),n=l}return a.push(n),d.default.createElement("div",null,a)}(p,t.title)),e))))};t.default=p},x3GE:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;let n=[];try{const e=a("jmz1");n=e.keys().map(e)}catch(r){0}var d=()=>{try{return n}catch(r){return[]}};t.default=d}},[["4ObC",0,1,2,3,4]]]);