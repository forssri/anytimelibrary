import React from 'react';

const Book = () => (
  <div className="row">
    <div className="col s12 m2">
      <div className="card horizontal">
        <div className="card-content">
          <img
            style={{ height: '180px', width: '120px' }}
            src="https://books.google.com/books/content?id=m3r_CgAAQBAJ&printsec=frontcover&img=1&zoom=2&edge=curl&source=gbs_api"
            alt="book"
          />
          <span className="card-title">Adaptive Web Design</span>
          <p>
            I am a very simple card. I am good at containing small bits of
            information. I am convenient because I require little markup to use
            effectively.
          </p>
        </div>
        <div className="card-action">
          <button className="btn-floating halfway-fab waves-effect waves-light red">
            <i className="material-icons">add</i>
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default Book;
