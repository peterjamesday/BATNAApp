var NegotiationListView = Backbone.View.extend({
	el: ".negotiationListView",

	currentI: 0,

	template: window.JST['backbone/templates/negotiationListView'],

	initialize: function(){
		this.collection.on("sync", this.render, this);
		this.collection.on('all', function(event){
          console.log(event);       
        });
		this.$el.append(this.template);
	},

	render: function(){
		var negotiations = new Negotiations();
		if (this.collection.length > 0){
			
			for(var i = this.currentI; i < this.collection.length; i++){
				var negotiationView = new NegotiationView({
					model: this.collection.at(i)
				});
				this.currentI++;
				$('.negotiationListView').append(negotiationView.render().el);
			}
			
			return this;
	  } else {
	  	var negotiationFormView = new NegotiationFormView({collection: negotiations});
	  }
	},

	events:{
    "click .newNegotiationButton": "newNegotiation",
	},

	newNegotiation: function(){
		debugger
		var negotiationFormView = new NegotiationFormView({collection: this.collection});
	}
});


var NegotiationView = Backbone.View.extend({
	className: "negotiation",

	template: window.JST['backbone/templates/negotiation'],

	initialize: function(){
		this.render();
	},

	render: function(){
		this.$el.html(this.template(this.model));
		return this;
	},

	events:{
		"click": "loadIssuePage",
	},  

  loadIssuePage: function(){	
  	
  	var issues = new Issues();
  	var issuesView = new IssuesView({collection: issues, negotiation_id: this.model.id});
    $('.negotiationListView').hide();
  }
});





