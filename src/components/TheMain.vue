<script setup>
    import TheModal from './TheModal.vue'
    import TheForm from './TheForm.vue'
</script>

<template>
    <div id="presentation" class="menu-item">
        <h1>Présentation.</h1>
        <h2>Jérémy Aboudan</h2>
        <p>Je suis un homme de 33 ans. Après avoir travaillé dans différents secteurs d'activité tels que l'hôtellerie-restauration, le batîment et la vente je cherche aujourd'hui à me stabiliser et à choisir un secteur me corresppondant plus. Ayant toujours été attiré par le monde de l'informatique et des jeux vidéos, le métier de développeur me paraît être une option idéale.</p>
    </div>
    <div id="creation" class="menu-item">
        <h1>Mes créations.</h1>
        <div><TheModal /></div>
    </div>
    <div id="contact" class="menu-item">
        <h1>Me contacter.</h1>
        <div><TheForm /></div>
    </div>
</template>

