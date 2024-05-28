const {createApp} = Vue

createApp({
    data() {
        return {
            message: '',
            saluto: 'Ciao!'
        }
    }
}).mount('#saluto')

