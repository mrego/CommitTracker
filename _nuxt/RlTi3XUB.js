import{_ as K}from"./CYeIyjzW.js";import{_ as W}from"./NxUEi_18.js";import{f as E,m as Y,g as H,h as x,q as T,r as q,o as M,c as I,a as y,b as u,w as i,d as f,F as X,j as Z,i as N,s as d,x as L,t as h,v as g,W as J,y as G,n as ee,p as P,k as oe,l as te}from"./B29pliZ2.js";import{_ as Q}from"./DlAUqK2U.js";import{_ as ne}from"./BCSySVuw.js";import{_ as le}from"./fqb8SHkB.js";import{r as ae}from"./CTRyl4Lp.js";import{f as F}from"./D2nGpDRe.js";import{_ as se}from"./CDkg2K4h.js";import"./B6qCbaoP.js";import"./DxPSARot.js";import"./D-2-6Lyj.js";import"./Bl_BFuLA.js";import"./BxPoHLz2.js";const B=["ACM","AMD","ANL","ARM","Accenture","Access Digital","Adobe","Akamai","Alibaba","Alif Type","Amazon","Andes","Antmicro","Apple","Arntzen Software","Autodesk","Azul","BDTi","BEC","BlackBerry","Blackberry","Bloomberg","Brave","Broadcom","ByteDance","CERN","Canonical","Chinese Academy of Sciences","Cisco","Cloudflare","Codeplay","Collabora","Colorado school of Mines","Cornell university","Debian","Dell","Digia","Dolby","ENS Lyon","ENS Rennes","Epitech","Ericsson","Foxit","FreeBSD","Front Range Internet","GNU","Gentoo","Getdesigned","Gnome","Google","GraphCore","Harvard","Huawei","Hyperconnect","IBM","Igalia","Imagination","Individuals","Intel","Jetbrains","KDE","Khronos","LGE","LLVM","Ladybird","Linaro","Linux Foundation","Linux Kernel","Logitech","Loongson","LowRISK","LunarG","MIPS","MediaTek","Meta","Metrix Constultants","Microchip","Microsoft","Mobica","Modular","Moritz Systems","Motorola","Mozilla","NEC","NYU","Narod","Naver","Netflix","NextSilicon","Nokia","Northeastern University","Nuanti","Nvidia","Octopus Computing","Opera","Polymage Labs","Purdue University","Qiaxin","Qt","Qualcom","Qualcomm","Qualcoom","RT-RK","Redhat","Rivos","Rutgers","Rwthaachen University","SAP","SAS","SN Systems","Saarland Informatics Campus","Salesforce","Samsung","Shopify","SiFive","Sigma technology","Slack","Sony","St Petersburg State University","Suse","Swansea University","Synopsys","Szeged","Tencent","TensorFlow","Técnico LISBOA","UC Santa Barbara","Uber","Ubisoft","University of Illinois","University of Tenessee","University of Washington","University of Wisconsin","Universität Passau","Unknown","Valve","Vewd","Vivaldi","Wacom","WebKit","Windfall","X","XMOS","Xiaomi","Yandex","Zilliqa"],re={class:"columns"},ie={class:"fields column"},ue={class:"column is-narrow"},de=E({__name:"OrganizationsSelector",props:Y({allowMultiple:{type:Boolean,required:!1,default:!1},allowAll:{type:Boolean,required:!1,default:!1},size:{default:"is-small",type:String,required:!0},label:{default:"",type:String,required:!1},repositories:{type:Array[String],required:!1,default:()=>[]}},{modelValue:{},modelModifiers:{}}),emits:["update:modelValue"],setup(D){const s=D,A=H(D,"modelValue"),V=x(structuredClone(B)),w=x(A.value.length>1&&s.allowMultiple),c=x(A.value.length==V.value.length),k=x(["adobe","amazon","apple","facebook","google","microsoft","netflix","opera","redhat","slack"]),b=async()=>{const m=await(await fetch("/data/organizations_summary.json")).json(),S={};for(const C of V.value){S[C]=0;for(const e of s.repositories)m[e]&&(S[C]+=m[e][C]||0)}V.value.sort((C,e)=>{const O=S[e]-S[C];return O==0?C.localeCompare(e):O})},_=()=>{V.value.sort()},U=()=>{c.value=!c.value,c.value?(w.value=s.allowMultiple,A.value=B):(w.value=!1,A.value=[])},$=z=>{if(!w.value){A.value=[z];return}const m=[...A.value],S=m.indexOf(z);S===-1?m.push(z):m.splice(S,1),A.value=m.sort()};return T(()=>{b()}),(z,m)=>{const S=q("b-icon"),C=q("b-checkbox-button"),e=q("b-checkbox");return M(),I("div",null,[y("div",re,[y("div",ie,[y("button",{class:"sort-button",onClick:_},[u(S,{icon:"sort-alphabetical-descending-variant",size:"is-medium"},{default:i(()=>m[3]||(m[3]=[f(" sort alphabetically")])),_:1})]),y("button",{class:"sort-button",onClick:b},[u(S,{icon:"sort",size:"is-medium"},{default:i(()=>m[4]||(m[4]=[f(" sort by commits")])),_:1})]),(M(!0),I(X,null,Z(d(V),(O,j)=>(M(),N(C,{style:{"margin-right":"-0.02rem","margin-left":"0"},name:"organizations",key:j,size:D.size,modelValue:A.value,"onUpdate:modelValue":m[0]||(m[0]=R=>A.value=R),onInput:R=>$(O),"native-value":O},{default:i(()=>[d(k).includes(O.toLowerCase())?(M(),N(S,{key:0,icon:O.toLowerCase(),size:"is-small"},null,8,["icon"])):L("",!0),f(" "+h(O),1)]),_:2},1032,["size","modelValue","onInput","native-value"]))),128)),m[5]||(m[5]=y("div",{class:"spacer"},null,-1))]),y("div",ue,[y("div",null,[D.allowAll?(M(),N(e,{key:0,size:D.size,name:"all",value:d(c),onInput:m[1]||(m[1]=O=>U()),type:"is-warning"},{default:i(()=>m[6]||(m[6]=[f(" All ")])),_:1},8,["size","value"])):L("",!0)]),y("div",null,[D.allowMultiple?(M(),N(e,{key:0,size:D.size,name:"multiple",modelValue:d(w),"onUpdate:modelValue":m[2]||(m[2]=O=>g(w)?w.value=O:null)},{default:i(()=>m[7]||(m[7]=[f(" Multiple ")])),_:1},8,["size","modelValue"])):L("",!0)]),J(z.$slots,"default",{},void 0,!0)])])])}}}),me=Q(de,[["__scopeId","data-v-16f8b15d"]]),pe={class:"main"},fe={class:"card"},ce={class:"card-content"},ve={class:"content"},ye=E({__name:"Organizations",props:{repositories:{type:Array[String],default:()=>["chromium"]},organizations:{type:Array[String],default:()=>["Google"]},colors:{type:String,default:"repositories"},grouping:{type:String,default:"yearly"},kind:{},metric:{},chart:{type:String,default:"bar"},dates:{type:Array[Date],default:()=>[new Date("2000-01-01"),new Date]},others:{type:Boolean,default:!1},percent:{type:Boolean,default:!1}},setup(D){const s=D,A=new Map;for(const n of ae)A.set(n.dirname,n.color);const V=new Map;for(const n in B){const o=n*360/B.length+n%4*90,l=40+5*(n%3);V.set(B[n],`hsl(${o}, 99%, ${l}%)`)}V.set("Others","hsl(0, 0%, 50%)");const w=G([]),c=G([]),k=x(!1);let b=F(",d");const _=function(n,o){for(const l in o)n[l]=(n[l]||0)+o[l]},U=function(n){switch(s.grouping){case"forever":return s.dates[0];case"decennial":return new Date(n.substr(0,3)+"0-01-01");case"yearly":return new Date(n.substr(0,4)+"-01-01");case"quarterly":return new Date(n.substr(0,4)+"-"+(1+(parseInt(n.substr(5,1))-1)*3)+"-01");case"monthly":return new Date(n+"-01")}},$=async function(n){const l=await(await fetch(`/data/${n}/organizations_summary_${s.metric}_${s.grouping}_${s.kind}.json`)).json(),a={};a.Others={};for(const t in l){if(s.organizations.includes(t)){a[t]=l[t];continue}(s.colors=="organizations"||s.others)&&_(a.Others,l[t])}for(const t in a)for(const p in a[t]){const v=U(p);(v<s.dates[0]||v>s.dates[1])&&delete a[t][p]}return console.log(a),a},z=async function(){var l,a;const n={};for(const t of s.repositories)n[t]=await $(t);const o={};if(s.colors=="repositories"){for(const t in n)for(const p in n[t])for(const v in n[t][p])o[v]=o[v]||{},(l=o[v])[t]||(l[t]=0),o[v][t]+=n[t][p][v];if(s.percent)for(const t in o){let p=0;for(const v in o[t])p+=o[t][v];for(const v in o[t])o[t][v]/=p}}else{for(const t in n)for(const p in n[t])for(const v in n[t][p])o[v]=o[v]||{},(a=o[v])[p]||(a[p]=0),o[v][p]+=n[t][p][v];if(s.percent)for(const t in o){let p=0;for(const v in o[t])p+=o[t][v];for(const v in o[t])o[t][v]/=p}if(!s.others)for(const t in o)delete o[t].Others}for(const t in o)for(const p in o[t])o[t][p]==0&&delete o[t][p];for(const t in o)Object.keys(o[t]).length==0&&delete o[t];return o},m=async function(){const n=await z();if(b=s.percent?F(".2%"):s.metric=="commit"?o=>F(",d")(o)+" ⚙️":o=>F(",d")(o)+" 🧍",s.chart=="bar"&&(w.value=Object.keys(n).sort().map(o=>({label:o,values:Object.keys(n[o]).sort().map(l=>({label:l,value:n[o][l],color:s.colors=="repositories"?A.get(l):V.get(l)}))}))),s.chart=="line"){const o={};for(const a in n)for(const t in n[a])o[t]=(o[t]||0)+n[a][t];const l=Object.keys(o).sort((a,t)=>o[t]-o[a]).slice(0,10);c.value=l.map(a=>({label:a,values:Object.keys(n).sort().slice(0,-1).map(t=>({x:new Date(U(t)),y:n[t][a]||0}))}))}},S=function(n,o,l){const a=new Blob([n],{type:l||"text/plain"}),t=URL.createObjectURL(a),p=document.createElement("a");p.href=t,p.download=o,p.click(),URL.revokeObjectURL(t)},C=async function(){const n=await z();S(JSON.stringify(n,null,2),"data.json","application/json")},e=async function(){const n=await z(),o={};for(const l in n)for(const a in n[l])o[a]=o[a]||{},o[a][l]=n[l][a];S(JSON.stringify(o,null,2),"data.json","application/json")},O=async function(){const n=await z(),o=Object.keys(n).sort().map(l=>Object.keys(n[l]).sort().map(a=>`${l},${a},${n[l][a]}`).join(`
`)).join(`
`);S(o,"data.csv","text/csv")},j=async function(){const n=await z(),o=new Set;for(const a in n)for(const t in n[a])o.add(t);let l="Date";for(const a of o)l+=`,${a}`;for(const a in n){l+=`
${a}`;for(const t of o)l+=`,${n[a][t]||0}`}S(l,"data.csv","text/csv")},R=ee(()=>{switch(s.grouping){case"forever":return"Forever";case"decennial":return"Decade";case"yearly":return"Year";case"quarterly":return"Quarter";case"monthly":return"Month"}});return P(s,m),T(()=>{m()}),(n,o)=>{const l=ne,a=le,t=q("b-button"),p=q("b-modal"),v=q("b-field");return M(),I("div",pe,[D.chart=="line"?(M(),N(l,{key:0,class:"line-chart",data:d(c),formatter:d(b)},null,8,["data","formatter"])):L("",!0),D.chart=="bar"?(M(),N(a,{key:1,timeLabel:d(R),formatter:d(b),data:d(w)},null,8,["timeLabel","formatter","data"])):L("",!0),u(v,{position:"is-centered"},{default:i(()=>[J(n.$slots,"default",{},void 0,!0),o[12]||(o[12]=y("p",{class:"m-2"},null,-1)),u(v,{position:"is-centered"},{default:i(()=>[u(t,{onClick:o[0]||(o[0]=r=>k.value=!0)},{default:i(()=>o[6]||(o[6]=[f(" Download ")])),_:1}),u(p,{modelValue:d(k),"onUpdate:modelValue":o[5]||(o[5]=r=>g(k)?k.value=r:null),width:640},{default:i(()=>[y("div",fe,[y("div",ce,[o[11]||(o[11]=y("div",{class:"media"},[y("div",{class:"media-content"},[y("p",{class:"title is-4"},"Download as:")])],-1)),y("div",ve,[u(t,{type:"is-light",class:"download-button",onClick:o[1]||(o[1]=r=>e())},{default:i(()=>o[7]||(o[7]=[f(" JSON ")])),_:1}),u(t,{type:"is-light",class:"download-button",onClick:o[2]||(o[2]=r=>C())},{default:i(()=>o[8]||(o[8]=[f(" JSON (variant) ")])),_:1}),u(t,{type:"is-light",class:"download-button",onClick:o[3]||(o[3]=r=>O())},{default:i(()=>o[9]||(o[9]=[f(" CSV (rows)")])),_:1}),u(t,{type:"is-light",class:"download-button",onClick:o[4]||(o[4]=r=>j())},{default:i(()=>o[10]||(o[10]=[f(" CSV (table) ")])),_:1})])])])]),_:1},8,["modelValue"])]),_:1})]),_:3})])}}}),ge=Q(ye,[["__scopeId","data-v-d3ee019f"]]),be={class:"section"},Ve={class:"container"},we={key:0,class:"mt-2"},ze={class:"section"},Be=E({__name:"commits",setup(D){const s=oe(),A=te(),V=x(["chromium"]);s.query.repositories&&(V.value=s.query.repositories.split(","));const w=x(["Google"]);s.query.organizations&&(s.query.organizations==="all"?w.value=B:w.value=s.query.organizations.split(","));const c=x("yearly");s.query.grouping&&(c.value=s.query.grouping);const k=x("repositories");s.query.colors&&(k.value=s.query.colors);const b=x("author");s.query.kind&&(b.value=s.query.kind);const _=x("commit");s.query.metric&&(_.value=s.query.metric);const U=x("bar");s.query.chart&&(U.value=s.query.chart);const $=x([new Date("2000-01-01"),new Date]);s.query.dates&&($.value=s.query.dates.split(",").map(C=>new Date(C)));const z=x(s.query.others===null),m=x(s.query.percent===null?"percent":"absolute");return P([V,w,c,k,b,_,U,$,z,m],()=>{A.push({query:{repositories:V.value.join(","),organizations:w.value.length===B.length?"all":w.value.join(","),grouping:c.value,colors:k.value,kind:b.value,metric:_.value,chart:U.value,dates:$.value.map(C=>C.toISOString().split("T")[0]).join(","),others:z.value?null:void 0,percent:m.value==="percent"?null:void 0}})}),(C,e)=>{const O=K,j=W,R=q("b-checkbox"),n=q("b-tooltip"),o=me,l=q("b-radio-button"),a=q("b-field"),t=ge,p=q("b-notification"),v=se;return M(),I("div",null,[u(O),y("section",be,[y("div",Ve,[e[39]||(e[39]=y("h1",{class:"title"},"Organizations contributions",-1)),e[40]||(e[40]=y("p",null,[y("strong",null,"Repositories?")],-1)),u(j,{modelValue:d(V),"onUpdate:modelValue":e[0]||(e[0]=r=>g(V)?V.value=r:null),size:"small",allowMultiple:!0,allowAll:!0},null,8,["modelValue"]),e[41]||(e[41]=y("p",null,[y("strong",null,"Organizations:")],-1)),u(o,{modelValue:d(w),"onUpdate:modelValue":e[2]||(e[2]=r=>g(w)?w.value=r:null),size:"small",allowMultiple:!0,allowAll:!0,repositories:d(V)},{default:i(()=>[y("div",null,[u(n,{multilined:"",label:`Include all the organizations that are not in the
              list as 'Others'`,position:"is-bottom"},{default:i(()=>[u(R,{size:"small",name:"others",modelValue:d(z),"onUpdate:modelValue":e[1]||(e[1]=r=>g(z)?z.value=r:null)},{default:i(()=>e[20]||(e[20]=[f(" Others ")])),_:1},8,["modelValue"])]),_:1})])]),_:1},8,["modelValue","repositories"]),u(a,{grouped:"","group-multiline":""},{default:i(()=>[u(a,{label:"As:"},{default:i(()=>[u(l,{name:"kind",modelValue:d(b),"onUpdate:modelValue":e[3]||(e[3]=r=>g(b)?b.value=r:null),"native-value":"author"},{default:i(()=>e[21]||(e[21]=[f(" author ")])),_:1},8,["modelValue"]),u(l,{name:"kind",modelValue:d(b),"onUpdate:modelValue":e[4]||(e[4]=r=>g(b)?b.value=r:null),"native-value":"review"},{default:i(()=>e[22]||(e[22]=[f(" reviewer ")])),_:1},8,["modelValue"]),u(l,{name:"kind",modelValue:d(b),"onUpdate:modelValue":e[5]||(e[5]=r=>g(b)?b.value=r:null),"native-value":"both"},{default:i(()=>e[23]||(e[23]=[f(" both ")])),_:1},8,["modelValue"])]),_:1}),u(a,{label:"Grouping:"},{default:i(()=>[u(l,{name:"grouping",modelValue:d(c),"onUpdate:modelValue":e[6]||(e[6]=r=>g(c)?c.value=r:null),"native-value":"forever"},{default:i(()=>e[24]||(e[24]=[f(" Forever ")])),_:1},8,["modelValue"]),u(l,{name:"grouping",modelValue:d(c),"onUpdate:modelValue":e[7]||(e[7]=r=>g(c)?c.value=r:null),"native-value":"decennial"},{default:i(()=>e[25]||(e[25]=[f(" Decennial ")])),_:1},8,["modelValue"]),u(l,{name:"grouping",modelValue:d(c),"onUpdate:modelValue":e[8]||(e[8]=r=>g(c)?c.value=r:null),"native-value":"yearly"},{default:i(()=>e[26]||(e[26]=[f(" Yearly ")])),_:1},8,["modelValue"]),u(l,{name:"grouping",modelValue:d(c),"onUpdate:modelValue":e[9]||(e[9]=r=>g(c)?c.value=r:null),"native-value":"quarterly"},{default:i(()=>e[27]||(e[27]=[f(" Quarterly ")])),_:1},8,["modelValue"]),u(l,{name:"grouping",modelValue:d(c),"onUpdate:modelValue":e[10]||(e[10]=r=>g(c)?c.value=r:null),"native-value":"monthly"},{default:i(()=>e[28]||(e[28]=[f(" Monthly ")])),_:1},8,["modelValue"])]),_:1}),u(a,{label:"Colors:"},{default:i(()=>[u(l,{name:"colors",modelValue:d(k),"onUpdate:modelValue":e[11]||(e[11]=r=>g(k)?k.value=r:null),"native-value":"repositories"},{default:i(()=>e[29]||(e[29]=[f(" Repositories ")])),_:1},8,["modelValue"]),u(l,{name:"colors",modelValue:d(k),"onUpdate:modelValue":e[12]||(e[12]=r=>g(k)?k.value=r:null),"native-value":"organizations"},{default:i(()=>e[30]||(e[30]=[f(" Organizations ")])),_:1},8,["modelValue"])]),_:1}),u(a,{label:"Chart:"},{default:i(()=>[u(l,{name:"chart",modelValue:d(U),"onUpdate:modelValue":e[13]||(e[13]=r=>g(U)?U.value=r:null),"native-value":"line"},{default:i(()=>e[31]||(e[31]=[f(" Line ")])),_:1},8,["modelValue"]),u(l,{name:"chart",modelValue:d(U),"onUpdate:modelValue":e[14]||(e[14]=r=>g(U)?U.value=r:null),"native-value":"bar"},{default:i(()=>e[32]||(e[32]=[f(" Bar ")])),_:1},8,["modelValue"])]),_:1})]),_:1}),u(t,{repositories:d(V),grouping:d(c),colors:d(k),kind:d(b),metric:d(_),organizations:d(w),chart:d(U),dates:d($),others:d(z),percent:d(m)==="percent"},{default:i(()=>[u(a,{class:"has-addons"},{default:i(()=>[u(l,{size:"small",name:"metric",modelValue:d(_),"onUpdate:modelValue":e[15]||(e[15]=r=>g(_)?_.value=r:null),"native-value":"commit"},{default:i(()=>[u(n,{label:"Number of commits"},{default:i(()=>e[33]||(e[33]=[f(" ⚙️ ")])),_:1})]),_:1},8,["modelValue"]),u(l,{size:"small",name:"metric",modelValue:d(_),"onUpdate:modelValue":e[16]||(e[16]=r=>g(_)?_.value=r:null),"native-value":"contributor"},{default:i(()=>[u(n,{label:"Number of contributors"},{default:i(()=>e[34]||(e[34]=[f(" 🧍 ")])),_:1})]),_:1},8,["modelValue"])]),_:1}),e[37]||(e[37]=y("div",{class:"mr-2"},null,-1)),u(a,{class:"has-addons"},{default:i(()=>[u(l,{size:"small",name:"percent",modelValue:d(m),"onUpdate:modelValue":e[17]||(e[17]=r=>g(m)?m.value=r:null),"native-value":"absolute"},{default:i(()=>e[35]||(e[35]=[f(" Absolute ")])),_:1},8,["modelValue"]),u(l,{size:"small",name:"percent",modelValue:d(m),"onUpdate:modelValue":e[18]||(e[18]=r=>g(m)?m.value=r:null),"native-value":"percent"},{default:i(()=>e[36]||(e[36]=[f(" Percent ")])),_:1},8,["modelValue"])]),_:1})]),_:1},8,["repositories","grouping","colors","kind","metric","organizations","chart","dates","others","percent"]),d(_)=="contributor"?(M(),I("div",we,[d(V).length>1?(M(),N(p,{key:0,type:"is-warning"},{default:i(()=>e[38]||(e[38]=[y("p",null,[y("strong",null,"Note:"),f(" Contributors who have contributed to multiple repositories will be counted once per repository. ")],-1)])),_:1})):L("",!0)])):L("",!0)])]),y("section",ze,[u(a,{expanded:""},{default:i(()=>[u(v,{modelValue:d($),"onUpdate:modelValue":e[19]||(e[19]=r=>g($)?$.value=r:null)},null,8,["modelValue"])]),_:1})])])}}});export{Be as default};
