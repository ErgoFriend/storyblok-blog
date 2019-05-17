<template>
  <section class="container">
    <div>
      <h2 class="subtitle">
        かす.dev
      </h2>
      <div v-for="tag in tags" :key="tag.name">
        <p>{{ tag.name }}</p>
        <p>{{ tag.taggings_count }}</p>
      </div>
      <div v-for="story in stories" :key="story.id">
        <a :href="story.id">{{ story.name }}</a>
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
    const { tags_data } = await context.app.$axios.get(`https://api.storyblok.com/v1/cdn/tags`, {
        params: {
          token: 'k4ffsYRoUFU62TVSykewkwtt',
        }
      })
    const { data } = await context.app.$axios.get(`https://api.storyblok.com/v1/cdn/stories`, {
        params: {
          token: 'k4ffsYRoUFU62TVSykewkwtt',
          starts_with: 'blogs',
          with_tag: '',
        }
      })
    return {
      stories: data.stories,
      tags: tags_data.tags,
      }
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
