var sample = function() {
	var eventName
	, eventEmail
	, group
	;
return {
  open_email: function() {
	  var url = "mailto:";
	  
	  url += $('#eventEmail').value;
	  
	  url += "?bcc=whodidyoumiss@gmail.com";
	  
	  url += "&subject=";
	  url += this.eventName ? "The Speaker line up for "  + this.eventName :  "The diversity of speakers at your event";
	  
	  url += "&body=";
	  
	  $.each($('.content.active').get('.text'), function(index, value) {
			url += value.text();
	  });
	  url += body_elements

	  window.location.href = url;
  }
  
  , set_event_email
  
  , set_event_name: function(event_name_object) {
    $.each($('.eventName'), function(index, value) {
		value.text(event_name_object.value);
	}
	
	this.eventName = event_name_object.value;
  
  }
  
  , set_marginalize_group: function(marginalized_group_object) {
      $.each($('.marginalizedGroup'), function(index, value) {
		value.text(marginalized_group_object.value);
	}
	
	this.group = marginalized_group_object.value;
  }

}