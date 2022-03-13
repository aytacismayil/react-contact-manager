import React from 'react';
import { Link } from 'react-router-dom';

const ViewContact = () => {
  return (
    <React.Fragment>
      <section className="view-contact-intro p-3">
        <div className="container">
          <div className="row">
            <div className="col">
              <p className="h3 text-warning fw-bold">View Contact</p>
              <p className="fst-italic">lorem ipsum dolor sit amet</p>
            </div>
          </div>
        </div>
      </section>
      <section className="view-contact p-3">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-4">
              <img
                src="https://www.w3schools.com/howto/img_avatar.png"
                alt="img_avatar"
                className="img-fluid contact-img"
              />
            </div>
            <div className="col-md-8">
              <ul className="list-group">
                <li className="list-group-item list-group-item-action">
                  Name : <span className="fw-bold">Aytaj</span>
                </li>
                <li className="list-group-item list-group-item-action">
                  Email :<span className="fw-bold">Aytaj@gmail.com</span>
                </li>
                <li className="list-group-item list-group-item-action">
                  Phone :<span className="fw-bold">+994 55 000 00 00</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col ">
              <Link to={"/contacts/list"} className="btn btn-warning mt-2">
                Back
              </Link>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default ViewContact;
