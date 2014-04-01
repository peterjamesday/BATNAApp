var Negotiation = Backbone.Model.extend({
  url: '/negotiations/newnegotiation',
  paramRoot: 'negotiation',

  defaults: {
  	"completed": false,
  	"final_score": 0
  }
  
});

var Negotiations = Backbone.Collection.extend({
  model: Negotiation,

  url: '/negotiations/retrievenegotiations',

  initialize: function(){
  	
  	this.fetch({
  		success: function(collection, response, options){
  			
  		var negotiationListView = new NegotiationListView({collection: response});
  		
  		}
  	});
  	
  },

  parse: function(response){

  }
});