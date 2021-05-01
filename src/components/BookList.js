import React from "react";
import "../css/BookList.css";
import ReadMoreReact from 'read-more-react';


class BookList extends React.Component {

    render() {
        return (
            <div className="row">
        
            {this.props.books.map((book, i) => (
                
                <div key={i} className="col-lg-4">
                <div className="card hover mb-4 shadow-sm" style={{ width: "302px" }}>
                  <img
                    style={{ width: "300px" }}
                    src={book.imageURL}
                    className="card-img-top"
                    alt="Book"
                  />
                  <div className="card-body">
                    <h5 className="card-title">{book.name}</h5>
                    <ReadMoreReact text={book.examine}
                    min={100}
                    ideal={150}
                    max={600}
                    readMoreText={<span style={{fontWeight: "bold"}}>Devamını Oku</span>}/>
                    <div className="d-flex justify-content-between align-items-center">
                    <p className="card-text">{book.publisher}
                    </p>
                    </div>
                    <p>Sayfa Sayısı: <span>{book.pages}</span></p>
                  </div>
                </div>
              </div>
        
            ))}
        
                
              
            </div>
            
          );
    }
  
}



export default BookList;
