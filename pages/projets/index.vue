<template>
  <div class="container">
    <div class="intro">
      <p>Ayant plus de 15 ans d’expérience dans le domaine, PLP Constructions Inc. est une compagnie en construction général et rénovation autant dans le domaine résidentiel, commercial et institutionnel. Établi à Acton Vale en Montérégie, PLP Constructions Inc. réalise de nombreux projets dans sa région, desservant les régions de St-Hyacinthe, Granby et Drummonville.</p>
      <p>Formé d’une équipe dynamique et chevronné, PLP Constructions Inc prendra en charge vos travaux avec brio; des soumissions bien détaillés, une connaissance des normes, le respect des devis et des échéanciers ainsi que le souci du travail bien fait sont la clé pour rendre vos projets à terme de manière plus qu’agréable.</p>
      <p>Notre priorité sera toujours de vous servir dans le respect selon vos besoins, votre budget et vos échéanciers. Nous garantissons un travail de qualité en respectant les règles de l’art. Parce que chez nous, ce qui compte, c’est la satisfaction du client!</p>
      <p>PLP Construction, des travaux réalisés Par Les Pros!</p>
    </div>
    <div class="projets container">
      <div v-for="post in posts" :key="post._path"  class="projet">
        <nuxt-link :to="post._path" >
          <img :src="post.image" alt="">
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    // Using webpacks context to gather all files from a folder
    const context = require.context('~/content/projets/', false, /\.json$/);
    const posts = context.keys().map(key => ({
      ...context(key),
      _path: `/projets/${key.replace('.json', '').replace('./', '')}`
    }));
    return { posts };
  }
};
</script>

<style lang="scss" scoped>
.intro{
  grid-column: 1 / -1;
}
.projets{
  grid-column: 1 / -1;
}

</style>
