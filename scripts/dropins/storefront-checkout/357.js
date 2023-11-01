export const id=357;export const ids=[357];export const modules={7357:(r,e,t)=>{t.d(e,{H:()=>Y,Y:()=>X});var n=t(3177),o=t(5587),a=t(1892),c=t.n(a),u=t(5760),s=t.n(u),i=t(8311),m=t.n(i),l=t(8192),d=t.n(l),y=t(8060),p=t.n(y),h=t(4865),v=t.n(h),b=t(5509),f={};f.styleTagTransform=v(),f.setAttributes=d(),f.insert=m().bind(null,"head"),f.domAPI=s(),f.insertStyleElement=p(),c()(b.Z,f),b.Z&&b.Z.locals&&b.Z.locals;var x=t(3483),g=t(7354),_=t(9724),j=t(4462),k=t(51),w=t(1988),O=t(7188);function S(r){return S="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(r){return typeof r}:function(r){return r&&"function"==typeof Symbol&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},S(r)}var P=["className","summary","isLoading"];function N(r,e){var t=Object.keys(r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(r);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),t.push.apply(t,n)}return t}function T(r){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?N(Object(t),!0).forEach((function(e){C(r,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(t)):N(Object(t)).forEach((function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(t,e))}))}return r}function C(r,e,t){return(e=function(r){var e=function(r,e){if("object"!==S(r)||null===r)return r;var t=r[Symbol.toPrimitive];if(void 0!==t){var n=t.call(r,"string");if("object"!==S(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(r)}(r);return"symbol"===S(e)?e:String(e)}(e))in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}var D=function(r){var e=r.className,t=r.summary,n=r.isLoading,a=void 0!==n&&n,c=function(r,e){if(null==r)return{};var t,n,o=function(r,e){if(null==r)return{};var t,n,o={},a=Object.keys(r);for(n=0;n<a.length;n++)t=a[n],e.indexOf(t)>=0||(o[t]=r[t]);return o}(r,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(r);for(n=0;n<a.length;n++)t=a[n],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(r,t)&&(o[t]=r[t])}return o}(r,P),u=t.total,s=t.subtotal,i=t.shipping,m=t.tax;return(0,O.jsxs)(j.Z,T(T({},c),{},{className:(0,o.S)(["checkout-order-summary",["checkout-order-summary--loading",a],e]),children:[(0,O.jsx)(x.X,{level:2,className:"checkout-order-summary__title",children:(0,O.jsx)(_.xv,{id:"Checkout.OrderSummary.title"})}),(0,O.jsx)(k.i,{variant:"primary"}),a&&(0,O.jsx)(g.a,{className:"checkout-order-summary__loader"}),(0,O.jsxs)("div",{"data-testid":"order-summary-subtotal",className:"checkout-order-summary__row",children:[(0,O.jsx)("p",{children:(0,O.jsx)(_.xv,{id:"Checkout.OrderSummary.subtotal"})}),(0,O.jsx)(w.t,{amount:s.amount,currency:s.currency,className:(0,o.S)(["checkout-order-summary__price",e])})]}),s.isTaxIncl&&(0,O.jsx)("div",{"data-testid":"order-summary-subtotal-incl-tax",className:"checkout-order-summary__row checkout-order-summary__row--muted",children:(0,O.jsx)("p",{children:(0,O.jsx)(_.xv,{id:"Checkout.OrderSummary.includingTaxes"})})}),null!=i&&(0,O.jsxs)("div",{"data-testid":"order-summary-shipping",className:"checkout-order-summary__row",children:[(0,O.jsx)("p",{children:(0,O.jsx)(_.xv,{id:"Checkout.OrderSummary.shipping"})}),0===i.amount?(0,O.jsx)("p",{className:"checkout-order-summary__price",children:(0,O.jsx)(_.xv,{id:"Checkout.OrderSummary.freeShipping"})}):(0,O.jsx)(w.t,{amount:i.amount,currency:i.currency,className:(0,o.S)(["checkout-order-summary__price",e])})]}),null!=m&&!m.breakdown&&(0,O.jsxs)("div",{"data-testid":"order-summary-tax",className:"checkout-order-summary__row",children:[(0,O.jsx)("p",{children:(0,O.jsx)(_.xv,{id:"Checkout.OrderSummary.tax"})}),(0,O.jsx)(w.t,{amount:m.amount,currency:m.currency,className:(0,o.S)(["checkout-order-summary__price",e])})]}),null!=m&&m.breakdown&&(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(k.i,{variant:"secondary"}),(0,O.jsx)("div",{className:"checkout-order-summary__row checkout-order-summary__row--margin-bottom",children:(0,O.jsx)("p",{children:(0,O.jsx)(_.xv,{id:"Checkout.OrderSummary.taxBreakdown"})})}),m.breakdown.map((function(r){return(0,O.jsxs)("div",{"data-testid":"order-summary-tax-breakdown",className:"checkout-order-summary__row checkout-order-summary__row--muted",children:[(0,O.jsx)("p",{children:r.label}),(0,O.jsx)(w.t,{amount:r.amount.value,currency:r.amount.currency,className:(0,o.S)(["checkout-order-summary__price",e])})]},r.label)})),(0,O.jsxs)("div",{"data-testid":"order-summary-tax-breakdown-total",className:"checkout-order-summary__row checkout-order-summary__row--strong checkout-order-summary__row--margin-top",children:[(0,O.jsx)("p",{children:(0,O.jsx)(_.xv,{id:"Checkout.OrderSummary.taxTotal"})}),(0,O.jsx)(w.t,{amount:m.amount,currency:m.currency,className:(0,o.S)(["checkout-order-summary__price",e])})]}),(0,O.jsx)(k.i,{variant:"secondary"})]}),(0,O.jsxs)("div",{"data-testid":"order-summary-total-incl-tax",className:"checkout-order-summary__row checkout-order-summary__row--emphasized",children:[(0,O.jsx)("p",{children:(0,O.jsx)(_.xv,{id:"Checkout.OrderSummary.total"})}),(0,O.jsx)(w.t,{amount:u.inclTax.amount,currency:u.inclTax.currency,className:(0,o.S)(["checkout-order-summary__price",e])})]}),null!=u.exclTax&&(0,O.jsxs)("div",{"data-testid":"order-summary-total-excl-tax",className:"checkout-order-summary__row checkout-order-summary__row--muted",children:[(0,O.jsx)("p",{children:(0,O.jsx)(_.xv,{id:"Checkout.OrderSummary.totalExclTax"})}),(0,O.jsx)(w.t,{amount:u.exclTax.amount,currency:u.exclTax.currency,className:(0,o.S)(["checkout-order-summary__price",e])})]})]}))},z=(t(1442),t(9799)),E=function(){return(0,O.jsxs)(z.O,{className:"order-summary__skeleton",children:[(0,O.jsx)(z.d,{variant:"heading",size:"medium"}),(0,O.jsx)(z.d,{variant:"empty",size:"medium"}),(0,O.jsx)(z.d,{size:"large",isFull:!0,lines:3})]})},Z=0,L=t(6261);function I(r){return I="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(r){return typeof r}:function(r){return r&&"function"==typeof Symbol&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},I(r)}function F(r,e){var t=Object.keys(r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(r);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),t.push.apply(t,n)}return t}function A(r){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?F(Object(t),!0).forEach((function(e){B(r,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(t)):F(Object(t)).forEach((function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(t,e))}))}return r}function B(r,e,t){return(e=function(r){var e=function(r,e){if("object"!==I(r)||null===r)return r;var t=r[Symbol.toPrimitive];if(void 0!==t){var n=t.call(r,"string");if("object"!==I(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(r)}(r);return"symbol"===I(e)?e:String(e)}(e))in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}function G(){return G=Object.assign?Object.assign.bind():function(r){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(r[n]=t[n])}return r},G.apply(this,arguments)}var H=2;function X(){var r=(0,L.BE)(),e=r.shoppingCartDisplaySubtotal===H,t=(0,n.t)(),o=!!t,a=null==t?void 0:t.shipping_addresses,c=!(null==a||!a.length),u=null==t?void 0:t.prices,s=null==u?void 0:u.grand_total,i=!!s,m=e?null==u?void 0:u.subtotal_including_tax:null==u?void 0:u.subtotal_excluding_tax,l=(null==u?void 0:u.applied_taxes)||[],d=!!l.length,y={isLoading:!1};if(!o||!i)return y;if(y.summary={total:{inclTax:{amount:s.value,currency:s.currency}},subtotal:{amount:m.value,currency:m.currency,isTaxIncl:e}},d){var p=l.reduce((function(r,e){return r+e.amount.value}),Z),h=l[0];y.summary.tax={amount:p,currency:h.amount.currency},r.shoppingCartDisplayFullSummary&&(y.summary.tax.breakdown=l)}if(!d&&r.shoppingCartDisplayZeroTax&&(y.summary.tax={amount:Z,currency:y.summary.total.inclTax.currency}),r.shoppingCartDisplayGrandTotal){var v=y.summary.tax?y.summary.total.inclTax.amount-y.summary.tax.amount:y.summary.total.inclTax.amount;y.summary.total.exclTax={amount:v,currency:y.summary.total.inclTax.currency}}if(!c)return y;var b=a[0],f=null==b?void 0:b.selected_shipping_method;return f?(y.summary.shipping={amount:f.amount.value,currency:f.amount.currency},y):y}var Y=function(r){var e=G({},(function(r){if(null==r)throw new TypeError("Cannot destructure "+r)}(r),r)),t=X(),n=t.isLoading,o=t.summary;return(0,O.jsxs)("div",A(A({},e),{},{children:[!o&&(0,O.jsx)(E,{}),o&&(0,O.jsx)(D,{isLoading:n,summary:o})]}))}},5509:(r,e,t)=>{t.d(e,{Z:()=>u});var n=t(4933),o=t.n(n),a=t(3476),c=t.n(a)()(o());c.push([r.id,".checkout-order-summary .elsie-card__content {\n  gap: var(--spacing-xsmall);\n}\n\n.checkout-order-summary__title {\n  color: var(--color-neutral-800);\n  font: var(--type-headline-2-default-font);\n  letter-spacing: var(--type-headline-2-default-letter-spacing);\n  margin: 0;\n}\n\n.checkout-order-summary .elsie-divider--primary {\n  margin: 0 0 var(--spacing-medium) 0 !important;\n}\n\n.checkout-order-summary .elsie-divider--secondary {\n  margin: var(--spacing-xsmall) 0 var(--spacing-xsmall) 0 !important;\n}\n\n.checkout-order-summary__breakdown {\n  margin: var(--spacing-big) 0 var(--spacing-medium) 0;\n}\n\n.checkout-order-summary__breakdown .elsie-divider:last-child {\n  margin-bottom: 0;\n}\n\n.checkout-order-summary__row {\n  display: flex;\n  justify-content: space-between;\n  color: var(--color-neutral-800);\n  font: var(--type-body-1-default-font);\n  letter-spacing: var(--type-body-1-default-letter-spacing);\n}\n\n.checkout-order-summary__row--margin-top {\n  margin-top: var(--spacing-xsmall);\n}\n\n.checkout-order-summary__row--margin-bottom {\n  margin-bottom: var(--spacing-xsmall);\n}\n\n.checkout-order-summary__row .checkout-order-summary__price {\n  color: var(--color-neutral-800);\n  font: var(--type-body-1-default-font);\n  letter-spacing: var(--type-body-1-default-letter-spacing);\n}\n\n.checkout-order-summary__row p {\n  margin: 0;\n}\n\n.checkout-order-summary__row--strong {\n  font: var(--type-body-1-strong-font);\n  letter-spacing: var(--type-body-1-strong-letter-spacing);\n}\n\n.checkout-order-summary__row--strong .checkout-order-summary__price {\n  color: var(--color-neutral-800);\n  font: var(--type-body-1-strong-font);\n  letter-spacing: var(--type-body-1-strong-letter-spacing);\n}\n\n.checkout-order-summary__row--emphasized {\n  font: var(--type-body-1-emphasized-font);\n  letter-spacing: var(--type-body-1-emphasized-letter-spacing);\n  margin-top: var(--spacing-small);\n}\n\n.checkout-order-summary__row--emphasized .checkout-order-summary__price {\n  color: var(--color-neutral-800);\n  font: var(--type-body-1-emphasized-font);\n  letter-spacing: var(--type-body-1-emphasized-letter-spacing);\n}\n\n.checkout-order-summary__row--muted {\n  color: var(--color-neutral-700);\n  font: var(--type-body-2-default-font);\n  letter-spacing: var(--type-body-2-default-letter-spacing);\n  margin-top: calc(-1 * var(--spacing-xxsmall));\n}\n\n.checkout-order-summary__row--muted .checkout-order-summary__price {\n  color: var(--color-neutral-700);\n  font: var(--type-body-2-default-font);\n  letter-spacing: var(--type-body-2-default-letter-spacing);\n}\n\n.checkout-order-summary--loading .checkout-order-summary__row {\n  opacity: 0.4;\n  pointer-events: none;\n}\n\n.checkout-order-summary__loader {\n  margin: 0 auto;\n  position: absolute;\n  z-index: 999;\n  left: 0;\n  right: 0;\n  top: 50%;\n  bottom: 0;\n}\n\n.order-summary__skeleton {\n  margin-top: var(--spacing-medium);\n}\n\n@media only screen and (min-width: 320px) and (max-width: 768px) {\n  .checkout-order-summary {\n    border-top: var(--shape-border-width-2) solid var(--color-neutral-400);\n    border-bottom: var(--shape-border-width-2) solid var(--color-neutral-400);\n    border-radius: 0;\n  }\n\n  .checkout-order-summary__title {\n    display: none;\n  }\n\n  .checkout-order-summary__breakdown {\n    margin-top: 0;\n  }\n}\n",""]);const u=c}};