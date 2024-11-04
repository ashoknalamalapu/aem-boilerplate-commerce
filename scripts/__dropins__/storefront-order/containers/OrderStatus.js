/*! Copyright 2024 Adobe
All Rights Reserved. */
import{jsx as c,jsxs as N,Fragment as T}from"@dropins/tools/preact-jsx-runtime.js";import{Card as M,Header as x,Button as E,InLineAlert as L}from"@dropins/tools/components.js";import"../chunks/OrderCancelReasonsForm.js";import{f as $}from"../chunks/returnOrdersHelper.js";import{classes as S,Slot as U}from"@dropins/tools/lib.js";import{f as w}from"../chunks/formatDateToLocale.js";import{useState as y,useEffect as v}from"@dropins/tools/preact-hooks.js";import{events as I}from"@dropins/tools/event-bus.js";import{useMemo as K,useState as F}from"@dropins/tools/preact-compat.js";import{r as P}from"../chunks/redirectTo.js";import{useText as p,Text as b}from"@dropins/tools/i18n.js";import"@dropins/tools/preact.js";import{C as G}from"../chunks/OrderLoaders.js";import{G as H}from"../chunks/getGuestOrder.graphql.js";import{f as V,h as W}from"../chunks/fetch-graphql.js";import{t as j}from"../chunks/transform-order-details.js";import{u as k}from"../chunks/useGetStoreConfig.js";import"@dropins/tools/fetch-graphql.js";import"../chunks/convertCase.js";import"../chunks/getStoreConfig.js";const _={pending:"orderPending",shiping:"orderShipped",complete:"orderComplete",processing:"orderProcessing","on hold":"orderOnHold",canceled:"orderCanceled","suspected fraud":"orderSuspectedFraud","payment Review":"orderPaymentReview","order received":"orderReceived","guest order cancellation requested":"guestOrderCancellationRequested"},q=({slots:t,title:r,status:s,orderData:e,routeCreateReturn:d})=>{var A;const o=e==null?void 0:e.returnNumber,n=String(s).toLocaleLowerCase(),i=(A=e==null?void 0:e.returns)==null?void 0:A[0],a=(i==null?void 0:i.returnStatus)??"",m=(i==null?void 0:i.createdReturnAt)??"",f=p(`Order.OrderStatusContent.${_[n]}.title`),l=p(`Order.OrderStatusContent.${_[n]}.message`),C=p(`Order.OrderStatusContent.${_[n]}.messageWithoutDate`),u=p({title:`Order.OrderStatusContent.resturnStatus.${$(a)}`,returnMessage:"Order.OrderStatusContent.returnMessage"});if(!s)return c("div",{});const O=e!=null&&e.orderStatusChangeDate?l==null?void 0:l.message.replace("{DATE}",e==null?void 0:e.orderStatusChangeDate):C.messageWithoutDate,g=(u==null?void 0:u.returnMessage.replace("{ORDER_CREATE_DATE}",w(e==null?void 0:e.orderDate)).replace("{RETURN_CREATE_DATE}",w(m)))??"",R=o?u.title:r??f.title;return N(M,{className:"order-order-status-content",variant:"secondary",children:[c(x,{title:R}),N("div",{className:"order-order-status-content__wrapper",children:[c("div",{className:S(["order-order-status-content__wrapper-description",["order-order-status-content__wrapper-description--actions-slot",!!(t!=null&&t.OrderActions)]]),children:c("p",{children:o?g:O})}),c(Q,{orderData:e,slots:t,routeCreateReturn:d})]})]})};var h=(t=>(t.CANCEL="CANCEL",t.RETURN="RETURN",t.REORDER="REORDER",t))(h||{});const B=({orderData:t})=>{const[r,s]=y(t),[e,d]=y(t==null?void 0:t.status);return v(()=>{const o=I.on("order/data",n=>{s(n),d(n.status)},{eager:!0});return()=>{o==null||o.off()}},[]),{orderStatus:e,order:r}},Q=({className:t,orderData:r,slots:s,routeCreateReturn:e})=>{const d=p({cancel:"Order.OrderStatusContent.actions.cancel",reorder:"Order.OrderStatusContent.actions.reorder"}),o=K(()=>{const n=r==null?void 0:r.availableActions,i=!!(n!=null&&n.length),a=r==null?void 0:r.returnNumber,m=()=>{P(e,{},r==null?void 0:r.returns[0])};return c(T,{children:s!=null&&s.OrderActions?c(U,{"data-testid":"OrderActionsSlot",name:"OrderCanceledActions",slot:s==null?void 0:s.OrderActions,context:r}):c("div",{"data-testid":"availableActionsList",className:S(["order-order-actions__wrapper",["order-order-actions__wrapper--empty",!i]]),children:n==null?void 0:n.map(f=>{var l;switch(f){case h.CANCEL:return c(E,{variant:"secondary",children:d.cancel});case h.RETURN:return c(E,{variant:"secondary",onClick:m,children:c(b,{id:"Order.OrderStatusContent.actions.return",plural:(l=r==null?void 0:r.returns)==null?void 0:l.length})});case h.REORDER:return c(T,{children:a?null:c(E,{variant:"secondary",children:d.reorder})})}})})})},[r,e,s==null?void 0:s.OrderActions,d]);return c("div",{className:S(["order-order-actions",t]),children:o})},z=`
  mutation CONFIRM_CANCEL_ORDER_MUTATION(
      $orderId: ID!,
      $confirmationKey: String!
    ) {
    confirmCancelOrder(input: {
      order_id: $orderId,
      confirmation_key: $confirmationKey
    }) {
      order {
        ...guestOrderData
      }
      errorV2 {
        message
        code
      }
    }
  }
${H}
`,J=async(t,r)=>V(z,{variables:{orderId:t,confirmationKey:r}}).then(async({errors:s,data:e})=>{var n,i,a,m;const d=[...(n=e==null?void 0:e.confirmCancelOrder)!=null&&n.errorV2?[(i=e==null?void 0:e.confirmCancelOrder)==null?void 0:i.errorV2]:[],...s??[]];let o=null;return(a=e==null?void 0:e.confirmCancelOrder)!=null&&a.order&&(o=j((m=e==null?void 0:e.confirmCancelOrder)==null?void 0:m.order),I.emit("order/data",o)),d.length>0?W(d):o}),X=({enableOrderCancellation:t})=>{const r=p({orderCancelled:"Order.OrderStatusContent.orderCanceled.message"}),[s,e]=y({text:"",status:void 0});return v(()=>{if(!t)return;const d=new URLSearchParams(window.location.search),o=d.get("orderId"),n=d.get("confirmationKey");o&&n&&J(atob(o),n).then(()=>{e({text:r.orderCancelled,status:"success"})}).catch(i=>{e({text:i.message,status:"warning"})})},[t,r.orderCancelled]),{confirmOrderCancellation:s}},he=({slots:t,orderData:r,className:s,statusTitle:e,status:d,routeCreateReturn:o})=>{const{orderStatus:n,order:i}=B({orderData:r}),[a,m]=F(!1),f=()=>{m(!0);const O=new URL(window.location.href),g=O.searchParams.get("orderId"),R=O.searchParams.get("confirmationKey");g&&R&&(O.searchParams.delete("orderId"),O.searchParams.delete("confirmationKey"),window.history.replaceState({},document.title,O.toString()))},l=p({cancelOrder:"Order.OrderStatusContent.actions.cancel"}),C=k(),{confirmOrderCancellation:u}=X({enableOrderCancellation:C==null?void 0:C.orderCancellationEnabled});return N("div",{className:S(["order-order-status",s]),children:[!a&&(u==null?void 0:u.status)!==void 0&&c(L,{heading:l.cancelOrder,onDismiss:f,description:u.text,type:u.status}),i?c(q,{title:e,status:d||n,slots:t,orderData:i,routeCreateReturn:o}):c(G,{withCard:!1})]})};export{he as OrderStatus,he as default};
