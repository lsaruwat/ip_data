
class HttpRequester{

	constructor(){

	}

	apiCall (url) {
		fetch(url).then(
	    	(response) => response.json()
	  	).then(
	    	(respObj) => {
	    		this.domUpdater(respObj);
	    	}
	  	).catch(
	    	(err) => console.error(err.message, err)
	  	)
	}

	domUpdater(respObj){
		let textArea = document.getElementById("text-area");
		textArea.innerHTML += "<h1>IP address  " + respObj.ip + "</h1>";
		textArea.innerHTML += "<h2>Token: " + respObj.token + "</h2>"; 
	}

}