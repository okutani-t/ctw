(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{146:function(t,e,a){"use strict";a.r(e),a.d(e,"pageQuery",function(){return p});var n=a(7),r=a.n(n),A=a(0),i=a.n(A),o=a(149),c=a(156),s=a(153),u=a(154),l=a(150),d=function(t){function e(){return t.apply(this,arguments)||this}return r()(e,t),e.prototype.render=function(){var t=this.props.data,e=t.site.siteMetadata.title,a=t.allMarkdownRemark.edges;return i.a.createElement(s.a,{location:this.props.location,title:e},i.a.createElement(u.a,{title:"TOP",keywords:["詩","change the world","okutani"]}),i.a.createElement(c.a,null),a.map(function(t){var e=t.node,a=e.frontmatter.title||e.fields.slug;return i.a.createElement("div",{key:e.fields.slug},i.a.createElement("h3",{style:{marginBottom:Object(l.a)(.25)}},i.a.createElement(o.Link,{style:{boxShadow:"none"},to:e.fields.slug},a)),i.a.createElement("small",null,e.frontmatter.date))}))},e}(i.a.Component);e.default=d;var p="688335118"},149:function(t,e,a){"use strict";a.r(e),a.d(e,"graphql",function(){return m}),a.d(e,"StaticQueryContext",function(){return d}),a.d(e,"StaticQuery",function(){return p}),a.d(e,"useStaticQuery",function(){return g});var n=a(0),r=a.n(n),A=a(4),i=a.n(A),o=a(148),c=a.n(o);a.d(e,"Link",function(){return c.a}),a.d(e,"withPrefix",function(){return o.withPrefix}),a.d(e,"navigate",function(){return o.navigate}),a.d(e,"push",function(){return o.push}),a.d(e,"replace",function(){return o.replace}),a.d(e,"navigateTo",function(){return o.navigateTo});var s=a(151),u=a.n(s);a.d(e,"PageRenderer",function(){return u.a});var l=a(33);a.d(e,"parsePath",function(){return l.a});var d=r.a.createContext({}),p=function(t){return r.a.createElement(d.Consumer,null,function(e){return t.data||e[t.query]&&e[t.query].data?(t.render||t.children)(t.data?t.data.data:e[t.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})},g=function(t){r.a.useContext;var e=r.a.useContext(d);if(e[t]&&e[t].data)return e[t].data;throw new Error("The result of this StaticQuery could not be fetched.\n\nThis is likely a bug in Gatsby and if refreshing the page does not fix it, please open an issue in https://github.com/gatsbyjs/gatsby/issues")};function m(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},150:function(t,e,a){"use strict";a.d(e,"a",function(){return c}),a.d(e,"b",function(){return s});var n=a(158),r=a.n(n),A=a(159),i=a.n(A);i.a.overrideThemeStyles=function(){return{"a.gatsby-resp-image-link":{boxShadow:"none"}}},delete i.a.googleFonts;var o=new r.a(i.a);var c=o.rhythm,s=o.scale},151:function(t,e,a){var n;t.exports=(n=a(152))&&n.default||n},152:function(t,e,a){"use strict";a.r(e);a(32);var n=a(0),r=a.n(n),A=a(4),i=a.n(A),o=a(53),c=a(2),s=function(t){var e=t.location,a=c.default.getResourcesForPathnameSync(e.pathname);return r.a.createElement(o.a,Object.assign({location:e,pageResources:a},a.json))};s.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},e.default=s},153:function(t,e,a){"use strict";a(32);var n=a(7),r=a.n(n),A=a(0),i=a.n(A),o=a(149),c=a(150),s=function(t){function e(){return t.apply(this,arguments)||this}return r()(e,t),e.prototype.render=function(){var t,e=this.props,a=e.location,n=e.title,r=e.children;return t="/ctw/"===a.pathname?i.a.createElement("h1",{style:Object.assign({},Object(c.b)(1.3),{marginBottom:Object(c.a)(1.5),marginTop:0})},i.a.createElement(o.Link,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},n)):i.a.createElement("h3",{style:{fontFamily:"Montserrat, sans-serif",marginTop:0}},i.a.createElement(o.Link,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},n)),i.a.createElement("div",{style:{marginLeft:"auto",marginRight:"auto",maxWidth:Object(c.a)(24),padding:Object(c.a)(1.5)+" "+Object(c.a)(.75)}},i.a.createElement("header",null,t),i.a.createElement("main",null,r),i.a.createElement("footer",null,"© ",(new Date).getFullYear(),", CHANGE THE WORLD,",i.a.createElement("small",null," Built with ",i.a.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby"))))},e}(i.a.Component);e.a=s},154:function(t,e,a){"use strict";var n=a(155),r=a(0),A=a.n(r),i=a(4),o=a.n(i),c=a(160),s=a.n(c),u=a(149);function l(t){var e=t.description,a=t.lang,r=t.meta,i=t.keywords,o=t.title;return A.a.createElement(u.StaticQuery,{query:d,render:function(t){var n=e||t.site.siteMetadata.description;return A.a.createElement(s.a,{htmlAttributes:{lang:a},title:o,titleTemplate:"%s | "+t.site.siteMetadata.title,meta:[{name:"description",content:n},{property:"og:title",content:o},{property:"og:description",content:n},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:t.site.siteMetadata.author},{name:"twitter:title",content:o},{name:"twitter:description",content:n}].concat(i.length>0?{name:"keywords",content:i.join(", ")}:[]).concat(r)})},data:n})}l.defaultProps={lang:"ja",meta:[],keywords:[]},l.propTypes={description:o.a.string,lang:o.a.string,meta:o.a.array,keywords:o.a.arrayOf(o.a.string),title:o.a.string.isRequired},e.a=l;var d="1025518380"},155:function(t){t.exports={data:{site:{siteMetadata:{title:"CHANGE THE WORLD",description:"このサイトは適当人間okutaniが、ふと思いついた言葉を繋げて、遊んで、時に真面目に、自作の詩をつぶやくサイトです。 更新は不定期。",author:"okutani"}}}}},156:function(t,e,a){"use strict";a(163);var n=a(157),r=a(0),A=a.n(r),i=a(149),o=a(164),c=a.n(o),s=a(150),u=a(165),l=a(166);var d="4007731267";e.a=function(){return A.a.createElement(i.StaticQuery,{query:d,render:function(t){var e=t.site.siteMetadata,a=e.author,n=e.social;return A.a.createElement("div",{style:{display:"flex",marginBottom:Object(s.a)(2.5)}},A.a.createElement(c.a,{fixed:t.avatar.childImageSharp.fixed,alt:a,style:{marginRight:Object(s.a)(.5),marginBottom:0,minWidth:50,borderRadius:"100%"},imgStyle:{borderRadius:"50%"}}),A.a.createElement("p",null,"このサイトは適当人間okutaniが、ふと思いついた言葉を繋げて、遊んで、時に真面目に、自作の詩をつぶやくサイトです。"," ",A.a.createElement("a",{href:"https://twitter.com/"+n.twitter},A.a.createElement(u.a,{icon:l.a}),n.twitter)))},data:n})}},157:function(t){t.exports={data:{avatar:{childImageSharp:{fixed:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAASABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAUEBv/EABQBAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhADEAAAAYvQQbZtZxzlUKgP/8QAGxABAQACAwEAAAAAAAAAAAAAAgEABAMTITH/2gAIAQEAAQUCKVc2HAW6TIVxUvOiZPuv4Jn/xAAUEQEAAAAAAAAAAAAAAAAAAAAg/9oACAEDAQE/AR//xAAUEQEAAAAAAAAAAAAAAAAAAAAg/9oACAECAQE/AR//xAAeEAACAQMFAAAAAAAAAAAAAAAAEQECInEDECExgv/aAAgBAQAGPwLvkuWRrTn0XCTgtqlYJK1t/8QAHBABAAMAAgMAAAAAAAAAAAAAAQARIUFREDFx/9oACAEBAAE/IQiM7XH+FeoAKztlLhPQnFQqwopO4FhRxTPAbYV8mTJ//9oADAMBAAIAAwAAABDgxwD/xAAUEQEAAAAAAAAAAAAAAAAAAAAg/9oACAEDAQE/EB//xAAUEQEAAAAAAAAAAAAAAAAAAAAg/9oACAECAQE/EB//xAAeEAEBAAMAAgMBAAAAAAAAAAABEQAhMVFxQZHB8P/aAAgBAQABPxB3edUJkwwb2j5vruNLDDCHjEZ945JIRdH5lS2jtU8hlPVyXrx3N7f28QkcNqfOEiIa0ejP/9k=",width:50,height:50,src:"/ctw/static/44c0612313025370f3b2653d7dc6d2a5/d2d31/profile-pic.jpg",srcSet:"/ctw/static/44c0612313025370f3b2653d7dc6d2a5/d2d31/profile-pic.jpg 1x,\n/ctw/static/44c0612313025370f3b2653d7dc6d2a5/0b804/profile-pic.jpg 1.5x,\n/ctw/static/44c0612313025370f3b2653d7dc6d2a5/753c3/profile-pic.jpg 2x,\n/ctw/static/44c0612313025370f3b2653d7dc6d2a5/31ca8/profile-pic.jpg 3x"}}},site:{siteMetadata:{author:"okutani",social:{twitter:"okutani_t"}}}}}}}]);
//# sourceMappingURL=component---src-pages-index-js-9a8bfd9608b650443683.js.map