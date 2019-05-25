import React from 'react';

const Book = () => (
  <div className="row">
    <div className="col s12 m3">
      <div className="card">
        <div className="card-content">
          <div className="row">
            <div className="col s3 m3">
              <img
                style={{ height: '120px', width: '80px' }}
                src="https://books.google.com/books/content?id=m3r_CgAAQBAJ&printsec=frontcover&img=1&zoom=2&edge=curl&source=gbs_api"
                alt="book"
              />
            </div>
            <div className="col s9 m9">
              <span>Adaptive Web Design</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Book;
