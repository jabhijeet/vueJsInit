new Vue({
    el:"#app",
    data : {
        newEntry : "",
        todos:[] // {value:String, isDone: boolean}
    },
    watch: {
        todos :{
            handler: function(newTodos){
                sessionStorage.setItem('my-todo-list',JSON.stringify(newTodos))
            },
            deep: true
        }
    },
    methods: {
        addEntry:function(){
            if(this.newEntry){
                this.todos.push({value:this.newEntry,isDone:false});
                this.newEntry="";
            }
        },
        removeEntry:function(index){
           this.todos.splice(index,1);
        }
    },
    beforeCreate() {
        console.log('before create');
    },
    created() {
        console.log('created');
    },
    beforeMount() {
        console.log('before mount');
    },
    mounted() {
        console.log('mounted');
        const ssTodos = sessionStorage.getItem('my-todo-list');
        this.todos = ssTodos ? JSON.parse(ssTodos) : [] ;
    },
})