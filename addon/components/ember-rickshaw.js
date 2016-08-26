import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'div',
  
  didInsertElement: function(){
    var data = this.get('data');
    var options = this.get('options');
    var graph = new Rickshaw.Graph( {
      element: this.element, 
      width: this.get("width"), 
      height: this.get("height"),
      // renderer: "line",
      series: data
    });
    graph.render();
    this.set('graph', graph);
    this.addObserver('data', this, this.updateGraph);
    this.addObserver('data.[]', this, this.updateGraph);
    this.addObserver('options', this, this.updateGraph);
  },
  

});
