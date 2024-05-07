import React from "react";
import { useState, useEffect } from "react";

export default function SelectedContact({
  selectedContactId,
  setSelectedContactId,
}) {
  const [contact, setContact] = useState(null);

  useEffect(() => {
    async function fetchSelectedContact() {
      try {
        const response = await fetch(
          `https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`
        );
        const result = await response.json();
        setContact(result);
        console.log(result)
      } catch (error) {
        console.error(error);
      }
    }
    fetchSelectedContact();
  }, [selectedContactId]);
  console.log("Selected Contact: ", contact);

  return (
    <>
    <div>selected contact</div>
      <p>Name: {contact?.name}</p>
      <p>Username: {contact?.username}</p>
      <p>Email: {contact?.email}</p>
      <p>Address: {contact?.address.street}</p>
      <p>Phone: {contact?.name}</p>
      <p>Website: {contact?.website}</p>
      <p>Company: {contact?.company.name}</p>
      <button onClick={()=>{setSelectedContactId(null)}}>Return to List</button>
    </>
  );
}
