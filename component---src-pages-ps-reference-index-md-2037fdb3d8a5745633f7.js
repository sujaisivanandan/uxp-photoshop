(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{MaQz:function(e,t,o){"use strict";o.r(t),o.d(t,"_frontmatter",(function(){return r})),o.d(t,"default",(function(){return l}));var n=o("wx14"),i=o("zLVn"),a=(o("q1tI"),o("7ljp")),s=o("LHWr"),r=(o("qKvR"),{}),h={_frontmatter:r},c=s.a;function l(e){var t=e.components,o=Object(i.a)(e,["components"]);return Object(a.mdx)(c,Object(n.a)({},h,o,{components:t,mdxType:"MDXLayout"}),Object(a.mdx)("h1",{id:"uxp-for-photoshop-api"},"UXP for Photoshop API"),Object(a.mdx)("h2",{id:"introduction"},"Introduction"),Object(a.mdx)("p",null,"With the introduction of Unified Extensibility Platform (UXP), Photoshop now runs a JavaScript engine powered by V8. UXP provides a truly native extensibility solution in Photoshop by rendering HTML markup into native controls. Extensions run within the same process, and communicate with the Photoshop DOM asynchronously, allowing the UI to run on its own thread. "),Object(a.mdx)("h2",{id:"usage"},"Usage"),Object(a.mdx)("p",null,"The API library is built into every build of Photoshop. To use the APIs in your UXP extension, all you have to do is a simple require. The ",Object(a.mdx)("inlineCode",{parentName:"p"},"app")," object exposed in the module gives you entry point into the rest of the DOM."),Object(a.mdx)("h3",{id:"an-example-script"},"An example script"),Object(a.mdx)("p",null,"A script that deletes the top most layer in the currently active document may look like this:"),Object(a.mdx)("pre",null,Object(a.mdx)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"let layerTree = require('photoshop').app.activeDocument.layerTree\nlayerTree[0].delete()\n")),Object(a.mdx)("h2",{id:"api-usability"},"API Usability"),Object(a.mdx)("p",null,"The Photoshop API provides two layers of usability. The main layer, accessed through the ",Object(a.mdx)("inlineCode",{parentName:"p"},"app")," object provides you with stateful JS models that represent Photoshop and its models. This layer will be familiar to those who have used the ExtendScript DOM."),Object(a.mdx)("p",null,"Underneath, Photoshop exposes ",Object(a.mdx)("inlineCode",{parentName:"p"},"batchPlay"),", which takes an array of JSON objects (",Object(a.mdx)("inlineCode",{parentName:"p"},"ActionDescriptors"),"), and injects the described actions into Photoshop event system. If you're familiar with ExtendScript or CEP, batchPlay is the evolution of ",Object(a.mdx)("inlineCode",{parentName:"p"},"executeAction")," and ",Object(a.mdx)("inlineCode",{parentName:"p"},"executeActionGet"),". "),Object(a.mdx)("p",null,"With our DOM APIs, our motivation is to abstract away ",Object(a.mdx)("inlineCode",{parentName:"p"},"batchPlay")," completely, but it's still there if you'd like to use it."),Object(a.mdx)("h2",{id:"asynchrony-vs-synchrony"},"Asynchrony vs Synchrony"),Object(a.mdx)("p",null,"In ExtendScript, all DOM methods were synchronous, and would also block the UI. With UXP, the calls made into Photoshop can either be asynchronous\nor synchronous. The DOM APIs are designed to be synchronous where it makes sense, and asynchronous for more expensive operations."),Object(a.mdx)("p",null,"The rule of thumb is that properties of models are synchronous. Methods affecting the models, particularly ones that create new models are, in general, asynchronous."))}l.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-ps-reference-index-md-2037fdb3d8a5745633f7.js.map