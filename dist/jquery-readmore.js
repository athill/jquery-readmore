/**********************
* jquery.readmore.js
* Creates read more link after approximate number of chars, but only splits between works
* author: andy hill andy@andyhill.us
*********************/
if (!String.prototype.trim) {
  String.prototype.trim = function () {
    return this.replace(/^\s+|\s+$/g, '');
  };
}


(function($){
	$.fn.readmore = function(options) {          
		var defaults = {                             ////set up default parameters
			chars: 50,
			moreText: 'More...',
			lessText: 'Less',
			newline: false,
			duration: 1000,
			prefix: 'readmore'
		};
		options = $.extend({}, defaults, options);   ////options will be the parameter scope
		return this.each(function() {                ////loop through each matched element
			var text = $(this).text().trim();
			var content = $(this).html().trim();
			var original = 'readmore-original'
			if ($(this).attr('data-'+original)) {
				console.log('reload');
				content = $(this).data(original);
				text = content.text();
			} else {
				console.log('new');
				$(this).data(original, content);
				$(this).data('um', 'test');
				console.log('new done');
			}
			// console.log(content);
			var words = text.split(/\s/);
			//// Determine number of words to display before cutoff
			var len = 0;
			var numwords = 0;
			for (numwords = 0; numwords < words.length; numwords++) {
				len += words[numwords].length + 1;
				if (len >= options.chars) {
					break;
				}
			}
			//// Split content
			var show = '';
			var hide = content;
			for (var i = 0; i < numwords; i++) {
				var cutoff = findWord(hide, words[i]);
				show += hide.slice(0, cutoff);
				hide = hide.slice(cutoff);
			}
			//// replace original content with readmore structure
			var separator = (typeof options.newline == 'boolean') ? 
				(options.newline) ? '<br>' : '&nbsp;' :
				options.newline;
			var replace = '<span class="'+options.prefix+'-show">'+ show +'</span>'+
				'<span class="'+options.prefix+'-rest">'+hide+'</span>'+
				'<span class="'+options.prefix+'-newline">'+separator+'</span>'+
				'<a class="'+options.prefix+'-toggle" href="">'+options.moreText+'</a>';
			$(this).html(replace);

			//// hide rest
			$('.'+options.prefix+'-rest', this).hide();
			//// toggle content
		    $('.'+options.prefix+'-toggle', this).click(function() {
		    	var text = options.moreText;
		    	var rest = $(this).siblings('.'+options.prefix+'-rest');
		    	var toggle = $(this);
		    	//// hide
		    	if (toggle.text().trim() == options.lessText) {
		    		toggle.css('display', 'none', options.duration);
		    		rest.animate({ 'opacity': 0}, options.duration, function() {
		    			$(this).css('display', 'none');
		    			toggle.css('display', 'inline');
		    		});
		    	//// show	
		    	} else {
		    		text = options.lessText;
		    		toggle.hide(0);
		    		toggle.show(options.duration);
		    		rest.css({ 'opacity': 0, 'display': 'inline'}).animate({ 'opacity': 1}, options.duration);
		    	}
				toggle.text(text);		    
		    	return false;
		    });
		    /**
		     *	Finds word in content, ignoring any html
		     */
		    function findWord(content, word) {
		    	var inTag = false,		//// whether we're in an html tag
		    		buildword = '';		//// build html-free word to test
		    	for (var i = 0; i < content.length; i++) {
		    		var chr = content.charAt(i);
		    		if (chr == '<') {
		    			inTag = true;
		    		} else if (chr == '>') {
		    			inTag = false;
		    		} else {
			    		if (!inTag && !/\s/.test(chr)) {
			    			buildword += chr;
			    		}
			    		if (buildword == word) {
			    			return i+1;
			    		}
		    		}
		    	}
		    	return i;
		    }
		});

	};
})(jQuery);
