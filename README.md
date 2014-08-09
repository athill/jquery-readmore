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
| Option | Default | Description                                        |
| ------ | ------- | -----------                                        |
|chars   | 50      | Approximate number of characters before break      |
|moreText| More ...| Text to display when content is hidden             |
|lessText| Less    | Text to display when content is shown              |
|newline | false   | Whether to have a line break before the toggle link|
|speed   | 1000    | Animation speed when toggling text                 |
|prefix  | readmore| prefix for css styles                              |

CSS
---
jquery-readmore creates three elements within the containing element. 
- span.readmore-show contains the portion of text that is always displayed
- span.readmore-rest contains the portion of text that is toggled
- a.readmore-toggle contains the text that toggles the additional text

Using the prefix option, you can change the prefix of these classes to something besides 'readmore'.

