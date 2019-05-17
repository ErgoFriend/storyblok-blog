<template>
  <section class="container">
    <div>
      <h2 class="subtitle">
        かす.dev
      </h2>
      <div v-for="category in categories" :key="category.uuid">
        <nuxt-link :to="{name:'category-id', params: { id: category.uuid }}">{{ category.name }}</nuxt-link>
      </div>
      <div v-for="tag in tags" :key="tag.name">
        <nuxt-link :to="{name:'tag-id', params: { id: tag.name }}">{{ tag.name }}: {{ tag.taggings_count }}</nuxt-link>
      </div>
      <div v-for="post in posts" :key="post.id">
        <nuxt-link :to="{name:'post-id', params: { id: post.id }}">{{ post.name }}</nuxt-link>
      </div>
    </div>
  </section>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  },
  async asyncData (context) {
    const { data } = await context.app.$axios.get(`https://api.storyblok.com/v1/cdn/stories`, {
      params: {
        token: 'k4ffsYRoUFU62TVSykewkwtt',
        starts_with: 'blogs',
        resolve_relations: 'categories',
      }
    })
    return {
      posts: data.stories,
      categories: null,
      tags: null,
      }
  },
  async mounted() {
    const categories_data = await this.$axios.get(`https://api.storyblok.com/v1/cdn/stories`, {
      params: {
        token: 'k4ffsYRoUFU62TVSykewkwtt',
        starts_with: 'categories',
      }
    })
    const tags_data = await this.$axios.get(`https://api.storyblok.com/v1/cdn/tags`, {
      params: {
        token: 'k4ffsYRoUFU62TVSykewkwtt',
      }
    })
    this.tags = tags_data.data.tags
    this.categories = categories_data.data.stories
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
