QUnit.test('basics', function(assert) {
	$('#test1').readmore();
	assert.equal($('#test1 .readmore-show').length, 1, 'readmore-show exists');
	assert.equal($('#test1 .readmore-toggle').length, 1, 'readmore-more exists');
	assert.equal($('#test1 .readmore-rest').length, 1, 'readmore-rest exists');
	// console.log($('#test1 .readmore-show').html());
});

QUnit.test('embedded html', function(assert) {
	$('#test1').readmore();
	$('#test2').readmore();
	assert.equal($('#test2 .readmore-show').html().length, 56, 'readmore-show contains html');
	assert.equal($('#test1 .readmore-show').text().length, $('#test2 .readmore-show').text().length, 'text is eq length')
});

QUnit.test('embedded html in word', function(assert) {
	$('#test1').readmore();
	$('#test3').readmore();
	assert.equal($('#test1 .readmore-show').text().length, $('#test3 .readmore-show').text().length, 'text is eq length');
	// console.log($('#test3 .readmore-show').text());
});

QUnit.test('entities', function(assert) {
	$('#test1').readmore();
	$('#test4').readmore();
	assert.equal($('#test1 .readmore-show').text().length, $('#test4 .readmore-show').text().length, 'text is eq length');
});


QUnit.test('speed and more/less text', function(assert) {
	var speed = 50;
	var buffer = 10;
	var moreText = 'moar';
	var lessText = 'lesh';	
	$('#test1').readmore({ moreText: moreText, lessText: lessText, speed: speed });
	var toggle = $('#test1 .readmore-toggle');
	//// more text
	assert.equal(toggle.html(), moreText);
	toggle.click().delay(speed + buffer);
	//// less text
	assert.equal(toggle.html(), lessText);
	toggle.click().delay(speed + buffer);
	//// more text
	assert.equal(toggle.html(), moreText);
});