import {Component} from "react";


class CardList extends Component {
    render() {
        const {monsters} = this.props;
        console.log('render');
        return (
            <div>
                {monsters.map(monsters => (
                    <h1 key={monsters.id}>{monsters.name}</h1>
                ))}
            </div>
        );
    }
}

export default CardList;