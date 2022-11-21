import { c as create_ssr_component } from "../../chunks/index.js";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<p>main +layout.svelte</p>
<hr>
<br>

<div class="${"contents"}">${slots.default ? slots.default({}) : ``}</div>`;
});
export {
  Layout as default
};
