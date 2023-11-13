const { createApp } = Vue;

const app = createApp({
    data() {    
        return {
            title: "Titolo di prova",
            ImgSrc: ""
        }
    }
   
})

app.mount("#app");