let HomePage = {
    props:['pages'],
    data: function(){
		return { 
			page: this.pages[0]
		}
		
	},
	template:  `
<div class="container-fluid p-4 m-0">
    <div class="container-fluid p-3 m-0">
        <div v-if='page.skills'>
            <h3 class='row'>◦ Skills</h3>
            <ul class='row bg-gray'>
                <div class='col-lg-8' v-for='skill in page.skills'>
                    <li class='font-weight-light'>
                        {{skill}}
                    </li>
                </div>
            </ul>
        </div>
        <div v-if='page.educations'>
            <h3 class='row'>◦ Education</h3>
            <div class='col' v-for='e in page.educations'>
                <span class='font-weight-bold'> {{e.name}} </span>
                <ul>
                    <li class='font-weight-light'> {{e.degree}} </li>
                    <li class='font-weight-light'> {{e.date}} </li>
                    <li class='font-weight-light'> {{e.gpa}} </li>
                </ul>
            </div>
        </div>
        <div v-if='page.workplaces'>
            <h3 class='row'>◦ Work Experience</h3>
            <div class='col' v-for='w in page.workplaces'>
                <span class='font-weight-bold'> {{w.company}} </span><br>
                <span class='font-weight-light'> {{w.title}} </span><br>
                <span class='font-weight-light'> {{w.date}} </span>
                <ul>
                    <li class='font-weight-light' v-for='t in w.tasks'> {{t}} </li>
                </ul>
            </div>
        </div>
    </div>
</div>
`
};