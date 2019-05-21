export const state = () => ({
    is_dark: false,
    default_mode:{
      background_color: "#ffffff",
      text_color: "#707070",
      twitter_color: "#55ACEE",
      card_color: "#FBFBFB",
    },
    dark_mode: {
        background_color: "#0B1218",
        text_color: "#e2e2e2",
        twitter_color: "#182464",
        card_color: "#182533",
    },
    white_mode: {
        background_color: "#ffffff",
        text_color: "#707070",
        twitter_color: "#55ACEE",
        card_color: "#FBFBFB",
    },
});

export const mutations = {
    isDark (state) {
        state.default_mode =  state.is_dark ? state.white_mode : state.dark_mode
        state.is_dark = !state.is_dark
    }
};
