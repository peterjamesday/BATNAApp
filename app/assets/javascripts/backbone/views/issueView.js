var IssuesView = Backbone.View.extend({
  el: '.issueView',

  negotiation_id: 0,

  template: window.JST["backbone/templates/newIssues"],

  initialize: function(){
    if (arguments[0].negotiation_id) {
    	debugger
      this.negotiation_id = arguments[0].negotiation_id;
    }
  },

  events: {
  	'click .issue-submit': 'submitIssue'
  },

  submitIssue: function(event){
    event.preventDefault(); 
   debugger
    var self = this,
        issue = this.collection.create({
          issue_name: $('.issueName').val(),
          potential_points: $('.potentialPoints').val(),
          negotiation_id: this.negotiation_id
          },{
           success: function(response){

            $('.issueName').val("");
            $('.potentialPoints').val("");
          }
        });
  }
});

var IssueView = Backbone.View.extend({
	className: "issue",
	template: window.JST["issue"],


});