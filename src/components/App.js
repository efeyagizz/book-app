import React from 'react';
import BookList from './BookList';
import SearchBar from './SearchBar';
import axios from 'axios';


class App extends React.Component {

    state = {
        books: [],

        searchQuery: ""
    }

    async componentDidMount() {
        const response = await axios.get("http://localhost:3002/books");
        this.setState({ books: response.data });
      }

      searchBook = (event) => {
        this.setState({ searchQuery: event.target.value });
      };

    render() {
        let filteredBooks = this.state.books
      .filter((book) => {
        return (
          book.name
            .toLowerCase()
            .indexOf(this.state.searchQuery.toLowerCase()) !== -1
        );
      })
      .sort((a, b) => {
        return a.id < b.id ? 1 : a.id > b.id ? -1 : 0;
      });

        return (
            <div className="container">
                <React.Fragment>
                    <div className="row">
                        <div className="col-lg-12">
                            <SearchBar searchBookProp={this.searchBook} />
                        </div>
                            <BookList
                            books={filteredBooks} />
                        
                    </div>
                </React.Fragment>
                
                    
            </div>
            
        );
    }
}

export default App;