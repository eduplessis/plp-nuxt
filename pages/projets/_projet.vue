<template>
<div>
  <div class="container single">
    <div class="post-title">
      <h1>{{ title }}</h1>
      <div class="type">{{type}}</div>
    </div> 
    <div class="content">
      <img :src="image" >
      <div class="gallery">
        <div v-for="item in gallery" :key="item.images">
          <img :src="item.images">
        </div>
      </div>
      <markdownIt :content="body"></markdownIt>
    </div>
    
  </div>
</div>
</template>

<script>
import markdownIt from '~/components/markdownIt.vue';
export default {
  async asyncData({ params }) {
    let post = await import('~/content/projets/' + params.projet + '.json');
    return post;
  },
  components:{
    markdownIt
  },
  mounted: function(){
    window.addEventListener('load', function () {
      Lightense('img');
    }, false);
  }
}
</script>

<style lang="scss">

.post-title{
  grid-column: span 1;
}
.content{
  grid-column: span 2;
  grid-row: span 3;
  img{
    object-fit: cover;
    width: 100%;
    max-width: 100%;
    height: 320px;
  }
}
.gallery{
  grid-column: span 1;
  display: grid;
  grid-template-columns: repeat(auto-fill,165px);
  grid-template-rows: repeat(auto-fill, 165px);
  grid-gap: 10px;
  margin-bottom: 50px;
  img{
    object-fit: cover;
    width: 100%;
    max-width: 100%;
    height: 100%;
  }
}
</style>

