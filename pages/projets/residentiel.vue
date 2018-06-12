<template>
  <div class="container">
    <div class="intro">
      <markdownIt :content="body.intro"></markdownIt>
    </div>
    <div class="projets container">
      <div v-for="post in posts" :key="post._path"  class="projet">
        <nuxt-link :to="post._path">
          <img :src="post.image" alt="">
          <div class="meta">
            <h1 class="title">{{post.title}}</h1>
            <div class="type">{{post.type}}</div>
          </div>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import markdownIt from '~/components/markdownIt.vue';
export default {
  data() {
    // Using webpacks context to gather all files from a folder
    const context = require.context('~/content/projets/', false, /\.json$/);
    let posts = context.keys().map(key => ({
      ...context(key),
      _path: `/projets/${key.replace('.json', '').replace('./', '')}`
    }));

    posts = posts.filter(post => post.type == 'residentiel');
    const body = require('~/content/residentiel.json');
    return { 
      body: body,
      posts: posts.reverse()
    }
  },
  components:{
    markdownIt
  }
};
</script>

<style lang="scss" scoped>
.intro{
  grid-column: 1 / -1;
}
.projets{
  grid-column: 1 / -1;
  .projet{
    background: rgb(97, 9, 9);
    position: relative;
    height: 215px;
    

    a{
      display: block;
      width: 100%;
      height: 215px;
      color: #fff;

      img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        // filter: brightness(100%)  saturate(100%);
        transition: all 0.25s ease-out;
      }
      .meta{
        position: absolute;
        width: 100%;
        bottom: 0;
        left: 0;
        padding: 40px 20px 30px;
        text-align: left;

        .title{
          font-size: 1.2em;
          opacity: 1;
          font-weight: 700;
          text-transform: uppercase;
          margin-bottom: 0;
          text-shadow: 0px 0px 2px rgba(0,0,0,0.5);
        }
        .type{
          font-size: 0.9em;
          opacity: 1;
          font-weight: 300;
          line-height: 1;
          margin-top: -2px;

        }
      }

      &:hover{
        img{
          filter: brightness(20%) saturate(300%);
        }
      }
    }
    
  }
}

</style>
