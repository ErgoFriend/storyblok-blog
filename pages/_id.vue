<template>
    <div class="story">
        <h2 class="subtitle">
        {{ story.name }}
      </h2>
        <div v-html="$md.render(story.content.body)"></div>
    </div>
</template>
<script>
export default {
    async asyncData (context) {
        const dst_url = 'https://api.storyblok.com/v1/cdn/stories/' + context.params.id
        const { data } = await context.app.$axios.get(dst_url, {
            params: {
                token: 'k4ffsYRoUFU62TVSykewkwtt',
            }
        })
        return { story: data.story }
    }
}
</script>
<style scoped>
.story {
    margin: 20px;
}
</style>
