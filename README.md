jquery-readmore
===============

jQuery plug-in for 'read more' functionality

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


