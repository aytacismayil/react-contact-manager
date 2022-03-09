import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import ContactList from "./components/contacts/contactList/ContactList";
import AddContact from "./components/contacts/addContact/AddContact";
import ViewContact from "./components/contacts/viewContact/ViewContact";
import EditContact from "./components/contacts/editContact/EditContact";
import Navbar from "./components/navbar/Navbar";


const App = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Routes>
        <Route path={"/"} element={<Navigate to={"/contacts/list"} />} />
        <Route path={"/contacts/list"} element={<ContactList />} />
        <Route path={"/contacts/add"} element={<AddContact />} />
        <Route path={"/contacts/view/:contactId"} element={<ViewContact />} />
        <Route path={"/contacts/edit/:contactId"} element={<EditContact />} />
      </Routes>
    </React.Fragment>
  );
};

export default App;
