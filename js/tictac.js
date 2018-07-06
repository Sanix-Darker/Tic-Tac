		/**
		 * [createCORSRequest description]
		 * @param  {[type]} method [POST, GET]
		 * @param  {[type]} url    [The URL]
		 * @return {[type]}        [XMLHttp.... object]
		 */
		function createCORSRequest(method, url) {
		  var xhr = new XMLHttpRequest();
		  if ("withCredentials" in xhr) {

		    // Check if the XMLHttpRequest object has a "withCredentials" property.
		    // "withCredentials" only exists on XMLHTTPRequest2 objects.
		    xhr.open(method, url, true);

		  } else if (typeof XDomainRequest != "undefined") {

		    // Otherwise, check if XDomainRequest.
		    // XDomainRequest only exists in IE, and is IE's way of making CORS requests.
		    xhr = new XDomainRequest();
		    xhr.open(method, url);

		  } else {

		    // Otherwise, CORS is not supported by the browser.
		    xhr = null;

		  }
		  return xhr;
		}

		/**
		 * [date_diff_indays description]
		 * @param  {[type]} date2 [description]
		 * @return {[type]}       [description]
		 */
		function date_diff_indays(date2) {
		    var today = new Date();
		    var dd = today.getDate();
		    var mm = today.getMonth()+1; //January is 0!
		    var yyyy = today.getFullYear();

		    if(dd<10) { dd = '0'+dd } 

		    if(mm<10) {  mm = '0'+mm } 
		    
		    dt1 =(tictac_options[0]=='fr') ? new Date(dd + '/' + mm + '/' + yyyy): new Date(mm + '/' + dd + '/' + yyyy);

		    dt2 = new Date(date2);
		    return Math.floor((Date.UTC(dt2.getFullYear(), dt2.getMonth(), dt2.getDate()) - Date.UTC(dt1.getFullYear(), dt1.getMonth(), dt1.getDate()) ) /(1000 * 60 * 60 * 24));
		}

		/**
		 * [killThatShit description]
		 * @param  {[type]} condition [description]
		 * @param  {[type]} el        [description]
		 * @param  {[type]} els       [description]
		 * @return {[type]}           [description]
		 */
		function killThatShit(condition, els){
			if(condition){
				for (var i = els.length; i-- > 0;) {
				    var el = els[i];
				    var text = document.createTextNode(el.firstChild.nodeValue);
				    el.parentNode.replaceChild(text, el);
				}
			}
		}

		/**
		 * [checkDate description]
		 * @param  {[type]}  date        [description]
		 * @param  {Boolean} killCss     [description]
		 * @param  {Boolean} killJs      [description]
		 * @param  {Boolean} whitescreen [description]
		 * @return {[type]}              [description]
		 */
		function checkDate(Array_parameters){

			if(typeof Array_parameters != "undefined"){
				var date = Array_parameters[1];

				var killCss = (!Array_parameters[2]) ?  true : Array_parameters[2],
					killJs = (!Array_parameters[3]) ?  true : Array_parameters[3],
					whitescreen = (!Array_parameters[4]) ?  false : Array_parameters[4];

			}else if(typeof remoteDead != "undefined" && remoteDead[0]){ // Going to find a remote file

					var client = createCORSRequest('GET', remoteDead[1]);
					if (!client) {
					  throw new Error('CORS not supported');
					}else{
						var Array_parameters = client.responseText.split(',');
						var killCss = (!Array_parameters[2]) ?  true : Array_parameters[2],
							killJs = (!Array_parameters[3]) ?  true : Array_parameters[3],
							whitescreen = (!Array_parameters[4]) ?  false : Array_parameters[4];

						client.send();
					}

			}else{
				console.log("Please Provide parameters (tictac_options Or remoteDead) For the TicTac API");
				return false;
			}

			if(date_diff_indays(date) <= 0 ){
			    // Killing Css
				killThatShit(killCss, document.getElementsByTagName('head'));

			    // html css
				killThatShit(killCss, document.getElementsByTagName('style'));

			    if(whitescreen==true){ // Whit screen mode
					var myNode = document.body;
					while (myNode.firstChild) {
					    myNode.removeChild(myNode.firstChild);
					}
			    }else{
			        // Killing Js script
					killThatShit(killJs, document.getElementsByTagName('script'));
			    }
			}

		}