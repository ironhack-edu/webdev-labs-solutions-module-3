import "./App.css";
import contactsJSON from "./contacts.json";
import { useState } from "react";

function App() {
  const [contacts, setContacts] = useState(contactsJSON.slice(0, 5));
  const [remainingContacts, setRemainingContacts] = useState(
    contactsJSON.slice(5, contactsJSON.length)
  );

  function addRandomContact() {
    // make a copy of the remaining contacts
    const updateRemaining = [...remainingContacts];

    let randomNum = Math.floor(Math.random() * remainingContacts.length);
    // remove a random element from the copy
    let randomContact = updateRemaining.splice(randomNum, 1)[0];
    // add that contact to a new array
    const updatedContacts = [...contacts, randomContact];
    // update the contacts and the remaining contacts with the corresponding arrays
    setContacts(updatedContacts);
    setRemainingContacts(updateRemaining);
  }

  function sortByPopularity() {
    const toSortPopularity = [...contacts];
    const sortedByPopularity = toSortPopularity.sort(
      (a, b) => b.popularity - a.popularity
    );
    setContacts(sortedByPopularity);
  }

  function sortByName() {
    const toSortName = [...contacts];
    const sortedByName = toSortName.sort((a, b) =>
      a.name.localeCompare(b.name)
    );
    setContacts(sortedByName);
  }

  function deleteContact(index) {
    const deletedContact = [...contacts];
    deletedContact.splice(index, 1);

    setContacts(deletedContact);
  }

  return (
    <div className="App">
      <h1>IronContacts</h1>
      <button onClick={() => addRandomContact()}>Add Random Contact</button>
      <button onClick={() => sortByPopularity()}>Sort by Popularity</button>
      <button onClick={() => sortByName()}>Sort by Name</button>

      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won an Oscar</th>
            <th>Won an Emmy</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((eachContact, i) => {
            return (
              <tr key={i}>
                <td>
                  <img
                    src={eachContact.pictureUrl}
                    className="contact-picture"
                    alt="contact profile"
                  />
                </td>
                <td>{eachContact.name}</td>
                <td>{eachContact.popularity.toFixed(2)}</td>
                {eachContact.wonOscar ? <td>🏆</td> : <td></td>}
                {eachContact.wonEmmy ? <td>🌟</td> : <td></td>}
                <td>
                  <button onClick={() => deleteContact(i)}>Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
