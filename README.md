# Rating
Rating is a super simple jQuery plugin that quickly and easily lets you add a star rating input field like below.

![Rating image](http://i.imgur.com/WuUuXqd.png)

It's quick and super simple to use.

Example
===
This plugin needs jQuery, after that, all you need to do is supply the element selector.

```php
<form action="" method="post">
    <div id="rating"></div>
    <input type="submit" value="Rate">
</form>
```

```javascript
$(document).ready(function() {
    rating.create({
        'selector': '#rating'
    });
});
```

Result
===
![codeResult](http://i.imgur.com/FNB8IfW.png)

Parameters
===

There are a number of different options that you can pass through to customise your new input further.

Required
---
`selector` - The selector of the element that you want the rating system to be added to.

Optional
---
`selectedIcon` - Which image you want to be displayed for selected ratings. Default: ![selectedIconImage](http://i.imgur.com/oc5WJns.png)

`unselectedIcon` - Which image you want to be display for unselected ratings. Default: ![unselectedIconImage](http://i.imgur.com/CiVABED.png)

`outOf` - The highest possible rating that can be given. Default: `5`

`defaultRating` - The number of "stars" that you want selected by default. Default: `3`

`name` - The name of the input field that you want to be passed to your form handler. Default: `rating`

`ratingClass` - Array of classes that you want to be added to each rating "star". Default: `null`

Using Font Awesome
---
You can use font awesome icons by adding the same class that you would add in an `i` tag as the `selectedIcon` and `unselectedIcon`. Note - if you use font awesome for one of the icons, you have to use it for both icons. Also, if you use font awesome, you cannot use the `ratingClass` attribute, instead you should add your classes onto the icon definition, see below.

Example:

```javascript
$(document).ready(function() {
    rating.create({
        'selector': '#rating',
        'unselectedIcon': 'fa fa-star-o red-font',
        'selectedIcon': 'fa fa-star'
    });
});
```
