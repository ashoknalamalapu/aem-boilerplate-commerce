import{jsxs as g,jsx as e}from"@dropins/tools/preact-jsx-runtime.js";import{u as h}from"../chunks/useGetStoreConfig.js";import{InLineAlert as v,Picker as x,Button as S}from"@dropins/tools/components.js";import{F}from"../chunks/OrderCancelReasonsForm.js";import"@dropins/tools/lib.js";import"@dropins/tools/preact-compat.js";import{useState as d}from"@dropins/tools/preact-hooks.js";import"@dropins/tools/preact.js";import{events as u}from"@dropins/tools/event-bus.js";import{useText as E,Text as p}from"@dropins/tools/i18n.js";import{c as _,r as D}from"../chunks/requestGuestOrderCancel.js";import"../chunks/getStoreConfig.js";import"../chunks/fetch-graphql.js";import"@dropins/tools/fetch-graphql.js";import"../chunks/transform-order-details.js";import"../chunks/convertCase.js";import"../chunks/getGuestOrder.graphql.js";const L=({pickerProps:s,submitButtonProps:o,cancelReasons:n,cancelOrder:i,orderRef:m})=>{const a=E({ErrorHeading:"Order.OrderCancellationReasonsForm.errorHeading",ErrorDescription:"Order.OrderCancellationReasonsForm.errorDescription",orderCancellationLabel:"Order.OrderCancellationReasonsForm.label"}),[r,c]=d(0),[f,C]=d(!1),[O,b]=d(!1);u.on("authenticated",t=>{t&&b(!0)},{eager:!0});const R=t=>{t.preventDefault();const l=Number(t.target.value);c(l)};return g(F,{onSubmit:async t=>(t.preventDefault(),i(m,n[r].text,l=>{O||(l.status="guest order cancellation requested"),u.emit("order/data",l)},()=>{C(!0)})),"data-testid":"order-order-cancel-reasons-form__text",children:[f&&e(v,{heading:a.ErrorHeading,description:a.ErrorDescription}),e("div",{className:"order-order-cancel-reasons-form__text",children:e(p,{id:"Order.OrderCancellationReasonsForm.description"})}),e(x,{name:"cancellationReasons",floatingLabel:a.orderCancellationLabel,defaultOption:n[0],variant:"primary",options:n,value:String(r),handleSelect:R,required:!0,"data-testid":"order-cancellation-reasons-selector",...s}),e("div",{className:"order-order-cancel-reasons-form__button-container",children:e(S,{variant:"primary","data-testid":"order-cancel-submit-button",...o,children:e(p,{id:"Order.OrderCancellationReasonsForm.button"})})})]})},Q=({orderRef:s})=>{const o=h(),n=(o==null?void 0:o.orderCancellationReasons)??[];let i=_;return s.length>20&&(i=D),e(L,{orderRef:s,cancelOrder:i,cancelReasons:(a=>a.map((r,c)=>({text:r==null?void 0:r.description,value:c.toString()})))(n)})};export{Q as OrderCancel,Q as default};