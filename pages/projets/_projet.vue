<template>
<div>
  <div class="container">
    <h1 class="post-title">{{ title }}</h1>
    <div class="content">
      <img :src="image" alt="">
      <div>{{body}}</div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  async asyncData({ params }) {
    let post = await import('~/content/projets/' + params.projet + '.json');
    return post;
  }
}
</script>

<style lang="scss" scoped>
.post-title{
  grid-column: span 1;
}
.content{
  grid-column: span 2;
  img{
    object-fit: cover;
    max-width: 100%;
    height: auto;
  }
}
</style>

