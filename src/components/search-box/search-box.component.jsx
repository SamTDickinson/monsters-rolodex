import {Component} from "react";

class SearchBox extends Component {

    onSearchChange = (event) => {
        const searchField = event.target.value.toLowerCase();
        this.setState(() => {
            return {searchField}
        }, () => {
        })
    };

    render() {
        return (
            <input
                className={this.props.className}
                type='search'
                placeholder={this.props.placeHolder}
                onChange={this.props.onChangeHandler}
            />
        )
    }
}

export default SearchBox;