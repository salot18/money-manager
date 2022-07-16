const PAGES = {
    "home": `
        <div class="app__page__title-area">
            <div class="app__page__title-area__main-title">HOME</div>
            <div class="app__page__title-area__sub-title">An overview</div>
        </div>
    `,
    "my-money": {
        "html": `
            <div class="app__page__title-area">
                <div class="app__page__title-area__main-title">My Money</div>
                <div class="app__page__title-area__sub-title">An overview of my money</div>
                <div class="home__total-box">
                    <div class="home__total-box__total">500 $</div>
                    <div class="home__total-box__cash">
                        <span>Cash</span>
                        <span>200$</span>
                    </div>
                    <div class="home__total-box__card">
                        <span>Card</span>
                        <span>300$</span>
                    </div>
                </div>
                <div class="home__wishlist">
                    <div class="home__wishlist__title-bar">
                        <div class="home__wishlist__title-bar__title">Wishlist</div>
                    </div>
                    <div class="home__wishlist__list">
                        <div>1 T-Shirts</div>
                        <div>2 Lil Peep Poster</div>
                        <div>3 Black Cargo Shorts</div>
                    </div>
                    <div class="home__wishlist__show-all">More</div>
                </div>
                <div class="home__money-movement">
                    <div class="home__money-movement__title-bar">
                        <div class="home__money-movement__title-bar__title">Money Movement</div>
                    </div>
                    <div class="home__money-movement__movements">
                        <div>1 T-Shirts</div>
                        <div>2 Lil Peep Poster</div>
                        <div>3 Black Cargo Shorts</div>
                    </div>
                    <div class="home__money-movement__show-all">More</div>
                </div>
            </div>
        `,
        "events": [
            {
                "element": ".home__wishlist__show-all",
                "callback": "openDialogBox"
            },
            {
                "element": ".home__money-movement__show-all",
                "callback": "openDialogBox()"
            },
        ]
    },
    "my-job": `
        <div class="app__page__title-area">My Job</div>
    `,
}