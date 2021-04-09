let routes = [
    /*home*/
    { path: '/', component: HomePage, name:"home"},
    //primary
    { path: '/portfolio', component: Portfolio, name:"portfolio", props: true},
    //primary
    { path: '/contact', component: Contact, name:"contact", props: true},
];

let router = new VueRouter({
  routes: routes,
  base: '/',
  //mode: 'history'
});

let app = new Vue({
	el: '#app',
    router: router,
	data: { pages: data.pages}, 
});
	