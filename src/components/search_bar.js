import React, { Component } from 'react'

class SearchBar extends Component{
    constructor(props){
        super(props)
        this.state = { term: 'Type here'}
    }
    render(){
        return(
            <div className="search-bar">
                <input
                    value={this.state.term} 
                    // onChange={this.handleInputChange.bind(this)} 
                    onChange={event => this.onInputChange(event.target.value)}
                />
                {/* <p>Input: {this.state.term}</p> */}
            </div>
        )
    }

    onInputChange(term){
        this.setState({term})
        this.props.onSearchTermChange(term)
    }

    handleInputChange(event){
        // event.preventDefault()
        console.log(event.target.value)
        this.setState({term: event.target.value})
    }
}

export default SearchBar 