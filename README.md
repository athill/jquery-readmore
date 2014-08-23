jquery-readmore
===============

jQuery plug-in for 'read more' functionality

Demo: http://andyhill.us/jquery-readmore/demo.html

Why another 'read more' plug-in?
--------------------------------
Good question. Glad you asked. I was looking for a 'read more' plug-in and all the ones I found were height based. I wanted one that was number-of-characters based, so I wrote this.

Usage
-----

	$(selector).readmore();

Options
-------
| Option | Default | Type   | Description                                        |
| ------ | ------- | -----  | -----------
|chars   | 50      | int    |Approximate number of characters before break      |
|moreText| More ...| string |Text to display when extra content is hidden             |
|lessText| Less    | string | Text to display when extra content is shown              |
|newline | false   | boolean/string   | Whether to have a line break before the toggle link. Can also be a string |
|duration| 1000    | int/string    | Duration of animation when toggling text. Any valid jQuery duration value |
|prefix  | readmore| string | prefix for css styles                              |

CSS
---
jquery-readmore creates four elements within the containing element. 
- span.readmore-show contains the portion of text that is always displayed
- span.readmore-rest contains the portion of text that is toggled
- span.readmore-newline contains the separator between 'show' and 'rest'
- a.readmore-toggle contains the text that toggles the additional text

Using the prefix option, you can change the prefix of these classes to something besides 'readmore'.

