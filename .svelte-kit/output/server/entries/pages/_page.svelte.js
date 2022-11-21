import { c as create_ssr_component, v as validate_component } from "../../chunks/index.js";
/* empty css                */const Home_svelte_svelte_type_style_lang = "";
const css = {
  code: ".service_title.svelte-o202zn{font-size:35px;font-weight:700}.quiz_section.svelte-o202zn{max-width:100vw;display:inline-block}.btn.svelte-o202zn{margin:10px 10px}",
  map: null
};
const Home = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `

<h2 class="${"service_title svelte-o202zn"}">\uD55C\uAD6D\uC778 \uC0C1\uC2DD\uC218\uC900 \uCE21\uC815\uAE30</h2>
<br>

${`<div class="${"quiz_section svelte-o202zn"}">
        <button class="${"btn svelte-o202zn"}">\uD55C\uAD6D \uD2B8\uB79C\uB4DC \uD14C\uC2A4\uD2B8
        </button>
        <button class="${"btn svelte-o202zn"}">\uC138\uACC4\uC0AC \uD14C\uC2A4\uD2B8
        </button></div>`}`;
  } while (!$$settled);
  return $$rendered;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-1k4i8cx_START -->${$$result.title = `<title>\uD0C0\uC784 \uAC8C\uC784</title>`, ""}<!-- HEAD_svelte-1k4i8cx_END -->`, ""}

<main><div class="${"card"}">${validate_component(Home, "Home").$$render($$result, {}, {}, {})}
        <a href="${"/kor_history"}"><button>\uADFC\uD604\uB300 \uD55C\uAD6D\uC0AC \uCE21\uC815\uAE30</button></a>
        <br>
        <p>svelte kit doc : <a href="${"https://kit.svelte.dev"}">kit.svelte.dev</a></p></div></main>`;
});
export {
  Page as default
};
