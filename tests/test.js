var suffixes = ['show', 'toggle', 'newline', 'rest'];

//// basics
QUnit.test('basics', function(assert) {
	$('#test1').readmore();
	assert.equal($('#test1 .readmore-show').length, 1, 'readmore-show exists');
	assert.equal($('#test1 .readmore-toggle').length, 1, 'readmore-more exists');
	assert.equal($('#test1 .readmore-newline').length, 1, 'readmore-newline exists');
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
	var speed = 50,
		buffer = 10, 
		moreText = 'moar', 
		lessText = 'lesh';	
	$('#test1').readmore({ moreText: moreText, lessText: lessText, speed: speed });
	var toggle = $('#test1 .readmore-toggle');
	//// more text
	assert.equal(toggle.html(), moreText, 'initially set to moreText');
	toggle.click().delay(speed + buffer);
	//// less text
	assert.equal(toggle.html(), lessText, 'set to lessText after first click');
	toggle.click().delay(speed + buffer);
	//// more text
	assert.equal(toggle.html(), moreText, 'reset to moreText after second click');
});

QUnit.test('newline-nbsp', function(assert) {
	$('#test1').readmore();
	assert.equal($('#test1 .readmore-newline').html(), '&nbsp;', 'default newline (false) generates &nbsp;');
});

QUnit.test('newline-br', function(assert) {
	$('#test1').readmore({ newline: true });
	assert.equal($('#test1 .readmore-newline').html(), '<br>', 'newline=true generates <br>');
});

QUnit.test('newline-string', function(assert) {
	var str = '<hr>'
	$('#test1').readmore({ newline: str });
	assert.equal($('#test1 .readmore-newline').html(), str, 'passing newline a string will use that string');
});

QUnit.test('prefix', function(assert) {
	var prefix = 'no-conflict';
	$('#test1').readmore({ prefix: prefix });
	for (var i = 0; i < suffixes.length; i++) {
		var suffix = suffixes[i];
		assert.equal($('#test1 .'+prefix+'-'+suffix).length, 1, prefix+'-'+suffix+'exists');	
	}
	// assert.equal($('#test1 .'+prefix+'-show').length, 1, prefix+'-show exists');
	// assert.equal($('#test1 .'+prefix+'-newline').length, 1, prefix+'-newline exists');
	// assert.equal($('#test1 .'+prefix+'-rest').length, 1, prefix+'-rest exists');
	// assert.equal($('#test1 .'+prefix+'-toggle').length, 1, prefix+'-toggle exists');
});