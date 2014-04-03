var NegotiationListView = Backbone.View.extend({
	el: ".negotiationListView",

	currentI: 0,

	initialize: function(){
		// this.render();
		
		this.collection.on("sync", this.render, this);
		this.collection.on('all', function(event){
          console.log(event);

            
        });
		// this.collection.on("add", this.addRender, this);
	},

	render: function(){
		
		for(var i = this.currentI; i < this.collection.length; i++){
			
			var negotiationView = new NegotiationView({

				model: this.collection.at(i)
			});

			this.currentI++;

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
		this.$el.html(this.template(this.model));
		return this;
	},

	events:{
		"click": "loadIssuePage",
	},  

  loadIssuePage: function(){	
  	debugger
  	
    $('.negotiationListView').hide();
  }
});





