<template>
  <section class="container" :style="{background:default_mode.background_color}">
    <div>
      <h2 class="subtitle" :style="{color:default_mode.text_color}">
        かす.dev
      </h2>
      <ModeButton/>
      <h4 :style="{color:default_mode.text_color}">カテゴリー</h4>
      <div class="categories">
        <div class="category" v-for="category in categories" :key="category.uuid">
          <nuxt-link :to="{name:'category-id', params: { id: category.uuid }}">{{ category.name }}</nuxt-link>
        </div>
      </div>
      <h4 :style="{color:default_mode.text_color}">新着</h4>
      <div class="post" v-for="post in posts" :key="post.id" :style="{background:default_mode.card_color}">
        <nuxt-link :to="{name:'post-id', params: { id: post.id }}">
          <p class="post_title">{{ post.name }}</p>
          <p class="post_summary">{{ post.content.summary }}</p>
        </nuxt-link>
      </div>
      <h4 :style="{color:default_mode.text_color}">タグ</h4>
      <div class="tags">
        <div class="tag" v-for="tag in tags" :key="tag.name">
          <nuxt-link :to="{name:'tag-id', params: { id: tag.name }}">{{ tag.name }}: {{ tag.taggings_count }}</nuxt-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapState,mapMutations } from 'vuex'

import ModeButton from '~/components/ModeButton.vue'

export default {
  components: {
    ModeButton
  },
  data() {
    return {
      categories: null,
      tags: null,
    }
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
  },
  computed: {
      ...mapState('theme',['default_mode'])
  },
}
</script>

<style lang="scss">
.container {
  margin: 0;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  /* color: #526488; */
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}

.categories {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}

.category{
  padding: 0 20px;
}

.post {
  margin: 15px 0;
  padding: 5px 20px; 
  .post_title {
    font-size: 20px;
  }
  .post_summary {
    font-size: 15px;
  }
}


.tags{
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  .tag{
    margin: 0 15px;
  }
}
</style>
