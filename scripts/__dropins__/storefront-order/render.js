(function(i,e){try{if(typeof document<"u"){const r=document.createElement("style"),o=e.styleId;for(const a in e.attributes)r.setAttribute(a,e.attributes[a]);r.setAttribute("data-dropin",o),r.appendChild(document.createTextNode(i));const t=document.querySelector('style[data-dropin="sdk"]');if(t)t.after(r);else{const a=document.querySelector('link[rel="stylesheet"], style');a?a.before(r):document.head.append(r)}}}catch(r){console.error("dropin-styles (injectCodeFunction)",r)}})('.dropin-order-search-form{gap:var(--spacing-small);border-color:transparent}.dropin-order-search-form .dropin-card__content{padding:var(--spacing-big) var(--spacing-xxbig) var(--spacing-xxbig) var(--spacing-xxbig)}.dropin-order-search-form p{color:var(--color-neutral-700);font:var(--type-body-2-default-font);letter-spacing:var(--type-body-2-default-letter-spacing);margin:0}.dropin-order-search-form__title{color:var(--color-neutral-800);font:var(--type-headline-2-strong-font);letter-spacing:var(--type-headline-2-strong-letter-spacing);margin:0}.dropin-order-search-form__wrapper{display:grid;grid-template-columns:1fr;grid-template-rows:auto;grid-template-areas:"email" "postcode" "number" "button";gap:var(--spacing-medium)}.dropin-order-search-form__wrapper__item--email{grid-area:email}.dropin-order-search-form__wrapper__item--postcode{grid-area:postcode}.dropin-order-search-form__wrapper__item--number{grid-area:number}.dropin-order-search-form__button-container{display:flex;justify-content:flex-end;grid-area:button}.dropin-order-search-form form button{align-self:flex-end;justify-self:flex-end;margin-top:var(--spacing-small)}@media (min-width: 768px){.dropin-order-search-form__wrapper{grid-template-columns:1fr 1fr;grid-template-rows:auto auto auto;grid-template-areas:"email postcode" "number number" "button button"}}.dropin-order-status-content{margin-bottom:var(--spacing-small)}.dropin-order-status-content.dropin-card--secondary{border:var(--shape-border-width-1) solid var(--color-neutral-400);border-radius:var(--shape-border-radius-1)}.dropin-order-status-content .dropin-card__content{gap:0}.dropin-order-status-content__wrapper p{padding:0;margin:0;box-sizing:border-box;font:var(--type-body-1-strong-font);letter-spacing:var(--type-body-1-default-letter-spacing)}.dropin-order-status-content__wrapper-description{margin-bottom:var(--spacing-medium)}.dropin-shipping-status-card{margin-bottom:var(--spacing-small)}.dropin-shipping-status-card .dropin-card__content{gap:0}.dropin-shipping-status-card.dropin-card--secondary{border:var(--shape-border-width-1) solid var(--color-neutral-400);border-radius:var(--shape-border-radius-1)}.dropin-shipping-status-card--count-steper{font:var(--type-headline-2-strong-font);letter-spacing:var(--type-headline-2-strong-letter-spacing)}.dropin-shipping-status-card__header{display:grid;grid-template-columns:1fr auto;justify-items:self-start;align-items:center;margin-bottom:var(--spacing-xsmall)}.dropin-shipping-status-card__header button{max-height:40px}.dropin-shipping-status-card__header--content p{margin:0;padding:0;margin-bottom:var(--spacing-xsmall)}.dropin-shipping-status-card .dropin-shipping-status-card__images .dropin-content-grid__content{grid-template-columns:repeat(6,max-content)!important;overflow:auto!important}.dropin-shipping-status-card .dropin-shipping-status-card__images img{object-fit:contain}.dropin-order-loaders--card-loader{margin-bottom:var(--spacing-small);border:var(--shape-border-width-1) solid var(--color-neutral-400);border-radius:var(--shape-border-radius-1)}.dropin-order-actions__wrapper{display:flex;justify-content:space-between;gap:0 var(--spacing-small);margin-bottom:var(--spacing-small);margin-top:var(--spacing-medium)}.dropin-order-actions__wrapper button{width:100%;font:var(--type-body-1-strong-font);letter-spacing:var(--type-body-1-default-letter-spacing)}.dropin-order-actions__wrapper--empty{display:none}.dropin-details .dropin-card__content{gap:0}.dropin-customer-details .dropin-card--secondary{border:var(--shape-border-width-1) solid var(--color-neutral-400);border-radius:var(--shape-border-radius-1)}.dropin-details__container{display:grid;flex-direction:column;gap:var(--spacing-medium)}@media (min-width: 768px){.dropin-details__container{display:grid;grid-template-columns:max-content max-content;grid-template-rows:auto auto auto;gap:var(--spacing-medium);grid-auto-flow:row}.dropin-details__container-email{grid-area:1 / 1 / 2 / 2}.dropin-details__container-shipping_address{grid-area:2 / 1 / 3 / 2}.dropin-details__container-billing_address{grid-area:2 / 2 / 3 / 3}.dropin-details__container-shipping_methods{grid-area:3 / 1 / 4 / 2}.dropin-details__container-billing_methods{grid-area:3 / 2 / 4 / 3}}.dropin-details__container-title{font:var(--type-body-1-strong-font);letter-spacing:var(--type-body-1-strong-letter-spacing);margin:0 0 var(--spacing-xsmall) 0}.dropin-details__container p{color:var(--color-neutral-800);font:var(--type-body-2-default-font);letter-spacing:var(--type-body-2-default-letter-spacing);margin-top:0}.dropin-details__container-billing_methods p{display:grid;gap:0;grid-template-columns:auto 1fr}.dropin-details__container-billing_methods p.dropin-details__container-billing_methods--icon{gap:0 var(--spacing-xsmall)}.dropin-details__container-description--row{display:flex;justify-content:start;gap:0 var(--spacing-xsmall);margin-bottom:var(--spacing-xsmall)}.dropin-details__container-description .dropin-details__container-description--row p{margin:0;padding:0;word-wrap:break-word;max-width:200px}',{styleId:"order"});
import{jsx as r}from"@dropins/tools/preact-jsx-runtime.js";import{Render as n}from"@dropins/tools/lib.js";import{useState as d,useEffect as a}from"@dropins/tools/preact-hooks.js";import{UIProvider as c}from"@dropins/tools/components.js";import{events as l}from"@dropins/tools/event-bus.js";const p={OrderSearchForm:{title:"Enter your information to view order details",description:"You can find your order number in the receipt you received via email.",button:"View Order",email:"Email",postcode:"Zip Code",orderNumber:"Order Number"},Form:{notifications:{requiredFieldError:"This is a required field."}},ShippingStatusCard:{trackButton:"Track package",carrier:"Carrier:",prepositionOf:"of",shippingCardTitle:"Package details",shippingInfoTitle:"Shipping info",notYetShippedTitle:"Not yet shipped",notYetShippedImagesTitle:"Package contents"},OrderStatusContent:{noInfoTitle:"Check back later for more details.",actions:{cancel:"Cancel order",return:"Return or replace",reorder:"Reorder"},orderPending:{title:"Pending",message:"The order was successfully placed on {DATE} and your order is processing. Check back for more details when your order ships."},orderProcessing:{title:"Processing",message:"The order was successfully placed on {DATE} and your order is processing. Check back for more details when your order ships."},orderOnHold:{title:"On hold",message:"We’ve run into an issue while processing your order on {DATE}. Please check back later or contact us at support@adobe.com for more information."},orderReceived:{title:"Order received",message:"The order was successfully placed on {DATE} and your order is processing. Check back for more details when your order ships."},orderComplete:{title:"Complete",message:"Your order is complete. Need help with your order? Contact us at support@adobe.com"},orderCanceled:{title:"Canceled",message:"This order was cancelled by you. You should see a refund to your original payment method with 5-7 business days."},orderSuspectedFraud:{title:"Suspected fraud",message:"We’ve run into an issue while processing your order on {DATE}. Please check back later or contact us at support@adobe.com for more information."},orderPaymentReview:{title:"Payment Review",message:"The order was successfully placed on {DATE} and your order is processing. Check back for more details when your order ships."}},CustomerDetails:{headerText:"Customer information",freeShipping:"Free shipping",email:{title:"Contact details"},shippingAddress:{title:"Shipping address"},shippingMethods:{title:"Shipping method"},billingAddress:{title:"Billing address"},billingMethods:{title:"Payment method"}},Errors:{invalidOrder:"Invalid order. Please try again.",invalidSearch:"No order found with these order details."}},u={Order:p},m={default:u},h=({children:o})=>{const[i,t]=d("en_US");return a(()=>{const e=l.on("locale",s=>{t(s)},{eager:!0});return()=>{e==null||e.off()}},[]),r(c,{lang:i,langDefinitions:m,children:o})},C=new n(r(h,{}));export{C as render};