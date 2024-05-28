const {createApp} = Vue

createApp({
    data() {
        return {
            message: 'Hello World',
            saluto: 'Ciao Vue'
        }
    }
}).mount('#saluto')

