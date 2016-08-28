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
      renderer: this.get("type"),
      series: data
    });
    if(this.get("hover")){
      let options = {};
      if (this.get("hover-option")){
        options = this.get("hover-option");
      }
      options.graph = graph;
      new Rickshaw.Graph.HoverDetail(options);
    }
    if(this.get("axistime")){
      new Rickshaw.Graph.Axis.Time({
        graph: graph
      });
    }
    if(this.get("slider")){
      new Rickshaw.Graph.RangeSlider.Preview({
        graph: graph,
        element: document.querySelector("#" + this.get("slider-element"))
      });
    }
    if(this.get("legend")){
      let legend = new Rickshaw.Graph.Legend({
        graph: graph,
        element: document.querySelector("#" + this.get("legend-element"))
      });
      if(this.get("legend-highlight")){
        new Rickshaw.Graph.Behavior.Series.Highlight({
          graph: graph,
          legend: legend,
          disabledColor: function() { return 'rgba(0, 0, 0, 0.2)' }
        });
        new Rickshaw.Graph.Behavior.Series.Toggle({
          graph: graph,
          legend: legend
        });
      }
    }
    if(this.get("y-axis")){
      var yaxis = new Rickshaw.Graph.Axis.Y({
        graph: graph
      });
      yaxis.render();
    }
    if(this.get("x-axis")){
      var xaxis = new Rickshaw.Graph.Axis.X({
        graph: graph
      });
      xaxis.render();
    }
    if(this.get("annotator")){
      let annotator = new Rickshaw.Graph.Annotate( {
        graph: graph,
        element: document.querySelector("#" + this.get("annotator-element"))
      } );
      this.get("annotator-data").forEach(
          function (data) {
            annotator.add(data[0],data[1]);
          }
        );
      annotator.update();
      this.addObserver('annotator-data.[]', this, this.updateAnnotator);
      this.set("annotator", annotator);
    }
    graph.render();
    this.set('graph', graph);
    this.addObserver('data.[]', this, this.updateGraph);
    this.addObserver('options', this, this.updateGraph);

  },
  updateGraph(graph_data){
    let graph = this.get("graph");
    graph_data.data.forEach(function(data,index){
      graph.series[index]=data;
    });
    graph.update();
  },

  updateAnnotator(update_data){
    let annotator = this.get("annotator");
    update_data.data.forEach(function(data,index){
      annotator.add(data);
    });
    annotator.update();
  }
});
