const fs = require("fs");

const platform = process.argv[2];

// const apiPaths = [
//     "/api/events/",
//     "/api/messages/count",
//     "/api/messages",
//     "/api/messages/read",
//     "/api/settings/mail",
//     "/api/auth/refresh",
// ];

const urls = [];
// const protonDomains = require("../src/shared/protonDomains").protonDomains;

// for (const domain of protonDomains) {
//     for (const apiPath of apiPaths) {
//         urls.push(`https://${domain}${apiPath}`);
//     }
// }

// const csp = `default-src 'self'; connect-src ${urls.join(" ")}`;

const permissions = [
    // ...protonDomains.map((d) => `https://${d}/*`),
    ...["tabs",
        "storage",
        "activeTab",
        "cookies",
        "scripting",
        "notifications",
        "webRequest",
        "alarms"],
];

const manifest = {
    "manifest_version": 3,
    "name": "protonmail checker",
    "version": JSON.parse(fs.readFileSync("./package.json").toString()).version,
    "description": "Let's you check your ProtonMail inbox",
    "homepage_url": "https://tholeb.fr",
    // "default_locale": "en",
    // "icons": {
    //     "16": "./logo512.png",
    //     "48": "./logo512.png",
    //     "96": "./logo512.png",
    // },
    "permissions": permissions,
    "action": {
        "browser_style": false,
        "default_popup": "index.html",
        // "default_icon": "./logo512.png",
        "default_title": "ProtonMail",
        // "theme_icons": [
        //     {
        //         "light": "icons/icon-light.svg",
        //         "dark": "./logo512.png",
        //         "size": 32,
        //     },
        // ],
    },
    // "background": {
    //     "service_worker": [
    //         "browser-polyfill.js",
    //         "background.js",
    //     ],
    // },
    // "content_security_policy": csp,
};


// if (platform !== "firefox") {
//     manifest.icons = {
//         "16": "./logo512.png",
//         "32": "./logo512.png",
//         "64": "./logo512.png",
//         "128": "./logo512.png",
//     };
//     manifest.action.theme_icons = undefined;
//     manifest.action.default_icon = {
//         "16": "./logo512.png",
//         "32": "./logo512.png",
//     };
// }

fs.writeFileSync("./build/manifest.json", JSON.stringify(manifest, null, 4));