import axios from "axios";

export class ContactService {
  static serverUrl = "http://localhost:9000";

  //#region Contact
  static getAllContacts() {
    let dataUrl = `${this.serverUrl}/contacts`;
    return axios.get(dataUrl);
  }

  static getContact(contactId) {
    let dataUrl = `${this.serverUrl}/contacts/${contactId}`;
    return axios.get(dataUrl);
  }

  static createContact(contact) {
    let dataUrl = `${this.serverUrl}/contacts`;
    return axios.post(dataUrl, contact);
  }

  static updateContact(contact, contactId) {
    let dataUrl = `${this.serverUrl}/contacts/${contactId}`;
    return axios.put(dataUrl, contact);
  }

  static deleteContact(contactId) {
    let dataUrl = `${this.serverUrl}/contacts/${contactId}`;
    return axios.delete(dataUrl);
  }
  //#endregion

  //#region Group
  static getGroups() {
    let dataURL = `${this.serverUrl}/groups`;
    return axios.get(dataURL);
  }

  static getGroup(contact) {
    let groupId = contact.groupId;
    let dataURL = `${this.serverUrl}/groups/${groupId}`;
    return axios.get(dataURL);
  }
  //#endregion
}
