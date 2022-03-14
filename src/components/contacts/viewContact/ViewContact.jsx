import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { ContactService } from "../../../services/ContactService";
import Spinner from "../../spinner/Spinner";

const ViewContact = () => {
  let { contactId } = useParams();

  let [state, setState] = useState({
    loading: false,
    contact: {},
    errorMessage: "",
  });

  useEffect(async () => {
    try {
      setState({
        ...state,
        loading: true,
      });
      let response = await ContactService.getContact(contactId);
      console.log(response.data);
      setState({
        ...state,
        loading: false,
        contact: response.data,
      });
    } catch (error) {
      setState({
        ...state,
        loading: false,
        contact: error.message,
      });
    }
  }, [contactId]);

  let { loading, contact, errorMessage } = state;

  return (
    <React.Fragment>
      <section className="view-contact-intro p-3">
        <div className="container">
          <div className="row">
            <div className="col">
              <p className="h3 text-warning fw-bold">View Contact</p>
            </div>
          </div>
        </div>
      </section>
      {loading ? (
        <Spinner />
      ) : (
        <React.Fragment>
          {Object.keys(contact).length > 0 && (
            <section className="view-contact p-3">
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-md-4">
                    <img
                      src={contact.photo}
                      alt={contact.name}
                      className="img-fluid contact-img"
                    />
                  </div>
                  <div className="col-md-8">
                    <ul className="list-group">
                      <li className="list-group-item list-group-item-action">
                        Name : <span className="fw-bold">{contact.name}</span>
                      </li>
                      <li className="list-group-item list-group-item-action">
                        Email :<span className="fw-bold">{contact.email}</span>
                      </li>
                      <li className="list-group-item list-group-item-action">
                        Phone :
                        <span className="fw-bold">{contact.mobile}</span>
                      </li>
                      <li className="list-group-item list-group-item-action">
                        Company :
                        <span className="fw-bold">{contact.company}</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="row">
                  <div className="col my-4">
                    <Link
                      to={"/contacts/list"}
                      className="btn btn-warning mt-2"
                    >
                      Back
                    </Link>
                  </div>
                </div>
              </div>
            </section>
          )}
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default ViewContact;
