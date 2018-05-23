<template>
<div>
  <div class="container">
    <h1 class="post-title">{{ title }}</h1>
    <div class="content">
      <img :src="image" alt="">
      <markdownIt :content="body"></markdownIt>
    </div>
  </div>
</div>
</template>

<script>
import markdownIt from '~/components/markdownIt.vue'
export default {
  async asyncData({ params }) {
    let post = await import('~/content/projets/' + params.projet + '.json');
    return post;
  },
  components:{
    markdownIt
  }
}
</script>

<style lang="scss">
.post-title{
  grid-column: span 1;
}
.content{
  grid-column: span 2;
  img{
    object-fit: cover;
    width: 100%;
    max-width: 100%;
    height: auto;
  }
}
</style>

