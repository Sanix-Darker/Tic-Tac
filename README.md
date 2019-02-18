<img src="img/icone.jpg" style="width:20px" >

# Tic-Tac
Put a deadline on a project or just activate/desactivate it remotely For personnals reasons (Never get paid, etc...).

**NOTE: "Am not responsible in the bad use of this project"**

## How it work?
A date format and a deadline is given in parameter to the system TicTac which evaluates whether or not the deadline has already arrived or not. If so then it hides the style and script of the page of the visitor momentarily for an unreadable rendition so that we do not call the developer again

## How to use it:

### Basic usage:
```js
// en : date format, 2019/07/07: the date
checkDate(['en', '2019/07/07']);
```

### More options
```js
/**
* [tictac_options description]
*
* @param  {String} horloge_type (Required) [Date format (en, fr) for users]
* @param  {[type]}  date        (Required) [The date (For 'en' format date use: Month/Day/Year For 'fr' format date use: Day/Month/Year)]
* @param  {Boolean} killCss     (optional) [To Lock or Unlock  only Style]
* @param  {Boolean} killJs      (optional) [To Lock or Unlock  only Script code]
* @param  {Boolean} whitescreen (optional) [To show a WhiteScreen]
*
*/
var tictac_options = ['en', '2019/07/07'];

// true,    true,     false
// Kill CSS, Kill JS, don't show White screen
//var tictac_options = ['en', '04/05/2019', true, true, false];

// true,    true,     true
// Show White screen (and kill every thing)
//var tictac_options = ['en', '04/05/2019', true, true, true];


// OR REMOTELY : (Not completly stable for now)
// var remoteDead = [true, 'http://127.0.0.1/api/finalDateForWebSitedash.txt'];

/** NOTE: for the Remotely TicTac access, you need to allow the "Access-Control-Allow-Origin" on your website 
* [PHP]: <?php header('Access-Control-Allow-Origin: *');
*						 header('Access-Control-Allow-Methods': POST, PUT, DELETE, GET, OPTIONS');
*						 header('Access-Control-Request-Method': *');
*						 header('Access-Control-Allow-Headers': Origin, X-Requested-With, Content-Type, Accept, Authorization');
*
* [RoR (Ruby On Rails)]: headers['Access-Control-Allow-Origin'] = '*'
*						 headers['Access-Control-Allow-Methods'] = 'POST, PUT, DELETE, GET, OPTIONS'
*						 headers['Access-Control-Request-Method'] = '*'
*						 headers['Access-Control-Allow-Headers'] = 'Origin, X-Requested-With, Content-Type, Accept, Authorization'
*
* [Python]: // THe Same logic
*
* [C#]: // THe Same logic
*/


/**
* [checkDate description]
* Default use: checkDate(tictac_options);
* Remotely use: checkDate(tictac_options, [true, 'https://My_Secret_Hosting_DateLine.com/finalDateForWebSitedash.txt']);
* @param  {Array}   remoteDead  (optional) [To access a Hosted date Ex: [false, 'https://My_Secret_Hosting_DateLine.com/finalDateForWebSitedash.txt']  in the file respect this format en, 04/06/2019 ]
*/
checkDate(tictac_options);
```

### Complete integration example

```html
<!DOCTYPE html>
<html>
	<head>
		<title>A webSite Title</title>

		<!-- Put these few lines of code in your HEAD tag of page before ANY script in your website or you can hide it in a personnal script -->
		<script src="https://rawgit.com/Sanix-Darker/Tic-Tac/master/js/tictac.min.js"></script>
		<script type="text/javascript">
			var tictac_options = ['en', '2019/07/07'];
			checkDate(tictac_options);
		</script>
	</head>
	<body>
		...
	</body>
</html>
```

### Author:
[Sanix Darker](https://github.com/Sanix-Darker)

### Renders before and after Tic-Tac operate:
<table style="width: 100%;">
	<tr>
		<td style="width: 50%">
			<img src="img/capture.PNG" >
		</td>
		<td >
			<img src="img/capture1.PNG" >
		</td>
	</tr>
</table>

**Tic Tac affect any files in your website juste the user's render**
