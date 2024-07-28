"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[139],{6760:(e,n,i)=>{i.d(n,{A:()=>s});i(5043);var l=i(579);const s=()=>(0,l.jsx)("h2",{className:"nothing flex-center",children:"Nothing to show"})},5560:(e,n,i)=>{i.d(n,{A:()=>r});i(5043);var l=i(5369),s=i(9776),t=i(5475),o=i(579);const r=()=>(0,o.jsx)(o.Fragment,{children:(0,o.jsxs)("footer",{children:[(0,o.jsxs)("div",{className:"footer",children:[(0,o.jsxs)("div",{className:"footer-links",children:[(0,o.jsx)("h3",{children:"Links"}),(0,o.jsxs)("ul",{children:[(0,o.jsx)("li",{children:(0,o.jsx)(t.k2,{to:"/",children:"Home"})}),(0,o.jsx)("li",{children:(0,o.jsx)(t.k2,{to:"/doctors",children:"Doctors"})}),(0,o.jsx)("li",{children:(0,o.jsx)(t.k2,{to:"/appointments",children:"Appointments"})}),(0,o.jsx)("li",{children:(0,o.jsx)(t.k2,{to:"/notifications",children:"Notifications"})}),(0,o.jsx)("li",{children:(0,o.jsx)(s.Vq,{to:"/#contact",children:"Contact Us"})}),(0,o.jsx)("li",{children:(0,o.jsx)(t.k2,{to:"/profile",children:"Profile"})})]})]}),(0,o.jsxs)("div",{className:"social",children:[(0,o.jsx)("h3",{children:"Social links"}),(0,o.jsxs)("ul",{children:[(0,o.jsx)("li",{className:"facebook",children:(0,o.jsx)("a",{href:"https://www.facebook.com/",target:"_blank",rel:"noreferrer",children:(0,o.jsx)(l.ok6,{})})}),(0,o.jsx)("li",{className:"youtube",children:(0,o.jsx)("a",{href:"https://www.youtube.com/",target:"_blank",rel:"noreferrer",children:(0,o.jsx)(l.Vk6,{})})}),(0,o.jsx)("li",{className:"instagram",children:(0,o.jsx)("a",{href:"https://www.instagram.com/",target:"_blank",rel:"noreferrer",children:(0,o.jsx)(l.ao$,{})})})]})]})]}),(0,o.jsxs)("div",{className:"footer-bottom",children:["Made by"," ",(0,o.jsx)("a",{href:"https://www.linkedin.com/in/dunna-avinash",target:"_blank",rel:"noreferrer",children:"Avinash"})," ","\xa9 ",(new Date).getFullYear()]})]})})},8114:(e,n,i)=>{i.d(n,{A:()=>j});var l=i(5043),s=i(3216),t=i(5475),o=i(9776),r=i(9456),d=i(5089),c=i(1009),a=i(5922),h=i(7070),x=i(579);const j=()=>{const[e,n]=(0,l.useState)(!1),i=(0,r.wA)(),j=(0,s.Zp)(),[m,u]=(0,l.useState)(localStorage.getItem("token")||""),[v,p]=(0,l.useState)(localStorage.getItem("token")?(0,h.A)(localStorage.getItem("token")):"");return(0,x.jsxs)("header",{children:[(0,x.jsxs)("nav",{className:e?"nav-active":"",children:[(0,x.jsx)("h2",{className:"nav-logo",children:(0,x.jsx)(t.k2,{to:"/",children:"HealthBooker"})}),(0,x.jsxs)("ul",{className:"nav-links",children:[(0,x.jsx)("li",{children:(0,x.jsx)(t.k2,{to:"/",children:"Home"})}),(0,x.jsx)("li",{children:(0,x.jsx)(t.k2,{to:"/doctors",children:"Doctors"})}),m&&v.isAdmin&&(0,x.jsx)("li",{children:(0,x.jsx)(t.k2,{to:"/dashboard/users",children:"Dashboard"})}),m&&!v.isAdmin&&(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)("li",{children:(0,x.jsx)(t.k2,{to:"/appointments",children:"Appointments"})}),(0,x.jsx)("li",{children:(0,x.jsx)(t.k2,{to:"/notifications",children:"Notifications"})}),(0,x.jsx)("li",{children:(0,x.jsx)(t.k2,{to:"/applyfordoctor",children:"Apply for doctor"})}),(0,x.jsx)("li",{children:(0,x.jsx)(o.Vq,{to:"/#contact",children:"Contact Us"})}),(0,x.jsx)("li",{children:(0,x.jsx)(t.k2,{to:"/profile",children:"Profile"})})]}),m?(0,x.jsx)("li",{children:(0,x.jsx)("span",{className:"btn",onClick:()=>{i((0,d.iA)({})),localStorage.removeItem("token"),j("/login")},children:"Logout"})}):(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)("li",{children:(0,x.jsx)(t.k2,{className:"btn",to:"/login",children:"Login"})}),(0,x.jsx)("li",{children:(0,x.jsx)(t.k2,{className:"btn",to:"/register",children:"Register"})})]})]})]}),(0,x.jsxs)("div",{className:"menu-icons",children:[!e&&(0,x.jsx)(c.ND1,{className:"menu-open",onClick:()=>{n(!0)}}),e&&(0,x.jsx)(a.clO,{className:"menu-close",onClick:()=>{n(!1)}})]})]})}},5139:(e,n,i)=>{i.r(n),i.d(n,{default:()=>u});var l=i(5043),s=i(6760),t=i(5560),o=i(8114),r=i(5789),d=i(5089),c=i(8271),a=i(9456),h=i(7070),x=i(6213),j=i(2339),m=(i(8067),i(579));const u=()=>{var e;const[n,i]=(0,l.useState)([]),u=(0,a.wA)(),{loading:v}=(0,a.d4)((e=>e.root)),{userId:p}=(0,h.A)(localStorage.getItem("token")),k=async e=>{try{u((0,d.r1)(!0));const e=await(0,r.A)("/appointment/getallappointments?search=".concat(p));i(e),u((0,d.r1)(!1))}catch(n){}};(0,l.useEffect)((()=>{k()}),[]);return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(o.A,{}),v?(0,m.jsx)(c.A,{}):(0,m.jsxs)("section",{className:"container notif-section",children:[(0,m.jsx)("h2",{className:"page-heading",children:"Your Appointments"}),n.length>0?(0,m.jsx)("div",{className:"appointments",children:(0,m.jsxs)("table",{children:[(0,m.jsx)("thead",{children:(0,m.jsxs)("tr",{children:[(0,m.jsx)("th",{children:"S.No"}),(0,m.jsx)("th",{children:"Doctor"}),(0,m.jsx)("th",{children:"Patient"}),(0,m.jsx)("th",{children:"Appointment Date"}),(0,m.jsx)("th",{children:"Appointment Time"}),(0,m.jsx)("th",{children:"Booking Date"}),(0,m.jsx)("th",{children:"Booking Time"}),(0,m.jsx)("th",{children:"Status"}),p===(null===(e=n[0].doctorId)||void 0===e?void 0:e._id)?(0,m.jsx)("th",{children:"Action"}):(0,m.jsx)(m.Fragment,{})]})}),(0,m.jsx)("tbody",{children:null===n||void 0===n?void 0:n.map(((e,n)=>{var i,l,s,t,o;return(0,m.jsxs)("tr",{children:[(0,m.jsx)("td",{children:n+1}),(0,m.jsx)("td",{children:(null===e||void 0===e||null===(i=e.doctorId)||void 0===i?void 0:i.firstname)+" "+(null===e||void 0===e||null===(l=e.doctorId)||void 0===l?void 0:l.lastname)}),(0,m.jsx)("td",{children:(null===e||void 0===e||null===(s=e.userId)||void 0===s?void 0:s.firstname)+" "+(null===e||void 0===e||null===(t=e.userId)||void 0===t?void 0:t.lastname)}),(0,m.jsx)("td",{children:null===e||void 0===e?void 0:e.date}),(0,m.jsx)("td",{children:null===e||void 0===e?void 0:e.time}),(0,m.jsx)("td",{children:null===e||void 0===e?void 0:e.createdAt.split("T")[0]}),(0,m.jsx)("td",{children:null===e||void 0===e?void 0:e.updatedAt.split("T")[1].split(".")[0]}),(0,m.jsx)("td",{children:null===e||void 0===e?void 0:e.status}),p===(null===e||void 0===e||null===(o=e.doctorId)||void 0===o?void 0:o._id)?(0,m.jsx)("td",{children:(0,m.jsx)("button",{className:"btn user-btn accept-btn ".concat("Completed"===(null===e||void 0===e?void 0:e.status)?"disable-btn":""),disabled:"Completed"===(null===e||void 0===e?void 0:e.status),onClick:()=>(async e=>{try{var n,i,l;await j.Ay.promise(x.A.put("/appointment/completed",{appointid:null===e||void 0===e?void 0:e._id,doctorId:null===e||void 0===e||null===(n=e.doctorId)||void 0===n?void 0:n._id,doctorname:"".concat(null===e||void 0===e||null===(i=e.userId)||void 0===i?void 0:i.firstname," ").concat(null===e||void 0===e||null===(l=e.userId)||void 0===l?void 0:l.lastname)},{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}}),{success:"Appointment booked successfully",error:"Unable to book appointment",loading:"Booking appointment..."}),k()}catch(s){return s}})(e),children:"Complete"})}):(0,m.jsx)(m.Fragment,{})]},null===e||void 0===e?void 0:e._id)}))})]})}):(0,m.jsx)(s.A,{})]}),(0,m.jsx)(t.A,{})]})}},8067:()=>{}}]);
//# sourceMappingURL=139.5835cb4e.chunk.js.map