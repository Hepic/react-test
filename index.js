var React = require('react'),
    ReactDOM = require('react-dom');
    Router = require('react-router').Router;
    Route = require('react-router').Route;
    IndexRoute = require('react-router').IndexRoute,
    hashHistory = require('react-router').hashHistory,
    Chat = require('./chat.jsx'),
    Settings = require('./settings.jsx');

const Index = React.createClass({
    componentWillMount: function() {
        this.refs.chat.onLogin('dude');
    },
    render: function() {
        return (
            <div>
                Index Page
                {this.props.children}
            </div>
        );
    }
});

ReactDOM.render((
        <Router history={hashHistory}>
            <Route path='/' component={Index}>
                <IndexRoute component={Chat} />
                <Route path='settings' component={Settings} />
            </Route>
        </Router>
), document.getElementById('content'));
