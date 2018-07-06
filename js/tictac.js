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
		function killThatShit(condition, el, els){
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
		 * @param  {Array}   remoteDead  [description]
		 * @param  {Boolean} killCss     [description]
		 * @param  {Boolean} killJs      [description]
		 * @param  {Boolean} whitescreen [description]
		 * @return {[type]}              [description]
		 */
		function checkDate(Array_parameters){
			var date = Array_parameters[0];
			if(!Array_parameters[1]){
				var remoteDead = [false, 'https://My_Secret_Hosting_DateLine.com'];
			}
			if(!Array_parameters[2]){
				var killCss = true;
			}
			if(!Array_parameters[2]){
				var killJs = true;
			}
			if(!Array_parameters[2]){
				var whitescreen = false;
			}

			if(remoteDead[0]){


			}else{

			    if(date_diff_indays(date) <= 0 ){
			        // Killing Css
					killThatShit(killCss, element, document.getElementsByTagName('head'));

			        // html css
					killThatShit(killCss, element, document.getElementsByTagName('style'));

			        if(whitescreen==true){ // Whit screen mode
						var myNode = document.body;
						while (myNode.firstChild) {
						    myNode.removeChild(myNode.firstChild);
						}
			        }else{
				        // Killing Js script
						killThatShit(killJs, element, document.getElementsByTagName('script'));
			        }
			    }
			}

		}