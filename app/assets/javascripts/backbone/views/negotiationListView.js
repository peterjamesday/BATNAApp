var NegotiationListView = Backbone.View.extend({
	el: ".negotiationListView",

	initialize: function(){
		// this.render();
		debugger
		this.collection.on("reset sync", this.render, this);
	},

	render: function(){
		
		for(var i = 0; i < this.collection.length; i++){
			
			var negotiationView = new NegotiationView({

				model: this.collection[i]
			});
			debugger
			$('.negotiationListView').append(negotiationView.render().el);
		}
	},

});

var NegotiationView = Backbone.View.extend({
	className: "negotiation",

	template: window.JST['backbone/templates/negotiation'],

	initialize: function(){
		this.render();
	},

	render: function(){

		console.log(this.model);
		this.$el.html(this.template(this.model));
		return this;
	}
});