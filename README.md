# filpCalendar.js

Reveal CSS animation that non-stop flipping \<div\> like calendar.

You can easily change setting to customise.

# DEMO

[live demo](http://mikan-design.com/filpCalendar/demo.html)

or just view demo.html.

# Version

1.0.0

# Documentation

## Basic usage

- HTML

```html
<head>
	<link rel="stylesheet" href="css/flipdiv.css">
<head>
<script src="filpCalendar.js"></script>
<div class="filpCalendar">
	<div class="flip-page"><div>page1</div></div>
	<div class="flip-page"><div>page2</div></div>
	<div class="flip-page"><div>page3</div></div>
	<div class="flip-page"><div>page4</div></div>
</div> 
```

- JavaScript

```javascript
$('.filpCalendar').filpCalendar();
```

### Advanced usage

- HTML

```html
<head>
	<link rel="stylesheet" href="css/flipdiv.css">
<head>
<script src="filpCalendar.js"></script>
<div class="filpCalendar">
	<div class="flip-page"><div>page1</div></div>
	<div class="flip-page"><div>page2</div></div>
	<div class="flip-page"><div>page3</div></div>
	<div class="flip-page"><div>page4</div></div>
</div> 
```

- JavaScript

```javascript
$('.filpCalendar').filpCalendar({
	'interval' : 5000,           //  do flip interval
	'animationDuration' : '4s',  //  animation duration
	'backgroundColor' : '#fff',  //  page's background color
	'backsideColor' : '#fff',    //  page backside's background color
	'zIndex' : 5,                //  flip-page's base zIndex(it will use zIndex+-2)
	'fullImg' : false,           //  display full <img> page
	'shadowChange' : true,       //  show shadow change animation
});
```

# Bugs

- Too many page make some backside broken.

# Developer

kakahikari, who live in Taiwan.
