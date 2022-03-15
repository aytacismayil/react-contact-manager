import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ContactService } from "../../../services/ContactService";

const AddContact = () => {
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

  let updateInput = (event) => {
    setState({
      ...state,
      contact: {
        ...state.contact,
        [event.target.name]: event.target.value,
      },
    });
  };

  let { loading, contact, groups, errorMessage } = state;

  console.log(state.contact);

  useEffect(async () => {
    try {
      setState({
        ...state,
        loading: true,
      });
      let response = await ContactService.getGroups();
      console.log(response.data);
      setState({
        ...state,
        loading: false,
        groups: response.data,
      });
    } catch (error) {}
  }, []);

  const submitForm = (event) => {
    event.preventDefault();
  };

  return (
    <React.Fragment>
      <section className="add-contact p-3">
        <div className="container">
          <div className="row">
            <div className="col">
              <p className="h4 text-success fw-bold my-4">Create contact</p>
            </div>
          </div>
          <div className="row">
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
                    value="Create"
                  />
                  <Link to={"/contacts/list"} className="btn btn-dark ms-2">
                    Cancel
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default AddContact;
