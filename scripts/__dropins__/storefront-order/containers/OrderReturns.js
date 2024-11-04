import{jsx as m}from"@dropins/tools/preact-jsx-runtime.js";import"@dropins/tools/components.js";import"../chunks/OrderCancelReasonsForm.js";import{classes as p}from"@dropins/tools/lib.js";import"@dropins/tools/preact-compat.js";import{useState as d,useEffect as R}from"@dropins/tools/preact-hooks.js";import{u as L,R as O}from"../chunks/useIsMobile.js";import"@dropins/tools/preact.js";import{events as b}from"@dropins/tools/event-bus.js";import{useText as g}from"@dropins/tools/i18n.js";import"../chunks/OrderLoaders.js";const w=({orderData:s})=>{const[i,n]=d(s),[u,o]=d([]);return R(()=>{const t=b.on("order/data",e=>{n(e),o(e==null?void 0:e.returns)},{eager:!0});return()=>{t==null||t.off()}},[]),{order:i,orderReturns:u}},I=({slots:s,className:i,orderData:n,withHeader:u,withThumbnails:o,routeReturnDetails:t,routeProductDetails:e,routeTracking:l})=>{const{orderReturns:a}=w({orderData:n}),f=L(),r="fullSizeView",c=g({minifiedViewTitle:`Order.Returns.${r}.returnsList.minifiedViewTitle`,ariaLabelLink:`Order.Returns.${r}.returnsList.ariaLabelLink`,emptyOrdersListMessage:`Order.Returns.${r}.returnsList.emptyOrdersListMessage`,orderNumber:`Order.Returns.${r}.returnsList.orderNumber`,returnNumber:`Order.Returns.${r}.returnsList.returnNumber`,carrier:`Order.Returns.${r}.returnsList.carrier`});return m("div",{className:p(["order-order-returns",i]),children:a.length?m(O,{pageInfo:{pageSize:1,totalPages:1,currentPage:1},minifiedViewKey:r,slots:s,isMobile:f,withOrderNumber:!1,withReturnNumber:!0,orderReturns:a,translations:c,withHeader:u,withThumbnails:o,minifiedView:!1,routeReturnDetails:t,routeProductDetails:e,routeTracking:l,loading:!1}):null})};export{I as OrderReturns,I as default};