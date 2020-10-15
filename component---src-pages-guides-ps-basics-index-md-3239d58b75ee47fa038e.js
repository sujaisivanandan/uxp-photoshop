(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{"/slD":function(e,t,o){"use strict";o.r(t),o.d(t,"_frontmatter",(function(){return i})),o.d(t,"default",(function(){return l}));var a=o("wx14"),n=o("zLVn"),c=(o("q1tI"),o("7ljp")),s=o("LHWr"),i=(o("qKvR"),{}),r={_frontmatter:i},p=s.a;function l(e){var t=e.components,o=Object(n.a)(e,["components"]);return Object(c.mdx)(p,Object(a.a)({},r,o,{components:t,mdxType:"MDXLayout"}),Object(c.mdx)("h1",{id:"photoshop-uxp-plugins"},"Photoshop UXP Plugins"),Object(c.mdx)("h2",{id:"the-basics"},"The Basics"),Object(c.mdx)("p",null,"This section covers the basics of UXP in Photoshop. For the basics of UXP itself, see ",Object(c.mdx)("a",Object(a.a)({parentName:"p"},{href:"../"}),"Getting Started with UXP"),"."),Object(c.mdx)("p",null,"While generic UXP APIs work across applications that support UXP (such as Adobe XD as well as Photoshop), the APIs in this section are specific to Photoshop. As such, they affect Photoshop documents rather than changing your plugin's UI, accessing the file system, and other non-Photoshop operations."),Object(c.mdx)("p",null,"UXP exposes APIs for Photoshop at the same level in your plugin as your UI code. Unlike CEP plugins, UXP plugins do not have to serialize strings and send them back and forth between the UI code and the ExtendScript engine. This removes a substantial barrier to rapid development and debugging."),Object(c.mdx)("p",null,"As of this writing, UXP in Photoshop is a work in progress, with some Photoshop functionality not yet exposed in the API. The workaround if you need some Photoshop function that is not in the API is to use a feature called ",Object(c.mdx)("a",Object(a.a)({parentName:"p"},{href:"batchplay_intro/"}),"batchPlay"),"."),Object(c.mdx)("p",null,"To start writing your plugin, first review the ",Object(c.mdx)("a",Object(a.a)({parentName:"p"},{href:"../uxp_guide/uxp-toolchain/"}),"UXP Toolchain"),". Then download the ",Object(c.mdx)("a",Object(a.a)({parentName:"p"},{href:"../uxp-developer-tool/"}),"UXP Developer Tool"),". You can use that tool to create a plugin folder containing basic scaffolding for HTML, JavaScript, and other required files. Edit these files, replacing the sample code with your code."),Object(c.mdx)("p",null,"More detailed information about these APIs can be found in the ",Object(c.mdx)("a",Object(a.a)({parentName:"p"},{href:"/uxp-photoshop/ps_reference/"}),"Photoshop API reference"),"."),Object(c.mdx)("h2",{id:"synchronous-vs-asynchronous-methods"},"Synchronous vs Asynchronous Methods"),Object(c.mdx)("p",null,"An important difference between ExtendScript (and CEP) and UXP in Photoshop is that all ExtendScript calls to Photoshop were synchronous. This means they blocked the Photoshop UI while they were executing. In UXP, a method call can be synchronous or ",Object(c.mdx)("em",{parentName:"p"},"asynchronous"),", i.e., non-blocking."),Object(c.mdx)("p",null,"Asynchronous operations are typically used for methods that can take a long time (e.g., creating a document). Simpler operations, such as getting properties of an object, are typically synchronous."),Object(c.mdx)("h2",{id:"photoshop-objects"},"Photoshop Objects"),Object(c.mdx)("p",null,"Every interaction with Photoshop is done via one of the objects below. Methods on the object allow you to get and set properties and access child objects. "),Object(c.mdx)("p",null,"Most objects are accessed through the ",Object(c.mdx)("inlineCode",{parentName:"p"},"app")," object, which exposes the Photoshop DOM. The objects currently implemented are:"),Object(c.mdx)("h3",{id:"photoshop-application"},"Photoshop Application"),Object(c.mdx)("p",null,"This is the top-level object, the root of the Photoshop DOM. From here, you can access open documents, tools, and UI elements as well as run commands or menu items. To get access to this object, use:"),Object(c.mdx)("pre",null,Object(c.mdx)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const app = require('photoshop').app;\n")),Object(c.mdx)("p",null,"Through the ",Object(c.mdx)("inlineCode",{parentName:"p"},"app")," object you've just created, you can access Photoshop's objects and methods. For example, the currently-active document is obtained like this:"),Object(c.mdx)("pre",null,Object(c.mdx)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const app = require('photoshop').app;\nconst doc = app.activeDocument;\n")),Object(c.mdx)("p",null,"And you can get an array of all open documents like this:"),Object(c.mdx)("pre",null,Object(c.mdx)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const app = require('photoshop').app;\nconst allDocuments = app.documents;\n")),Object(c.mdx)("p",null,"Creating a document is also straightforward:"),Object(c.mdx)("pre",null,Object(c.mdx)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const app = require('photoshop').app;\nlet myDoc = await app.createDocument(); // creates a document with default settings\n\n// You can also add some document properties while you're creating a document:\nlet myDoc = await app.createDocument({width: 1200, height: 800,\n  resolution: 300, mode: 'CMYKColorMode', \n  name: 'hello world', fill: 'transparent'});\n")),Object(c.mdx)("p",null,"Note that, since ",Object(c.mdx)("inlineCode",{parentName:"p"},"createDocument")," is an expensive operation, you need to use ",Object(c.mdx)("inlineCode",{parentName:"p"},"await")," (or .",Object(c.mdx)("inlineCode",{parentName:"p"},"then"),") to wait for its completion."),Object(c.mdx)("p",null,"Finally, the ",Object(c.mdx)("inlineCode",{parentName:"p"},"app")," object also exposes a method for opening a document. UXP does not allow arbitrary access to the local filesystem; for any file outside of your plugin's home folder, data folder, or temp folder, you must ask the user for access by presenting a (built into UXP) dialog."),Object(c.mdx)("pre",null,Object(c.mdx)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const app = require('photoshop').app;\nlet entry = await require('uxp').storage.localFileSystem.getFileForOpening();\nconst document = await app.open(entry);\n")),Object(c.mdx)("p",null,"See the reference for more methods and properties of the ",Object(c.mdx)("inlineCode",{parentName:"p"},"app")," object. But here's one final very useful method: to show a simple alert, use this code:"),Object(c.mdx)("pre",null,Object(c.mdx)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const app = require('photoshop').app;\nawait app.showAlert('There's no business like show business');\n")),Object(c.mdx)("h3",{id:"document"},"Document"),Object(c.mdx)("p",null,"A single, open, Photoshop document. From this object, you can access the document's layers, its dimensions, resolution, etc. You can crop it, add/delete/duplicate layers, resize, rotate, and save it."),Object(c.mdx)("p",null,"For example, to get the dimensions of the active document:"),Object(c.mdx)("pre",null,Object(c.mdx)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const app = require('photoshop').app;\nconst myDoc = app.activeDocument;\nconst docHeight = myDoc.height;\nconst docWidth = myDoc.width;\nconst docResolution = myDoc.resolution;\nawait app.showAlert(`Doc size is ${docWidth} x ${docHeight}. Resolution is ${docResolution}`);\n")),Object(c.mdx)("p",null,"To get an array of all layers in a document, use code like this:"),Object(c.mdx)("pre",null,Object(c.mdx)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const app = require('photoshop').app;\nconst myDoc = app.activeDocument;\nconst docLayers = myDoc.layers; // returns an array of layer objects\n")),Object(c.mdx)("p",null,"A layer in that list includes a number of properties, including layer name, parent, whether it's locked or not, etc."),Object(c.mdx)("p",null,"And to create a layer, do this:"),Object(c.mdx)("pre",null,Object(c.mdx)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const app = require('photoshop').app;\nconst myDoc = app.activeDocument;\nconst myLayer = await myDoc.createLayer({name:'hello layer'});\n")),Object(c.mdx)("p",null,"Other methods available in the ",Object(c.mdx)("inlineCode",{parentName:"p"},"document")," object include merging and grouping layers, flattening, saving, closing, resizing, and rotating."),Object(c.mdx)("h3",{id:"layer"},"Layer"),Object(c.mdx)("p",null,"With this class, you can delete and duplicate layers, move them around, link them, rotate them, scale/skew them, and get their parent (but not their children)."),Object(c.mdx)("p",null,"There is only one Layer class as of this writing. Ultimately, there will be subclasses for the different layer types."),Object(c.mdx)("p",null,"For a full discussion of the ",Object(c.mdx)("inlineCode",{parentName:"p"},"layer")," class, see the ",Object(c.mdx)("a",Object(a.a)({parentName:"p"},{href:"/uxp-photoshop/ps_reference/"}),"API Reference"),'. Here\'s an example of how to scale a layer named "foo":'),Object(c.mdx)("pre",null,Object(c.mdx)("code",Object(a.a)({parentName:"pre"},{className:"language-js"})," const app = require('photoshop').app;\n  const myDoc = app.activeDocument;\n  const docLayers = myDoc.layers;\n  // there's no \"getLayerByName\" method, so we loop until we find the layer:\n  for (let i=0; i< docLayers.length; i++) {\n    if (docLayers[i].name == 'foo') {\n      await docLayers[i].scale(50, 50);\n    }\n  }\n")),Object(c.mdx)("h3",{id:"actions-and-actionsets"},"Actions and ActionSets"),Object(c.mdx)("p",null,"Many Photoshop users make heavy use of the ",Object(c.mdx)("inlineCode",{parentName:"p"},"Actions")," panel. Actions are basically macros that you can record and play back to script commands and tools that you use frequently. Actions are grouped into ",Object(c.mdx)("inlineCode",{parentName:"p"},"Action Sets"),", similarly to the way layers can be grouped into Layer Sets."),Object(c.mdx)("p",null," The Actions object allows you to delete, duplicate, rename, and play actions. There is no current way to ",Object(c.mdx)("em",{parentName:"p"},"create")," an action using UXP."),Object(c.mdx)("p",null,"Similarly to Actions, the ActionSet object allows you to delete, duplicate, rename, and play Action Sets. There is no current way to ",Object(c.mdx)("em",{parentName:"p"},"create")," an Action Set."),Object(c.mdx)("p",null,"Note that Actions and Action Sets exist app-wide; they're not tied to a specific Document."),Object(c.mdx)("p",null,"Here's an example that finds a particular Action in the default Action Set, then plays it if it exists:"),Object(c.mdx)("pre",null,Object(c.mdx)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'  const app = require(\'photoshop\').app;\n  const allActionSets = app.actionTree;\n  const firstActionSet = allActionSets[0];\n  let actions = new Map(); // a JS Map allows easy "find by name" operations\n  firstActionSet.actions.forEach((action) => { actions.set(action.name, action)});\n  const myAction = actions.get("Wood Frame - 50 pixel");\n  if (myAction) { // user may have deleted this action\n    await myAction.play();\n  }\n')),Object(c.mdx)("p",null,"Again, for more information about these operations, see the ",Object(c.mdx)("a",Object(a.a)({parentName:"p"},{href:"/uxp-photoshop/ps_reference/"}),"API Reference"),"."),Object(c.mdx)("h2",{id:"batchplay"},"batchPlay"),Object(c.mdx)("p",null,"Not all objects and actions are exposed in the current Photoshop UXP API. For those that aren't, the workaround is to use ",Object(c.mdx)("a",Object(a.a)({parentName:"p"},{href:"batchplay_intro"}),"batchPlay"),". With batchPlay, you construct a JSON structure telling Photoshop which actions to perform. Unlike the ExtendScript method ExecuteAction, batchPlay allows you to chain multiple actions together and execute them in sequence."))}l.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-guides-ps-basics-index-md-3239d58b75ee47fa038e.js.map