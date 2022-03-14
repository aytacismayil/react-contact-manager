import React, { useState, useEffect } from "react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCirclePlus,
  faEye,
  faEdit,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { ContactService } from "../../../services/ContactService";

import Spinner from "../../spinner/Spinner";


const ContactList = () => {
  let [state, setState] = useState({
    loading: false,
    contacts: [],
    errorMessage: "",
  });

  useEffect(async () => {
    try {
      setState({
        ...state,
        loading: true,
      });
      let response = await ContactService.getAllContacts();
      console.log(response.data);
      setState({
        ...state,
        loading: false,
        contacts: response.data,
      });
    } catch (error) {
      setState({
        ...state,
        loading: false,
        contacts: error.message,
      });
    }
  }, []);

<<<<<<< HEAD
  let { loading, contacts, errorMessage } = state;
=======
  let {loading,contacts,errorMessage} = state;
>>>>>>> e87cf9758fdc2a3b7905fdc2e636e5afe6f644a1

  return (
    <React.Fragment>
      <section className="contact-search p-3">
        <div className="container">
          <div className="grid">
            <div className="row">
              <div className="col">
                <p className="h3 fw-bold">
                  Contact Manager
                  <Link to={"/contacts/add"} className="btn btn-primary ms-2">
                    <FontAwesomeIcon icon={faCirclePlus} />
                  </Link>
                </p>
                <p>Kişisel İş Takip Uygulaması</p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <form className="row">
                  <div className="col">
                    <div className="mb-2">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Search Names"
                      />
                    </div>
                  </div>
                  <div className="col">
                    <div className="mb-2">
                      <input
                        type="submit"
                        className="btn btn-outline-dark"
                        placeholder="Search Names"
                        value="Search"
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {loading ? (
        <Spinner />
      ) : (
        <React.Fragment>
          <section className="contact-list">
            <div className="container">
              <div className="row">
                {contacts.length > 0 &&
                  contacts.map((contact) => {
                    return (
                      <div className="col-md-6 mt-4" key={contact.id}>
                        <div className="card">
                          <div className="card-body">
                            <div className="row align-items-center d-flex justify-content-around">
                              <div className="col-md-4">
                                <img
                                  src="https://cdn-icons-png.flaticon.com/512/147/147144.png"
                                  alt="avatar"
                                  className="img-fluid contact-img"
                                />
                              </div>
                              <div className="col-md-7">
                                <ul className="list-group">
                                  <li className="list-group-item list-group-item-action">
                                    Name :
                                    <span className="fw-bold">
                                      {contact.name}
                                    </span>
                                  </li>
                                  <li className="list-group-item list-group-item-action">
                                    Email :
                                    <span className="fw-bold">
                                      {contact.email}
                                    </span>
                                  </li>
                                  <li className="list-group-item list-group-item-action">
                                    Phone :
                                    <span className="fw-bold">
                                      {contact.mobile}
                                    </span>
                                  </li>
                                </ul>
                              </div>
                              <div className="col-md-1 d-flex flex-column align-items-center">
                                <Link
                                  to={"/contacts/view/:contactId"}
                                  className="btn btn-warning my-1"
                                >
                                  <FontAwesomeIcon icon={faEye} />
                                </Link>
                                <Link
                                  to={"/contacts/edit/:contactId"}
                                  className="btn btn-success my-1"
                                >
                                  <FontAwesomeIcon icon={faEdit} />
                                </Link>
                                <Link to={""} className="btn btn-danger my-1">
                                  <FontAwesomeIcon icon={faTrash} />
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>
          </section>
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default ContactList;
