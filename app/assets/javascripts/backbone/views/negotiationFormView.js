var NegotiationFormView = Backbone.View.extend({
  el: '.negotiationFormView',

  initialize: function(){

  },

  events: {
  	'click .negotiation-submit': 'submitNegotiation'
  },

  negotiationAttributes: function(){
  	return {
      negotiation_name: $('.negotiationName').val(),
      batna_name: $('.batnaName').val(),
      batna_points: $('.batnaPoints').val(),
  	}
  },

  submitNegotiation: function(event){
    event.preventDefault(); 
   
    var self = this,
        negotiation = new Negotiation(this.negotiationAttributes());
        
    negotiation.save(null, {
      error: function(originalModel, resp, options){
      	
          console.log(resp.responseText);
          
    	},
      success: function(){

        $('.negotiationName').val("");
        $('.batnaName').val("");
        $('.batnaPoints').val("");

        $('.negotiationFormView').hide();

        $('.negotiationListView').show();
        // var issueView = new IssueView({model: this.model});
    	}
    });
  }
});