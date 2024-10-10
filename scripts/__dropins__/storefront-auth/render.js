(function(n,i){try{if(typeof document<"u"){const a=document.createElement("style"),o=i.styleId;for(const t in i.attributes)a.setAttribute(t,i.attributes[t]);a.setAttribute("data-dropin",o),a.appendChild(document.createTextNode(n));const r=document.querySelector('style[data-dropin="sdk"]');if(r)r.after(a);else{const t=document.querySelector('link[rel="stylesheet"], style');t?t.before(a):document.head.append(a)}}}catch(a){console.error("dropin-styles (injectCodeFunction)",a)}})(`.auth-successNotificationForm{display:flex;justify-content:center;align-items:center;flex-direction:column;border-radius:var(--shape-border-radius-2);background:var(--color-neutral-50, #fff);padding:var(--spacing-xbig) var(--spacing-small) var(--spacing-medium) var(--spacing-small)}@media (min-width: 768px){.auth-successNotificationForm{padding:var(--spacing-big) var(--spacing-xbig) var(--spacing-xxbig) var(--spacing-xbig)}}.auth-successNotificationForm.small{padding:var(--spacing-small) var(--spacing-small) var(--spacing-medium) var(--spacing-small)}.auth-successNotificationForm__title{color:var(--color-neutral-800, #2b2b2b);font:var(--type-headline-2-strong-font);letter-spacing:var(--type-details-caption-1-letter-spacing);margin-bottom:var(--spacing-medium)}.auth-successNotificationForm__content-text{color:var(--color-neutral-800, #2b2b2b);font:var(--type-body-1-default-font);letter-spacing:var(--type-body-1-default-letter-spacing);text-align:center;margin-bottom:var(--spacing-xxbig)}.auth-successNotificationForm__button--top{margin-bottom:var(--spacing-xsmall)}
.auth-emailConfirmationForm{border-radius:8px;background-color:var(--color-neutral-50, #fff);padding:var(--spacing-small) var(--spacing-small) var(--spacing-medium) var(--spacing-small);text-align:start}@media (min-width: 768px){.auth-emailConfirmationForm{padding:var(--spacing-big) var(--spacing-xbig) var(--spacing-xxbig) var(--spacing-xbig)}}.auth-emailConfirmationForm__title{font:var(--type-headline-2-default-font);letter-spacing:var(--type-display-1-letter-spacing);color:var(--color-neutral-800, #3d3d3d)}.auth-emailConfirmationForm__subtitle{display:block;font:var(--type-details-caption-2-font);letter-spacing:var(--type-button-2-letter-spacing);color:var(--color-neutral-700, #666666)}.auth-emailConfirmationForm__notification{margin-bottom:var(--spacing-medium)}.auth-emailConfirmationForm.small{padding:var(--spacing-small) var(--spacing-small) var(--spacing-medium) var(--spacing-small)}.auth-emailConfirmationForm.small .auth-emailConfirmationForm-buttons{grid-template-columns:1fr;gap:20px 0}.auth-emailConfirmationForm-buttons{display:grid;grid-template-columns:auto auto;justify-content:space-between}@media (max-width: 768px){.auth-emailConfirmationForm-buttons{gap:20px 0;grid-template-columns:1fr}}.auth-emailConfirmationForm__text{display:block;font-family:var(--type-body-1-default-font);letter-spacing:var(--type-display-1-letter-spacing);color:var(--neutrals-neutral-800);padding:var(--spacing-big) 0}.auth-emailConfirmationForm.small .auth-emailConfirmationForm-buttons{justify-content:center;flex-wrap:wrap}.auth-emailConfirmationForm.small .auth-emailConfirmationForm-buttons{flex-basis:100%;margin-top:var(--spacing-medium)}.auth-emailConfirmationForm.small .auth-emailConfirmationForm-buttons>span{display:none}.auth-emailConfirmationForm-buttons>span{border:1px solid var(--color-brand-500);margin:var(--spacing-small) var(--spacing-xsmall);font:var(--type-button-2-font)}@media (max-width: 768px){.auth-emailConfirmationForm-buttons{justify-content:center;flex-wrap:wrap}.auth-emailConfirmationForm-buttons{flex-basis:100%;margin-top:var(--spacing-medium)}.auth-emailConfirmationForm-buttons>span{display:none}}
.auth-resetPasswordForm{border-radius:var(--shape-border-radius-2);background-color:var(--color-neutral-50, #fff);padding:var(--spacing-small) var(--spacing-small) var(--spacing-medium) var(--spacing-small)}@media (min-width: 768px){.auth-resetPasswordForm{padding:var(--spacing-big) var(--spacing-xxbig) var(--spacing-xxbig) var(--spacing-xxbig)}}.auth-resetPasswordForm.small{padding:var(--spacing-small) var(--spacing-small) var(--spacing-medium) var(--spacing-small)}.auth-resetPasswordForm.small .auth-resetPasswordForm__form__item,.auth-resetPasswordForm.small .auth-resetPasswordForm__title{margin-bottom:var(--spacing-medium)}.auth-resetPasswordForm__form{display:grid;grid-template-columns:1fr}.auth-resetPasswordForm__form__item{margin-bottom:var(--spacing-medium)}.auth-resetPasswordForm__buttons{display:grid;grid-template-columns:1fr;gap:20px 0}.auth-resetPasswordForm.small{grid-template-columns:1fr;gap:20px 0}.auth-resetPasswordForm__notification{margin-bottom:var(--spacing-medium)}.auth-resetPasswordForm__title{margin-bottom:var(--spacing-big)}@media (min-width: 768px){.auth-resetPasswordForm__title{margin-bottom:var(--spacing-xxbig)}}@media (min-width: 600px){.auth-resetPasswordForm__buttons{grid-template-columns:auto auto;justify-content:space-between}}
.auth-updatePasswordForm{border-radius:var(--shape-border-radius-2);background-color:var(--color-neutral-50, #fff);padding:var(--spacing-small) var(--spacing-small) var(--spacing-medium) var(--spacing-small)}@media (min-width: 768px){.auth-updatePasswordForm{padding:var(--spacing-big) var(--spacing-xxbig) var(--spacing-xxbig) var(--spacing-xxbig)}}.auth-updatePasswordForm.small{padding:var(--spacing-small) var(--spacing-small) var(--spacing-medium) var(--spacing-small)}.auth-updatePasswordForm.small .auth-updatePasswordForm__form__item{margin-bottom:var(--spacing-big)}.auth-updatePasswordForm.small .auth-updatePasswordForm__title{margin-bottom:var(--spacing-small)}.auth-updatePasswordForm__title{margin-bottom:var(--spacing-big)}@media (min-width: 768px){.auth-updatePasswordForm__title{margin-bottom:var(--spacing-xxbig)}}.auth-updatePasswordForm__form .auth-updatePasswordForm__form__item{margin-bottom:var(--spacing-big)}@media (min-width: 768px){.auth-updatePasswordForm__form .auth-updatePasswordForm__form__item{margin-bottom:var(--spacing-xxbig)}}.auth-updatePasswordForm__notification{margin-bottom:var(--spacing-medium)}
.auth-signInForm{border-radius:var(--shape-border-radius-2);background-color:var(--color-neutral-50, #fff);padding:var(--spacing-small) var(--spacing-small) var(--spacing-medium) var(--spacing-small)}@media (min-width: 768px){.auth-signInForm{padding:var(--spacing-big) var(--spacing-xxbig) var(--spacing-xxbig) var(--spacing-xxbig)}}.auth-signInForm__notification{margin-bottom:var(--spacing-medium)}.auth-signInForm.small{padding:var(--spacing-small) var(--spacing-small) var(--spacing-medium) var(--spacing-small)}.auth-signInForm.small .auth-signInForm__form__email,.auth-signInForm.small .auth-signInForm__form__password,.auth-signInForm.small .auth-signInForm__title{margin-bottom:var(--spacing-medium)}.auth-signInForm.small .auth-signInForm__form__buttons{grid-template-columns:1fr;gap:20px 0}.auth-signInForm__title{margin-bottom:var(--spacing-big)}@media (min-width: 768px){.auth-signInForm__title{margin-bottom:var(--spacing-xxbig)}}.auth-signInForm__form{display:grid;grid-template-columns:1fr}.auth-signInForm__form__email{margin-bottom:var(--spacing-medium)}.auth-signInForm__form__password{margin-bottom:var(--spacing-big)}.auth-signInForm__form__buttons{display:grid;grid-template-columns:auto auto;justify-content:space-between}@media (max-width: 768px){.auth-signInForm__form__buttons{gap:20px 0;grid-template-columns:1fr}}.auth-signInForm.small .auth-signInForm__form__buttons .auth-signInForm__form__buttons--combine{justify-content:center;flex-wrap:wrap}.auth-signInForm.small .auth-signInForm__form__buttons .auth-signInForm__form__buttons--combine .auth-signInForm__button--signup{flex-basis:100%;margin-top:20px}.auth-signInForm.small .auth-signInForm__form__buttons .auth-signInForm__form__buttons--combine>span{display:none}.auth-signInForm__form__buttons .auth-signInForm__form__buttons--combine{display:flex}.auth-signInForm__form__buttons .auth-signInForm__form__buttons--combine>span{border:var(--shape-border-width-1) solid var(--color-brand-500);margin:13px 10px;font:var(--type-button-2-font)}.auth-signInForm__resend-email-notification button{font:var(--type-button-3-font);color:var(--textColor);display:inline;background-color:transparent;border:none;cursor:pointer;padding:0;margin:0}.auth-signInForm__resend-email-notification button:hover{color:var(--color-brand-700);text-decoration:solid underline var(--color-brand-700);text-underline-offset:6px;color:var(--color-informational-500)}@media (max-width: 768px){.auth-signInForm__form__buttons .auth-signInForm__form__buttons--combine{justify-content:center;flex-wrap:wrap}.auth-signInForm__form__buttons .auth-signInForm__form__buttons--combine .auth-signInForm__button--signup{flex-basis:100%;margin-top:20px}.auth-signInForm__form__buttons .auth-signInForm__form__buttons--combine>span{display:none}}
.auth-signUpForm{border-radius:var(--shape-border-radius-2);background-color:var(--color-neutral-50, #fff);padding:var(--spacing-small) var(--spacing-small) var(--spacing-medium) var(--spacing-small)}@media (min-width: 768px){.auth-signUpForm{padding:var(--spacing-big) var(--spacing-xxbig) var(--spacing-xxbig) var(--spacing-xxbig)}}.auth-signUpForm.small{padding:var(--spacing-small) var(--spacing-small) var(--spacing-medium) var(--spacing-small)}.auth-signUpForm.small .auth-signUpForm__title{margin-bottom:var(--spacing-small)}.auth-signUpForm.small .auth-signUpForm__form__field .auth-signUpForm__form__field:nth-child(2),.auth-signUpForm.small .auth-signUpForm__form__field .auth-signUpForm__form__field:nth-child(3){flex-basis:100%}.auth-signUpForm.small .auth-signUpForm__form{grid-template-columns:1fr}.auth-signUpForm__title{margin-bottom:var(--spacing-big)}@media (min-width: 768px){.auth-signUpForm__title{margin-bottom:var(--spacing-xxbig)}}.auth-signUpForm__notification{margin-bottom:var(--spacing-medium)}.auth-signUpForm__form{display:flex;flex-wrap:wrap;flex-direction:row;gap:0 13px}.auth-signUpForm__form__field{margin-bottom:var(--spacing-medium);flex-basis:100%;flex-grow:1;flex-shrink:0}.auth-signUpForm__checkbox{margin-bottom:12px}.auth-signUpForm__automatic-login{margin-top:12px}.auth-signUpForm__form__field:nth-child(2),.auth-signUpForm__form__field:nth-child(3){flex-shrink:1;flex-grow:1;flex-basis:100%}.auth-signUpForm-buttons{flex-basis:100%;display:grid;grid-template-columns:1fr;gap:var(--spacing-medium) 0;justify-content:center;grid-area:buttons}@media (min-width: 768px){.auth-signUpForm-buttons{display:grid;grid-template-columns:auto auto;justify-content:space-between}.auth-signUpForm__form__field:nth-child(2),.auth-signUpForm__form__field:nth-child(3){flex-shrink:1;flex-grow:.5;flex-basis:48%}}
.auth-button{position:relative}.auth-button__loader-wrapper{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);opacity:0;display:none}.auth-custom-button__loader{width:20px;height:20px;border:5px solid #fff;border-radius:50%;display:inline-block;box-sizing:border-box;position:relative;animation:pulse 1s linear infinite}.auth-button__loader:after{content:"";position:absolute;width:20px;height:20px;border:5px solid #fff;border-radius:50%;display:inline-block;box-sizing:border-box;left:50%;top:50%;transform:translate(-50%,-50%);animation:scaleUp 1s linear infinite}@keyframes scaleUp{0%{transform:translate(-50%,-50%) scale(0)}60%,to{transform:translate(-50%,-50%) scale(1)}}@keyframes pulse{0%,60%,to{transform:scale(1)}80%{transform:scale(1.2)}}.auth-button.enableLoader .auth-button__text{opacity:0}.auth-button.enableLoader .auth-button__loader-wrapper{opacity:1;display:inline-flex}`,{styleId:"Auth"});
import{jsx as s}from"@dropins/tools/preact-jsx-runtime.js";import{deepmerge as l,Render as u}from"@dropins/tools/lib.js";import{useState as m,useEffect as f}from"@dropins/tools/preact-hooks.js";import{UIProvider as g}from"@dropins/tools/components.js";import{events as p}from"@dropins/tools/event-bus.js";import"@dropins/tools/recaptcha.js";import{c as y}from"./chunks/initialize.js";const h={PasswordValidationMessage:{chartTwoSymbols:"Use characters and numbers or symbols",chartThreeSymbols:"Use characters, numbers and symbols",chartFourSymbols:"Use uppercase characters, lowercase characters, numbers and symbols",messageLengthPassword:"At least {minLength} characters long"},ResetPasswordForm:{title:"Reset your password",buttonPrimary:"Reset password",buttonSecondary:"Back to sign in"},SignInForm:{title:"Sign in",buttonPrimary:"Sign in",buttonSecondary:"Sign up",buttonTertiary:"Forgot password?"},SignUpForm:{title:"Sign up",buttonPrimary:"Create account",buttonSecondary:"Already a member? Sign in",privacyPolicyDefaultText:"I’ve read and accept the Terms of Use and Privacy Policy.",subscribedDefaultText:"Subscribe to our newsletter and be the first to know about new arrivals, sales and exclusive offers.",keepMeLoggedText:"Keep me logged in after account creation",failedCreateCustomerAddress:"Failed to create customer addresses:"},UpdatePasswordForm:{title:"Update password",buttonPrimary:"Update password"},FormText:{requiredFieldError:"This is a required field."},EmailConfirmationForm:{title:"Verify your email address",subtitle:"We`ve sent an email to",mainText:"Check your inbox and click on the link we just send you to confirm your email address and activate your account.",buttonSecondary:"Resend email",buttonPrimary:"Close",accountConfirmMessage:"Account confirmed",accountConfirmationEmailSuccessMessage:"Congratulations! Your account at {email} email has been successfully confirmed."},Notification:{errorNotification:"Your password update failed due to validation errors. Please check your information and try again.",updatePasswordMessage:"The password has been updated.",updatePasswordActionMessage:"Sign in",successPasswordResetEmailNotification:"If there is an account associated with {email} you will receive an email with a link to reset your password.",resendEmailNotification:{informationText:"This account is not confirmed.",buttonText:"Resend confirmation email"},emailConfirmationMessage:"Please check your email for confirmation link.",technicalErrors:{technicalErrorSendEmail:"A technical error occurred while trying to send the email. Please try again later."}},SuccessNotification:{headingText:"Welcome!",messageText:"We are glad to see you!",primaryButtonText:"Continue shopping",secondaryButtonText:"Logout"},Api:{customerTokenErrorMessage:"Unable to log in. Please try again later or contact support if the issue persists."},InputPassword:{placeholder:"Password",floatingLabel:"Password *"}},b={Auth:h},w={default:b},P=({children:i})=>{var o,r;const[e,n]=m("en_US"),c=(r=(o=y)==null?void 0:o.getConfig())==null?void 0:r.langDefinitions;f(()=>{const t=p.on("locale",a=>{a!==e&&n(a)},{eager:!0});return()=>{t==null||t.off()}},[e]);const d=l(w,c??{});return s(g,{lang:e,langDefinitions:d,children:i})},F=new u(s(P,{}));export{F as render};