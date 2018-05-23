<template>
  <div v-html="markit"></div>
</template>

<script>
  import markdown from 'marked';
  export default {
    name: 'markdownIt',
    props: {
      content: {
        required: true 
      }
    },
    computed: {
      markit() {
        return markdown(this.content, {sanitize:true}) 
      }
    },
  }
</script>