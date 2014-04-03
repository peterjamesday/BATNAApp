var NegotiationFormView = Backbone.View.extend({
  el: '.negotiationFormView',


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
        negotiation = this.collection.create({
          negotiation_name: $('.negotiationName').val(),
          batna_name: $('.batnaName').val(),
          batna_points: $('.batnaPoints').val(),
          },{
           success: function(response){

            $('.negotiationName').val("");
            $('.batnaName').val("");
            $('.batnaPoints').val("");
            $('.negotiationFormView').hide();
            $('.negotiationListView').show();
        // var issueView = new IssueView({model: this.model});
          }
        });
        // new Negotiation(this.negotiationAttributes()); 
  }
});