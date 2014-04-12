var NegotiationListView = Backbone.View.extend({
	el: ".negotiationListView",

	currentI: 0,

	template: window.JST['backbone/templates/negotiationListView'],

	initialize: function(){
		this.collection.on("sync", this.render, this);
		this.collection.on('all', function(event){
          console.log("negotiations: " + event);       
        });
	},

	render: function(){
		var negotiations = new Negotiations();
		if (this.collection.length > 0){
			
			for(var i = this.currentI; i < this.collection.length; i++){

				var negotiationView = new NegotiationView({
					model: this.collection.at(i)
				});
				this.currentI++;
				$('.negotiationListView').append(negotiationView.render().el);
			}
			return this;
	  } 
	},
});


var NegotiationView = Backbone.View.extend({
	className: "negotiation",

	template: window.JST['backbone/templates/negotiation'],

	changeNameTemplate: window.JST['backbone/templates/changeNameTemplate'],

	timer: null,

	initialize: function(){
		this.render();
	},

	render: function(){
		this.$el.html(this.template(this.model));
		return this;
	},

	events:{
		"click .loadIssuePage": "loadIssuePage",
		"keyup": "autoSave",
		"keydown": "delayAutoSave"
	},  

  loadIssuePage: function(){		
  	var issues = new Issues();
  	debugger
  	var issuesView = new IssuesView({collection: issues, negotiation_id: this.model.id});
    $('.negotiationListView').hide();
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
    var batnaPoints = $('.batnaPoints'+ this.model.id).val();
    
  	this.model.save({
          negotiation_name: $('.negotiationName' + this.model.id).val(),
          batna_name: $('.batnaName'+ this.model.id).val(),
          batna_points: this.stringToNum(batnaPoints)
    });
    console.log("saved!");
  },

  stringToNum: function(options){
    var string = options
       if(isNaN(parseInt(string))){
       	debugger
         return 0;
       } else {
       	return parseInt(string);
       }
  }
});





