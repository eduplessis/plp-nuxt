<template>
  <div>
    <section class="section">
        <nuxt/>
    </section>
    <footer>
      <section class="section">

        
        <div class="container">
            <div class="form">
              <form name="contact" method="POST" netlify>
                  <input class="name" type="text" name="name" placeholder="Nom"> 
                  <input class="email" type="email" name="email" placeholder="Courriel">
                  <textarea class="message" name="message" placeholder="Message"></textarea>
                  <button type="submit">Envoyer</button>
              </form>

            </div>
            <div class="contact"></div>
        </div>
      </section>
    </footer>
  </div>
</template>

<style lang="scss" scoped>
.form{
  grid-column: span 2;
  form{
    display:grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    grid-template-rows: auto;
    grid-gap: 20px;

    .message{
      grid-column: 1 / -1;
    }
  }
}
</style>
