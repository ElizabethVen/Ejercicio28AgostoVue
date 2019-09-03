const app = new Vue({
    el: '#app',
    data: {
        lists: [],
        contenido: [],
        conte:[]
    },
    methods: {
        addList() {
            const newList = {
                name: '',
                status: 'creating'
            }
            this.lists.push(newList)
        },
        saveList(list) {
            list.status = 'saved'
        },
        removeList(index) {
            this.lists.splice(index, 1)
        },
        addCards() {
            const newCard = {
                texto: '',
                status2: 'creating'
            }
            this.contenido.push(newCard)
        },
        saveCards(conte){
            conte.status2 = 'saved'
        }
    }
})