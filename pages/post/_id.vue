<template>
    <div class="story" :style="{background:default_mode.background_color}">
        <h2 class="subtitle" :style="{color:default_mode.text_color}">
            {{ story.name }}
        </h2>
        <ModeButton/>
        <div v-html="$md.render('[[toc]]\n' + story.content.body)" :style="{color:default_mode.text_color}">></div>
    </div>
</template>
<script>
import { mapState,mapMutations } from 'vuex'

import ModeButton from '~/components/ModeButton.vue'

export default {
    components: {
        ModeButton
    },
    async asyncData (context) {
        const dst_url = 'https://api.storyblok.com/v1/cdn/stories/' + (context.payload ? context.payload.id : context.params.id)
        const { data } = await context.app.$axios.get(dst_url, {
            params: {
                token: 'k4ffsYRoUFU62TVSykewkwtt',
                resolve_relations: 'categories',
            }
        })
        return { story: data.story }
    },
    computed: {
        ...mapState('theme',['default_mode'])
    },
}
</script>
<style scoped>
.story {
    padding: 20px;
    min-height: 100vh;
}
</style>
