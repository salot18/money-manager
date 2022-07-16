window.onload = function () {

    // App({
    //     app: {
    //         bg: "#5fc774",
    //         appBg: "#ffffff",
    //     },
    //     sm: {
    //         bg: "red",
    //         logoSrc: "./static/img/logo.jpg",
    //         logoAlt: "logo",
    //         options: ["home", "my-money", "my-job", "archive", "settings"],

    //     },
    //     pg: {
    //         bg: "green"
    //     }

    // })

    createApp({ title: "Money Manager", bg: "#77c990", appBg: "#ffffff" })
    const app = document.querySelector(".app")

    createSideMenu(app, {
        bg: "#cccccc",
        logoSrc: "./img/logo.jpg",
        logoAlt: "logo",
        options: {
            "home": PAGES["home"],
            "my-money": PAGES["my-money"],
            "my-job": PAGES["my-job"],
            "archive": "archiveHTML",
            "settings": "settingsHTML",
        },
    })

    createAppPage(app, {
        bg: "#ffffff",
    })

}