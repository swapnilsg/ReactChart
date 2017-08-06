/** @jsx React.DOM */

var SVGComponent = React.createClass({
    render: function() {
        return this.transferPropsTo(
            <svg>{this.props.children}</svg>
        );
    }
});

var Rectangle = React.createClass({
    render: function() {
        return this.transferPropsTo(
            <rect>{this.props.children}</rect>
        );
    }
});

var Circle = React.createClass({
    render: function() {
        return this.transferPropsTo(
            <circle>{this.props.children}</circle>
        );
    }
});

var Ellipse = React.createClass({
    render: function() {
        return this.transferPropsTo(
            <ellipse>{this.props.children}</ellipse>
        );
    }
});

var Line = React.createClass({
    render: function() {
        return this.transferPropsTo(
            <line>{this.props.children}</line>
        );
    }
});

var Polyline = React.createClass({
    render: function() {
        return this.transferPropsTo(
            <polyline>{this.props.children}</polyline>
        );
    }
});

var DynamicSVGComponent = React.createClass({
    getInitialState: function() {
        return ({
            shape: 0,
            size: 0,
            color: 0
        });
    },
    changeShape: function() {
        var n = this.state.shape + 1;
        this.setState({
            shape: n < 3 ? n : 0
        });
    },
    changeSize: function() {
        var n = this.state.size + 1;
        this.setState({
            size: n < 4 ? n : 0
        });
    },
    changeColor: function() {
        var n = this.state.color + 1;
        this.setState({
            color: n < 4 ? n : 0
        });
    },
    render: function() {

        var color = ['red', 'green', 'blue', 'orange'][this.state.color];
        var size = (this.state.size * 20) + 20;

        var shape;
        switch (this.state.shape) {
            case 0:
                var x = 50 - (size / 2);
                var y = 50 - (size / 2);
                shape =
                    <Rectangle
                        key="the-shape"
                        x={x}
                        y={y}
                        width={size}
                        height={size}
                        fill={color} />;
                break;
            case 1:
                shape =
                    <Circle
                        key="the-shape"
                        cx="50"
                        cy="50"
                        r={size / 2}
                        fill={color} />;
                break;
            case 2:
                shape =
                    <Ellipse
                        key="the-shape"
                        cx="50"
                        cy="50"
                        rx={size / 2}
                        ry={size / 2 * 0.75}
                        fill={color} />;
                break;
        }
        return(
            <table>
                <tr>
                    <td width="75%">
                        <SVGComponent height="100" width="100">
                        {shape}
                        </SVGComponent>
                    </td>
                    <td>
                        <button onClick={this.changeShape}>
                            Shape
                        </button><br />
                        <button onClick={this.changeSize}>
                            Size
                        </button><br />
                        <button onClick={this.changeColor}>
                            Color
                        </button>
                    </td>
                </tr>
            </table>
        )
    }
});

// First example
React.renderComponent(
    <SVGComponent height="50" width="50" />,
    document.getElementById('svg_mount_example')
);

// Rectangle example
React.renderComponent(
    <SVGComponent height="100" width="100">
        <Rectangle height="50" width="50" x="25" y="25" />
    </SVGComponent>,
    document.getElementById('svg_rectangle')
);

// Circle example

React.renderComponent(
    <SVGComponent height="100" width="100">
        <Circle cx="50" cy="50" r="25" />
    </SVGComponent>,
    document.getElementById('svg_circle')
);

// Ellipse example

React.renderComponent(
    <SVGComponent height="100" width="100">
        <Ellipse cx="50" cy="50" rx="25" ry="15" />
    </SVGComponent>,
    document.getElementById('svg_ellipse')
);

// Colors example

React.renderComponent(
    <SVGComponent height="100" width="230">
        <Circle
            cx="50" cy="50" r="25"
            fill="mediumorchid" />
        <Circle
            cx="125" cy="50" r="25"
            fill="#ff0099" />
        <Circle
            cx="200" cy="50" r="25"
            fill="none"
            stroke="crimson" />
    </SVGComponent>,
    document.getElementById('svg_colors')
);

// Straight line example

React.renderComponent(
    <SVGComponent height="100" width="100">
        <Line x1="25" y1="25" x2="75" y2="75"
            strokeWidth="5"
            stroke="orange" />
    </SVGComponent>,
    document.getElementById('svg_straight_line')
);

// Polyline example

React.renderComponent(
    <SVGComponent height="100" width="100">
        <Polyline
            points="25,25 25,75 50,75 50,50 75,25"
            strokeWidth="5"
            stroke="orange"
            fill="none" />
    </SVGComponent>,
    document.getElementById('svg_polyline')
);

// Final example

React.renderComponent(
    <DynamicSVGComponent />,
    document.getElementById('root')
);
