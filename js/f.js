function App(config) {

    // Create App
    createApp(config.app)

    const app = document.querySelector(".app")

    // Create Side Menu
    createSideMenu(app, config.sm)

    // Create App Page
    createAppPage(app, config.pg)

}

function createApp(config) {

    // Tab Config
    document.title = config.title

    // Create App Container
    const container = document.createElement("div")
    container.classList.add("app-container")
    setBgColor(container, config.bg)
    document.body.appendChild(container)

    // Create App
    const app = document.createElement("div")
    app.classList.add("app")
    setBgColor(app, config.appBg)
    container.appendChild(app)

}

function createSideMenu(location, config) {

    // Create Side Menu Area
    const sideMenu = document.createElement("div")
    sideMenu.classList.add("app__side-menu")
    setBgColor(sideMenu, config.bg)
    location.appendChild(sideMenu)

    // Create Logo Area
    const logo = document.createElement("div")
    logo.classList.add("app__side-menu__logo")
    setBgColor(logo, config.bg)
    setImage(logo, config.logoSrc, config.logoAlt)
    sideMenu.appendChild(logo)

    // Create Nav Area
    const nav = document.createElement("div")
    nav.classList.add("app__side-menu__nav")
    sideMenu.appendChild(nav)

    Object.keys(config.options).forEach(opt => {

        const optEl = document.createElement("div")
        optEl.classList.add(`app__side-menu__nav__${opt}`)
        optEl.innerText = normalizeSMOption(opt)
        setBgColor(optEl, config.bg)
        hoverEffect(optEl, config.bg, "orange")
        clickEvent(optEl, () => { loadPage(document.querySelector(".app__page"), config.options[opt]) })
        nav.appendChild(optEl)

    })
}

function createAppPage(location, config) {

    // Create App Page
    const page = document.createElement("div")
    page.classList.add("app__page")
    setBgColor(page, config.bg)
    location.appendChild(page)

}

function clearPage() {
    document.querySelector(".app__page").innerHTML = ""
}

function loadPage(location, pageHTML) {

    clearPage()

    location.innerHTML = pageHTML

    // EVENTS
    console.log(PAGES["my-money"]["events"])

}

/* UTILS */
function normalizeSMOption(str) {

    const myStr = (str.charAt(0).toUpperCase() + str.toLowerCase().slice(1)).replace("-", " ")
    for (let i = 0; i < myStr.length; i++) {

        if (myStr[i] === " ") {
            myStr.charAt(i + 1).toUpperCase()
        }
    }

    return myStr
}

function setBgColor(element, src) {
    element.style.background = src
}

function setImage(element, src, alt) {
    const img = document.createElement("img")
    img.src = src
    img.alt = alt
    element.appendChild(img)
}

function hoverEffect(element, mainColor, hoverColor) {
    element.addEventListener("mouseenter", () => {
        element.style.background = hoverColor

    })
    element.addEventListener("mouseleave", () => {
        element.style.background = mainColor
    })
}

function clickEvent(element, callback) {
    console.log(element)
    element.addEventListener("click", callback)
}

function openDialogBox() {
    const box = document.createElement("div")
    box.classList.add("dialog-box")
    document.appendChild(box)

}