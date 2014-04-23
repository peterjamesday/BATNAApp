var IssuesView = Backbone.View.extend({
  el: '.issueView',
  template: window.JST["backbone/templates/issuesView"],

  negotiation_id: 0,

  currentI: 0,

  totalPotentialPoints: 0,

  totalIssuePoints: 0,

  totalBatnaPoints: 0,

  initialize: function(){
  	
    if (this.collection.models[0].get("negotiation").id) {
      this.collection.negotiation_id = this.collection.models[0].get("negotiation").id;
      this.totalBatnaPoints = this.collection.models[0].get("negotiation").get("batna_points");
    }

    this.collection.on("sync", this.render, this);
    this.collection.on('all', function(event){
      console.log("issues: " + event);       
    });

    this.$el.html(this.template);
    return this;
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
      
      var evalObject = this.addPoints();

			var issueEvalView = new IssueEvalView({collection: this.collection, evalObject: evalObject});

		  $('.IssueView').append(issueEvalView.newRender({collection: this.collection, evalObject: evalObject}));
			
			return this;
	  } else {
	  	// var issueFormView = new issueFormView({collection: issues});
	  }
  },

  events:{
    "click .goBack": "goBack"
  },

  addPoints: function(){
    this.totalIssuePoints = 0;
    this.totalPotentialPoints = 0;

    for(var i = 0; i < this.collection.length; i++){
    	this.totalIssuePoints += this.collection.models[i].get("issue_points");
			this.totalPotentialPoints += this.collection.models[i].get("potential_points");
    }

    var evalObject = {
      	batnaPoints: this.totalBatnaPoints,
				issuePoints: this.totalIssuePoints,
				potentialPoints: this.totalPotentialPoints
      }
    return evalObject;  
  },

  goBack: function(){
  	$('.negotiationListView').show();
    $('.negotiationFormView').show();
    $('.issuesContainer').hide();
  },

});



var IssueEvalView = Backbone.View.extend({
  el: '.issueEvalView',
  template: window.JST["backbone/templates/issueEval"],

  initialize: function(options){
  	
  	this.render(options.evalObject);
  	
  },

  render: function(options){
  	
  	  this.$el.html(this.template(options));
      this.turnRed(options);
  	  return this;
   
  },

  newRender: function(options){
  	
    this.render(options.evalObject);
  },

  turnRed: function(options){
	
    if(options.batnaPoints > options.issuePoints){
    	$(".issuePoints").css("color", "red");
    } else { 
    	
    	$(".issuePoints").css("color", "green");
    }
  }
});



var IssueView = Backbone.View.extend({
	className: "issue",
	template: window.JST["backbone/templates/issue"],

	timer: null,

  initialize: function(){
    this.render();
  },

  render: function(){
  	this.$el.html(this.template(this.model));
  	return this;
  },

  events:{
  	"keyup": "autoSave",
		"keydown": "delayAutoSave"
  },

  autoSave: function(event){
  	var that = this;
    this.timer= setTimeout(function(){
    	that.updateModel();
    }, 4000);
  },

  delayAutoSave: function(event){
  	if(this.timer != null){
      clearTimeout(this.timer); 
    }
  },

  updateModel: function(){
    var potentialPoints = $('.potentialPoints'+ this.model.id).val();
    var issuePoints = $('.issuePoints'+ this.model.id).val();
    
  	this.model.save({
          issue_name: $('.issueName' + this.model.id).val(),
          issue_outcome: $('.issueOutcome'+ this.model.id).val(),
          potential_points: this.stringToNum(potentialPoints),
          issue_points: this.stringToNum(issuePoints)
    });
    console.log("saved!");
  },

  stringToNum: function(options){
    var string = options
       if(isNaN(parseInt(string))){
         return 0;
       } else {
       	return parseInt(string);
       }
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