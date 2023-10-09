(this["webpackJsonpreact_people-table-advanced"]=this["webpackJsonpreact_people-table-advanced"]||[]).push([[0],{36:function(e,t,a){},37:function(e,t,a){},38:function(e,t,a){"use strict";a.r(t);var c=a(24),s=a(6),r=(a(33),a(34),a(3)),n=a(5),l=a(0),i=a(8),o=a(9),d=a.n(o);function j(e,t){var a=new URLSearchParams(e.toString());return Object.entries(t).forEach((function(e){var t=Object(n.a)(e,2),c=t[0],s=t[1];null===s?a.delete(c):Array.isArray(s)?(a.delete(c),s.forEach((function(e){a.append(c,e)}))):a.set(c,s)})),a.toString()}var h=a(1),b=function(){var e=Object(r.m)(),t=Object(s.d)(),a=Object(n.a)(t,2),c=a[0],l=a[1],o=c.get("query")||"",b=c.get("sex")||"",u=c.getAll("centuries")||[],m=function(e){return u.includes(e)},p=function(t){return""===t?!e.search||!e.search.includes("sex"):e.search.includes("sex=".concat(t))};function x(e){var t=j(c,{sex:e||null});l(t)}return Object(h.jsxs)("nav",{className:"panel",children:[Object(h.jsx)("p",{className:"panel-heading",children:"Filters"}),Object(h.jsxs)("p",{className:"panel-tabs","data-cy":"SexFilter",children:[Object(h.jsx)(s.b,{className:d()({"is-active":""===b}),to:{pathname:"/people",search:j(c,{sex:null})},onClick:function(){return x("")},children:"All"}),Object(h.jsx)(s.b,{className:d()({"is-active":p("m")}),to:{pathname:"/people",search:j(c,{sex:"m"})},onClick:function(){return x("m")},children:"Male"}),Object(h.jsx)(s.b,{className:d()({"is-active":p("f")}),to:{pathname:"/people",search:j(c,{sex:"f"})},onClick:function(){return x("f")},children:"Female"})]}),Object(h.jsx)("div",{className:"panel-block",children:Object(h.jsxs)("p",{className:"control has-icons-left",children:[Object(h.jsx)("input",{"data-cy":"NameFilter",type:"search",className:"input",placeholder:"Search",value:o,onChange:function(e){var t={query:e.target.value||null},a=j(c,t);l(a)}}),Object(h.jsx)("span",{className:"icon is-left",children:Object(h.jsx)("i",{className:"fas fa-search","aria-hidden":"true"})})]})}),Object(h.jsx)("div",{className:"panel-block",children:Object(h.jsxs)("div",{className:"level is-flex-grow-1 is-mobile","data-cy":"CenturyFilter",children:[Object(h.jsx)("div",{className:"level-left",children:[16,17,18,19,20].map((function(e){return Object(h.jsx)(s.b,{"data-cy":"century",className:d()("button","mr-1",{"is-info":m(e.toString())}),to:{pathname:"/people",search:j(c,{centuries:m(e.toString())?u.filter((function(t){return t!==e.toString()})):[].concat(Object(i.a)(u),[e.toString()])})},onClick:function(){return function(e){var t=new URLSearchParams(c),a=u.includes(e)?u.filter((function(t){return t!==e})):[].concat(Object(i.a)(u),[e]);t.delete("centuries"),a.forEach((function(e){return t.append("centuries",e)})),l(t)}(e.toString())},children:e},e)}))}),Object(h.jsx)("div",{className:"level-right ml-4",children:Object(h.jsx)(s.b,{"data-cy":"centuryALL",className:"button is-success is-outlined",to:{pathname:"/people",search:j(c,{centuries:[]})},onClick:function(){return function(){var e=j(c,{centuries:[]});l(e)}()},children:"All"})})]})}),Object(h.jsx)("div",{className:"panel-block",children:Object(h.jsx)("a",{className:"button is-link is-outlined is-fullwidth",href:"#/people",children:"Reset all filters"})})]})},u=(a(36),function(){return Object(h.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(h.jsx)("div",{className:"Loader__content"})})}),m=function(e){var t=e.people,a=e.filtredPeople,c=Object(r.q)().slug,o=Object(r.m)(),b=function(){var e=new URLSearchParams(o.search);return{sort:e.get("sort"),order:e.get("order")||"asc"}},u=Object(l.useState)(b),m=Object(n.a)(u,2),p=m[0],x=m[1];Object(l.useEffect)((function(){x(b())}),[o.search]);var O=Object(i.a)(a).sort((function(e,t){var a=p.sort,c=p.order;return"name"===a?"asc"===c?e.name.localeCompare(t.name):t.name.localeCompare(e.name):"sex"===a?"asc"===c?e.sex.localeCompare(t.sex):t.sex.localeCompare(e.sex):"born"===a?"asc"===c?e.born-t.born:t.born-e.born:"died"===a?"asc"===c?e.died-t.died:t.died-e.died:0})),f=function(e){var t=new URLSearchParams(o.search);return t.set("sort",e),p.sort===e&&"asc"===p.order?t.set("order","desc"):t.set("order","asc"),"/people?".concat(t.toString())};return Object(h.jsxs)("table",{"data-cy":"peopleTable",className:"table is-striped is-hoverable is-narrow is-fullwidth",children:[Object(h.jsx)("thead",{children:Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{children:Object(h.jsxs)("span",{className:"is-flex is-flex-wrap-nowrap",children:["Name",Object(h.jsx)(s.b,{to:f("name"),children:Object(h.jsx)("span",{className:"icon",children:Object(h.jsx)("i",{className:d()("fas",{"fa-sort":"name"!==p.sort,"fa-sort-up":"name"===p.sort&&"asc"===p.order,"fa-sort-down":"name"===p.sort&&"desc"===p.order})})})})]})}),Object(h.jsx)("th",{children:Object(h.jsxs)("span",{className:"is-flex is-flex-wrap-nowrap",children:["Sex",Object(h.jsx)(s.b,{to:f("sex"),children:Object(h.jsx)("span",{className:"icon",children:Object(h.jsx)("i",{className:d()("fas",{"fa-sort":"sex"!==p.sort,"fa-sort-up":"sex"===p.sort&&"asc"===p.order,"fa-sort-down":"sex"===p.sort&&"desc"===p.order})})})})]})}),Object(h.jsx)("th",{children:Object(h.jsxs)("span",{className:"is-flex is-flex-wrap-nowrap",children:["Born",Object(h.jsx)(s.b,{to:f("born"),children:Object(h.jsx)("span",{className:"icon",children:Object(h.jsx)("i",{className:d()("fas",{"fa-sort":"born"!==p.sort,"fa-sort-up":"born"===p.sort&&"asc"===p.order,"fa-sort-down":"born"===p.sort&&"desc"===p.order})})})})]})}),Object(h.jsx)("th",{children:Object(h.jsxs)("span",{className:"is-flex is-flex-wrap-nowrap",children:["Died",Object(h.jsx)(s.b,{to:f("died"),children:Object(h.jsx)("span",{className:"icon",children:Object(h.jsx)("i",{className:d()("fas",{"fa-sort":"died"!==p.sort,"fa-sort-up":"died"===p.sort&&"asc"===p.order,"fa-sort-down":"died"===p.sort&&"desc"===p.order})})})})]})}),Object(h.jsx)("th",{children:"Mother"}),Object(h.jsx)("th",{children:"Father"})]})}),Object(h.jsx)("tbody",{children:O.map((function(e){var a,r;return Object(h.jsxs)("tr",{"data-cy":"person",className:d()({"has-background-warning":e.slug===c}),children:[Object(h.jsx)("td",{children:Object(h.jsx)(s.b,{to:{pathname:"/people/".concat(e.slug),search:j(new URLSearchParams(o.search),{slug:new URLSearchParams(o.search).get("slug")})},className:d()({"has-text-danger":"f"===e.sex}),children:e.name})}),Object(h.jsx)("td",{children:e.sex}),Object(h.jsx)("td",{children:e.born}),Object(h.jsx)("td",{children:e.died}),Object(h.jsx)("td",{children:e.motherName&&t.some((function(t){return t.name===e.motherName}))?Object(h.jsx)(s.b,{to:{pathname:"/people/".concat((null===(a=t.find((function(t){return t.name===e.motherName})))||void 0===a?void 0:a.slug)||""),search:j(new URLSearchParams(o.search),{slug:new URLSearchParams(o.search).get("slug")})},className:"has-text-danger",children:e.motherName}):e.motherName||"-"}),Object(h.jsx)("td",{children:e.fatherName&&t.some((function(t){return t.name===e.fatherName}))?Object(h.jsx)(s.b,{to:{pathname:"/people/".concat((null===(r=t.find((function(t){return t.name===e.fatherName})))||void 0===r?void 0:r.slug)||""),search:j(new URLSearchParams(o.search),{slug:new URLSearchParams(o.search).get("slug")})},children:e.fatherName}):e.fatherName||"-"})]},e.slug)}))})]})},p=a(4),x=a(7),O="https://mate-academy.github.io/react_people-table/api/people.json";function f(e){return new Promise((function(t){return setTimeout(t,e)}))}function v(){return(v=Object(x.a)(Object(p.a)().mark((function e(){return Object(p.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",f(500).then((function(){return fetch(O)})).then((function(e){return e.json()})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var N=function(){var e=Object(l.useState)([]),t=Object(n.a)(e,2),a=t[0],c=t[1],s=Object(l.useState)([]),i=Object(n.a)(s,2),o=i[0],d=i[1],j=Object(l.useState)(!0),p=Object(n.a)(j,2),x=p[0],O=p[1],f=Object(l.useState)(!1),N=Object(n.a)(f,2),g=N[0],w=N[1],S=Object(r.m)();return Object(l.useEffect)((function(){(function(){return v.apply(this,arguments)})().then((function(e){c(e),O(!1)})).catch((function(e){console.error("Error fetching people data:",e),O(!1),w(!0)}))}),[]),Object(l.useEffect)((function(){var e=new URLSearchParams(S.search),t=e.get("query"),c=e.get("sex"),s=e.getAll("centuries"),r=a.filter((function(e){var a,r,n;return(null===t||e.name.toLowerCase().includes(t.toLowerCase())||(null===(a=e.motherName)||void 0===a?void 0:a.toLowerCase().includes(t.toLowerCase()))||(null===(r=e.fatherName)||void 0===r?void 0:r.toLowerCase().includes(t.toLowerCase())))&&(null===c||e.sex===c)&&(0===s.length||s.includes((n=e.born,Math.ceil(n/100)).toString()))}));d(r)}),[S.search,a]),Object(h.jsxs)("div",{"data-cy":"peoplePage",children:[Object(h.jsx)("h1",{className:"title",children:"People Page"}),x?Object(h.jsx)(u,{}):Object(h.jsx)("div",{className:"block",children:Object(h.jsxs)("div",{className:"columns is-desktop is-flex-direction-row-reverse",children:[Object(h.jsx)("div",{className:"column is-7-tablet is-narrow-desktop",children:Object(h.jsx)(b,{})}),Object(h.jsx)("div",{className:"column",children:Object(h.jsx)("div",{className:"box table-container",children:g?Object(h.jsx)("p",{"data-cy":"peopleLoadingError",className:"has-text-danger",children:"Something went wrong"}):Object(h.jsx)("div",{children:0===a.length?Object(h.jsx)("p",{"data-cy":"noPeopleMessage",children:"There are no people on the server"}):Object(h.jsx)(m,{people:a,filtredPeople:o})})})})]})})]})},g=function(e){var t=e.isActive;return d()("navbar-item",{"has-background-grey-lighter":t})},w=function(){return Object(h.jsx)("nav",{"data-cy":"nav",className:"navbar is-fixed-top has-shadow",role:"navigation","aria-label":"main navigation",children:Object(h.jsx)("div",{className:"container",children:Object(h.jsxs)("div",{className:"navbar-brand",children:[Object(h.jsx)(s.c,{className:g,to:"/",children:"Home"}),Object(h.jsx)(s.c,{className:g,to:"/people",children:"People"})]})})})},S=(a(37),function(){return Object(h.jsx)("h1",{className:"title",children:"Page not found"})}),y=function(){return Object(h.jsxs)("div",{"data-cy":"app",children:[Object(h.jsx)(w,{}),Object(h.jsx)("div",{className:"section",children:Object(h.jsx)("div",{className:"container",children:Object(h.jsx)("div",{className:"block",children:Object(h.jsx)("div",{className:"box table-container",children:Object(h.jsxs)(r.d,{children:[Object(h.jsx)(r.b,{path:"/",element:Object(h.jsx)("h1",{className:"title",children:"Home Page"})}),Object(h.jsx)(r.b,{path:"/home",element:Object(h.jsx)(r.a,{to:"/"})}),Object(h.jsx)(r.b,{path:"/people",element:Object(h.jsx)(N,{})}),Object(h.jsx)(r.b,{path:"/people/:slug",element:Object(h.jsx)(N,{})}),Object(h.jsx)(r.b,{path:"*",element:Object(h.jsx)(S,{})})]})})})})})]})};Object(c.createRoot)(document.getElementById("root")).render(Object(h.jsx)(s.a,{children:Object(h.jsx)(y,{})}))}},[[38,1,2]]]);
//# sourceMappingURL=main.b4a47416.chunk.js.map