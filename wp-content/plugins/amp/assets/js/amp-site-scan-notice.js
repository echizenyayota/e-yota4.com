!function(){var e={184:function(e,t){var n;!function(){"use strict";var r={}.hasOwnProperty;function s(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var a=typeof n;if("string"===a||"number"===a)e.push(n);else if(Array.isArray(n)){if(n.length){var l=s.apply(null,n);l&&e.push(l)}}else if("object"===a)if(n.toString===Object.prototype.toString)for(var i in n)r.call(n,i)&&n[i]&&e.push(i);else e.push(n.toString())}}return e.join(" ")}e.exports?(s.default=s,e.exports=s):void 0===(n=function(){return s}.apply(t,[]))||(e.exports=n)}()},703:function(e,t,n){"use strict";var r=n(414);function s(){}function a(){}a.resetWarningCache=s,e.exports=function(){function e(e,t,n,s,a,l){if(l!==r){var i=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw i.name="Invariant Violation",i}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:a,resetWarningCache:s};return n.PropTypes=n,n}},697:function(e,t,n){e.exports=n(703)()},414:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}},t={};function n(r){var s=t[r];if(void 0!==s)return s.exports;var a=t[r]={exports:{}};return e[r](a,a.exports,n),a.exports}n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,{a:t}),t},n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){"use strict";var e=window.wp.element,t=(n(697),ampSiteScanNotice),r=window.wp.domReady,s=n.n(r),a=window.wp.i18n;const l=(0,e.createContext)();function i(t){let{children:n}=t;const[r,s]=(0,e.useState)(null);return(0,e.createElement)(l.Provider,{value:{error:r,setError:s}},n)}var c=window.wp.apiFetch,o=n.n(c),u=window.wp.url;function p(){const[t,n]=(0,e.useState)();return{error:t,setAsyncError:(0,e.useCallback)((e=>{n((()=>{throw e}))}),[])}}const d=(0,e.createContext)();function m(t){let{children:n,optionsRestPath:r,populateDefaultValues:s,hasErrorBoundary:a=!1,delaySave:i=!1}=t;const[c,m]=(0,e.useState)({}),[f,h]=(0,e.useState)(!1),[S,_]=(0,e.useState)(null),[y,g]=(0,e.useState)({}),[E,v]=(0,e.useState)(!1),[b,C]=(0,e.useState)(!1),[A,U]=(0,e.useState)({}),[I,T]=(0,e.useState)({}),{error:P,setError:w}=(0,e.useContext)(l),{setAsyncError:O}=p(),[N,x]=(0,e.useState)(!1),L=(0,e.useRef)(!1);(0,e.useEffect)((()=>()=>{L.current=!0}),[]);const R=(0,e.useCallback)((()=>{P||f||(async()=>{h(!0);try{const e=await o()({path:(0,u.addQueryArgs)(r,{_fields:["suppressed_plugins","suppressible_plugins"]})});if(!0===L.current)return;U({...A,...e})}catch(e){if(!0===L.current)return;return w(e),void(a&&O(e))}h(!1)})()}),[P,f,a,r,A,O,w]);(0,e.useEffect)((()=>{P||Object.keys(A).length||S||(async()=>{_(!0);try{const e=await o()({path:r});if(!0===L.current)return;s||!1!==e.plugin_configured||(e.mobile_redirect=!0,e.reader_theme=null,e.theme_support=null),U(e)}catch(e){if(!0===L.current)return;return w(e),void(a&&O(e))}_(!1)})()}),[P,S,a,A,r,s,O,w]);const k=(0,e.useCallback)((async()=>{v(!0);try{const e={...c};null===e.reader_theme&&delete e.reader_theme,A.plugin_configured||"mobile_redirect"in e||(e.mobile_redirect=A.mobile_redirect),A.plugin_configured||(e.plugin_configured=!0);const[t]=await Promise.all([o()({method:"post",path:r,data:e}),i?new Promise((e=>{setTimeout(e,1e3)})):()=>{}]);if(!0===L.current)return;U(t),w(null)}catch(e){if(!0===L.current)return;return v(!1),w(e),void(a&&O(e))}T({...I,...c}),g(c),m({}),C(!0),v(!1)}),[i,a,r,O,A,w,c,I]),M=(0,e.useCallback)((e=>{m({...c,...e}),C(!1)}),[c]),D=(0,e.useCallback)((e=>{const t={...c};delete t[e],m(t)}),[c]);return(0,e.createElement)(d.Provider,{value:{editedOptions:{...A,...c},fetchingOptions:S,hasOptionsChanges:Boolean(Object.keys(c).length),didSaveOptions:b,updates:c,originalOptions:A,saveOptions:k,savedOptions:y,savingOptions:E,unsetOption:D,updateOptions:M,readerModeWasOverridden:N,refetchPluginSuppression:R,setReaderModeWasOverridden:x,modifiedOptions:I}},n)}const f=(0,e.createContext)();function h(t){let{children:n}=t;const[r,s]=(0,e.useState)([]),[a,l]=(0,e.useState)(null),[i,c]=(0,e.useState)(),p=(0,e.useRef)(!1);return(0,e.useEffect)((()=>()=>{p.current=!0}),[]),(0,e.useEffect)((()=>{i||r.length>0||a||(async()=>{l(!0);try{const e=await o()({path:(0,u.addQueryArgs)("/wp/v2/plugins",{_fields:["author","name","plugin","status","version"]})});if(!0===p.current)return;s(e)}catch(e){if(!0===p.current)return;c(e)}l(!1)})()}),[i,a,r]),(0,e.createElement)(f.Provider,{value:{fetchingPlugins:a,plugins:r}},n)}function S(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return e.replace(/\/.*$/,"").replace(/\.php$/,"")}const _=(0,e.createContext)(),y="ACTION_SET_STATUS",g="ACTION_SCANNABLE_URLS_REQUEST",E="ACTION_SCANNABLE_URLS_RECEIVE",v="ACTION_SCAN_INITIALIZE",b="ACTION_SCAN_URL",C="ACTION_SCAN_RECEIVE_RESULTS",A="ACTION_SCAN_COMPLETE",U="ACTION_SCAN_CANCEL",I="STATUS_REQUEST_SCANNABLE_URLS",T="STATUS_FETCHING_SCANNABLE_URLS",P="STATUS_REFETCHING_PLUGIN_SUPPRESSION",w="STATUS_READY",O="STATUS_IDLE",N="STATUS_IN_PROGRESS",x="STATUS_COMPLETED",L="STATUS_FAILED",R="STATUS_CANCELLED",k="STATUS_SKIPPED",M={currentlyScannedUrlIndexes:[],forceStandardMode:!1,scannableUrls:[],scanOnce:!1,status:"",scansCount:0,urlIndexesPendingScan:[]};function D(e,t){if(e.status===k)return e;switch(t.type){case y:return{...e,status:t.status};case g:var n;return{...e,status:I,forceStandardMode:null!==(n=null==t?void 0:t.forceStandardMode)&&void 0!==n&&n,currentlyScannedUrlIndexes:[],urlIndexesPendingScan:[]};case E:var r;return t.scannableUrls&&0!==(null===(r=t.scannableUrls)||void 0===r?void 0:r.length)?{...e,status:e.scanOnce&&e.scansCount>0?x:w,scannableUrls:t.scannableUrls}:{...e,status:x};case v:return[w,x,L,R].includes(e.status)?e.scanOnce&&e.scansCount>0?{...e,status:x}:{...e,status:O,currentlyScannedUrlIndexes:[],scansCount:e.scansCount+1,urlIndexesPendingScan:e.scannableUrls.map(((e,t)=>t))}:e;case b:return[O,N].includes(e.status)?{...e,status:N,currentlyScannedUrlIndexes:[...e.currentlyScannedUrlIndexes,t.currentlyScannedUrlIndex],urlIndexesPendingScan:e.urlIndexesPendingScan.filter((e=>e!==t.currentlyScannedUrlIndex))}:e;case C:var s;return[O,N].includes(e.status)?{...e,status:O,currentlyScannedUrlIndexes:e.currentlyScannedUrlIndexes.filter((e=>e!==t.currentlyScannedUrlIndex)),scannableUrls:[...e.scannableUrls.slice(0,t.currentlyScannedUrlIndex),{...e.scannableUrls[t.currentlyScannedUrlIndex],stale:!1,error:null!==(s=t.error)&&void 0!==s&&s,validated_url_post:t.error?{}:t.validatedUrlPost,validation_errors:t.error?[]:t.validationErrors},...e.scannableUrls.slice(t.currentlyScannedUrlIndex+1)]}:e;case A:{const t=e.scannableUrls.every((e=>Boolean(e.error)));return{...e,status:t?L:P}}case U:return[O,N].includes(e.status)?{...e,status:R,currentlyScannedUrlIndexes:[],urlIndexesPendingScan:[]}:e;default:throw new Error(`Unhandled action type: ${t.type}`)}}function j(t){var n,r;let{children:s,fetchCachedValidationErrors:a=!1,refetchPluginSuppressionOnScanComplete:l=!1,resetOnOptionsChange:i=!1,scannableUrlsRestPath:c,scanOnce:m=!1,validateNonce:f}=t;const{originalOptions:{theme_support:h},savedOptions:j,refetchPluginSuppression:B}=(0,e.useContext)(d),{setAsyncError:W}=p(),[F,H]=(0,e.useReducer)(D,{...M,scanOnce:m}),{currentlyScannedUrlIndexes:V,forceStandardMode:G,scannableUrls:$,urlIndexesPendingScan:Q,status:z}=F,K=G||"standard"===h?"url":"amp_url",Y=null!==(n=null==$||null===(r=$[0])||void 0===r?void 0:r[K])&&void 0!==n?n:"",{hasSiteScanResults:q,pluginsWithAmpIncompatibility:J,stale:Z,themesWithAmpIncompatibility:X}=(0,e.useMemo)((()=>{if(![w,x,k].includes(z))return{hasSiteScanResults:!1,pluginsWithAmpIncompatibility:[],stale:!1,themesWithAmpIncompatibility:[]};const e=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],{useAmpUrls:t=!1}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const n=new Map,r=new Map;for(const s of e){const{amp_url:e,url:a,validation_errors:l}=s;if(null!=l&&l.length)for(const s of l)for(const l of s.sources)if("plugin"===l.type){const r=S(l.name);if("gutenberg"===r&&s.sources.length>1)continue;n.set(r,new Set([...n.get(r)||[],t?e:a]))}else"theme"===l.type&&r.set(l.name,new Set([...r.get(l.name)||[],t?e:a]))}return n.delete("amp"),{plugins:[...n].map((e=>{let[t,n]=e;return{slug:t,urls:[...n]}})),themes:[...r].map((e=>{let[t,n]=e;return{slug:t,urls:[...n]}}))}}($,{useAmpUrls:"amp_url"===K});return{hasSiteScanResults:$.some((e=>Boolean(null==e?void 0:e.validation_errors))),pluginsWithAmpIncompatibility:e.plugins,stale:$.some((e=>!0===(null==e?void 0:e.stale))),themesWithAmpIncompatibility:e.themes}}),[$,z,K]);(0,e.useEffect)((()=>{f||z===k||H({type:y,status:k})}),[z,f]);const ee=(0,e.useRef)(!1);(0,e.useEffect)((()=>()=>{ee.current=!0}),[]);const te=(0,e.useCallback)((function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};H({type:g,forceStandardMode:null==e?void 0:e.forceStandardMode})}),[]),ne=(0,e.useCallback)((()=>{H({type:v})}),[]),re=(0,e.useCallback)((()=>{H({type:U})}),[]);(0,e.useEffect)((()=>{i&&Object.keys(j).length>0&&H({type:g})}),[i,j]),(0,e.useEffect)((()=>{z===w&&Object.keys(j.suppressed_plugins||{}).length>0&&H({type:v})}),[null==j?void 0:j.suppressed_plugins,z]),(0,e.useEffect)((()=>{z===P&&(l&&B(),H({type:y,status:x}))}),[B,l,z]);const[se,ae]=(0,e.useState)(!1);return(0,e.useEffect)((()=>{let e;return se&&(async()=>{await new Promise((t=>{e=setTimeout(t,500)})),!0!==ee.current&&ae(!1)})(),()=>{e&&clearTimeout(e)}}),[se]),(0,e.useEffect)((()=>{(async()=>{if(z===I){H({type:y,status:T});try{const e=["url","amp_url","type","label"],t=await o()({path:(0,u.addQueryArgs)(c,{_fields:a?[...e,"validation_errors","stale"]:e,force_standard_mode:G?1:void 0})});if(!0===ee.current)return;H({type:E,scannableUrls:t})}catch(e){if(!0===ee.current)return;W(e)}}})()}),[a,G,c,W,z]),(0,e.useEffect)((()=>{if(![O,N].includes(z))return;if(0===Q.length)return void(0===V.length&&H({type:A}));if(se||V.length>=3)return;ae(!0);const e=Q[0];H({type:b,currentlyScannedUrlIndex:e}),(async()=>{const t={};try{const n=$[e][K],r={amp_validate:{cache:!0,cache_bust:Math.random(),force_standard_mode:G||void 0,nonce:f,omit_stylesheets:!0}},s=await fetch((0,u.addQueryArgs)(n,r)),a=await s.json();if(!0===ee.current)return;s.ok?(t.validatedUrlPost=a.validated_url_post,t.validationErrors=a.results.map((e=>{let{error:t}=e;return t}))):t.error=(null==a?void 0:a.code)||!0}catch(e){if(!0===ee.current)return;t.error=!0}H({type:C,currentlyScannedUrlIndex:e,...t}),ae(!1)})()}),[V.length,G,$,se,z,Q,K,f]),(0,e.createElement)(_.Provider,{value:{cancelSiteScan:re,fetchScannableUrls:te,forceStandardMode:G,hasSiteScanResults:q,isBusy:[O,N].includes(z),isCancelled:z===R,isCompleted:[P,x].includes(z),isFailed:z===L,isFetchingScannableUrls:[I,T].includes(z),isInitializing:!Boolean(z),isReady:z===w,isSiteScannable:$.length>0,isSkipped:z===k,pluginsWithAmpIncompatibility:J,previewPermalink:Y,scannableUrls:$,scannedUrlsMaxIndex:([N,O].includes(z)?Math.min($.length,...Q):0)-1,stale:Z,startSiteScan:ne,themesWithAmpIncompatibility:X}},s)}var B=window.wp.components;function W(){return W=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},W.apply(this,arguments)}var F=window.wp.compose;function H(t){let{children:n,onCopy:r,onFinishCopy:s,text:a,...l}=t;const i=(0,e.useRef)(),c=(0,F.useCopyToClipboard)(a,(()=>{r&&r(),clearTimeout(i.current),s&&(i.current=setTimeout((()=>s()),4e3))}));return(0,e.useEffect)((()=>{clearTimeout(i.current)}),[]),(0,e.createElement)(B.Button,W({},l,{className:"components-clipboard-button",ref:c,onCopy:e=>{e.target.focus()}}),n)}function V(t){let{error:n,finishLinkLabel:r,finishLinkUrl:s,title:l}=t;const[i,c]=(0,e.useState)(!1),{message:o,stack:u}=n;return(0,e.createElement)("div",{className:"error-screen-container"},(0,e.createElement)(B.Panel,{className:"error-screen"},(0,e.createElement)("h1",null,l||(0,a.__)("Something went wrong.","amp")),(0,e.createElement)("p",{dangerouslySetInnerHTML:{__html:o||(0,a.__)("There was an error loading the page.","amp")}}),(0,e.createElement)("p",{dangerouslySetInnerHTML:{__html:(0,a.sprintf)(// translators: %s is the AMP support forum URL.
(0,a.__)('Please submit details to our <a href="%s" target="_blank" rel="noreferrer noopener">support forum</a>.',"amp"),(0,a.__)("https://wordpress.org/support/plugin/amp/","amp"))}}),u&&(0,e.createElement)("details",null,(0,e.createElement)("summary",null,(0,a.__)("Details","amp")),(0,e.createElement)("pre",null,u),(0,e.createElement)(H,{isSmall:!0,isSecondary:!0,text:JSON.stringify({message:o,stack:u},null,2),onCopy:()=>c(!0),onFinishCopy:()=>c(!1)},i?(0,a.__)("Copied!","amp"):(0,a.__)("Copy Error","amp"))),s&&r&&(0,e.createElement)("p",null,(0,e.createElement)("a",{href:s},r))))}class G extends e.Component{constructor(e){super(e),this.timeout=null,this.state={error:null}}componentDidMount(){this.mounted=!0}componentWillUnmount(){this.mounted=!1}componentDidCatch(e){this.setState({error:e})}render(){const{error:t}=this.state,{children:n,exitLinkLabel:r,exitLinkUrl:s,title:a}=this.props;return t?(0,e.createElement)(V,{error:t,finishLinkLabel:r,finishLinkUrl:s,title:a}):n}}var $=n(184),Q=n.n($);const z="info",K="success",Y="warning",q="error";function J(t){let{children:n,className:r,isDismissible:s=!1,onDismiss:l,type:i=z}=t;const[c,o]=(0,e.useState)(!1),u=(0,e.useCallback)((()=>{o(!0),"function"==typeof l&&l()}),[l]);return s&&c?null:(0,e.createElement)("div",{className:Q()("amp-admin-notice",r,{"amp-admin-notice--dismissible":s,"amp-admin-notice--info":i===z,"amp-admin-notice--success":i===K,"amp-admin-notice--warning":i===Y,"amp-admin-notice--error":i===q})},n,s&&(0,e.createElement)("button",{type:"button",onClick:u,className:"amp-admin-notice__dismiss"},(0,e.createElement)(B.VisuallyHidden,{as:"span"},(0,a.__)("Dismiss","amp"))))}function Z(t){let{inline:n=!1}=t;const r=n?"span":"div";return(0,e.createElement)(r,{className:Q()("amp-spinner-container",{"amp-spinner-container--inline":n})},(0,e.createElement)(B.Spinner,null))}function X(t){let{pluginsWithAmpIncompatibility:n}=t;const{fetchingPlugins:r,plugins:s}=(0,e.useContext)(f);if(r)return null;const l=Object.values(s).reduce(((e,t)=>({...e,[S(t.plugin)]:t.name})),{});return(0,e.createElement)(e.Fragment,null,(0,e.createElement)("p",null,(0,a._n)("AMP compatibility issues discovered with the following plugin:","AMP compatibility issues discovered with the following plugins:",n.length,"amp")),n.map((t=>(0,e.createElement)("details",{key:t.slug,className:"amp-site-scan-notice__plugin-details"},(0,e.createElement)("summary",{className:"amp-site-scan-notice__plugin-summary",dangerouslySetInnerHTML:{__html:(0,a.sprintf)(
/* translators: 1: plugin name; 2: number of URLs with AMP validation issues. */
(0,a._n)("<b>%1$s</b> on %2$d URL","<b>%1$s</b> on %2$d URLs",t.urls.length,"amp"),l[t.slug],t.urls.length)}}),(0,e.createElement)("ul",{className:"amp-site-scan-notice__urls-list"},t.urls.map((t=>(0,e.createElement)("li",{key:t},(0,e.createElement)("a",{href:t,target:"_blank",rel:"noopener noreferrer"},t)))))))))}const ee=new URL(t.SETTINGS_LINK);function te(){const{cancelSiteScan:r,fetchScannableUrls:s,isCancelled:l,isCompleted:i,isFailed:c,isInitializing:o,isReady:u,pluginsWithAmpIncompatibility:p,startSiteScan:d}=(0,e.useContext)(_);(0,e.useEffect)((()=>r),[r]),(0,e.useEffect)((()=>{o?s():u&&d()}),[s,o,u,d]);const m={className:"amp-site-scan-notice",isDismissible:!0,onDismiss:r};return c||l?(0,e.createElement)(J,W({type:q},m),(0,e.createElement)("p",null,(0,a.__)("AMP could not check your site for compatibility issues.","amp"))):i&&0===p.length?(0,e.createElement)(J,W({type:K},m),(0,e.createElement)("p",null,(0,a.__)("No AMP compatibility issues detected.","amp"))):i&&p.length>0?(0,e.createElement)(J,W({type:Y},m),(0,e.createElement)(X,{pluginsWithAmpIncompatibility:p}),(0,e.createElement)("div",{className:"amp-site-scan-notice__cta"},(0,e.createElement)("a",{href:ee,className:"button"},(0,a.__)("Review Plugin Suppression","amp")),(0,e.createElement)("a",W({href:t.AMP_COMPATIBLE_PLUGINS_URL,className:"button"},(f=t.AMP_COMPATIBLE_PLUGINS_URL,(null===(h=n.g)||void 0===h||null===(S=h.location)||void 0===S?void 0:S.host)!==new URL(f).host?{target:"_blank",rel:"noopener noreferrer"}:{})),(0,a.__)("View AMP-Compatible Plugins","amp")))):(0,e.createElement)(J,W({type:z},m),(0,e.createElement)("p",null,(0,a.__)("Checking your site for AMP compatibility issues…","amp"),(0,e.createElement)(Z,{inline:!0})));var f,h,S}let ne;function re(r){let{children:s}=r;return n.g.removeEventListener("error",ne),(0,e.createElement)(i,null,(0,e.createElement)(G,{title:(0,a.__)("The AMP Site Scanner has experienced an error.","amp")},(0,e.createElement)(m,{hasErrorBoundary:!0,optionsRestPath:t.OPTIONS_REST_PATH,populateDefaultValues:!1},(0,e.createElement)(h,null,(0,e.createElement)(j,{scannableUrlsRestPath:t.SCANNABLE_URLS_REST_PATH,validateNonce:t.VALIDATE_NONCE},s)))))}ee.hash="plugin-suppression",s()((()=>{const r=document.getElementById(t.APP_ROOT_ID);r&&(ne=t=>{t.filename&&/amp-site-scan-notice(\.min)?\.js/.test(t.filename)&&(0,e.render)((0,e.createElement)(V,{error:t.error}),r)},n.g.addEventListener("error",ne),(0,e.render)((0,e.createElement)(re,null,(0,e.createElement)(te,null)),r))}))}()}();