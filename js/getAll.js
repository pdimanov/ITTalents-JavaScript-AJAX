var root = document.getElementById('root');

window.addEventListener('load', function(){
	document.getElementById('root').innerHTML = 'Loading...';
	AJAX.makeRequest('GET', 'php/server.php', {"name": "Kevin"}, true, getAll);
});

function getAll(xhr){
	root.innerHTML = '';
	var characters = JSON.parse(xhr.responseText);
	for(var i = 0; i < characters.length; i++){
		appendToBody(characters[i]);


	}
}

function appendToBody(character){
	var div = document.createElement('div'),
			characterPicture = document.createElement('img'),
			characterName = document.createElement('a');

		characterName.innerHTML = character.name;
		characterName.href = '#';
		div.appendChild(characterName);
		characterPicture.src = character.picture;
		div.appendChild(characterPicture);

		root.appendChild(div);
}