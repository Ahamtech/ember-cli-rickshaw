import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'div',
  
  didInsertElement: function(){
    var data = this.get('data');
    var options = this.get('options');
    var graph = new Rickshaw.Graph( {
      element: document.querySelector("#chart"), 
      width: this.get("width"), 
      height: this.get("height"),
      renderer: this.get('renderer')
      series: [{
        color: 'steelblue',
        data: data
      });
    graph.render();
    var chart = new Chart(context)[type](data, options);
    this.set('graph', graph);
    this.addObserver('data', this, this.updateChart);
    this.addObserver('data.[]', this, this.updateChart);
    this.addObserver('options', this, this.updateChart);
  },
  

});
