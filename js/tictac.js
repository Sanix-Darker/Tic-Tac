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
			console.log(Array_parameters);
			var date = Array_parameters[1];

			var killCss = (!Array_parameters[2]) ?  true : Array_parameters[2],
				killJs = (!Array_parameters[3]) ?  true : Array_parameters[3],
				whitescreen = (!Array_parameters[4]) ?  false : Array_parameters[4];

			console.log(killJs);
			console.log(whitescreen);
			console.log(killCss);


			if(remoteDead[0]){ // Going to find a remote file

				var client = new XMLHttpRequest();
				client.open('GET', remoteDead[1]);
				client.onreadystatechange = function() {
					var Array_parameters = client.responseText.split(',');
					var killCss = (!Array_parameters[2]) ?  true : Array_parameters[2],
						killJs = (!Array_parameters[3]) ?  true : Array_parameters[3],
						whitescreen = (!Array_parameters[4]) ?  false : Array_parameters[4];
				}
				client.send();

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