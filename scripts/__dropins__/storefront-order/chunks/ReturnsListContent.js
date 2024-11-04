/*! Copyright 2024 Adobe
All Rights Reserved. */
import{jsx as r,jsxs as s,Fragment as o}from"@dropins/tools/preact-jsx-runtime.js";import{useMemo as H}from"@dropins/tools/preact-hooks.js";import{classes as W,Slot as G}from"@dropins/tools/lib.js";import{IllustratedMessage as K,Icon as y,Card as k,ContentGrid as R,Image as D,Header as I,Pagination as r1}from"@dropins/tools/components.js";import*as l from"@dropins/tools/preact-compat.js";import{useMemo as e1}from"@dropins/tools/preact-compat.js";import"./OrderCancelReasonsForm.js";import{f as n1}from"./returnOrdersHelper.js";import"@dropins/tools/event-bus.js";import{C as O}from"./OrderLoaders.js";import"@dropins/tools/preact.js";import{Text as U}from"@dropins/tools/i18n.js";const q=L=>l.createElement("svg",{id:"Icon_Chevron_right_Base","data-name":"Icon \\u2013 Chevron right \\u2013 Base",xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",...L},l.createElement("g",{id:"Large"},l.createElement("rect",{id:"Placement_area","data-name":"Placement area",width:24,height:24,fill:"#fff",opacity:0}),l.createElement("g",{id:"Chevron_right_icon","data-name":"Chevron right icon"},l.createElement("path",{vectorEffect:"non-scaling-stroke",id:"chevron",d:"M199.75,367.5l4.255,-4.255-4.255,-4.255",transform:"translate(-189.25 -351.0)",fill:"none",stroke:"currentColor"})))),t1=L=>l.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...L},l.createElement("path",{d:"M12.002 21L11.8275 21.4686C11.981 21.5257 12.1528 21.5041 12.2873 21.4106C12.4218 21.3172 12.502 21.1638 12.502 21H12.002ZM3.89502 17.9823H3.39502C3.39502 18.1912 3.52485 18.378 3.72059 18.4509L3.89502 17.9823ZM3.89502 8.06421L4.07193 7.59655C3.91831 7.53844 3.74595 7.55948 3.61082 7.65284C3.47568 7.74619 3.39502 7.89997 3.39502 8.06421H3.89502ZM12.0007 21H11.5007C11.5007 21.1638 11.5809 21.3172 11.7154 21.4106C11.8499 21.5041 12.0216 21.5257 12.1751 21.4686L12.0007 21ZM20.1076 17.9823L20.282 18.4509C20.4778 18.378 20.6076 18.1912 20.6076 17.9823H20.1076ZM20.1076 8.06421H20.6076C20.6076 7.89997 20.527 7.74619 20.3918 7.65284C20.2567 7.55948 20.0843 7.53844 19.9307 7.59655L20.1076 8.06421ZM12.0007 11.1311L11.8238 10.6634C11.6293 10.737 11.5007 10.9232 11.5007 11.1311H12.0007ZM20.2858 8.53191C20.5441 8.43421 20.6743 8.14562 20.5766 7.88734C20.4789 7.62906 20.1903 7.49889 19.932 7.5966L20.2858 8.53191ZM12.002 4.94826L12.1775 4.48008C12.0605 4.43623 11.9314 4.43775 11.8154 4.48436L12.002 4.94826ZM5.87955 6.87106C5.62334 6.97407 5.49915 7.26528 5.60217 7.52149C5.70518 7.77769 5.99639 7.90188 6.2526 7.79887L5.87955 6.87106ZM18.1932 7.80315C18.4518 7.90008 18.74 7.76904 18.8369 7.51047C18.9338 7.2519 18.8028 6.96371 18.5442 6.86678L18.1932 7.80315ZM12 4.94827L11.5879 5.23148C11.6812 5.36719 11.8353 5.44827 12 5.44827C12.1647 5.44827 12.3188 5.36719 12.4121 5.23148L12 4.94827ZM14.0263 2L14.2028 1.53218C13.9875 1.45097 13.7446 1.52717 13.6143 1.71679L14.0263 2ZM21.8421 4.94827L22.2673 5.2113C22.3459 5.08422 22.3636 4.92863 22.3154 4.78717C22.2673 4.64571 22.1584 4.53319 22.0186 4.48045L21.8421 4.94827ZM9.97368 2L10.3857 1.71679C10.2554 1.52717 10.0125 1.45097 9.79721 1.53218L9.97368 2ZM2.15789 4.94827L1.98142 4.48045C1.84161 4.53319 1.73271 4.64571 1.68456 4.78717C1.63641 4.92863 1.65406 5.08422 1.73267 5.2113L2.15789 4.94827ZM12 11.1256L11.6702 11.5014C11.8589 11.667 12.1411 11.667 12.3298 11.5014L12 11.1256ZM15.0395 8.45812L14.8732 7.98659C14.8131 8.00779 14.7576 8.04028 14.7097 8.08232L15.0395 8.45812ZM23 5.65024L23.3288 6.0269C23.5095 5.86916 23.5527 5.60532 23.4318 5.39817C23.3109 5.19102 23.0599 5.09893 22.8337 5.17871L23 5.65024ZM8.96053 8.45812L9.29034 8.08232C9.24244 8.04028 9.18695 8.00779 9.12685 7.98659L8.96053 8.45812ZM1 5.65024L1.16632 5.17871C0.940115 5.09893 0.689119 5.19102 0.568192 5.39817C0.447264 5.60532 0.49048 5.86916 0.671176 6.0269L1 5.65024ZM12.1764 20.5314L4.06945 17.5137L3.72059 18.4509L11.8275 21.4686L12.1764 20.5314ZM4.39502 17.9823V8.06421H3.39502V17.9823H4.39502ZM3.71811 8.53187L11.8251 11.5987L12.1789 10.6634L4.07193 7.59655L3.71811 8.53187ZM11.502 11.1311V21H12.502V11.1311H11.502ZM12.1751 21.4686L20.282 18.4509L19.9332 17.5137L11.8262 20.5314L12.1751 21.4686ZM20.6076 17.9823V8.06421H19.6076V17.9823H20.6076ZM19.9307 7.59655L11.8238 10.6634L12.1776 11.5987L20.2845 8.53187L19.9307 7.59655ZM11.5007 11.1311V21H12.5007V11.1311H11.5007ZM19.932 7.5966L11.8251 10.6634L12.1789 11.5987L20.2858 8.53191L19.932 7.5966ZM11.8154 4.48436L5.87955 6.87106L6.2526 7.79887L12.1885 5.41217L11.8154 4.48436ZM11.8265 5.41645L18.1932 7.80315L18.5442 6.86678L12.1775 4.48008L11.8265 5.41645ZM11.502 4.94826V11.1311H12.502V4.94826H11.502ZM12.4121 5.23148L14.4384 2.28321L13.6143 1.71679L11.5879 4.66507L12.4121 5.23148ZM13.8498 2.46782L21.6656 5.4161L22.0186 4.48045L14.2028 1.53218L13.8498 2.46782ZM21.4169 4.68525L20.5485 6.08919L21.3989 6.61524L22.2673 5.2113L21.4169 4.68525ZM12.4121 4.66507L10.3857 1.71679L9.56162 2.28321L11.5879 5.23148L12.4121 4.66507ZM9.79721 1.53218L1.98142 4.48045L2.33437 5.4161L10.1502 2.46782L9.79721 1.53218ZM1.73267 5.2113L2.60109 6.61524L3.45154 6.08919L2.58312 4.68525L1.73267 5.2113ZM12.3298 11.5014L15.3693 8.83392L14.7097 8.08232L11.6702 10.7498L12.3298 11.5014ZM15.2058 8.92965L23.1663 6.12177L22.8337 5.17871L14.8732 7.98659L15.2058 8.92965ZM22.6712 5.27358L19.7764 7.80067L20.4341 8.554L23.3288 6.0269L22.6712 5.27358ZM12.3298 10.7498L9.29034 8.08232L8.63072 8.83392L11.6702 11.5014L12.3298 10.7498ZM9.12685 7.98659L1.16632 5.17871L0.83368 6.12177L8.79421 8.92965L9.12685 7.98659ZM0.671176 6.0269L3.56591 8.554L4.22356 7.80067L1.32882 5.27358L0.671176 6.0269Z",fill:"#D6D6D6"})),J=({typeList:L,isEmpty:C,minifiedView:M,message:n})=>{const t=e1(()=>{switch(L){case"orders":return{icon:t1,text:r("p",{children:n}),className:"order-empty-list--empty-box"};default:return{icon:"",text:"",className:""}}},[L,n]);return!C||!L||!t.text?null:r(K,{className:W(["order-empty-list",t.className,M?"order-empty-list--minified":""]),message:t.text,icon:r(y,{source:t.icon}),"data-testid":"emptyList"})},Q={size:"32",stroke:"2"},M1=({minifiedViewKey:L,withReturnNumber:C=!1,withOrderNumber:M=!1,slots:n,pageInfo:t,withReturnsListButton:E=!0,isMobile:b=!1,returnsInMinifiedView:X=1,translations:a={},orderReturns:i=[],minifiedView:h=!1,withHeader:Z=!0,withThumbnails:w=!0,selectedPage:$=1,handleSetSelectPage:V,routeReturnDetails:m,routeOrderDetails:p,routeTracking:_,routeReturnsList:g,routeProductDetails:d,loading:N})=>{const A=h?X:i.length,B=d!=null&&d()?"a":"span",f=H(()=>i.slice(0,A).map((e,T)=>{var S,z;return r(k,{variant:"secondary",className:"order-returns-list-content__cards-list",children:s("div",{className:"order-returns-list-content__cards-grid",children:[s("div",{className:"order-returns-list-content__descriptions",children:[r("p",{className:"order-returns-list-content__return-status",children:r(U,{id:`Order.Returns.${L}.returnsList.resturnStatus.${n1(e.returnStatus)}`})}),C?s("p",{children:[a.returnNumber," ",r("a",{href:(m==null?void 0:m({returnNumber:e.returnNumber,orderNumber:e.orderNumber,token:e.token}))??"#",rel:"noreferrer",children:e.returnNumber})]}):null,M?s("p",{children:[a.orderNumber," ",r("a",{href:(p==null?void 0:p({orderNumber:e.orderNumber,token:e.token}))??"#",rel:"noreferrer",children:e.orderNumber})]}):null,(S=e==null?void 0:e.tracking)==null?void 0:S.map((c,x)=>{var u,v;return s("p",{children:[`${a.carrier} ${(v=(u=c==null?void 0:c.carrier)==null?void 0:u.label)==null?void 0:v.toLocaleUpperCase()}: `,r("a",{href:`${(_==null?void 0:_(c))||"#"}`,target:"_blank",rel:"noreferrer",children:c.trackingNumber})]},`${c.trackingNumber}_${x}`)}),n!=null&&n.ReturnItemsDetails?r(G,{"data-testid":"returnItemsDetails",name:"ReturnItemsDetails",slot:n==null?void 0:n.ReturnItemsDetails,context:{items:e.items}}):e.items.length?s("p",{children:[e.items.length," ",r(U,{id:`Order.Returns.${L}.returnsList.itemText`,plural:e.items.length,fields:{count:e.items.length}})]}):null]}),w?r(R,{maxColumns:b?3:9,emptyGridContent:r(o,{}),className:W(["order-returns-list-content__images",["order-returns-list-content__images-3",b]]),children:(z=e==null?void 0:e.items)==null?void 0:z.map((c,x)=>{var j,F;const u=(j=c.thumbnail)==null?void 0:j.label,v=(F=c.thumbnail)==null?void 0:F.url;return r(B,{href:(d==null?void 0:d(c))??"#",children:r(D,{alt:u,src:v,width:85,height:114})},x+c.uid)})}):null,n!=null&&n.DetailsActionParams?r(G,{className:"order-returns-list-content__actions","data-testid":"detailsActionParams",name:"DetailsActionParams",slot:n==null?void 0:n.DetailsActionParams,context:{returnOrderItem:e}}):r("a",{href:(m==null?void 0:m({returnNumber:e.returnNumber,token:e.token,orderNumber:e.orderNumber}))??"#",className:"order-returns-list-content__actions",children:r(y,{source:q,...Q})})]})},T)}),[i,A,L,C,a,m,M,p,n,w,b,d,_,B]),Y=H(()=>s(o,{children:[Z?r(I,{title:a.minifiedViewTitle,divider:!1,className:"order-returns__header--minified"}):null,N?r(O,{withCard:!1}):s(o,{children:[f,r(J,{minifiedView:h,typeList:"orders",isEmpty:!i.length,message:a.emptyOrdersListMessage}),E?r("a",{className:"order-returns-list-content__actions",href:(g==null?void 0:g())??"#",children:r(k,{variant:"secondary",className:"order-returns-list-content__card",children:s("div",{className:"order-returns-list-content__card-wrapper",children:[r("p",{children:a.viewAllOrdersButton}),r(y,{source:q,...Q})]})})}):null]})]}),[g,E,Z,a,f,h,i.length,N]),P=H(()=>s(o,{children:[Z?r(I,{title:a.minifiedViewTitle,divider:!0,className:"order-returns__header--full-size"}):null,N?r(O,{withCard:!1}):s(o,{children:[r(J,{minifiedView:h,typeList:"orders",isEmpty:!i.length,message:a.emptyOrdersListMessage}),f,(t==null?void 0:t.totalPages)>1?r(r1,{totalPages:t==null?void 0:t.totalPages,currentPage:$,onChange:V}):null]})]}),[f,h,i,a,t,$,V,N,Z]);return r("div",{className:"order-returns-list-content",children:h?Y:P})};export{M1 as R};
