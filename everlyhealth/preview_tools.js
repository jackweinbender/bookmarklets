(function () {
    'use strict';

    const BRANCH = window.location.host.split(".")[0];
    const branch_host = function (branch) {
        return function (host) {
            return "https://".concat(branch, ".").concat(host, ".everlywell.com");
        };
    };
    const base_for = branch_host(BRANCH);
    const links = (env) => ({
        admin: {
            base: base_for(env.STORE),
            path: "/admin",
            display: "Spree Admin",
        },
        login: {
            base: base_for(env.STORE),
            path: "/login",
            display: "Login",
        },
        logout: {
            base: base_for(env.STORE),
            path: "/logout",
            display: "Logout",
        },
        signup: {
            base: base_for(env.STORE),
            path: "/sign-up",
            display: "Register User",
        },
        register_kit: {
            base: base_for(env.STORE),
            path: "register",
            display: "Register Kit",
        },
        home: {
            base: base_for(env.WWW),
            path: "/",
            display: "Home",
        },
        pip: {
            base: base_for(env.WWW),
            path: "/products",
            display: "PIP Page",
        },
        dashboard: {
            base: base_for(env.RESULTS),
            path: "/dashboard",
            display: "Results Dashboard",
        },
        settings: {
            base: base_for(env.RESULTS),
            path: "/account/settings",
            display: "Account Settings",
        },
    });

    const PREVIEW_ENV = {
        STORE: "secure-gitlab-preview",
        WWW: "public-preview",
        RESULTS: "results-preview",
    };

    const url_for = (link) => new URL(link.path, link.base).href;

    const link_template = (link) => `<a href="${url_for(link)}">${link.display}</a>`;

    const env = links(PREVIEW_ENV);
    function create_wrapper() {
        const bkmklt = document.createElement("div");
        bkmklt.id = "bkmklt";
        return bkmklt;
    }
    function frag_from(str) {
        const frag = new DocumentFragment();
        frag.textContent = str;
        return frag;
    }
    function main(env) {
        const wrapper = create_wrapper();
        for (let key in env) {
            let template = link_template(env[key]);
            let link = frag_from(template);
            wrapper.appendChild(link);
        }
        document.body.appendChild(wrapper);
    }
    console.log("Bloop");
    main(env);

})();
