new Vue({
    el:"#app",
    data : {
        newEntry : "",
        todos:[] // {value:String, isDone: boolean}
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
})