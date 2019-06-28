<template>
    <div >
        <h1> {{msg()}}</h1>
        <h3 class ="edit_text">Title:</h3>
		<input class = 'form_add_title' type = "text" 
        v-model = 'form.title' :class="[(form.title).length == 0 ? 'red' : 'green']">
		<br>
        <h3 class ="edit_text">Description:</h3>
		<textarea class = 'form_add_desc' type = "text"
        v-model = 'form.description' :class="[(form.description).length == 0 ? 'red' : 'green']">
        </textarea>
		<br>
        <br>
		<router-link :to = "{name: 'allposts'}" ><button class = 'button_new_post' @click='addPost()'
        v-bind:disabled = '(form.title).length ==0 && (form.description).length == 0'>EDIT</button></router-link>
	
		<button class = 'button_new_post'><router-link :to = "{name: 'allposts'}" >BACK TO HOME</router-link></button>
        <br><br>
    </div>
</template>

<script>
import router from '../router/index';
export default {
    name: 'edit',
    data() {
        return {
            message: 'Your post to edit: ',
            index: 0,
            form:{
               title: '',
               description: '',
               done: false
            },
            todos: []
        }  
    },
    methods: {
        msg(){
            return this.message
        },
        addPost(){
			let form = {
				title: this.form.title ,
				description: this.form.description,
				done: this.form.done
            }
            console.log(form);
			this.todos[this.index] = form;
            localStorage.setItem('todos', JSON.stringify(this.todos));
		}
    },
    mounted() {
      this.index = this.$route.params.id;
      this.todos = JSON.parse(localStorage.getItem('todos'));
      this.form = this.todos[this.index];
  }
};
</script>