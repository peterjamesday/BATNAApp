var Issue = Backbone.Model.extend({
  url: '/issues/newissue',
  paramRoot: 'issue',

  defaults:{
  	"issue_name": "untitled",
  	"issue_outcome": "pending",
  	"potential_points": 0,
  	"issue_points": 0
  }
});



var Issues = Backbone.Collection.extend({
  model: Issue,
  url: '/issues/retrieveissues',

  initialize: function(){
  	this.fetch({data: $.param({negotiation_id: arguments[0].negotiation.get('id')})});
  },

  calculateWhatever: function(){
    // loop through collection
  }
});

