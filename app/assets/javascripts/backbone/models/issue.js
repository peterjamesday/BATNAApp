var Issue = Backbone.Model.extend({
  url: '/issues/newissue',
  paramRoot: 'issue',
});

var Issues = Backbone.Collection.extend({
  model: Issue,

  url: '/issues/retrieveissues',
});

