(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{A2Js:function(e){e.exports=JSON.parse('{"data":{"site":{"id":"Site","siteMetadata":{"title":"Chris Ren Photography"}}}}')},Bl7J:function(e,a,t){"use strict";var n=t("q1tI"),l=t.n(n),r=t("A2Js"),c=t("Wbzz"),s=t("aOmW"),o=t.n(s),i=function(){var e=r.data;return l.a.createElement("header",{className:o.a.header},l.a.createElement("h1",null,l.a.createElement(c.a,{className:o.a.title,to:"/"},e.site.siteMetadata.title)),l.a.createElement("nav",null,l.a.createElement("ul",{className:o.a.navList},l.a.createElement("li",null,l.a.createElement(c.a,{className:o.a.navItem,activeClassName:o.a.activeNavItem,to:"/"},"Home Page")),l.a.createElement("li",null,l.a.createElement(c.a,{className:o.a.navItem,activeClassName:o.a.activeNavItem,to:"/about"},"About Page")),l.a.createElement("li",null,l.a.createElement(c.a,{className:o.a.navItem,activeClassName:o.a.activeNavItem,to:"/blog"},"Blog Page")),l.a.createElement("li",null,l.a.createElement(c.a,{className:o.a.navItem,activeClassName:o.a.activeNavItem,to:"/contact"},"Contact Page")))))},m=t("JFLM"),u=t("SxA4"),d=t.n(u),f=function(){var e=m.data;return l.a.createElement("footer",{className:d.a.footer},l.a.createElement("p",null,"Created by ",e.site.siteMetadata.author," © 2020"))},v=(t("sg+I"),t("/uZM")),E=t.n(v);a.a=function(e){return l.a.createElement("div",{className:E.a.container},l.a.createElement("div",{className:E.a.content},l.a.createElement(i,null),e.children),l.a.createElement(f,null))}},H0mL:function(e){e.exports=JSON.parse('{"data":{"allMarkdownRemark":{"edges":[{"node":{"id":"c912887b-8ef7-5cd2-b62e-91e62578650c","frontmatter":{"title":"React","date":"2019-04-02"},"fields":{"slug":"react"}}},{"node":{"id":"99fa67d1-d2d8-5f43-95e4-4a5b33c64b1e","frontmatter":{"title":"The DV Exotic Project","date":"2020-02-07"},"fields":{"slug":"gatsby"}}}]}}}')},JFLM:function(e){e.exports=JSON.parse('{"data":{"site":{"id":"Site","siteMetadata":{"author":"Chris Ren"}}}}')},Wbzz:function(e,a,t){"use strict";var n=t("q1tI"),l=t.n(n),r=t("+ZDr"),c=t.n(r);t.d(a,"a",(function(){return c.a}));t("lw3w"),t("emEt").default.enqueue,l.a.createContext({})},lw3w:function(e,a,t){var n;e.exports=(n=t("rzlk"))&&n.default||n},rzlk:function(e,a,t){"use strict";t.r(a);t("91GP");var n=t("q1tI"),l=t.n(n),r=t("IOVJ");a.default=function(e){var a=e.location,t=e.pageResources;return t?l.a.createElement(r.a,Object.assign({location:a,pageResources:t},t.json)):null}},vx99:function(e,a,t){"use strict";t.r(a);var n=t("H0mL"),l=t("q1tI"),r=t.n(l),c=t("Bl7J"),s=t("Wbzz"),o=t("UBO4"),i=t.n(o);a.default=function(){var e=n.data;return console.log(e),r.a.createElement(c.a,null,r.a.createElement("h1",null,"Blog"),r.a.createElement("p",null,"Posts will show up here later on."),r.a.createElement("ol",{className:i.a.posts},e.allMarkdownRemark.edges.map((function(e){return r.a.createElement("li",{className:i.a.post},r.a.createElement(s.a,{to:"/blog/"+e.node.fields.slug},r.a.createElement("h2",null,e.node.frontmatter.title),r.a.createElement("p",null,e.node.frontmatter.date)))}))))}}}]);
//# sourceMappingURL=component---src-pages-blog-js-8a94d28ebe2689fc3559.js.map