var IssuesView = Backbone.View.extend({
  el: '.issueView',

  negotiation_id: 0,

  currentI: 0,

  initialize: function(){
  	
    if (this.collection.models[0].get("negotiation").id) {
      this.collection.negotiation_id = this.collection.models[0].get("negotiation").id;
    }

    this.collection.on("sync", this.render, this);
    this.collection.on('all', function(event){
      console.log("issues: " + event);       
    });
  },

  render: function(){
    if (this.collection.length > 0){
			for(var i = this.currentI; i < this.collection.length; i++){
				
				var issueView = new IssueView({
					
					  model: this.collection.at(i)
				});
				this.currentI++;
				$('.issueView').append(issueView.render().el);
			}
			
			return this;
	  } else {
	  	var issueFormView = new issueFormView({collection: issues});
	  }
  }
});



var IssueView = Backbone.View.extend({
	className: "issue",
	template: window.JST["backbone/templates/issue"],

  initialize: function(){
    this.render();
  },

  render: function(){

  	this.$el.html(this.template(this.model));
  	return this;
  }
});



var IssueFormView = Backbone.View.extend({
  el: '.issueFormView',

  template: window.JST["backbone/templates/newIssues"],

  initialize: function(){
    this.$el.html(this.template);
    return this;
  },

  events: {
  	'click .issue-submit': 'submitIssue'
  },

  submitIssue: function(event){
    event.preventDefault(); 
   debugger
    var self = this,
        issue = this.collection.create({
          issue_name: $('.newIssueName').val(),
          potential_points: $('.newPotentialPoints').val(),
          negotiation_id: this.collection.negotiation_id
          },{
           success: function(response){

            $('.newIssueName').val("");
            $('.newPotentialPoints').val("");
          }
        });
  }
});