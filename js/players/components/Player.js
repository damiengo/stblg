
/**
 * The player heatmap.
 */
var PlayerHeatmap = React.createClass({

    _g: undefined,
    _width: 400,
    _height: 300,

    // D3.js with React.js :
    componentDidMount: function() {
        var el = ReactDOM.findDOMNode(this);
        var svg = d3.select(el).append('svg')
                  .attr('class', 'd3')
                  .attr('width', this._width)
                  .attr('height', this._height);
        this._g = svg.append('g')
          .attr('class', 'd3-points');

       // Blur filter
       var blurLevel = 0; // int
       var filter = svg.append("defs")
                       .append("filter")
                       .attr("id", "blur")
                       .append("feGaussianBlur")
                       .attr("stdDeviation", blurLevel);

        var rectangle = this._g.append("rect")
                            .attr("x", 0)
                            .attr("y", 0)
                            .attr("width", this._width)
                            .attr("height", this._height)
                            .style("fill", "#00FF99");
    },

    componentDidUpdate: function() {
        var data = this.props.data;
        var x = d3.scale.linear()
            .domain([0, 100])
            .range([0, this._width]);

        var y = d3.scale.linear()
            .domain([0, 100])
            .range([this._height, 0]);

        var color = d3.scale.ordinal()
                            .domain(d3.extent(data, function(d) { return d.nb }))
                            .range(["midnightblue", "#FFFF66", "#FF9933", "#FF3333"]);

        var opacity = 1;

        var g = this._g.selectAll("circle")
            .data(data)
          .enter().append("g");

          g.append("rect")
                   .attr("x", function(d) { return x(parseInt(d.x)) })
                   .attr("y", function(d) { return y(parseInt(d.y)) })
                   .attr("width",  8)
                   .attr("height", 7)
                   .style("fill-opacity", opacity)
                   .style("fill", function(d) { return color(parseInt(d.nb)) })
                   .attr("filter", "url(#blur)");
/*
           g.append("circle")
                    .attr("cx", function(d) { return x(parseInt(d.x)+2) })
                    .attr("cy", function(d) { return y(parseInt(d.y)+2) })
                    .attr("r", 5)
                    .style("fill-opacity", opacity)
                    .style("fill", function(d) { return color(parseInt(d.nb)-4) })
                    .attr("filter", "url(#blur)");

            g.append("circle")
                     .attr("cx", function(d) { return x(parseInt(d.x)+2) })
                     .attr("cy", function(d) { return y(parseInt(d.y)-2) })
                     .attr("r", 5)
                     .style("fill-opacity", opacity)
                     .style("fill", function(d) { return color(parseInt(d.nb)-4) })
                     .attr("filter", "url(#blur)");

             g.append("circle")
                      .attr("cx", function(d) { return x(parseInt(d.x)-2) })
                      .attr("cy", function(d) { return y(parseInt(d.y)+2) })
                      .attr("r", 5)
                      .style("fill-opacity", opacity)
                      .style("fill", function(d) { return color(parseInt(d.nb)-4) })
                      .attr("filter", "url(#blur)");

              g.append("circle")
                       .attr("cx", function(d) { return x(parseInt(d.x)-2) })
                       .attr("cy", function(d) { return y(parseInt(d.y)-2) })
                       .attr("r", 5)
                       .style("fill-opacity", opacity)
                       .style("fill", function(d) { return color(parseInt(d.nb)-4) })
                       .attr("filter", "url(#blur)");
*/
    },

    render: function() {
        return (
            <div></div>
        );
    }
});

/**
 * A player.
 */
var Player = React.createClass({

    getInitialState: function() {
        return {
            player_name:  '',
            heatmap_data: []
        }
    },

    componentDidMount: function() {
        var player = this;
        d3.csv("/data/players/2015/heatmap/umtiti.csv", function(error, data) {
            if (error) throw error;
            player.setState({
                player_name:  "Umtiti",
                heatmap_data: data
            });
        });
    },

    render: function() {
        return (
          <div className="player" id="player">
            <p>
              <img src="/img/players/profile.png" width="150px" height="150px" />
            </p>
            <p>
              Bonjour, je suis {this.state.player_name}.
            </p>
            <PlayerHeatmap
             data={this.state.heatmap_data} />
          </div>
        );
    }
});

ReactDOM.render(
  <Player />,
  document.getElementById('content')
);
