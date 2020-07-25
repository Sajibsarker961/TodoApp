var app = new Vue({
      el:'#page-content',
      data: {
        todos : [
          {
            id: 1,
            name: "Learn Vue Js",
            completed: false
          },
          {
            id: 2,
            name: "Learn Sails Js",
            completed: true
          }
        ],
        todoValue: '',
        todosLength: 0,
        inProgress: 1,
        sort: "all",
      },
      created: function(){
        this.getSize()
      },
      methods: {
        getSize: function(){
            this.todosLength = this.todos.length;
            return this.todosLength;
        },
        addTodo: function (todo) {
          let todoObject = {
            id: this.todosLength+1,
            name: todo,
            completed: false
          }
          if(todo==''){
            alert("Field is empty!!. Please input task")
          }else{
            this.todos.push(todoObject)
          }
          this.todosLength++
          this.todoValue=''
        },
        removeTodo: function (id) {
          this.todos = this.todos.filter(todo => todo.id != id);
        },
        removeAll: function(){
          this.todos=[]
        },
        completeAll: function(){
          for (let index = 0; index < this.todos.length; index++) {
            this.todos[index].completed = true;
            
          }
        },
        removeComplete: function(){
          this.todos = this.todos.filter(todo => !todo.completed);
        }
          
      },
      computed: {
        getIncomplete: function(){
          let incompleteTodo = this.todos.filter((todo) => !todo.completed)
          return incompleteTodo.length
        },
        sortTodo: function(){
          if( this.sort === "all"){
            return this.todos
          }else if (this.sort === "isInProgress"){
            return this.todos.filter((todo) => !todo.completed) 
          }else if(this.sort === "completed"){
            return this.todos.filter((todo) => todo.completed) 
          }
        },

      },
      
    });