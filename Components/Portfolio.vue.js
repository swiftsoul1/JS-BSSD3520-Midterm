let Portfolio = {
     props:['pages'],
     data: function(){
		return { 
			page: this.pages[1]
		}
		
	 },
	 template:  `
<div class="container-fluid p-2 m-2">
    <!-- title -->
    <h1 class='text-capitalize p-3 m-0' v-html='page.slug'></h1>
    <div class="row">  
        <div class="col-sm-12 col-md-4" v-for="item in page.items">
            <div class="card h-100">
                <img class="card-img-top fixed-height-1" v-bind:src="item.featured">
                <div class="card-body mh-100">
                    <h5 class="card-title">{{item.name}}</h5>
                    <p class="card-text">{{item.summary}}</p>
                    <a v-bind:href="item.link.ref" target="_blank" class="btn btn-primary">{{item.link.text}}</a>
                </div>
            </div>   
        </div>
    </div>
</div>
`
};