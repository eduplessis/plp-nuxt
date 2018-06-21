<template>

  <b-container fluid>
    
    <b-carousel id="carousel1"
                style="text-shadow: 1px 1px 2px #333;"
                controls
                indicators
                background="#ababab"
                :interval="4000"
    >

      <b-carousel-slide v-for="post in featured" :key="post._path" :img-src="post.image"></b-carousel-slide>
    </b-carousel>
    
  <b-container>
    <b-row>
      <b-col class="intro">
        <markdownIt :content="home.intro"></markdownIt>
      </b-col>
    </b-row>
    <b-card-group columns>
        <b-card v-for="post in posts" :key="post._path" :img-src="post.image">
          <nuxt-link :to="post._path">
            <div class="meta">
              <h1 class="title">{{post.title}}</h1>
              <div slot="footer">
                <small class="text-muted">{{post.type}}</small>
              </div>
            </div>
          </nuxt-link>
        </b-card>
    </b-card-group>

  </b-container>
</b-container>
</template>

<script>
import markdownIt from '~/components/markdownIt.vue';
export default {
  data() {
    // Using webpacks context to gather all files from a folder
    const context = require.context('~/content/projets/', false, /\.json$/);
    const posts = context.keys().map(key => ({
      ...context(key),
      _path: `/projets/${key.replace('.json', '').replace('./', '')}`
    }));
    const featured = posts.filter(post => post.featured);
    const home = require('~/content/home.json');
    return { 
      home: home,
      posts: posts.reverse()
    }
  },
  components:{
    markdownIt
  },
  computed: {
    featured: function(){
      return this.posts.filter( post => post.featured);
    } 
  }
};
</script>

<style lang="scss" scoped>


</style>
