<template>
<div>
    <h1>{{ title }}</h1>
		<div v-html="body" />
    <img :src="image" alt="">
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
