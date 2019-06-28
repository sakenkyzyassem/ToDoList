<template>
  <div>
    <h1>{{ msg() }}</h1>
    <div class= 'box' v-for='(todo, index) in todos' v-bind:key='index'>
      <table>
        <td class = 'button_done'> 
        <button class="btn" @click='todo.done = !todo.done'
         :class="[todo.done ? 'red_b' : 'green_b']">{{ (todo.done) ? 'Undone' : 'Done' }}</button>
        </td>
        <td class = 'table_body'>
          <h3>{{ todo.title }}</h3>
          <p>{{ todo.description }}</p>
          
        </td>
        <td class = 'button_delete'>
        <button class = 'btn' @click='deletePost(index)'>Delete</button>
        <br><br>
        <button class = 'btn'><router-link :to = "{name: 'showpost', params:{id:index}}">Edit</router-link></button>
        </td>
      </table>
    </div>
    <br><br>
    <button class='button_new_post'><router-link :to = "{name: 'addpost'}">+ Add New Post</router-link></button>
    <br><br>
  </div>
</template>

<script>
export default {
  name: "allposts",
  data() {
    return {
      message: 'Your To-Do List:',
      todos: []
    }
    
  },
  methods:{
    msg(){
      return this.message
    },
    deletePost(index) {
      this.todos.splice(index,1);
      localStorage.setItem('todos', JSON.stringify(this.todos));
    }
  },
  mounted() {
    if (localStorage.getItem('todos')) {
      this.todos = JSON.parse(localStorage.getItem('todos'));
    }
  }
}
</script>

<style scoped>
 h1, h2 {
   font-weight: normal;
 }
 ul {
   list-style-type: none;
   padding: 0;
 }
 li {
   display: inline-block;
   margin: 0 10px;
 }
 a {
   color: #42b983;
 }
</style>