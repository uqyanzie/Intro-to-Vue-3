const app = Vue.createApp({
    data() {
        return {
            product: 'Socks',
            description: 'A pair of wet and stinky socks',
            image: './assets/images/socks_green.jpg',
            inStock: true,
            inventory: 30,
            onSale: true,
            url: 'https://github.com/uqyanzie/Intro-to-Vue-3'
        }
    }
})