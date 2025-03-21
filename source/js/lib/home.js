mixins.home = {
    mounted() {
        let homeBackgroundRef = this.$refs.homeBackground;

        if (homeBackgroundRef) {
            let homeBgImgURLs = homeBackgroundRef.dataset.image.split(",");
            homeBackgroundRef.style.backgroundImage = `url('${
              homeBgImgURLs[Math.floor(Math.random() * homeBgImgURLs.length)]
            }')`;
        }

        this.menuColor = true;

        let contentBackgroundRef = this.$refs.contentBackground;
        let contentBgImgURLs = contentBackgroundRef.dataset.images.split(",");
        contentBackgroundRef.style.backgroundImage = `url('${
          contentBgImgURLs[Math.floor(Math.random() * contentBgImgURLs.length)]
        }')`;
    },
    methods: {
        homeClick() {
            window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
        },
    },
};