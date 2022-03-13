import React from 'react';
import { Link } from 'react-router-dom';

const EditContact = () => {
  return (
    <React.Fragment>
      <section className="add-contact p-3">
        <div className="container">
          <div className="row ">
            <div className="col">
              <p className="h4 text-primary fw-bold">Edit contact</p>
              <p className="fst-italic">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Facilis, fuga!
              </p>
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-md-4">
              <form action="">
                <div className="mb-2">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Name"
                  />
                </div>
                <div className="mb-2">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email"
                  />
                </div>
                <div className="mb-2">
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Number"
                  />
                </div>
                <div className="mb-2">
                  <select className="form-control">
                    <option value="">Select a group</option>
                  </select>
                </div>
                <div className="mb-2">
                  <input
                    type="submit"
                    className="btn btn-success"
                    value="Create"
                  />
                  <Link to={'/contacts/list'} className="btn btn-dark ms-2">
                    Cancel
                  </Link>
                </div>
              </form>
            </div>
            <div className="col-md-6">
              <img
                src="https://www.w3schools.com/howto/img_avatar.png"
                alt="avatar"
                className="img-fluid contact-img"
              />
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  )
}

export default EditContact