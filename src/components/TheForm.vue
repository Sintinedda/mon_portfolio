<script>
    import '../assets/form.css'
    import emailjs from '@emailjs/browser'

    export default {
        name: 'ContactUs',
        data() {
            return {
                first_name: '',
                last_name: '',
                object: '',
                message: '',
            }
        },
        methods: {
            sendEmail(e) {  
                try {
                    emailjs.sendForm('service_dwbas2d', 'contact_form', e.target, 'v42PYGrL2vHWKyFcZ', {
                        first_name: this.first_name,
                        last_name: this.last_name,
                        object: this.object,
                        message: this.message
                    })
                    alert('Votre message a bien été envoyé.')
                } catch(error) {
                    alert("Un problème est survenu. Votre message n'a pas été envoyé." )
                }
                this.first_name = ''
                this.last_name = ''
                this.object = ''
                this.message = ''
            },
        }
    }
</script>

<template>
    <form @submit.prevent="sendEmail">
        <section class="name">
            <div class="first-name">
                <label for="first-name">Entrez votre prénom : </label>
                <input id= field type="text" name="first_name" v-model="first_name" required/>
            </div>
            <div class="last-name">
                <label for="last-name">Ici votre nom : </label>
                <input  type="text" name="last_name" v-model="last_name" required/>
            </div>
        </section>
        <div class="object">
            <label for="object">L'objet de votre message : </label>
            <input  type="text" name="object" v-model="object" required/>
        </div>
        <div class="message">
            <label for="message">Et enfin votre message : </label>
            <textarea  name="message" v-model="message" required></textarea>
        </div>
        <input id="submit" type="submit" value="Envoyer">
    </form>
</template>




