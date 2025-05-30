import { ref, resolveComponent, mergeProps, unref, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrIncludeBooleanAttr, ssrRenderComponent } from "vue/server-renderer";
import { useRouter } from "vue-router";
import { useMutation } from "../node_modules/_vue/apollo-composable/dist/index.mjs";
import gql from "graphql-tag";
import "./Inscription.vue2.mjs";
import _export_sfc from "../../../../_virtual/_plugin-vue_export-helper.mjs";
const _sfc_main = {
  __name: "Inscription",
  __ssrInlineRender: true,
  setup(__props) {
    const name = ref("");
    const username = ref("");
    const email = ref("");
    const plainPassword = ref("");
    const plainPasswordConfirmation = ref("");
    const localError = ref(null);
    const successMessage = ref(null);
    const router = useRouter();
    const CREATE_USER_MUTATION = gql`
  mutation createUser($name: String!, $username: String!, $email: String!, $plainPassword: String!) {
    createUser(input: { name: $name, username: $username, email: $email, plainPassword: $plainPassword }) {
      # Demandez les champs dont vous avez besoin après l'inscription
      # Par exemple, juste un message de succès ou l'ID de l'utilisateur
      # Si votre mutation renvoie l'utilisateur, vous pouvez demander :
       user {
          id
         email
         name
         username
    }
  }
  }
`;
    const {
      loading,
      error: mutationError,
      // Erreurs venant d'Apollo / du serveur
      onDone,
      // Callback en cas de succès de la mutation
      onError
      // Callback en cas d'erreur de la mutation
    } = useMutation(CREATE_USER_MUTATION);
    onDone((result) => {
      var _a, _b;
      console.log("Inscription réussie:", result.data);
      const user = (_b = (_a = result.data) == null ? void 0 : _a.createUser) == null ? void 0 : _b.user;
      if (user) {
        successMessage.value = `Bienvenue ${user.name} ! Ton compte a été créé avec succès.`;
      } else {
        successMessage.value = "Inscription réussie.";
      }
      name.value = "";
      username.value = "";
      email.value = "";
      plainPassword.value = "";
      plainPasswordConfirmation.value = "";
      setTimeout(() => {
        router.push("/login");
      }, 3e3);
    });
    onError((error) => {
      console.error("Erreur GraphQL lors de l'inscription:", error);
      localError.value = null;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_router_link = resolveComponent("router-link");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen flex items-center justify-center dark:bg-gray-900 bg-gray-100" }, _attrs))} data-v-c40a54d6><div class="bg-white dark:bg-gray-800 text-black dark:text-white shadow-lg rounded-lg p-8 w-full max-w-md" data-v-c40a54d6><h1 class="text-2xl font-bold text-center mb-6 text-indigo-600 dark:text-indigo-400" data-v-c40a54d6> Créer un compte </h1><form class="space-y-4" data-v-c40a54d6><div data-v-c40a54d6><label for="name" class="block text-gray-700 dark:text-gray-300 mb-1" data-v-c40a54d6>Nom complet</label><input${ssrRenderAttr("value", name.value)} type="text" id="name" name="name" placeholder="Jean Dupont" required class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-400" data-v-c40a54d6></div><div data-v-c40a54d6><label for="username" class="block text-gray-700 dark:text-gray-300 mb-1" data-v-c40a54d6>Nom d&#39;utilisateur</label><input${ssrRenderAttr("value", username.value)} type="text" id="username" name="username" placeholder="jeandupont" required class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-400" data-v-c40a54d6></div><div data-v-c40a54d6><label for="email" class="block text-gray-700 dark:text-gray-300 mb-1" data-v-c40a54d6>Email</label><input${ssrRenderAttr("value", email.value)} type="email" id="email" name="email" placeholder="jean.dupont@email.com" required autocomplete="email" class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-400" data-v-c40a54d6></div><div data-v-c40a54d6><label for="plainPassword" class="block text-gray-700 dark:text-gray-300 mb-1" data-v-c40a54d6>Mot de passe</label><input${ssrRenderAttr("value", plainPassword.value)} type="plainPassword" id="plainPassword" name="plainPassword" placeholder="********" required autocomplete="new-plainPassword" class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-400" data-v-c40a54d6></div><div data-v-c40a54d6><label for="plainPasswordConfirmation" class="block text-gray-700 dark:text-gray-300 mb-1" data-v-c40a54d6>Confirmer le mot de passe</label><input${ssrRenderAttr("value", plainPasswordConfirmation.value)} type="plainPassword" id="plainPasswordConfirmation" name="plainPasswordConfirmation" placeholder="********" required autocomplete="new-plainPassword" class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-400" data-v-c40a54d6></div>`);
      if (localError.value) {
        _push(`<p class="text-red-500 text-sm text-center" data-v-c40a54d6>${ssrInterpolate(localError.value)}</p>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(mutationError)) {
        _push(`<p class="text-red-500 text-sm text-center" data-v-c40a54d6> Erreur d&#39;inscription: ${ssrInterpolate(unref(mutationError).message)}</p>`);
      } else {
        _push(`<!---->`);
      }
      if (successMessage.value) {
        _push(`<p class="text-green-500 text-sm text-center" data-v-c40a54d6>${ssrInterpolate(successMessage.value)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<button type="submit"${ssrIncludeBooleanAttr(unref(loading)) ? " disabled" : ""} class="w-full bg-indigo-500 text-white py-2 rounded hover:bg-indigo-600 transition disabled:opacity-50 flex items-center justify-center" data-v-c40a54d6>`);
      if (unref(loading)) {
        _push(`<svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" data-v-c40a54d6><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" data-v-c40a54d6></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" data-v-c40a54d6></path></svg>`);
      } else {
        _push(`<!---->`);
      }
      _push(` ${ssrInterpolate(unref(loading) ? "Inscription en cours..." : "S'inscrire")}</button></form><p class="text-center mt-4 text-sm text-gray-600 dark:text-gray-400" data-v-c40a54d6> Déjà un compte ? `);
      _push(ssrRenderComponent(_component_router_link, {
        to: "/login",
        class: "font-medium text-indigo-600 dark:text-indigo-400 hover:underline"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Connectez-vous ici `);
          } else {
            return [
              createTextVNode(" Connectez-vous ici ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</p></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Inscription.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Inscription = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-c40a54d6"]]);
export {
  Inscription as default
};
//# sourceMappingURL=Inscription.vue.mjs.map
