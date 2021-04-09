let Contact = {
     props:['pages'],
     data: function(){
		return { 
			page: this.pages[2]
		}
	 },
    methods:{
        sendEmail: function (event){
            
        }
    },
	 template:  `
<div class="container p-2 m-2">
    <!-- title -->
    <h1 class='text-capitalize p-0 m-0' v-html='page.slug'></h1>

    <!-- form -->
    <div class="form-group">
        <label for="name">Name</label>
        <input type="text" class="form-control" id="name" placeholder="Enter name">
    </div>
    <div class="form-group">
        <label for="email">Email address</label>
        <input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter your email">
    </div>
    <div class="form-group">
        <label for="reason">Please enter your reason for contacting</label>
        <textarea type="text" class="form-control" rows="3" id="reason"></textarea>
    </div>
    <button v-on:click="sendEmail" type="submit" class="btn btn-primary">Submit</button>
</div>
`
};