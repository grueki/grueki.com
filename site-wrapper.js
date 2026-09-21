function siteWrapper(content, stylesheet) {
    document.getElementById("html-root").innerHTML = `
        <head>
            <meta name="color-scheme" content="dark">
            <style>html,body{background-color: #05091b;visibility: hidden;}</style>
            <link rel="stylesheet" href="/index.css">`
            + (stylesheet ? `<link rel="stylesheet" href="/${stylesheet}.css">` :  ``) +
            `<title> g r u e k i . c o m </title>
            <link rel="icon" type="image/png" href="/favicon.png">
        </head>
        <body>
            <div class="header-banner">
                <div class="home-title">
                    <h1>grueki.com</h1>
                </div>
            </div>

            <div class="main-wrapper">
                <div class="navbar">
                    <ul>
                        <li>` + (window.location.pathname == "/" ? `<img src="/nav-star.gif" width=24>` : ``) + `<a href="/">home</a>` + (window.location.pathname == "/" ? `<img src="/nav-star-2.gif" width=24>` : ``) + `</li>
                        <li>` + (window.location.pathname.includes("/about") ? `<img src="/nav-star.gif" width=24>` : ``) + `<a href="/about">about</a>` + (window.location.pathname.includes("/about") ? `<img src="/nav-star-2.gif" width=24>` : ``) + `</li>
                        <li>` + (window.location.pathname.includes("/crate-diggin") ? `<img src="/nav-star.gif" width=24>` : ``) + `<a href="/crate-diggin">crate diggin</a>` + (window.location.pathname.includes("/crate-diggin") ? `<img src="/nav-star-2.gif" width=24>` : ``) + `</li>
                        <li>` + (window.location.pathname.includes("/words") ? `<img src="/nav-star.gif" width=24>` : ``) + `<a href="/words">words</a>` + (window.location.pathname.includes("/words") ? `<img src="/nav-star-2.gif" width=24>` : ``) + `</li>
                        <li>` + (window.location.pathname.includes("/gallery") ? `<img src="/nav-star.gif" width=24>` : ``) + `<a href="/gallery">gallery</a>` + (window.location.pathname.includes("/gallery") ? `<img src="/nav-star-2.gif" width=24>` : ``) + `</li>
                        <li>` + (window.location.pathname.includes("/steve") ? `<img src="/nav-star.gif" width=24>` : ``) + `<a href="/steve">steve</a>` + (window.location.pathname.includes("/steve") ? `<img src="/nav-star-2.gif" width=24>` : ``) + `</li>
                    </ul>
                </div>

                <div class="main-content">
    `
    + content +
    `           </div>
            </div>

            <footer class="footer-banner">
                <p>100% HONEST TO GOD HUMAN CODED GOODNESS ★ NO ROBOTS WERE HARMED IN THE MAKING OF THIS SITE ★ DEATH TO MACHINES ★ 100% HONEST TO GOD HUMAN CODED BULLSHIT ★ NO ROBOTS WERE ABUSED IN THE MAKING OF THIS SITE ★ DEATH TO MACHINES ★ 100% HONEST TO GOD HUMAN CODED GOODNESS ★ NO ROBOTS WERE HARMED IN THE MAKING OF THIS SITE ★ DEATH TO MACHINES ★ 100% HONEST TO GOD HUMAN CODED BULLSHIT ★ NO ROBOTS WERE ABUSED IN THE MAKING OF THIS SITE ★ DEATH TO MACHINES ★ </p>
                <p class="scrolltext2">100% HONEST TO GOD HUMAN CODED GOODNESS ★ NO ROBOTS WERE HARMED IN THE MAKING OF THIS SITE ★ DEATH TO MACHINES ★ 100% HONEST TO GOD HUMAN CODED BULLSHIT ★ NO ROBOTS WERE ABUSED IN THE MAKING OF THIS SITE ★ DEATH TO MACHINES ★ 100% HONEST TO GOD HUMAN CODED GOODNESS ★ NO ROBOTS WERE HARMED IN THE MAKING OF THIS SITE ★ DEATH TO MACHINES ★ 100% HONEST TO GOD HUMAN CODED BULLSHIT ★ NO ROBOTS WERE ABUSED IN THE MAKING OF THIS SITE ★ DEATH TO MACHINES ★ </p>
            </footer>
        </body> 
    `
}
