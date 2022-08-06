const app={
    template:'#my-app',
    data(){
        return {
            books:[
                {
                    id:1,
                    name:'<<javascripts is good>>',
                    date:'2020-2',
                    price:85.00,
                    count:1
                },
                {
                    id:2,
                    name:'<<毎日のコーディング練習>>',
                    date:'2017-8',
                    price:58.00,
                    count:1
                },
                {
                    id:3,
                    name:'<<算法导论>>',
                    date:'2012-9',
                    price:120.00,
                    count:1
                },
                {
                    id:4,
                    name:'<<龙傲天的个人修养>>',
                    date:'2022-2',
                    price:84.00,
                    count:1
                }
            ]
        }
    },
    methods:{
        increment(index){
            this.books[index].count++;
        },
        decrement(index){
            this.books[index].count--;
        },
        deleteBook(index){
            this.books.splice(index, 1);
        },
        //フィルターの効果はメソッドもできる
    },
    watch:{

    },
    computed:{
        totalPrice(){
            let finalPrice = 0;
            for (let book of this.books){
                finalPrice += book.count * book.price;
            };
            return '$' + finalPrice;
        },
        //プロパティを計算することでフィルターの効果を実現
        filterBooks(){
            return this.books.map(item => {
                const newItem=Object.assign({}, item);
                newItem.price = '$' + item.price;
                return newItem;
            })
        }
    }

}     
Vue.createApp(app).mount('#app')       