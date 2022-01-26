define([
   'core/js/adapt',
], function(Adapt) {

    var footerLink = _.extend({
  
    initialize: function() {
    	this.listenTo(Adapt, 'router:course', this.updateCourse);
    	this.listenTo(Adapt, 'pageView:ready', this.addLinks);
        this.listenTo(Adapt, 'menuView:ready', this.addLinks);
        this.listenTo(Adapt, 'router:page', this.updatePage);
    },

    updateCourse: function(target) {
    	this.currentCourse = target;
    },

    getCourse: function() {
    	return this.currentCourse;
    },
    
    updatePage: function(target) {
        this.contentObject = target;
    },

    getPage: function() {
        return this.contentObject;
    },

    addLinks: function() {
        var items = [];
        try {
            items = this.contentObject.get('_FooterLink')._items;
        } catch(err) {}
        if (items.length < 1) {
            items = Adapt.course.get('_FooterLink')._items;
        }
        _.each(items, function(item) {
            var title = item.title;
            var link = item.link;
            try {
                if( $('.about-links').prop('innerHTML').trim().length > 0) {
                    $('.about-links').append(' | ');
                } 
                $('.about-links').append('<a class="about" target="_blank"; href=\''+link+'\'>'+title+'</a>');
            } catch(err) {}
        });
    }

  }, Backbone.Events);
  
  footerLink.initialize();

  return (footerLink);
});