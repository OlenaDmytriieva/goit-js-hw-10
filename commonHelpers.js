import"./assets/modulepreload-polyfill-3cfb730f.js";import{f as l,i as m}from"./assets/vendor-77e16229.js";let s;const o=document.querySelector("button[data-start]"),h=document.querySelector("span[data-days]"),f=document.querySelector("span[data-hours]"),p=document.querySelector("span[data-minutes]"),y=document.querySelector("span[data-seconds]");o.disabled=!0;const C={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){t[0]>Date.now()?(s=t[0],o.disabled=!1):m.error({title:"Error",titleColor:"#FFF",messageColor:"#FFF",message:"Please choose a date in the future",backgroundColor:"#EF4040",position:"topRight",theme:"dark",timeout:5e3})}},a=document.querySelector("#datetime-picker");l(a,C);o.addEventListener("click",()=>{o.disabled=!0,a.disabled=!0,S()});function S(){const t=setInterval(()=>{const n=s-Date.now();if(n<=0){clearInterval(t);return}const r=b(n);F(r)},1e3)}function b(t){const u=Math.floor(t/864e5),c=Math.floor(t%864e5/36e5),d=Math.floor(t%864e5%36e5/6e4),i=Math.floor(t%864e5%36e5%6e4/1e3);return{days:u,hours:c,minutes:d,seconds:i}}function e(t){return t.toString().padStart(2,"0")}function F(t){h.textContent=e(t.days),f.textContent=e(t.hours),p.textContent=e(t.minutes),y.textContent=e(t.seconds)}
//# sourceMappingURL=commonHelpers.js.map
