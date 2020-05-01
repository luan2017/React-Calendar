"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e,t=require("react"),n=(e=t)&&"object"==typeof e&&"default"in e?e.default:e;function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,c=new Array(t);n<t;n++)c[n]=e[n];return c}function a(e,t){if(e){if("string"==typeof e)return c(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?c(e,t):void 0}}function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],c=!0,a=!1,i=void 0;try{for(var l,r=e[Symbol.iterator]();!(c=(l=r.next()).done)&&(n.push(l.value),!t||n.length!==t);c=!0);}catch(e){a=!0,i=e}finally{try{c||null==r.return||r.return()}finally{if(a)throw i}}return n}}(e,t)||a(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}const l={YYYY:"getFullYear",mm:"getMonth",dd:"getDate",EE:"getDay",MM:"getMonth",DD:"getDate"};class r extends Date{constructor(e){super(e?new Date(e):new Date)}getFormatPattern(e="YYYY/MM/DD"){const t=e.split("");return t.reduce((e,n,c)=>{const a=e.findIndex(e=>e.includes(n));return t[c-1]===n&&(i=n,Boolean(i&&i.match(/[A-Z, a-z]/)))?(e[a]+=n,e):(e.push(n),e);var i},[])}getFormatString(e,t,n=[],c=[]){const a={EE:()=>{const c=t&&n[this[t]()];return 2===e.length?c&&c.substr(0,3)||"":c},MM:()=>{const n=t&&c[this[t]()];return 2===e.length?n&&n.substr(0,3)||"":n}};return a[e]&&"function"==typeof a[e]?a[e]():e}format({dayNames:e=[],months:t=[],pattern:n="EE, MM YYYY"}){return this.getFormatPattern(n).map(n=>{const c=l[n];return n.match(/[A-Z]/)&&!n.includes("YYYY")?this.getFormatString(n,c,e,t):n.match(/[A-Z]/)&&!n.includes("mm")?Number(this[c]())+1:c?this[c]():n}).join("")}set(e,t){const n={month:e=>this.setMonth(e),date:e=>this.setDate(e)}[e];return n&&n(t),this}get(e){return{date:this.getDate(),day:this.getDay(),month:this.getMonth(),year:this.getFullYear()}[e]}reset(){return this.setHours(0,0,0,0),this}}const o=t.createContext({range:new Map([[(new r).reset().toJSON(),new r]])});function s(e,t){void 0===t&&(t={});var n=t.insertAt;if(e&&"undefined"!=typeof document){var c=document.head||document.getElementsByTagName("head")[0],a=document.createElement("style");a.type="text/css","top"===n&&c.firstChild?c.insertBefore(a,c.firstChild):c.appendChild(a),a.styleSheet?a.styleSheet.cssText=e:a.appendChild(document.createTextNode(e))}}function u({currentYear:e,currentDate:t,dayNames:c,months:a,onClick:i}){const l=new r(t).format({dayNames:c,months:a});return n.createElement(n.Fragment,null,n.createElement("div",{className:"header"},n.createElement("div",{onClick:i,className:"header-container full-width margin-item"},e,n.createElement("div",{className:"header-item-grow-2"})),n.createElement("div",{className:"margin-item header-date"},l)))}s(".custom-calendar-app{font-family:sans-serif;text-align:center;box-sizing:border-box;width:fit-content;margin:0 auto;-webkit-touch-callout:none;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}@media only screen and (max-width:600px){.App{width:auto}}@media only screen and (min-width:1300px){.calendar{width:28rem}}@media only screen and (min-width:650px) and (max-width:1299px){.calendar{width:25rem}}.calendar{height:auto;background-color:#fff;box-shadow:1px 4px 4px grey;box-sizing:border-box}.header{padding:1em;background:#306c34;color:#fafafa;flex-wrap:wrap}.header,.header-container{display:flex}.full-width{width:100%}.header-item{flex-grow:1}.header-item-grow-2{flex-grow:2}.header-item-align-left{text-align:left}.header-year{font-weight:500;font-size:1em}.header-date{font-size:2rem;font-family:Roboto}.margin-item{margin:.5rem}.flex-grow-1{flex-grow:1}.footer-buttons{display:flex;justify-content:flex-end;align-items:center;padding:1rem}.button{background:transparent;color:#306c34;border:none}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImN1c3RvbS1jYWxlbmRhci1zdHlsZXMuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHFCQUNFLHNCQUF1QixDQUN2QixpQkFBa0IsQ0FDbEIscUJBQXNCLENBQ3RCLGlCQUFrQixDQUNsQixhQUFjLENBQ2QsMEJBQTJCLENBQzNCLHdCQUF5QixDQUN6Qix1QkFBd0IsQ0FDeEIscUJBQXNCLENBQ3RCLG9CQUFxQixDQUNyQixnQkFFRixDQUVBLHlDQUNFLEtBQ0UsVUFDRixDQUNGLENBRUEsMENBQ0UsVUFDRSxXQUNGLENBQ0YsQ0FFQSxnRUFDRSxVQUNFLFdBQ0YsQ0FDRixDQUVBLFVBQ0UsV0FBWSxDQUNaLHFCQUF1QixDQUN2QiwyQkFBNEIsQ0FDNUIscUJBQ0YsQ0FFQSxRQUVFLFdBQVksQ0FDWixrQkFBbUIsQ0FDbkIsYUFBYyxDQUNkLGNBQ0YsQ0FFQSwwQkFQRSxZQVNGLENBRUEsWUFDRSxVQUNGLENBRUEsYUFDRSxXQUNGLENBRUEsb0JBQ0UsV0FDRixDQUVBLHdCQUNFLGVBQ0YsQ0FFQSxhQUNFLGVBQWdCLENBQ2hCLGFBQ0YsQ0FFQSxhQUNFLGNBQWUsQ0FDZixrQkFDRixDQUVBLGFBQ0UsWUFDRixDQUVBLGFBQ0UsV0FDRixDQUVBLGdCQUNFLFlBQWEsQ0FDYix3QkFBeUIsQ0FDekIsa0JBQW1CLENBQ25CLFlBQ0YsQ0FFQSxRQUNFLHNCQUF1QixDQUN2QixhQUFjLENBQ2QsV0FDRiIsImZpbGUiOiJjdXN0b20tY2FsZW5kYXItc3R5bGVzLmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jdXN0b20tY2FsZW5kYXItYXBwIHtcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xuICBtYXJnaW46IDAgYXV0bztcbiAgLXdlYmtpdC10b3VjaC1jYWxsb3V0OiBub25lOyAvKiBpT1MgU2FmYXJpICovXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7IC8qIFNhZmFyaSAqL1xuICAta2h0bWwtdXNlci1zZWxlY3Q6IG5vbmU7IC8qIEtvbnF1ZXJvciBIVE1MICovXG4gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7IC8qIE9sZCB2ZXJzaW9ucyBvZiBGaXJlZm94ICovXG4gIC1tcy11c2VyLXNlbGVjdDogbm9uZTsgLyogSW50ZXJuZXQgRXhwbG9yZXIvRWRnZSAqL1xuICB1c2VyLXNlbGVjdDogbm9uZTsgLyogTm9uLXByZWZpeGVkIHZlcnNpb24sIGN1cnJlbnRseVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1cHBvcnRlZCBieSBDaHJvbWUsIE9wZXJhIGFuZCBGaXJlZm94ICovXG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgLkFwcCB7XG4gICAgd2lkdGg6IGF1dG87XG4gIH1cbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMzAwcHgpIHtcbiAgLmNhbGVuZGFyIHtcbiAgICB3aWR0aDogMjhyZW07XG4gIH1cbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2NTBweCkgYW5kIChtYXgtd2lkdGg6IDEyOTlweCkge1xuICAuY2FsZW5kYXIge1xuICAgIHdpZHRoOiAyNXJlbTtcbiAgfVxufVxuXG4uY2FsZW5kYXIge1xuICBoZWlnaHQ6IGF1dG87XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBib3gtc2hhZG93OiAxcHggNHB4IDRweCBncmF5O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4uaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgcGFkZGluZzogMWVtO1xuICBiYWNrZ3JvdW5kOiAjMzA2YzM0O1xuICBjb2xvcjogI2ZhZmFmYTtcbiAgZmxleC13cmFwOiB3cmFwO1xufVxuXG4uaGVhZGVyLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5mdWxsLXdpZHRoIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5oZWFkZXItaXRlbSB7XG4gIGZsZXgtZ3JvdzogMTtcbn1cblxuLmhlYWRlci1pdGVtLWdyb3ctMiB7XG4gIGZsZXgtZ3JvdzogMjtcbn1cblxuLmhlYWRlci1pdGVtLWFsaWduLWxlZnQge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4uaGVhZGVyLXllYXIge1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDFlbTtcbn1cblxuLmhlYWRlci1kYXRlIHtcbiAgZm9udC1zaXplOiAycmVtO1xuICBmb250LWZhbWlseTogUm9ib3RvO1xufVxuXG4ubWFyZ2luLWl0ZW0ge1xuICBtYXJnaW46IDAuNXJlbSAwLjVyZW07XG59XG5cbi5mbGV4LWdyb3ctMSB7XG4gIGZsZXgtZ3JvdzogMTtcbn1cblxuLmZvb3Rlci1idXR0b25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMXJlbTtcbn1cblxuLmJ1dHRvbiB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBjb2xvcjogIzMwNmMzNDtcbiAgYm9yZGVyOiBub25lO1xufVxuIl19 */");function b({currentYear:e,currentMonth:t,currentDate:c,weekDays:a=[],monthStructure:i,dates:l=new Map,onChange:o,type:s}){const u=a=>Object.keys(i).map(e=>e).map(u=>{let b="calendar-days-item-spacing-day";const d=i[u][a],g=(n=>{if(n){return new r("".concat(e,"-").concat(t+1,"-").concat(n," 00:00:00"))}return new r})(d).toJSON(),m={onlydate:()=>d===c.get("date"),range:()=>d&&l.get(g),selector:()=>d&&l.get(g)};return m[s]&&m[s]()&&(b+=" calendar-days-number-color-black"),n.createElement("div",{key:"current-day-".concat(i[u][a]),className:b,onClick:o(i[u][a])},i[u][a])});return n.createElement("div",{className:"calendar-days"},a.map((e,t)=>n.createElement("div",{key:"week-".concat(t+1),className:"calendar-days-item"},"".concat(e.substr(0,3)),n.createElement("div",null,u(t+1,e.substr(0,3))))))}s(".calendar-days{display:flex;box-sizing:border-box}.calendar-days-item{flex-grow:1;font-size:1rem;color:grey;text-align:center}.calendar-days-item-spacing-day{margin:2%;padding:.5rem;min-height:38px;max-height:38px;display:flex;justify-content:center;align-items:center}.calendar-days-numbers{padding:2rem;color:grey}.calendar-days-number-color-black{color:#f0f0f0;border-radius:5px;background-color:#306c34}.calendar-day-months{display:flex;width:100%;flex-flow:wrap}.calendar-days-numbers{flex-grow:1;min-width:3rem;font-size:1rem;color:#000}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNhbGVuZGFyRGF5cy5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZUFDRSxZQUFhLENBQ2IscUJBQ0YsQ0FFQSxvQkFDRSxXQUFZLENBQ1osY0FBZSxDQUNmLFVBQVcsQ0FDWCxpQkFDRixDQUVBLGdDQUNFLFNBQXdCLENBQ3hCLGFBQWUsQ0FDZixlQUFnQixDQUNoQixlQUFnQixDQUNoQixZQUFhLENBQ2Isc0JBQXVCLENBQ3ZCLGtCQUNGLENBRUEsdUJBQ0UsWUFBYSxDQUdiLFVBQ0YsQ0FFQSxrQ0FDRSxhQUFjLENBQ2QsaUJBQWtCLENBQ2xCLHdCQUNGLENBRUEscUJBQ0UsWUFBYSxDQUNiLFVBQVcsQ0FDWCxjQUNGLENBRUEsdUJBQ0UsV0FBWSxDQUNaLGNBQWUsQ0FDZixjQUFlLENBQ2YsVUFDRiIsImZpbGUiOiJDYWxlbmRhckRheXMuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhbGVuZGFyLWRheXMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4uY2FsZW5kYXItZGF5cy1pdGVtIHtcbiAgZmxleC1ncm93OiAxO1xuICBmb250LXNpemU6IDFyZW07XG4gIGNvbG9yOiBncmF5O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5jYWxlbmRhci1kYXlzLWl0ZW0tc3BhY2luZy1kYXkge1xuICBtYXJnaW46IGNhbGMoMTAwJSAtIDk4JSk7XG4gIHBhZGRpbmc6IDAuNXJlbTtcbiAgbWluLWhlaWdodDogMzhweDtcbiAgbWF4LWhlaWdodDogMzhweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5jYWxlbmRhci1kYXlzLW51bWJlcnMge1xuICBwYWRkaW5nOiAycmVtO1xuICBmbGV4LWdyb3c6IDE7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgY29sb3I6IGdyYXk7XG59XG5cbi5jYWxlbmRhci1kYXlzLW51bWJlci1jb2xvci1ibGFjayB7XG4gIGNvbG9yOiAjZjBmMGYwO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzMDZjMzQ7XG59XG5cbi5jYWxlbmRhci1kYXktbW9udGhzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDEwMCU7XG4gIGZsZXgtZmxvdzogd3JhcDtcbn1cblxuLmNhbGVuZGFyLWRheXMtbnVtYmVycyB7XG4gIGZsZXgtZ3JvdzogMTtcbiAgbWluLXdpZHRoOiAzcmVtO1xuICBmb250LXNpemU6IDFyZW07XG4gIGNvbG9yOiBibGFjaztcbn1cbiJdfQ== */");function d(){return n.createElement("div",{style:{width:"100%",height:"auto",display:"flex",justifyContent:"center"}},n.createElement("svg",{width:"24px",height:"24px",viewBox:"0 0 24 24"},n.createElement("path",{fill:"currentColor",d:"M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z"})))}function g(){return n.createElement("div",{style:{width:"100%",height:"auto",display:"flex",justifyContent:"center"}},n.createElement("svg",{width:"24px",height:"24px",viewBox:"0 0 24 24"},n.createElement("path",{fill:"currentColor",d:"M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"})))}s(".calendar-months-container{width:100%;padding:1rem;justify-content:space-between;box-sizing:border-box}.calendar-arrows{display:flex;justify-content:space-around;align-items:center;font-weight:600;color:grey}.calendar-month-text{color:#333;text-align:center}.display-flex{display:flex;justify-content:center;align-items:center}.flex-end{display:flex;justify-content:flex-end}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNhbGVuZGFyTW9udGguY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDJCQUNFLFVBQVcsQ0FDWCxZQUFhLENBQ2IsNkJBQThCLENBQzlCLHFCQUNGLENBRUEsaUJBQ0UsWUFBYSxDQUNiLDRCQUE2QixDQUM3QixrQkFBbUIsQ0FDbkIsZUFBZ0IsQ0FDaEIsVUFDRixDQUVBLHFCQUNFLFVBQVcsQ0FDWCxpQkFDRixDQUVBLGNBQ0UsWUFBYSxDQUNiLHNCQUF1QixDQUN2QixrQkFDRixDQUVBLFVBQ0UsWUFBYSxDQUNiLHdCQUNGIiwiZmlsZSI6IkNhbGVuZGFyTW9udGguY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhbGVuZGFyLW1vbnRocy1jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMXJlbTtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4uY2FsZW5kYXItYXJyb3dzIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiBncmF5O1xufVxuXG4uY2FsZW5kYXItbW9udGgtdGV4dCB7XG4gIGNvbG9yOiAjMzMzO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5kaXNwbGF5LWZsZXgge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmZsZXgtZW5kIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn1cblxuLyogLmNhbGVuZGFyLW1vbnRoLWJ1dHRvbnMge1xufSAqL1xuXG4vKiBAa2V5ZnJhbWVzIGJ1dHRvbiB7XG4gIGZyb20ge31cbn0gKi9cblxuLyogLmNhbGVuZGFyLW1vbnRoLWJ1dHRvbnM6YWN0aXZlIHtcbiAgYmFja2dyb3VuZDogIzk5OTtcbiAgYm9yZGVyOiA7XG59ICovXG4iXX0= */");function m(e){return n.createElement("button",Object.assign({type:"button"},e,{className:"custom-button ".concat(e.className?e.className:"")}),n.createElement("span",{className:"ripple"},e.label?e.label:e.children))}function Q({currentDate:e,months:c,onChange:a}){const l=i(t.useState((new r).get("month")),2),o=l[0],s=l[1],u=i(t.useState(null),2),b=u[0],Q=u[1];t.useEffect(()=>{const t=e.get("month");o!==t&&s(t);const n=e.get("year"),a="".concat(c[t]," ").concat(n);Q(a)},[e,o,c]);const x=e=>()=>{let t=o+e;t>=c.length||t<0||a(t)};return n.createElement("div",{className:"calendar-months-container"},n.createElement("div",{className:"calendar-arrows"},n.createElement("div",{className:"flex-grow-1"},n.createElement(m,{onClick:x(-1)},n.createElement(d,null))),n.createElement("div",{className:"calendar-month-text flex-grow-1"},b),n.createElement("div",{className:"flex-grow-1 flex-end"},n.createElement(m,{onClick:x(1)},n.createElement(g,null)))))}s(".custom-button,.custom-circle-button{border:none;background:transparent;display:flex;justify-content:center;padding:.5em}.custom-circle-button{border-radius:50%}.custom-button:active,.custom-button:hover{border:none;background:transparent;display:flex;justify-content:center;padding:.5em}.ripple{width:100%;background-position:50%;transition:background .8s;border:none}.ripple:hover{border:none;background:transparent radial-gradient(circle,transparent 1%,#fff 0) 50%/15000%}.ripple:active{background-color:grey;background-size:100%;transition:background 0s;border:none}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0eWxlcy5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBUUEscUNBUEUsV0FBWSxDQUNaLHNCQUF1QixDQUN2QixZQUFhLENBQ2Isc0JBQXVCLENBQ3ZCLFlBVUYsQ0FQQSxzQkFFRSxpQkFLRixDQVVBLDJDQUNFLFdBQVksQ0FDWixzQkFBdUIsQ0FDdkIsWUFBYSxDQUNiLHNCQUF1QixDQUN2QixZQUNGLENBR0EsUUFDRSxVQUFXLENBQ1gsdUJBQTJCLENBQzNCLHlCQUEyQixDQUMzQixXQUNGLENBQ0EsY0FDRSxXQUFZLENBQ1osK0VBQ0YsQ0FDQSxlQUNFLHFCQUFzQixDQUN0QixvQkFBcUIsQ0FDckIsd0JBQXlCLENBQ3pCLFdBQ0YiLCJmaWxlIjoic3R5bGVzLmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jdXN0b20tYnV0dG9uIHtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBhZGRpbmc6IDAuNWVtO1xufVxuXG4uY3VzdG9tLWNpcmNsZS1idXR0b24ge1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwYWRkaW5nOiAwLjVlbTtcbn1cblxuLmN1c3RvbS1idXR0b246YWN0aXZlIHtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBhZGRpbmc6IDAuNWVtO1xufVxuXG4uY3VzdG9tLWJ1dHRvbjpob3ZlciB7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwYWRkaW5nOiAwLjVlbTtcbn1cblxuLyogUmlwcGxlIGVmZmVjdCAqL1xuLnJpcHBsZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC44cztcbiAgYm9yZGVyOiBub25lO1xufVxuLnJpcHBsZTpob3ZlciB7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgcmFkaWFsLWdyYWRpZW50KGNpcmNsZSwgdHJhbnNwYXJlbnQgMSUsICNmZmYgMSUpIGNlbnRlci8xNTAwMCU7XG59XG4ucmlwcGxlOmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwcztcbiAgYm9yZGVyOiBub25lO1xufVxuIl19 */");const x=["January","February","March","April","May","June","July","August","September","October","November","December"],G=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],I={onlydate:0,range:1,selector:2},Z=new Date,F=Z.getFullYear()-120,B=Z.getFullYear()+120;function h({currentYear:e,onChange:c}){const a=t.useRef(),i=t.useRef();function l(e){c(e)}return t.useEffect(()=>{a&&a.current&&i&&i.current&&i.current.scrollTo(0,a.current.offsetTop-300)},[a,i]),n.createElement("div",{style:{width:"100%",height:"350px"}},n.createElement("ul",{ref:i,style:{overflow:"auto",height:"100%"}},(()=>{const t=[];for(let c=F;c<=B;c++)e===c?t.push(n.createElement("li",{key:c,ref:a,className:"year selected",onClick:()=>l(c)},n.createElement("p",null,c))):t.push(n.createElement("li",{key:c,className:"year",onClick:()=>l(c)},n.createElement("p",null,c)));return t})()))}s("ul{list-style:none;display:flex;flex-direction:column;padding:0}.year>p,.year>ul{align-items:center}.year>p{font-size:1rem;cursor:pointer;margin:10px;font-weight:400;transition:font-size .1s}.selected p{font-weight:500}.selected p,.year p:hover{font-size:1.5rem;color:#306c34}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0eWxlLmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxHQUNFLGVBQWdCLENBQ2hCLFlBQWEsQ0FDYixxQkFBc0IsQ0FDdEIsU0FDRixDQUNBLGlCQUNFLGtCQUNGLENBQ0EsUUFDRSxjQUFlLENBQ2YsY0FBZSxDQUNmLFdBQVksQ0FDWixlQUFnQixDQUNoQix3QkFDRixDQUVBLFlBR0UsZUFDRixDQUVBLDBCQUxFLGdCQUFpQixDQUNqQixhQU9GIiwiZmlsZSI6InN0eWxlLmNzcyIsInNvdXJjZXNDb250ZW50IjpbInVsIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcGFkZGluZzogMCAwIDAgMDtcbn1cbi55ZWFyID4gcCwgLnllYXIgPiB1bCB7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4ueWVhciA+IHAge1xuICBmb250LXNpemU6IDFyZW07XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgbWFyZ2luOiAxMHB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICB0cmFuc2l0aW9uOiBmb250LXNpemUgMC4xcztcbn1cblxuLnNlbGVjdGVkIHAge1xuICBmb250LXNpemU6IDEuNXJlbTtcbiAgY29sb3I6ICMzMDZjMzQ7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi55ZWFyIHA6aG92ZXIge1xuICBjb2xvcjogIzMwNmMzNDtcbiAgZm9udC1zaXplOiAxLjVyZW07XG59XG4iXX0= */");const p=e=>e%4==0&&e%100!=0||e%400==0?29:28;var N=(e=new r)=>{const t=e.get("year"),n=e.get("month")+1;return{1:31,2:p(t),3:31,4:30,5:31,6:30,7:31,8:31,9:30,10:31,11:30,12:31}[n]};function y({weekDayNames:e,monthNames:c,date:l,type:s="onlydate",value:d=[],footer:g,onChange:m=(()=>{})}){const Z=t.useContext(o),F=Z.dates,B=Z.setDates,p=i(t.useState(new r),2),y=p[0],X=p[1],W=i(t.useState(null),2),L=W[0],C=W[1],D=i(t.useState(!1),2),U=D[0],f=D[1],Y=t.useCallback(()=>{const e=N(y),t=new r(y);t.set("date",1);const n=t.get("day")+1,c=Math.ceil(e/7),i=[...new Array(c)].map((e,t)=>t+1),l=[...new Array(7)].map((e,t)=>t+1);let o=1,s=null;var u,b=function(e){if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=a(e))){var t=0,n=function(){};return{s:n,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var c,i,l=!0,r=!1;return{s:function(){c=e[Symbol.iterator]()},n:function(){var e=c.next();return l=e.done,e},e:function(e){r=!0,i=e},f:function(){try{l||null==c.return||c.return()}finally{if(r)throw i}}}}(i);try{for(b.s();!(u=b.n()).done;){const t=u.value,c=l.reduce((c,a)=>(a>=n&&!s&&(s={},s[t]||(s[t]={}),c[a]=o),o<=e&&s&&(s[t]||(s[t]={}),c[a]=o++),c),{});s[t]=c}}catch(e){b.e(e)}finally{b.f()}C(s)},[y]);function V(e){const t=new r(y);t.set("month",e),X(t),Y()}t.useEffect(()=>{l||Y()},[l,X,y,Y]),t.useEffect(()=>{if(d&&d.length){const e=new r(d[0]),t=new r(d[d.length-1]),n=new Map,c=A(e,t);if(e&&!t&&c>=1){k(e,t).forEach(e=>R(n,e)),B(n)}}},[d]);const w=e=>()=>{if(e){const t=new r(y);if(t.set("date",e),I[s]===I.onlydate&&(X(t),m(t)),I[s]===I.selector){X(t);let e=new Map([...F]);e=R(e,t),B(e),m(e)}if(I[s]===I.range){let e=new Map,n=[...F];const c=i(n[0]?n[0]:[],2)[1],a=i(n.length-1>0?n[n.length-1]:[],2)[1];c&&a&&(e=R(e,t),B(e));const l=A(c,t);if(c&&!a&&t&&l>=1){k(c,t).forEach(t=>R(e,t)),B(e)}l<=0&&(e.get(t.reset().toJSON())||(e=R(e,t)),B(e)),m([...e])}X(t)}},k=(e,t)=>{let n=e.getUTCDate(),c=e.get("month")<12?e.get("month")+1:e.get("month"),a=e.get("year"),i=N(e);const l=A(e,t),o=[];let s=0;for(;s<[...new Array(l+1)].length;){const e=1===String(n).length?"0".concat(n):n,t=new r("".concat(a,"-").concat(c,"-").concat(e,"  00:00:00"));if(n>=i&&(n=0,c>=12&&(a++,c=0),c<12)){c++;const e=new r("".concat(a,"-").concat(c,"-0").concat(n+1));i=N(e)}n+=1,o.push(t),s++}return o},A=(e,t)=>{if(!e||!t)return 0;const n=Date.UTC(e.get("year"),e.get("month"),e.get("date")),c=Date.UTC(t.get("year"),t.get("month"),t.get("date"));return Math.floor((c-n)/864e5)},R=(e,t)=>(t&&(t.setHours(0,0,0,0),e.has(t.toJSON())?e.delete(t.toJSON()):e.set(t.toJSON(),t)),e);return n.createElement("div",{className:"App"},n.createElement("div",{className:"calendar"},n.createElement(u,{currentDate:y,currentYear:y.getFullYear(),dayNames:e||G,months:c||x,onClick:()=>f(!0)}),U?n.createElement(h,{currentYear:y.getFullYear(),onChange:e=>{!function(e){const t=new r(y);t.setFullYear(e),X(t)}(e),f(!1)}}):n.createElement(n.Fragment,null,n.createElement(Q,{currentDate:y,currentMonth:y.get("month"),months:c||x,onChange:V}),n.createElement(b,{type:s,currentMonth:y.get("month"),currentYear:y.getFullYear(),weekDays:e||G,monthStructure:L||{},currentDate:y,dates:F,onChange:w})),g))}function X(){const e=i(t.useState(new Map([[(new r).reset().toJSON(),new r]])),2);return[e[0],e[1]]}function W({onCancel:e,onConfirm:c,buttonLabels:a}){const i=t.useContext(o).dates;return n.createElement("div",null,n.createElement("div",{className:"footer-buttons"},n.createElement("button",{type:"button",className:"button",onClick:e},a.cancel),n.createElement("button",{type:"button",className:"button",onClick:()=>c([...i])},a.confirm)))}function L(){return n.createElement("div",{style:{width:"100%",height:"auto",display:"flex",justifyContent:"center"}},n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 0 24 24",width:"24"},n.createElement("path",{fill:"currentColor",d:"M20 3h-1V1h-2v2H7V1H5v2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 18H4V8h16v13z"}),n.createElement("path",{fill:"currentColor",d:"M0 0h24v24H0z",fill:"none"})))}s(".display-none{display:none}.backdrop{background:rgba(0,0,0,.5);-webkit-tap-highlight-color:transparent;z-index:9}.backdrop,.backdrop-content{display:flex;position:fixed;opacity:1;top:0;left:0;right:0;bottom:0}.backdrop-content{align-items:center;justify-content:center;z-index:10;margin:5% auto 0}.input-content{display:flex;justify-content:space-between;align-items:center;padding:5px 15px;border-radius:8px}.input-content,input{width:100%;background:#f1f1f1}input{border:none}.icon-button{display:flex;background:transparent;border:none;color:#6a6c6e}.container{display:flex;flex-direction:column;justify-content:flex-start;align-items:flex-start;width:100%}.input-label{font:inherit;margin-bottom:.5rem}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImlucHV0cGlja2VyLmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxjQUNFLFlBQ0YsQ0FFQSxVQUdFLHlCQUE4QixDQUM5Qix1Q0FBd0MsQ0FFeEMsU0FLRixDQUVBLDRCQVpFLFlBQWEsQ0FDYixjQUFlLENBR2YsU0FBVSxDQUVWLEtBQU0sQ0FDTixNQUFPLENBQ1AsT0FBUSxDQUNSLFFBZ0JGLENBYkEsa0JBR0Usa0JBQW1CLENBQ25CLHNCQUF1QixDQUN2QixVQUFXLENBT1gsZ0JBQ0YsQ0FFQSxlQUVFLFlBQWEsQ0FDYiw2QkFBOEIsQ0FDOUIsa0JBQW1CLENBRW5CLGdCQUFpQixDQUNqQixpQkFDRixDQUVBLHFCQVRFLFVBQVcsQ0FJWCxrQkFTRixDQUpBLE1BRUUsV0FFRixDQUVBLGFBQ0UsWUFBYSxDQUNiLHNCQUF1QixDQUN2QixXQUFZLENBQ1osYUFDRixDQUVBLFdBQ0UsWUFBYSxDQUNiLHFCQUFzQixDQUN0QiwwQkFBMkIsQ0FDM0Isc0JBQXVCLENBQ3ZCLFVBQ0YsQ0FFQSxhQUNFLFlBQWEsQ0FDYixtQkFDRiIsImZpbGUiOiJpbnB1dHBpY2tlci5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGlzcGxheS1ub25lIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLmJhY2tkcm9wIHtcbiAgZGlzcGxheTogZmxleDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIG9wYWNpdHk6IDE7XG4gIHotaW5kZXg6IDk7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbn1cblxuLmJhY2tkcm9wLWNvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB6LWluZGV4OiAxMDtcbiAgb3BhY2l0eTogMTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBtYXJnaW46IDAgYXV0bztcbiAgbWFyZ2luLXRvcDogNSU7XG59XG5cbi5pbnB1dC1jb250ZW50IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogI2YxZjFmMTtcbiAgcGFkZGluZzogNXB4IDE1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbn1cblxuaW5wdXQge1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kOiAjZjFmMWYxO1xufVxuXG4uaWNvbi1idXR0b24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyOiBub25lO1xuICBjb2xvcjogIzZhNmM2ZTtcbn1cblxuLmNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uaW5wdXQtbGFiZWwge1xuICBmb250OiBpbmhlcml0O1xuICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XG59XG4iXX0= */");const C=function({onChange:e,type:t}){const c=i(X(),2),a=c[0],l=c[1];return n.createElement(o.Provider,{value:{dates:a,setDates:l}},n.createElement(y,{onChange:e,type:t}))},D=function({monthLabels:e,dayLabels:c,placeholder:a="",value:l,label:s,onChange:u=(()=>{}),onFinish:b=(()=>{}),format:d="dd/mm/YYYY",buttonLabels:g={cancel:"Cancel",confirm:"Ok"}}){const m=i(t.useState(!1),2),Q=m[0],I=m[1],Z=i(t.useState(""),2),F=Z[0],B=Z[1],h=i(X(),2),p=h[0],N=h[1],C=t=>{if(t.length>1){return[t[0],t[t.length-1]].filter(e=>e).map(t=>t.format({dayNames:c||G,months:e||x,pattern:d})).join(" - ")}return t[0]?t[0].format({pattern:d,dayNames:c||G,months:e||x}):""};t.useEffect(()=>{const e=JSON.stringify(F)===JSON.stringify(l);if(l&&!e&&l&&l instanceof Array){const e=l.map(e=>new r(e).reset()),t=C(e);B(t)}l||B("")},[l]);const D=e=>{e.preventDefault(),I(!0)};return n.createElement("div",{className:"container"},n.createElement("span",{className:"input-label"},s),n.createElement("div",{className:"input-content"},n.createElement("input",{type:"text",placeholder:a,value:F,onChange:e=>{},onClick:D}),n.createElement("button",{type:"button",className:"icon-button",onClick:D},n.createElement(L,null))),n.createElement("div",{className:Q?"backdrop":"display-none"}),n.createElement("div",{className:Q?"backdrop-content":"display-none"},n.createElement(o.Provider,{value:{dates:p,setDates:N}},n.createElement(y,{monthNames:e||x,weekDayNames:c||G,type:"range",value:F,onChange:e=>{e instanceof Array&&u(e.map(([,e])=>e))},footer:n.createElement(W,{buttonLabels:g,onConfirm:(e=[])=>{if(e&&e.length){const t=C(e.map(([,e])=>e));B(t),b(e.map(([,e])=>e))}I(!1)},onCancel:()=>I(!1)})}))))};var U={Calendar:C,RangePicker:D};exports.Calendar=C,exports.RangePicker=D,exports.default=U;
//# sourceMappingURL=index.js.map
