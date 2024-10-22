import{jsx as t}from"@dropins/tools/preact-jsx-runtime.js";import"@dropins/tools/event-bus.js";import{i as a,c as g}from"../chunks/store-config.js";import"../chunks/fetch-graphql.js";import{s as k}from"../chunks/setBillingAddress.js";/* empty css                             */import{Checkbox as S,Skeleton as b,SkeletonRow as f}from"@dropins/tools/components.js";import{c as A}from"../chunks/classes.js";import{useText as B}from"@dropins/tools/i18n.js";import{w as x}from"../chunks/withConditionalRendering.js";import{useState as T,useEffect as v}from"@dropins/tools/preact-compat.js";import"@dropins/tools/signals.js";import"@dropins/tools/fetch-graphql.js";import"../chunks/getCart.graphql.js";const _=({className:i,checked:e,loading:r,onChange:n})=>{const s=B({title:"Checkout.BillToShippingAddress.title"});return r?t(w,{}):t("div",{className:"checkout-bill-to-shipping-address",children:t(S,{checked:e,className:A(["checkout-bill-to-shipping-address__checkbox",i]),"data-testid":"bill-to-shipping-checkbox",label:s.title,name:"checkout-bill-to-shipping-address__checkbox",onChange:n})})},w=()=>t(b,{className:"bill-to-shipping-address__skeleton",children:t(f,{variant:"row",size:"small"})}),u=({onChange:i})=>{var h;const[e,r]=T(!0),n=a.value,s=g.value.data,d=!!s,p=!!(s==null?void 0:s.billingAddress),l=(h=s==null?void 0:s.shippingAddresses)==null?void 0:h[0],m=l==null?void 0:l.sameAsBilling;return v(()=>{if(!e||!d)return;r(!1);const o=m??!p;a.value=o,i==null||i(o)},[d,p,m,e,i]),t(_,{checked:n,loading:e,onChange:async o=>{const c=o.target.checked;a.value=c,i==null||i(c),!e&&l&&c&&await k({sameAsShipping:!0}).catch(console.error)},disabled:g.value.pending})};u.displayName="BillToShippingAddressContainer";const L=x(u);export{L as BillToShippingAddress,L as default};
