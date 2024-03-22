<script setup>
import { ref } from 'vue';
import { onClickOutside } from '@vueuse/core'
import '../assets/modal.css'

const modal1 = ref(false)
const modal2 = ref(false)
const modal3 = ref(false)
const modal4 = ref(false)
const modalRef = ref(null)

onClickOutside(
    modalRef, (event) => {
        console.log(event)
        modal1.value = false
        modal2.value = false
        modal3.value = false
        modal4.value = false
    },
)
</script>

<template>
    <section id="modal">
        <div @click="modal1 = true">
            <div class="shadow-img">
                <img src="../assets/img/logoCv.png" alt="Logo de curriculum vitae">
                <h3>Mon curriculum vitae</h3>
            </div>
        </div>
        <div v-if="modal1" class="mask-modal">
            <div  ref="modalRef" class="modal">
                <button @click="modal1 = false"></button>
                <h4>Curriculum vitae de Jérémy Aboudan</h4>
                <p class="date">Créé le <time datetime="2024-01-16">16 janvier 2024</time>.</p>
                <p class="assets">HTML5 et CSS3 utilisés. Codé avec Visual Studio Code et versionné avec Git et GitHub.</p>
                <div class="modal-logo">
                    <img src="../assets/img/logoHtml5.png" alt="Logo HTML5">
                    <img src="../assets/img/LogoCss3.png" alt="Logo CSS3">
                    <img src="../assets/img/logoVSCode.jpg" alt="Logo de Visual Studio Code">
                    <img src="../assets/img/logoGit.png" alt="Logo de Git">
                    <img src="../assets/img/logoGithub.jpg" alt="Logo de GitHub">
                </div>
                <p class="pdf"><a href="../../public/monCv.pdf" onclick="window.open(this.href); return false;">Lien vers le curriculum vitae de Jérémy Aboudan en format PDF.</a></p>
                <p class="github"><a href="https://github.com/Sintinedda/Curriculum-vitae-Jeremy-Aboudan-" onclick="window.open(this.href); return false;">Lien vers le repository Github.</a></p>
            </div>
        </div>
        
        <div @click="modal2 = true">
            <div class="shadow-img">
                <img src="../assets/img/logoCahierDesCharges.png" alt="Logo de cahier des charges">
                <h3>Mon cahier des charges</h3>
            </div>
        </div>
        <div v-if="modal2" class="mask-modal">
            <div ref="modalRef" class="modal">
                <button @click="modal2 = false"></button>
                <h4>Cahier des charges</h4>
                <p class="date">Crée le <time datetime="2024-02-06">06 février 2024</time>.</p>
                <p class="assets">HTML5 et CSS3 utilisés. Codé avec Visual Studio Code.</p>
                <div class="modal-logo">
                    <img src="../assets/img/logoHtml5.png" alt="Logo HTML5">
                    <img src="../assets/img/LogoCss3.png" alt="Logo CSS3">
                    <img src="../assets/img/logoVSCode.jpg" alt="Logo de Visual Studio Code">
                </div>
                <p class="pdf"><a href="../../public/cahierDesCharges.pdf" onclick="window.open(this.href); return false;">Lien vers le cahier des charges en format PDF.</a></p>
            </div>
        </div>
        
        <div @click="modal3 = true">
            <div class="shadow-img">
                <img src="../assets/img/logoEspaceCommentaire.png" alt="Logo pour un espace commentaire">
                <h3>Mon espace commentaire dynamique</h3>
            </div>
        </div>
        <div v-if="modal3" class="mask-modal">
            <div ref="modalRef" class="modal">
                <button @click="modal3 = false"></button>
                <h4>Espace commentaire Dynamique</h4>
                <p class="date">Créé le <time datetime="2024-02-18">18 février 2024</time>.</p>
                <p class="assets">HTML5, CSS3 et Javascript utilisés. Codé avec Visual Studio Code et versionné avec Git et GitHub.</p>
                <div class="modal-logo">
                    <img src="../assets/img/logoHtml5.png" alt="Logo HTML5">
                    <img src="../assets/img/LogoCss3.png" alt="Logo CSS3">
                    <img src="../assets/img/logoJs.png" alt="Logo Javascript">
                    <img src="../assets/img/logoVSCode.jpg" alt="Logo de Visual Studio Code">
                    <img src="../assets/img/logoGit.png" alt="Logo de Git">
                    <img src="../assets/img/logoGithub.jpg" alt="Logo de GitHub">
                </div>
                <p class="pdf"><a href="../../public/espaceCommentaireDynamique.pdf" onclick="window.open(this.href); return false;">Lien vers l'espace commentaire au format PDF.</a></p>
                <p class="github"><a href="https://github.com/Sintinedda/Dynamiser-un-espace-commentaire" onclick="window.open(this.href); return false;">Lien vers le repository Github.</a></p>
            </div>
        </div>
        
        <div @click="modal4 = true">
            <div class="shadow-img">
                <img src="../assets/img/logoD&D.jpg" alt="Logo de Donjons et Dragons">
                <h3>Mon site web</h3>
            </div>
        </div>
            <div v-if="modal4" class="mask-modal">
                <div ref="modalRef" class="modal">
                    <button @click="modal4 = false"></button>
                    <h4>Site web pour Donjons & Dragons</h4>
                    <p class="date">Créé le <time datetime="2024-01-19">19 janvier 2024</time> et toujours en développement.</p>
                    <p class="assets">HTML5, CSS3 et Javascript utilisés. Codé avec Visual Studio Code et versionné avec Git et GitHub.</p>
                    <div class="modal-logo">
                    <img src="../assets/img/logoHtml5.png" alt="Logo HTML5">
                    <img src="../assets/img/LogoCss3.png" alt="Logo CSS3">
                    <img src="../assets/img/logoJs.png" alt="Logo Javascript">
                    <img src="../assets/img/logoVSCode.jpg" alt="Logo de Visual Studio Code">
                    <img src="../assets/img/logoGit.png" alt="Logo de Git">
                    <img src="../assets/img/logoGithub.jpg" alt="Logo de GitHub">
                </div>
                    <p class="pdf"><a href="../../public/monSiteWeb.pdf" onclick="window.open(this.href); return false;">Lien vers la page d'acceuil du site au format PDF.</a></p>
                    <p class="github"><a href="https://github.com/Sintinedda/mon-site-web" onclick="window.open(this.href); return false;">Lien vers repository Github.</a></p>
                </div>
            </div>
    </section>   
</template>

