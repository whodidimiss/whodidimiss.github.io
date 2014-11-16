sample = function(window, document, undefined) {
	var eventName
	, eventEmail
	, group
	;
return {
  open_email: function() {
	  var url = "mailto:"
	  , content
	  ;
	  
	  url += $('#eventEmail').get(0) ? $('#eventEmail').get(0).value : "";
	  
	  url += "?bcc=whodidyoumiss@gmail.com";
	  
	  url += "&subject=";
	  url += this.eventName ? encodeURIComponent("The Speaker line up for "  + this.eventName) :   encodeURIComponent("The diversity of speakers at your event");
	  
	  url += "&body=";
	  
	  content = $('.content.active .text');
	  
	  if(content) {
	    $.each(content, function(index, value) {
			url +=  encodeURIComponent(value.text());
	    });
	  }
	  
	  alert(url);

	  window.location.href = url;
  }
  
  , set_event_name: function(event_name_object) {
    $.each($('.eventName'), function(index, value) {
		value.text(event_name_object.value);
	});
	
	this.eventName = event_name_object.value;
  
  }
  
  , set_marginalize_group: function(marginalized_group_object) {
      $.each($('.marginalizedGroup'), function(index, value) {
		value.text(marginalized_group_object.value);
	});
	
	this.group = marginalized_group_object.value;
  }
  };

}(window, document);
