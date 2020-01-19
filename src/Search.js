import React from 'react';

class Search extends React.Component{

    constructor(props){
        super(props);

        this.onChangeEvent = this.onChangeEvent.bind(this);
    }

    onChangeEvent(e){
        const query = e.target.value.toString().toLowerCase();
        this.props.onsearch(e.target.value);
    }

    render(){
        return(
            <input type="text" onChange={this.onChangeEvent} />
        );
    }
}

export default Search;