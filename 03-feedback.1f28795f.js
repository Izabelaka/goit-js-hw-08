!function(){const e=document.querySelector(".feedback-form"),t=e.elements.email,a=e.elements.message,l="feedback-form-state",o=_.throttle((()=>{const e={email:t.value,message:a.value};localStorage.setItem(l,JSON.stringify(e))}),500);e.addEventListener("input",o),window.addEventListener("DOMContentLoaded",(()=>{const e=JSON.parse(localStorage.getItem(l));e&&(t.value=e.email,a.value=e.message)})),e.addEventListener("submit",(e=>{e.preventDefault();const o={email:t.value,message:a.value};console.log(o),t.value="",a.value="",localStorage.removeItem(l)}))}();
//# sourceMappingURL=03-feedback.1f28795f.js.map
