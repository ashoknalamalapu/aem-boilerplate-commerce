import{jsx as c}from"@dropins/tools/preact-jsx-runtime.js";import"@dropins/tools/components.js";import"../chunks/OrderCancelReasonsForm.js";import"../chunks/ReturnOrder.js";import{classes as S}from"@dropins/tools/lib.js";import{useState as i,useEffect as $,useCallback as h}from"@dropins/tools/preact-hooks.js";import"@dropins/tools/event-bus.js";import{g as I}from"../chunks/getCustomerOrdersReturn.js";import{u as y}from"../chunks/useIsMobile.js";import"@dropins/tools/preact-compat.js";import{R as A}from"../chunks/ReturnsListContent.js";import"@dropins/tools/preact.js";import{useText as M}from"@dropins/tools/i18n.js";import"../chunks/network-error.js";import"../chunks/fetch-graphql.js";import"@dropins/tools/fetch-graphql.js";import"../chunks/transform-order-details.js";import"../chunks/convertCase.js";import"../chunks/returnOrdersHelper.js";import"../chunks/OrderLoaders.js";const f={totalPages:1,currentPage:1,pageSize:1},T=()=>{const[s,n]=i(!0),[o,t]=i([]),[u,a]=i(f),[m,d]=i(1);$(()=>{I().then(r=>{t((r==null?void 0:r.ordersReturn)??[]),a((r==null?void 0:r.pageInfo)??f)}).finally(()=>{n(!1)})},[]);const l=h(r=>{d(r)},[]);return{pageInfo:u,selectedPage:m,loading:s,orderReturns:o,handleSetSelectPage:l}},X=({slots:s,withReturnsListButton:n,className:o,minifiedView:t,withHeader:u,withThumbnails:a,returnsInMinifiedView:m,routeReturnDetails:d,routeOrderDetails:l,routeTracking:r,routeReturnsList:g,routeProductDetails:p})=>{const{pageInfo:L,selectedPage:R,handleSetSelectPage:O,loading:b,orderReturns:P}=T(),w=y(),e=t?"minifiedView":"fullSizeView",N=M({viewAllOrdersButton:`Order.Returns.${e}.returnsList.viewAllOrdersButton`,ariaLabelLink:`Order.Returns.${e}.returnsList.ariaLabelLink`,emptyOrdersListMessage:`Order.Returns.${e}.returnsList.emptyOrdersListMessage`,minifiedViewTitle:`Order.Returns.${e}.returnsList.minifiedViewTitle`,orderNumber:`Order.Returns.${e}.returnsList.orderNumber`,returnNumber:`Order.Returns.${e}.returnsList.returnNumber`,carrier:`Order.Returns.${e}.returnsList.carrier`});return c("div",{className:S(["order-returns-list",o]),children:c(A,{minifiedViewKey:e,withOrderNumber:!0,withReturnNumber:!0,slots:s,selectedPage:R,handleSetSelectPage:O,pageInfo:L,withReturnsListButton:n,isMobile:w,orderReturns:P,translations:N,withHeader:u,returnsInMinifiedView:m,withThumbnails:a,minifiedView:t,routeReturnDetails:d,routeOrderDetails:l,routeTracking:r,routeReturnsList:g,routeProductDetails:p,loading:b})})};export{X as default};
