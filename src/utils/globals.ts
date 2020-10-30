// global data declaration

// message for per-project apps that are internally distributed
export const unlistedAppsMessage: string = "The mobile apps are distributed internally.";

// message to render when google play and app store links are not available
export const noAppLinksMsg: string = "The mobile apps are distributed internally";

export const sliderConfig = {
    preloadImages: true,
    updateOnImagesReady: true,
    centeredSlides: true,
    spaceBetween: 0,
    loop: true,
    navigation: {
        nextEl: '.swiper-button-nexts',
        prevEl: '.swiper-button-prev',
    },
    autoplay: {
        delay: 2000,
        disableOnInteraction: true,
    },
}
