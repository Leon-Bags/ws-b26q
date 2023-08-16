import { useEffect, useState } from "react";

export default function SelectedContact({ selectedContactId, setSelectedContactId }) {
    useEffect(() => {
        async function fetchSelectedContact() {
            try {
                const response = await fetch("https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users");
                const result = await response.json();
                setContacts(results);
            } catch (error) {
                console.error(error);
            }
        }
        fetchSelectedContact()
    }, []);
    return (
        <div>
            {contact && (
                <div>
                    <h2>{contact.name}</h2>
                    <p>Email: {contact.email}</p>
                    <p>Phone: {contact.phone}</p>
                </div>
            )}
        </div>
    );
}
