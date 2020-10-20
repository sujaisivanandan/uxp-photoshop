---
title: Known UXP Issues in Photoshop
description: Known issues in UXP for Photoshop.
contributors:
  - https://github.com/kerrishotts
---

# Known Issues

The following issues are known to occur with UXP 4.1 and Photoshop 22.0.0. Please check this page with future updates, as known issues will be fixed over time, and new issues will likely be discovered.

## General Issues

* Panel icons must always be 23x23 (46x46) PNG files. SVG icons are not supported on Photoshop toolbars.
* Plugin icons must always be 24x24 (48x48) files. In the manifest, they must currently be specified with `width: 48` and `height: 48`. Plugin icons do support SVG files, but UXP doesn't support all SVG features, which means you'll want to test your SVG icon before shipping your plugin if you decide to use SVG icons in the Plugin Panel.

## User Interface

* `window.devicePixelRatio` (and corresponding `element.uxpContainer.devicePixelRatio`) always returns `1`. This is incorrect and will be fixed in the future. Note that `window.devicePixelRatio` may not always match an element's pixel ratio if the element is visible on a screen with a different pixel ratio from the primary screen.
* Not all SVG files are supported by UXP. UXP's SVG renderer is targeted for simple icons and the like; complex SVGs may fail to render completely, or may render in unexpected ways. The SVG renderer will improve in the future.
* Images formatted in a grayscale mode will fail to render. They will take up space in the DOM, but will not be visible to the user.
* When the mouse cursor is changed, it may not revert back to its original state in UWP.
* It is not possible to trigger the emoji selector in a text field on macOS.
* Many SVGs are known to render in odd ways in the UI. These issues will be addressed in the future, but we would love to hear your reports of any SVGs that don't work, and how you fixed it.
* When tabbing in a scroll view, the scroll view is not automatically scrolled to ensure the target control is in view (macOS Only).
* Emojis are rendered in the font color on Windows 10, instead of using the emoji's colors.
* When a control in a panel is disabled and enabled, it is no longer reachable via TAB. This may also impact controls added *after* a panel is shown for the first time.
* Drag and Drop is not currently supported.
* The `Save` dialog that appears when using `getFileForSaving` appears _behind_ the plugin panels. The `Open` and `Folder` dialogs may also do this on occasion on both macOS and Windows. This will be fixed in a future release.

## Events

* `uxpshowpanel` and the corresponding `show` callback occurs only once, when the panel is initially made visible. It will not recur. This will be fixed in the future.
* `uxphidepanel` and the corresponding `hide` callback never occurs, even when the panel is made invisible. This will be fixed in the future.
* `uxpcommand` will incude `uxpshowpanel` and `uxphidepanel` in the `commandId` field of the event whenever panels are shown and hidden. For plugins _with a single panel_, this is sufficient to detect that your panel's state has changed. If your plugin has multiple panels, there is no way (at this time) to detect which panel was shown or hidden.
* Interactive elements swallow most events.
* `keypress` and `keyup` are not currently supported.

## HTML Elements

* `<option>` tags *must* have a `value` attribute, or referencing the `select`'s `value` property will return `undefined`.
* `<select value="…"/>` does not show the value as selected. Instead, get a reference to the element and call `setAttribute("value", …)` or use the `selected` attribute on the `option` tags.
* If you don’t specify a width for your `form`, block elements inside may not take up the entire width. Workaround: always set a width for your `form` elements.
* `form`s only support `method="dialog"`. They do not submit to a URL automatically.
* It is not currently possible to specify the tab order.
* The size of a `<textarea>` cannot be set with `rows` or `cols`. Use CSS styles `height` and `width` respectively.
* HTML5 input validation is not supported.
* Images that fail to load will not render any “broken icon” image in place.
* Input elements do not accept `defaultValue`.
* `<option>` tags do not support `disabled` attributes.
* `<label for="id"/>` is not supported. Wrap `<label>` around the control instead.
* `<input type="file" />` is not supported.
* `<input type="color" />` is not supported.
* Using unitless values in `width` and `height` attributes are not supported in UXP 3.1. Use `px`, or CSS styles.
* `<label>` uses `inline-flex` layout semantics in UXP 3.1 mode, with `flex-wrap: wrap` enabled. If you need to prevent wrapping, use `flex-wrap: nowrap` on these elements. Note that the default layout behavior is now _horizontal_ not _vertical_.
* `<progress>` is not theme aware.

## Layout

* When rendering inline text that wraps, borders, outlines, and backgrounds only apply to the first line. You should place borders, outlines, and backgrounds on elements with block layout semantics.
* Mixing inline text with UI controls is unlikely to result in a pleasant appearance. `vertical-align` is supported, but baseline layout does not always do what you might expect,  which makes it difficult to properly align widgets and labels. As such, you should use `flex` or `inline-flex` when using UI elements.

## CSS

* It is not currently possible to assign multiple border colors to a container.
* `baseline` alignment is supported, but buggy; do not rely on its behavior for now.
* The `font` shorthand CSS rule is not supported.
* `text-transform` is not supported,
* CSS transitions and animations are not supported.
* A solid `outline` will not render unless a color is also provided. When using `outline: solid`, be sure to supply an outline color as well.
* Font sizes do not adjust to dynamic units like `vh`. As such, if you use `font-size: 1vh`, and the viewport changes size, the font size will not adjust.
* Setting a `border-color` to `unset` may not reset the color to its initial value.
* Borders and backgrounds are not drawn correctly when coupled with `object-fit`.
* The bottom border may not always render with the same width as the other borders.
* Underlines may render very thin.
* `calc` only works for length/numeric properties. Using `calc` for a color will not work.
* If you need to override an anchor link color, use `a[href]` as the selector to override it.

## DOM

* When a dialog is closed, it is not removed from the DOM. This is per spec. If you want the dialog to be removed from the DOM, you must call `HTMLDialogElement#remove` explicitly.
* When applying HTML using `innerHTML`, event handlers and scripts are currently parsed in Photoshop, but not in XD. **DO NOT RELY ON THIS BEHAVIOR**, as it will likely go away in the future and match XD's behavior (which is by design).

## Network I/O

* On macOS, it is not possible to use self-signed certificates with secure Websockets.
* Websockets do not support extensions.
* XHR can only send binary content using an ArrayBuffer -- Blob is not supported.
* XHR does not support cookies.
* `responseURL` is not supported on XHR

## File I/O

* `Blob` is not supported. Use `ArrayBuffer` instead.

## Debugging

* If debugging exposes any private fields and methods, do not attempt to use them. Plugins referring to private APIs may be rejected or removed from the Plugin Marketplace, and will be prone to breaking unexpectedly.