UpDown
======

###Introduction

jQuery plugin to display a number by counting up, or down, to it over a provided duration.

###Usage

Include a link to the updown.js file inside the HTML file you wish to display the UpDown instance in:
  
```
<script src="js/updown.js"></script>
```
Make sure you also include a link to the latest version of jQuery.  Being a jQuery plugin, the library is necessary.  To initiate
the plugin just use the following syntax:

```
$(selector).updown({});
```

###Parameters

Parameters are sent in an object literal on initialization of the plug-in.  
* Duration: The number of seconds you want the count to last.
Default: 5 secods
* Start: The number you want the count to start with.
Default: 450
* End: The number you want the count to end with.
Default: 100

```
$(selector).updown({'duration': 10, 'start': 0, 'end':50 });
```
