import{signal as e,effect as n}from"@dropins/tools/signals.js";import{events as s}from"@dropins/tools/event-bus.js";const o=e(!0),i=e({pending:!1,data:void 0});n(()=>{var a;(a=i.value.data)!=null&&a.isVirtual&&(o.value=!1)});n(()=>{i.value.pending||s.emit("checkout/data",i.value.data||null)});const t=e({pending:!1,data:void 0});n(()=>{t.value.pending||t.value.data&&s.emit("checkout/customer",t.value.data)});const g=e({pending:!1,data:void 0}),u=e(void 0),c=e(),v=e({data:void 0,pending:!1});var r=(a=>(a.EXCLUDING_TAX="EXCLUDING_TAX",a.INCLUDING_EXCLUDING_TAX="INCLUDING_AND_EXCLUDING_TAX",a.INCLUDING_TAX="INCLUDING_TAX",a))(r||{});export{r as T,v as a,c as b,i as c,t as d,g as e,o as i,u as s};
