import React from "react";


class SearchBar extends React.Component {

    

    handleFormSubmit = (event) => {
        event.preventDefault();
    }

    render() {

        return(
            <form onSubmit={this.handleFormSubmit}>
                <div className="form-row mb-5 mt-2">
                    <div className="col-10">
                        <input 
                        onChange={this.props.searchBookProp} type="text" className="form-control" placeholder="Search Book"
                        />
                    </div>
                    <div className="col-2">
                    </div>
                </div>
            </form>
        )
    }
}

export default SearchBar;