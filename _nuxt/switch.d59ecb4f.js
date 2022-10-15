import{h as f,k as w,b as d,d as h,l as g,m as B,q as K,u as G,P as y,s as C,v as R,x as T,y as A,z as S,A as F,V as q,B as z,C as H,F as I,S as J,D as k,E as M}from"./entry.47e1e06c.js";let $=Symbol("LabelContext");function P(){let t=C($,null);if(t===null){let n=new Error("You used a <Label /> component, but it is not inside a parent.");throw Error.captureStackTrace&&Error.captureStackTrace(n,P),n}return t}function U({slot:t={},name:n="Label",props:s={}}={}){let e=f([]);function r(l){return e.value.push(l),()=>{let u=e.value.indexOf(l);u!==-1&&e.value.splice(u,1)}}return w($,{register:r,slot:t,name:n,props:s}),d(()=>e.value.length>0?e.value.join(" "):void 0)}let N=h({name:"Label",props:{as:{type:[Object,String],default:"label"},passive:{type:[Boolean],default:!1}},setup(t,{slots:n,attrs:s}){let e=P(),r=`headlessui-label-${g()}`;return B(()=>K(e.register(r))),()=>{let{name:l="Label",slot:u={},props:o={}}=e,{passive:b,...p}=t,c={...Object.entries(o).reduce((i,[m,v])=>Object.assign(i,{[m]:G(v)}),{}),id:r};return b&&(delete c.onClick,delete p.onClick),y({ourProps:c,theirProps:p,slot:u,attrs:s,slots:n,name:l})}}}),x=Symbol("GroupContext");h({name:"SwitchGroup",props:{as:{type:[Object,String],default:"template"}},setup(t,{slots:n,attrs:s}){let e=f(null),r=U({name:"SwitchLabel",props:{onClick(){!e.value||(e.value.click(),e.value.focus({preventScroll:!0}))}}}),l=R({name:"SwitchDescription"});return w(x,{switchRef:e,labelledby:r,describedby:l}),()=>y({theirProps:t,ourProps:{},slot:{},slots:n,attrs:s,name:"SwitchGroup"})}});let Q=h({name:"Switch",emits:{"update:modelValue":t=>!0},props:{as:{type:[Object,String],default:"button"},modelValue:{type:Boolean,default:void 0},defaultChecked:{type:Boolean,default:!1},name:{type:String,optional:!0},value:{type:String,optional:!0}},inheritAttrs:!1,setup(t,{emit:n,attrs:s,slots:e,expose:r}){let l=C(x,null),u=`headlessui-switch-${g()}`,[o,b]=T(d(()=>t.modelValue),a=>n("update:modelValue",a),d(()=>t.defaultChecked));function p(){b(!o.value)}let c=f(null),i=l===null?c:l.switchRef,m=A(d(()=>({as:t.as,type:s.type})),i);r({el:i,$el:i});function v(a){a.preventDefault(),p()}function j(a){a.key===k.Space?(a.preventDefault(),p()):a.key===k.Enter&&M(a.currentTarget)}function O(a){a.preventDefault()}return()=>{let{name:a,value:D,...L}=t,V={checked:o.value},E={id:u,ref:i,role:"switch",type:m.value,tabIndex:0,"aria-checked":o.value,"aria-labelledby":l==null?void 0:l.labelledby.value,"aria-describedby":l==null?void 0:l.describedby.value,onClick:v,onKeyup:j,onKeypress:O};return S(I,[a!=null&&o.value!=null?S(F,q({features:z.Hidden,as:"input",type:"checkbox",hidden:!0,readOnly:!0,checked:o.value,name:a,value:D})):null,y({ourProps:E,theirProps:{...s,...H(L,["modelValue","defaultChecked"])},slot:V,attrs:s,slots:e,name:"Switch"})])}}});export{Q as l};
