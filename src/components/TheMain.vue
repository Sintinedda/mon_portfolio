<script setup>
    import TheModal from './TheModal.vue'
</script>

<template>
    <div id="presentation" class="menu-item">
        <h1>Présentation.</h1>
        <h2>Jérémy Aboudan</h2>
        <p>Je suis un homme de 33 ans. Après avoir travaillé dans différents secteurs d'activité tels que l'hôtellerie-restauration, le batîment et la vente je cherche aujourd'hui à me stabiliser et à choisir un secteur me corresppondant plus. Ayant toujours été attiré par le monde de l'informatique et des jeux vidéos, le métier de développeur me paraît être une option idéale.</p>
    </div>
    <div id="creation" class="menu-item">
        <h1>Mes créations.</h1>
        <div id="modal"><TheModal /></div>
    </div>
    <div id="contact" class="menu-item">
        <h1>Me contacter.</h1>
        <form action="">
            <section class="name">
                <div class="first-name">
                    <label for="first-name">Entrez votre prénom : </label>
                    <input type="text" name="first-name" id="first-name"/>
                </div>
                <div class="last-name">
                    <label for="last-name">Ici votre nom : </label>
                    <input type="text" name="last-name" id="last-name"/>
                </div>
            </section>
            <div class="object">
                <label for="object">L'objet de votre message : </label>
                <input type="text" name="object" id="object"/>
            </div>
            <div class="message">
                <label for="message">Et enfin votre message : </label>
                <textarea name="message" id="message"></textarea>
            </div>
        </form>
    </div>
</template>

