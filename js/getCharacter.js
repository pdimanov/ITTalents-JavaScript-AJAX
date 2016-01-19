root.addEventListener('click', function(event){
	if(event.target.nodeName == 'A'){
		event.preventDefault();
		var name = event.target.innerHTML;
		root.innerHTML = 'loading...';
		AJAX.makeRequest('GET', 'php/server.php', {name: name}, true, getCharacter);

	}
}, false);

function getCharacter(xhr){
	root.innerHTML = '';
	var character = JSON.parse(xhr.responseText),
		div = document.createElement('div'),
		picture = document.createElement('img'),
		p = document.createElement('p'),
		getBack = document.createElement('a');

	picture.src = character.picture;
	div.appendChild(picture);
	p.innerHTML = character.name + ' is ' + character.job + ', he is a ' + character.gender + ' character from Ed, Edd n Eddy. The characters birthdate is ' + character.birthdate;
	div.appendChild(p);

	getBack.innerHTML = 'Back';
	getBack.href = '#';
	getBack.addEventListener('click', function(event){
		event.preventDefault();
		location.reload();
	}, false);

	div.appendChild(getBack);

	root.appendChild(div);
}