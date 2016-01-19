var AJAX = {
	getRequest: function(){
		if(typeof XMLHttpRequest != 'undefined'){
			return new XMLHttpRequest;
		}

		if(typeof ActiveXObject != 'undefined'){
			return new ActiveXObject('Microsoft.XMLHTTP');
		}

		throw new Error('AJAX not supported.');
	},

	makeRequest: function(method, url, params, isAsync, callback){
		var xhr = this.getRequest();

		xhr.onreadystatechange = function(){
			if(xhr.readyState == 4){
				callback(xhr);
			}
		}

		isAsync = isAsync ? true : false;
		if(method == 'GET'){
			if(url.indexOf('?') != -1){
				url += '&';
			} else {
				url += '?';
			}

			url += this.parseParams(params);
		}

		xhr.open(method, url, isAsync);

		if(method == 'POST'){
			xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
		}

		xhr.send(method == 'POST' ? this.parseParams(params) : null);
	},

	parseParams: function(params){
		var paramsAsString = [];
		for(var key in params){
			var param = encodeURIComponent(key) + '=' + encodeURIComponent(params[key]);
			paramsAsString.push(param);
		}
		return paramsAsString.join('&');
	}
}