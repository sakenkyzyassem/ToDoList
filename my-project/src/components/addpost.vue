<template>
	<div id = 'new_post'>
		<h1>{{ msg() }}</h1>
        <h3 >Title:</h3>
		<input class = 'form_add_title' type = "text" placeholder='Enter a title' 
        v-model = 'form.title' :class="[(form.title).length == 0 ? 'red' : 'green']"
        >
		<br>
        <h3>Description:</h3>
		<textarea class = 'form_add_desc' type = "text" placeholder='Enter a description' 
        v-model = 'form.description' :class="[(form.description).length == 0 ? 'red' : 'green']">
        </textarea>
		<br>
        <br>
		<router-link :to = "{name: 'allposts'}" ><button class = 'button_new_post' @click='addPost()'
        v-bind:disabled = '(form.title).length ==0 && (form.description).length == 0'>ADD</button></router-link>
	
		<button class = 'button_new_post'><router-link :to = "{name: 'allposts'}" >CANCEL</router-link></button>
        <br><br>
	</div>
</template>

<script>
export default{
    name: "addpost",
    data() {
        return {
            message: 'Your new To-Do:',
            form: {
                title: '',
                description: '',
                done: false
            }, 
            todos: JSON.parse(localStorage.getItem('todos')) || []
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
			this.todos.push(form);
			this.form.title = '';
            this.form.description = ''
            localStorage.setItem('todos', JSON.stringify(this.todos));
		}
    }
};
</script>