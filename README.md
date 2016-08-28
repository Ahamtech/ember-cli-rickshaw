# Ember-rickshaw

This README outlines the details of collaborating on this Ember addon.

## Installation

* `git clone` this repository
* `npm install`
* `bower install`


## Ember Hover

```handlebars
{{#ember-rickshaw type="lineplot" height="600" width="1300" data=model hover=true}}
```



## Ember Hover

```handlebars
{{#ember-rickshaw type="lineplot" height="600" width="1300" data=model hover=true}}
```

```handlebars
{{#ember-rickshaw type="lineplot" height="600" width="1300" data=model hover=true hover-option=options}}
```
```javascript
	options: {formatter: function(series, x, y) {
		var date = '<span class="date">' + new Date(x * 1000).toUTCString() + '</span>';
		var swatch = '<span class="detail_swatch" style="background-color: ' + series.color + '"></span>';
		var content = swatch + series.name + ": " + parseInt(y) + '<br>' + date;
		return content;
	}}
```
![alt hover](screenshots/hover-details.png)

## Ember Slider

```handlebars
{{#ember-rickshaw type="lineplot" height="600" width="1300" data=model hover=true slider=true slider-element="ember-slider"}}
<div id="ember-slider"></div>
```
![alt slider](screenshots/slider.png)

## Ember Axis Time

```handlebars
{{#ember-rickshaw type="lineplot" height="600" width="1300" data=model hover=true axistime=true }}
```

## Ember Legend

```handlebars
{{#ember-rickshaw type="lineplot" height="600" width="1300" data=model hover=true legend=true legend-element="legend" legend-highlight=true}}
<div class="column" id="legend"></div>
```

## Ember Annotator

```handlebars
{{#ember-rickshaw type="lineplot" height="600" width="1300" data=model hover=true axistime=true hover-option=hoverformatter annotator=true annotator-element="annotator" annotator-data=annatator}}

<div id="annotator"></div>
```
![alt annotator](screenshots/annotator.png)