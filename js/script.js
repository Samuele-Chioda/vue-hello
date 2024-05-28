const {createApp} = Vue

createApp({
    data() {
        return {
            message: '',
            saluto: 'Benvenuto!',
            imgUrl:''
        }
    }
}).mount('#saluto')

