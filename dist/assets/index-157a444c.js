(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const a=o=>{history.pushState({},"",o),c()},c=async()=>{const o=[{path:"/",view:()=>console.log("This is home page /")},{path:"/about",view:()=>console.log("This is About page /about")},{path:"/contact",view:()=>console.log("This is Contact /contact")}];let i=o.map(r=>({route:r,isMatch:location.pathname===r.path})).find(r=>r.isMatch);i||(i={route:o[0],isMatch:!0}),window.addEventListener("popstate",c),i.route.view()};document.addEventListener("DOMContentLoaded",()=>{document.body.addEventListener("click",o=>{o.target.matches("[data-link]")&&(o.preventDefault(),a(o.target.href))}),c()});
