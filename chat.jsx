var React = require('react');

const Chat = React.createClass({
    getInitialState: function() {
        return {
            username: ''
        }
    },
    onLogin(username) {
        this.setState({username});
    },
    render: function() {
        return (
            <div>I am chat</div>
        );
    }
});

module.exports = Chat;
