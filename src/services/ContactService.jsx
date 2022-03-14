import axios from "axios";

export class ContactService {
  static serverUrl = "http://localhost:9000";

  static getAllContacts() {
    let dataUrl = `${this.serverUrl}/contacts`;
    return axios.get(dataUrl);
  }

  static getContact(contactId) {
    let dataUrl = `${this.serverUrl}/contacts/${contactId}`;
    return axios.get(dataUrl);
  }
}
