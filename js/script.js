// Generare 10 indirizzi email e stamparli in pagina all’interno di una lista.
// Bonus -> Far comparire gli indirizzi email solamente quando sono stati tutti generati.

new Vue({
    el: '#app',
    data: {
        mails: []   // array vuoto da popolare tramite "randonMails"
    },
    methods: {
        randomMails() {
            for (i = 0; i < 10; i++){
                axios.get("https://flynn.boolean.careers/exercises/api/random/mail").then((result) => {   // callback function to API
                    this.mails.push(result.data.response);        // salvo 'response' in mails -> pusha nell'array vuoto 10 mails
                })
            }
        },
    },
    mounted() {
        this.randomMails(); 
    }
});