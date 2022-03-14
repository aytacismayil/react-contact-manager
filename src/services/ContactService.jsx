import axios from "axios";

export class ContactService {
  static serverUrl = "http://localhost:9000";

  //Group
  static getGroups() {
    let dataURL = `${this.serverUrl}/groups`;
    return axios.get(dataURL);
  }

  static getGroup(contact) {
    let groupId = contact.groupId;
    let dataURL = `${this.serverUrl}/groups/${groupId}`;
    return axios.get(dataURL);
  }

  //Contact
  static getAllContacts() {
    let dataUrl = `${this.serverUrl}/contacts`;
    return axios.get(dataUrl);
  }

  static getContact(contactId) {
    let dataUrl = `${this.serverUrl}/contacts/${contactId}`;
    return axios.get(dataUrl);
  }
}
