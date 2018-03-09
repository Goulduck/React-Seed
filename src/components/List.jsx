var React = require('react');
const CreateReactClass = require('create-react-class')
var ListItem = require('./ListItem.jsx');

var ingredients = [{"id":1,"text":"ham"}, {"id":2,"text":"cheese"},{"id":3,"text":"potatoes"}];

class List extends React.Component {
    render() {
        const listItems = ingredients.map( item => {
          return <ListItem key={item.id} ingredient={item.text} />
        })

        return (<ul>{listItems}</ul>);
    }
}

module.exports = List;
