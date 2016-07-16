
/**
 * The player heatmap.
 */
var PlayerHeatmap = React.createClass({

    _g: undefined,

    // D3.js with React.js :
    componentDidMount: function() {
        var el = ReactDOM.findDOMNode(this);
        var svg = d3.select(el).append('svg')
                  .attr('class', 'd3')
                  .attr('width', 300)
                  .attr('height', 400);
        this._g = svg.append('g')
          .attr('class', 'd3-points');

        var rectangle = this._g.append("rect")
                            .attr("x", 10)
                            .attr("y", 10)
                            .attr("width", 500)
                            .attr("height", 200)
                            .style("fill", "#00FF99");
    },

    componentDidUpdate: function() {
        var data = this.props.data;
        data = data.map(function(d) {
            return {
                start_x: Math.round(parseFloat(d.start_x)),
                start_y: Math.round(parseFloat(d.start_y))
            }
        });
        var x = d3.scale.linear()
            .range([0, 500]);

        var y = d3.scale.linear()
            .range([200, 0]);

        this._g.selectAll("circle")
            .data(data)
          .enter().append("circle")
                               .attr("cx", function(d) { return d.start_x })
                               .attr("cy", function(d) { return d.start_y })
                               .attr("r", 2)
                               .style("stroke-opacity", 1)
                               .style("stroke-width", 2)
                               .style("fill-opacity", 1)
                               .style("fill", "#FFF")
                               .style("stroke", "#FFF");
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
