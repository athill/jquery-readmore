/**********************
* jquery.readmore.js
* Creates read more link after approximate number of chars, but only splits between works
* author: andy hill andy@andyhill.us
*********************/

(function($){
	$.fn.readmore = function(options) {          
		var defaults = {                             ////set up default parameters
			chars: 50,
			moreText: 'More...',
			lessText: 'Less',
			newline: false,
			speed: 1000
		};
		options = $.extend({}, defaults, options);   ////options will be the parameter scope
		return this.each(function() {                ////loop through each matched element
			var text = $(this).text();
			var content = $(this).html();
			var words = text.split(/\s/);
			var len = 0;
			var numwords = 0;
			for (numwords=0; numwords<words.length; numwords++) {
				len += words[numwords].length + 1;
				if (len >= options.chars) {
					break;
				}
			}
			var show = '';
			var hide = content;
			for (var i = 0; i < numwords; i++) {
				var cutoff = hide.indexOf(words[i]) + words[i].length;
				show += hide.slice(0, cutoff);
				hide = hide.slice(cutoff);
			}
			console.log(cutoff);
			var separator = (options.newline) ? '<br />' : '&nbsp;';
			var replace = show + '<span class="readmore-rest">'+hide+'</span>'+
				separator+'<a class="readmore-more" href="">'+options.moreText+'</a>';
			$(this).html(replace);
			$('.readmore-rest', this).hide();
		    $('.readmore-more', this).click(function() {
		    	$(this).siblings('.readmore-rest').toggle(options.speed);
		    	$(this).text(($(this).text().trim() == options.lessText) ? 
		    		options.moreText : 
		    		options.lessText
		    	);
		    	return false;
		    });
		});

	};
})(jQuery);
