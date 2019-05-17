<template>
  <section class="container">
    <div>
      <h2 class="subtitle">
        {{ tag_name }}
      </h2>
      <div v-for="story in stories" :key="story.id">
        <nuxt-link :to="{name:'post-id', params: { id: story.id }}">{{ story.name }}</nuxt-link>
      </div>
    </div>
  </section>
</template>
<script>
export default {
    async asyncData (context) {
        const dst_url = 'https://api.storyblok.com/v1/cdn/stories/'
        const { data } = await context.app.$axios.get(dst_url, {
            params: {
                token: 'k4ffsYRoUFU62TVSykewkwtt',
                starts_with: 'blogs',
                resolve_relations: 'categories',
                'filter_query[categories][in_array]': context.params.id
            }
        })
        return { 
            stories: data.stories,
            tag_name: context.params.id
         }
    }
}
</script>
<style scoped>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}


</style>