var React = require('react');

var getState = function () {
    return {};
};

var App = React.createClass({
    getInitialState: function() {
        return getState();
    },

    componentDidMount: function() {
        // *Store.addChangeListener(this._onChange);
    },

    componentWillUnmount: function() {
        // *Store.removeChangeListener(this._onChange);
    },

    render: function() {
        return (
            <div>
                TODO
            </div>
        );
    },

    _onChange: function() {
        this.setState(getState());
    }
});

module.exports = App;
