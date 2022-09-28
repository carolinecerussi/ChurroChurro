import React, { useEffect, useState } from 'react';
import NewTicketForm from './NewTicketForm';
import TicketList from './TicketList';
import EditTicketForm from './EditTicketForm';
import TicketDetail from './TicketDetail';
import {
  collection,
  addDoc,
  doc,
  updateDoc,
  onSnapshot,
  deleteDoc,
  query,
  orderBy
} from 'firebase/firestore';
import { db, auth } from './../firebase.js';
import { formatDistanceToNow } from 'date-fns';
import styled from 'styled-components';

<<<<<<< HEAD
const StyledButton = styled.button`
  background-color: transparent;
  background-repeat: no-repeat;
  border: none;
  color: Lime;
  font-family: Gemini moon;
  font-size: 30pt;
  &: hover {
    color: pink;
    cursor: pointer;
  }
`;


=======
const AddTicketButton = styled.button`
  position: fixed;
  bottom: 0;
  right: 0;
  width: fit-content;
  margin-bottom: 2rem;
  margin-right: 2rem;
  padding: 1rem 2rem;
  font-size: 1rem;
`;
>>>>>>> 12311e407b27139b234d304012caa87e74aae6f3

function TicketControl() {
  const [formVisibleOnPage, setFormVisibleOnPage] = useState(false);
  const [mainTicketList, setMainTicketList] = useState([]);
  const [selectedTicket, setSelectedTicket] = useState(null);
  const [editing, setEditing] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    function updateTicketElapsedWaitTime() {
      const newMainTicketList = mainTicketList.map(ticket => {
        const newFormattedWaitTime = formatDistanceToNow(ticket.timeOpen);
        return { ...ticket, formattedWaitTime: newFormattedWaitTime };
      });
      setMainTicketList(newMainTicketList);
    }

    const waitTimeUpdateTimer = setInterval(
      () => updateTicketElapsedWaitTime(),
      60000
    );

    return function cleanup() {
      clearInterval(waitTimeUpdateTimer);
    };
  }, [mainTicketList]);

  useEffect(() => {
    const queryByTimestamp = query(
      collection(db, 'tickets'),
      orderBy('timeOpen')
    );
    const unSubscribe = onSnapshot(
      queryByTimestamp,
      querySnapshot => {
        const tickets = [];
        querySnapshot.forEach(doc => {
          const timeOpen = doc
            .get('timeOpen', { serverTimestamps: 'estimate' })
            .toDate();
          const jsDate = new Date(timeOpen);
          tickets.push({
            name: doc.data().name,
            origin: doc.data().origin,
            issue: doc.data().issue,
            timeOpen: jsDate,
            formattedWaitTime: formatDistanceToNow(jsDate),
            id: doc.id
          });
        });
        setMainTicketList(tickets);
      },
      error => {
        setError(error.message);
      }
    );

    return () => unSubscribe();
  }, []);

  const handleClick = () => {
    if (selectedTicket != null) {
      setFormVisibleOnPage(false);
      setSelectedTicket(null);
      setEditing(false);
    } else {
      setFormVisibleOnPage(!formVisibleOnPage);
    }
  };

  const handleDeletingTicket = async id => {
    await deleteDoc(doc(db, 'tickets', id));
    setSelectedTicket(null);
  }

  const handleEditClick = () => {
    setEditing(true);
  }

  const handleEditingTicketInList = async ticketToEdit => {
    const ticketRef = doc(db, 'tickets', ticketToEdit.id);
    await updateDoc(ticketRef, ticketToEdit);
    setEditing(false);
    setSelectedTicket(null);
  }

  const handleAddingNewTicketToList = async newTicketData => {
    const collectionRef = collection(db, 'tickets');
    await addDoc(collectionRef, newTicketData);
    setFormVisibleOnPage(false);
  }

  const handleChangingSelectedTicket = id => {
    const selection = mainTicketList.filter(ticket => ticket.id === id)[0];
    setSelectedTicket(selection);
<<<<<<< HEAD
  }
=======
  };
>>>>>>> 12311e407b27139b234d304012caa87e74aae6f3

  if (auth.currentUser == null) {

    return (
      <React.Fragment>
        <h3>You must be signed in to access the queue.</h3>
      </React.Fragment>
    );
  } else if (auth.currentUser != null) {
    let currentlyVisibleState = null;
    let buttonText = null;

    if (error) {
      currentlyVisibleState = <p>There was an error: {error}</p>;
    } else if (editing) {
      currentlyVisibleState = (
        <EditTicketForm
          ticket={selectedTicket}
          onEditTicket={handleEditingTicketInList}
        />
<<<<<<< HEAD
      )
      buttonText = 'Return to Orders';
=======
      );
      buttonText = 'Return to Snack List';
>>>>>>> 12311e407b27139b234d304012caa87e74aae6f3
    } else if (selectedTicket != null) {
      currentlyVisibleState = (
        <TicketDetail
          ticket={selectedTicket}
          onClickingDelete={handleDeletingTicket}
          onClickingEdit={handleEditClick}
        />
<<<<<<< HEAD
      )
      buttonText = 'Order List';
    } else if (formVisibleOnPage) {
      currentlyVisibleState = (
        <NewTicketForm onNewTicketCreation={handleAddingNewTicketToList} />
      )
      buttonText = 'Order List';
=======
      );
      buttonText = 'Return to Snack List';
    } else if (formVisibleOnPage) {
      currentlyVisibleState = (
        <NewTicketForm onNewTicketCreation={handleAddingNewTicketToList} />
      );
      buttonText = 'Return to Snack List';
>>>>>>> 12311e407b27139b234d304012caa87e74aae6f3
    } else {
      currentlyVisibleState = (
        <TicketList
          onTicketSelection={handleChangingSelectedTicket}
          ticketList={mainTicketList}
        />
<<<<<<< HEAD
      )
      buttonText = 'Start New Order';
=======
      );
      buttonText = 'Add Snack';
>>>>>>> 12311e407b27139b234d304012caa87e74aae6f3
    }
    return (
      <React.Fragment>
        
        {currentlyVisibleState}
<<<<<<< HEAD
        {error ? null :  <StyledButton onClick={handleClick}>{buttonText}</StyledButton>}
 
=======
        {error ? null : (
          <AddTicketButton onClick={handleClick}>{buttonText}</AddTicketButton>
        )}
>>>>>>> 12311e407b27139b234d304012caa87e74aae6f3
      </React.Fragment>
    );
  }
}

export default TicketControl;
