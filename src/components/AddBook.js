import React from "react";
import serialize from "form-serialize";

class AddBook extends React.Component {

    handleFormSubmit = (e) => {
        const newBook = serialize(e.target, {hash: true});
        this.props.AddNewBook(newBook);
    }

  render() {
    return (
      <div className="container">
        <form className="mt-5" onSubmit={this.handleFormSubmit}>
          <input
            type="text"
            className="form-control"
            id="disabledInput"
            placeholder="Fill The Form To Add A Book.."
            disabled
          />
          <div className="form-row">
            <div className="form-group col-md-10">
              <label htmlFor="inputName">Name</label>
              <input type="text" name="name" className="form-control" />
            </div>
            <div className="form-group col-md-2">
              <label htmlFor="writer">Writer</label>
              <input type="text" name="writer" className="form-control" />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-12">
              <label htmlFor="inputName">Image URL</label>
              <input type="text" name="imageURL" className="form-control" />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-12">
              <label htmlFor="examineTextArea">Examine</label>
              <textarea
                name="examine"
                rows="5"
                className="form-control"
              ></textarea>
            </div>
          </div>
          <input
            type="submit"
            value="Add Book"
            className="btn btn-secondary btn-block mb-4"
          />
        </form>
      </div>
    );
  }
}

export default AddBook;
