function siteWrapper(content) {
    document.getElementById("html-root").innerHTML = `
        <head>
            <meta name="color-scheme" content="dark">
            <style>html,body{background-color: #05091b;visibility: hidden;}</style>
            <link rel="stylesheet" href="/index.css">
            <title>g r u e k i . c o m</title>
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
                        <li><a href="/">home</a></li>
                        <li><a href="/about">about</a></li>
                        <li><a href="/crate-diggin">crate diggin</a></li>
                        <li><a href="/words">words</a></li>
                        <li><a href="/gallery">gallery</a></li>
                        <li><a href="/steve">steve</a></li>
                    </ul>
                </div>

                <div class="main-content">
    `
    + content +
    `           </div>
            </div>

            <footer class="footer-banner">
                <p>100% HONEST TO GOD HUMAN CODED GOODNESS ★ NO ROBOTS WERE ABUSED IN THE MAKING OF THIS SITE ★ DEATH TO MACHINES ★ 100% HONEST TO GOD HUMAN CODED BULLSHIT ★ NO ROBOTS WERE ABUSED IN THE MAKING OF THIS SITE ★ DEATH TO MACHINES ★ </p>
                <p class="scrolltext2">100% HONEST TO GOD HUMAN CODED GOODNESS ★ NO ROBOTS WERE ABUSED IN THE MAKING OF THIS SITE ★ DEATH TO MACHINES ★ 100% HONEST TO GOD HUMAN CODED BULLSHIT ★ NO ROBOTS WERE ABUSED IN THE MAKING OF THIS SITE ★ DEATH TO MACHINES ★ </p>
            </footer>
        </body> 
    `
}
