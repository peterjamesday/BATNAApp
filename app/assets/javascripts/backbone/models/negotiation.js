var Negotiation = Backbone.Model.extend({
  url: '/negotiations/newnegotiation',
  paramRoot: 'negotiation',

  defaults: {
  	"completed": false,
  	"final_score": 0,
    "negotiation_name":"untitled",
    "batna_name": "untitled",
    "batna_points": 0
  }
  
});

var Negotiations = Backbone.Collection.extend({
  model: Negotiation,

  url: '/negotiations/retrievenegotiations',

  initialize: function(){
  	
  	this.fetch();
  	
  }

});