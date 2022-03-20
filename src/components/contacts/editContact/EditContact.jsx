import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { ContactService } from "../../../services/ContactService";
import Spinner from "../../spinner/Spinner";

const EditContact = () => {
  let { contactId } = useParams();
  let navigate = useNavigate();
  let [state, setState] = useState({
    loading: false,
    contact: {
      name: "",
      photo: "",
      mobile: "",
      email: "",
      company: "",
      groupId: "",
    },
    groups: [],
    errorMessage: "",
  });

  useEffect(async () => {
    try {
      setState({ ...state, loading: true });
      let response = await ContactService.getContact(contactId);
      let groupResponse = await ContactService.getGroups();
      setState({
        ...state,
        loading: false,
        contact: response.data,
        groups: groupResponse.data,
      });
    } catch (error) {
      setState({
        ...state,
        loading: false,
        errorMessage: error.message,
      });
    }
  }, [contactId]);

  let updateInput = (event) => {
    setState({
      ...state,
      contact: {
        ...state.contact,
        [event.target.name]: event.target.value,
      },
    });
  };

  let submitForm = async (event) => {
    event.preventDefault();
    try {
      let response = await ContactService.updateContact(
        state.contact,
        contactId
      );
      if (response) {
        navigate("/contacts/list", { replace: true });
      }
    } catch (error) {
      setState({ ...state, errorMessage: error.message });
      navigate(`/contacts/edit/${contactId}`, { replace: false });
    }
  };

  let { loading, contact, groups, errorMessage } = state;
  return (
    <React.Fragment>
      {loading ? (
        <Spinner />
      ) : (
        <React.Fragment>
          <section className="add-contact p-3">
            <div className="container">
              <div className="row ">
                <div className="col">
                  <p className="h4 text-primary fw-bold mb-4">Edit contact</p>
                </div>
              </div>
              <div className="row align-items-center">
                <div className="col-md-4">
                  <form onSubmit={submitForm}>
                    <div className="mb-2">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Name"
                        name="name"
                        required={true}
                        value={contact.name}
                        onChange={updateInput}
                        onBlur={updateInput}
                      />
                    </div>
                    <div className="mb-2">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Email"
                        name="email"
                        required={true}
                        value={contact.email}
                        onChange={updateInput}
                        onBlur={updateInput}
                      />
                    </div>
                    <div className="mb-2">
                      <input
                        type="number"
                        className="form-control"
                        placeholder="Number"
                        name="mobile"
                        required={true}
                        value={contact.mobile}
                        onChange={updateInput}
                        onBlur={updateInput}
                      />
                    </div>
                    <div className="mb-2">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Company"
                        name="company"
                        required={true}
                        value={contact.company}
                        onChange={updateInput}
                        onBlur={updateInput}
                      />
                    </div>
                    <div className="mb-2">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Photo"
                        name="photo"
                        required={true}
                        value={contact.photo}
                        onChange={updateInput}
                        onBlur={updateInput}
                      />
                    </div>
                    <div className="mb-2">
                      <select
                        className="form-control"
                        required={true}
                        name="groupId"
                        value={contact.groupId}
                        onChange={updateInput}
                        onBlur={updateInput}
                      >
                        <option value="">Select a group</option>
                        {groups.length > 0 &&
                          groups.map((group) => {
                            return (
                              <option key={group.id} value={group.id}>
                                {group.name}
                              </option>
                            );
                          })}
                      </select>
                    </div>
                    <div className="mb-2 my-4">
                      <input
                        type="submit"
                        className="btn btn-success"
                        value="Update"
                      />
                      <Link to={"/contacts/list"} className="btn btn-dark ms-2">
                        Cancel
                      </Link>
                    </div>
                  </form>
                </div>
                <div className="col-md-6">
                  <img
                    src={contact.photo}
                    alt={contact.name}
                    className="img-fluid contact-img"
                  />
                </div>
              </div>
            </div>
          </section>
        </React.Fragment>
      )}
      {/* <pre>{JSON.stringify(contact)}</pre> */}
    </React.Fragment>
  );
};

export default EditContact;
