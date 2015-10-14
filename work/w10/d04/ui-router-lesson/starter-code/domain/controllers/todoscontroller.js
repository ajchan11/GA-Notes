angular
  .module("todoApp")
  .controller("TodosController", TodosController)

function TodosController(){
  this.todoList = [
    {task: "build an awesome todo app", done: false},
    {task: "get super good at Angular", done: false},
    {task: "party on code", done: false},
    {task: "take a nap", done: false}
  ]
}
//function that allows us to add new todos to our todoList
TodosController.prototype.addTodo = function () {
  this.todoList.push( { task: this.text, done: false } )
  this.text = null
}
//function that allows us to delete specific todos from our todoList
TodosController.deleteTodo = function ($index){
  this.todoList.splice($index, 1)
}
//returns a count of the tasks that have been marked as done
TodosController.completedTodos = function () {
  return this.todoList.filter( function ( x ) {
    return x.done == true
  })
}
//returns a count of the tasks that have not been marked as done
TodosController.prototype = function () {
  return this.todoList.filter( function ( x ) {
    return x.done == false
  })
}
