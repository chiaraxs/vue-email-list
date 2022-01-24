// Generare 10 indirizzi email e stamparli in pagina all’interno di una lista.
// Bonus -> Far comparire gli indirizzi email solamente quando sono stati tutti generati.

new Vue({
    el: '#app',
    data: {
        mails: []   // array vuoto da popolare tramite "randonMails"
    },
    methods: {
        randomMails: function() {
            for (i = 0; i < 10; i++){
                this.mails = [];   // azzero l'array ad ogni giro di ciclo per non sommare l'array con +10 consecutivi ad ogni click sul button
                axios.get("https://flynn.boolean.careers/exercises/api/random/mail").then((result) => {   // callback function to API
                    this.mails.push(result.data.response);        // salvo 'response' in mails -> pusha nell'array vuoto 10 mails
                })
            };
        },
    },
    mounted() {
        this.randomMails(); 
    }
});