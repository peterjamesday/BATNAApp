var IssuesView = Backbone.View.extend({
  el: '.issueView',

  negotiation_id: 0,

  currentI: 0,

  template: window.JST["backbone/templates/newIssues"],

  initialize: function(){
    if (arguments[0].negotiation_id) {
    	debugger
      this.negotiation_id = arguments[0].negotiation_id;
    }

    // this.collection.on("sync", this.render, this);
    this.collection.on('all', function(event){
      console.log("issues: " + event);       
    });
  },

  render: function(){
    if (this.collection.length > 0){
			for(var i = this.currentI; i < this.collection.length; i++){
				var issueView = new issueView(
					
					// model: this.collection.at(i)
				);
				this.currentI++;
				$('.issueView').append(issueView.render().el);
			}
			
			return this;
	  } else {
	  	var issueFormView = new issueFormView({collection: issues});
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