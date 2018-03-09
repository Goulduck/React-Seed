var React = require('react');
class ListItem extends React.Component {
    render() {
        return (
            <li>
                <h4>{this.props.ingredient}</h4>
            </li>
        )
    }
}

module.exports = ListItem;
