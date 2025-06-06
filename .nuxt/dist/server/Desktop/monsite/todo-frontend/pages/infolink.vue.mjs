import __nuxt_component_0 from "../node_modules/nuxt/dist/app/components/nuxt-link.mjs";
import { withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttr, ssrRenderComponent } from "vue/server-renderer";
import _imports_0 from "../../../../Downloads/Photos/Enhanced_Arrange_Styled.png.mjs";
import { useRoute, useRouter } from "vue-router";
const _sfc_main = {
  __name: "infolink",
  __ssrInlineRender: true,
  setup(__props) {
    useRoute();
    useRouter();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_link = __nuxt_component_0;
      _push(`<!--[--><div class="min-h-screen flex flex-col dark:bg-gray-900 bg-gray-900"><div class="bg-slate-600 shadow rounded-lg p-50-50-50-50 m-50-50-50"><div class="flex items-center"><img class="h-12 w-12 rounded-full mr-4"${ssrRenderAttr("src", _imports_0)} alt="Avatar"><h2 class="text-lg font-semibold">⚔️🔥🤺 𝒟𝑒𝓋-𝒦𝒶ï𝓈𝑒𝓇 🤺 🔥</h2></div><div><p class="text-gray-500">Software Engineer</p></div><div class="rounded-md bg-green-50 dark:bg-green-900 p-4"><div class="flex"><div class="flex-shrink-0"><svg class="h-5 w-5 text-green-400 dark:text-green-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg></div><div class="ml-3"><p class="text-sm font-medium text-green-800 dark:text-green-200">Vous etez actuelement connecter !</p></div></div></div><div class="flex flex-col md:flex-row"><nav class="justify-center space-x-4 flex flex-col md:flex-row"><img class="inline-block h-12 w-12 rounded-full ring-2 ring-white" src="https://www.economie-gestion.com/wp-content/uploads/2021/02/2-principaux-qualites-dun-bon-manager-768x512.png" alt=""><div><a href="/courcss" class="font-bold px-3 py-2 text-green-500 rounded-lg hover:bg-slate-100 hover:text-slate-900">apprendreLecss</a><a href="/infolink" class="font-bold px-3 py-2 text-red-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">Infolink</a><a href="/tache" class="font-bold px-3 py-2 text-yellow-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">Taches</a><a href="/taiwind" class="font-bold px-3 py-2 text-green-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">taiwindDsahcboard</a><a href="/menutcss" class="font-bold px-3 py-2 text-red-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">apprendreTaiwindcss</a><a href="/login" class="font-bold px-3 py-2 text-yellow-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">Logout</a></div></nav></div><div>`);
      _push(ssrRenderComponent(_component_nuxt_link, {
        to: "tache",
        class: "text-green-500 underline text-center"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`clique ici pour gerer tes taches`);
          } else {
            return [
              createTextVNode("clique ici pour gerer tes taches")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div><div class="bg-gray-900 py-50 w-50 right-50"><button class="text-red-600">Se déconnecter</button></div><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/infolink.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=infolink.vue.mjs.map
