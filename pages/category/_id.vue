<template>
  <section class="container" :style="{background:default_mode.background_color}">
    <div>
      <h2 class="subtitle" :style="{color:default_mode.text_color}">
        {{ tag_name }}
      </h2>
      <ModeButton/>
      <h4 :style="{color:default_mode.text_color}">新着</h4>
      <div class="post" v-for="post in stories" :key="post.id" :style="{background:default_mode.card_color}">
        <nuxt-link :to="{name:'post-id', params: { id: post.id }}">
          <p class="post_title">{{ post.name }}</p>
          <p class="post_summary">{{ post.content.summary }}</p>
        </nuxt-link>
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
    async asyncData (context) {
        const dst_url = 'https://api.storyblok.com/v1/cdn/stories/'
        const { data } = await context.app.$axios.get(dst_url, {
            params: {
                token: 'k4ffsYRoUFU62TVSykewkwtt',
                starts_with: 'blogs',
                resolve_relations: 'categories',
                'filter_query[categories][in_array]': (context.payload ? context.payload.id : context.params.id)
            }
        })
        return { 
            stories: data.stories,
            tag_name: (context.payload ? context.payload.name : context.params.id)
         }
    },
  computed: {
      ...mapState('theme',['default_mode'])
  },
}
</script>
<style lang="scss" scoped>
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
</style>