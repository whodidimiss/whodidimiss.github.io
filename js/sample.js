sample = function(window, document, undefined) {
	var eventName
	, eventEmail
	, group
	;
return {
  open_email: function() {
	  var url = "mailto:"
	  , content
	  , text_area
	  , i
	  ;
	  
	  url += $('#eventEmail').get(0) ? $('#eventEmail').get(0).value : "";
	  
	  url += "?bcc=whodidyoumiss@gmail.com";
	  
	  url += "&subject=";
	  url += this.eventName ? "The Speaker line up for "  + this.eventName : "The diversity of speakers at your event";
	  
	  url += "&body=";
	  url +=  $('.content.active .text').text();
		
      url = encodeURI(url);
	  window.location.href = url;
	  
	  return url;
  }
  
  , set_value_on_change: function(object) {
      if(!object) {
	    return;
	  }
	
	  var typeClass = $(object).data('type');
	  if(!typeClass) {
	    return;
	  }
	
	  var elements = $("."+typeClass);
	  if(!elements) {
	    return;
	  }
	
      elements.html(object.value);
	  elements.removeClass('placeholder');
    }
};

}(window, document);
