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


## Ember Slider

```handlebars
{{#ember-rickshaw type="lineplot" height="600" width="1300" data=model hover=true slider=true slider-element="ember-slider"}}
<div id="ember-slider"></div>
```

## Ember Axis Time

```handlebars
{{#ember-rickshaw type="lineplot" height="600" width="1300" data=model hover=true axistime=true }}
```

## Ember Legend

```handlebars
{{#ember-rickshaw type="lineplot" height="600" width="1300" data=model hover=true legend=true legend-element="legend" legend-highlight=true}}
<div class="column" id="legend"></div>
```