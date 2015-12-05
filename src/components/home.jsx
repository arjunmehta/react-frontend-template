var React = require('react');

var Router = require('react-router');
var Link = Router.Link;
var History = Router.History;

require('!style!css!sass!../stylesheets/home.scss');

module.exports = React.createClass({

    mixins: [History],

    propTypes: {},

    getInitialState: function() {
        return {};
    },

    render: function() {

        return (
            <div className="home">
                Hello World. Go to <Link to="/page">Page</Link>.
            </div>
        );
    }
});
