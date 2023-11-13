const { createApp } = Vue;

const app = createApp({
    data() {    
        return {
            title: "Titolo di prova",
            color: "red"
            
        }
    }
   
})

app.mount("#app");