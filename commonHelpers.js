import"./assets/modulepreload-polyfill-3cfb730f.js";import{f as i,i as l}from"./assets/vendor-77e16229.js";let s;const o=document.querySelector("button[data-start]"),m=document.querySelector("span[data-days]"),h=document.querySelector("span[data-hours]"),f=document.querySelector("span[data-minutes]"),p=document.querySelector("span[data-seconds]");o.disabled=!0;const y={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){t[0]>Date.now()?(s=t[0],o.disabled=!1):l.error({title:"Error",titleColor:"#FFF",messageColor:"#FFF",message:"Please choose a date in the future",backgroundColor:"#EF4040",position:"topRight",theme:"dark",timeout:5e3})}},C=document.querySelector("#datetime-picker");i(C,y);o.addEventListener("click",()=>{o.disabled=!0,S()});function S(){const t=setInterval(()=>{const n=s-Date.now();if(n<=0){clearInterval(t);return}const r=b(n);F(r)},1e3)}function b(t){const a=Math.floor(t/864e5),u=Math.floor(t%864e5/36e5),c=Math.floor(t%864e5%36e5/6e4),d=Math.floor(t%864e5%36e5%6e4/1e3);return{days:a,hours:u,minutes:c,seconds:d}}function e(t){return t.toString().padStart(2,"0")}function F(t){m.textContent=e(t.days),h.textContent=e(t.hours),f.textContent=e(t.minutes),p.textContent=e(t.seconds)}
//# sourceMappingURL=commonHelpers.js.map
