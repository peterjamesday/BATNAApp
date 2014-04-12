var NegotiationFormView = Backbone.View.extend({
  el: '.negotiationFormView',

  template: window.JST['backbone/templates/negotiationFormView'],

  initialize: function(){
    this.$el.html(this.template);
    return this;
  },

  events: {
  	'click .negotiation-submit': 'submitNegotiation'
  },

  submitNegotiation: function(event){
    event.preventDefault(); 
   
    var self = this,
        negotiation = this.collection.create({
          negotiation_name: $('.newnegotiationName').val(),
          batna_name: $('.newbatnaName').val(),
          batna_points: $('.newbatnaPoints').val(),
          },{
           success: function(response){

            $('.newnegotiationName').val("");
            $('.newbatnaName').val("");
            $('.newbatnaPoints').val("");
            $('.negotiationFormView').hide();
            $('.negotiationListView').show();
        // var issueView = new IssueView({model: this.model});
          }
        });
        // new Negotiation(this.negotiationAttributes()); 
  }
});