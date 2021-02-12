import React from "react";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { useSelector } from "react-redux";
import { CSSTransition } from "react-transition-group";

import ContactForm from "../../../components/contactForm/ContactForm";
import ContactList from "../../../components/contactList/ContactList";
import Filter from "../../../components/filter/Filter";
import ContactsWrapper from "./ContactsPageStyled";
import { getContacts, isLoading } from "../../selectors/phonebookSelectors";

const ContactsPage = () => {
  const contacts = useSelector(getContacts);
  const loading = useSelector(isLoading);

  return (
    <ContactsWrapper>
      {loading && (
        <div className="loaderWrapper">
          <Loader
            type="ThreeDots"
            color="orange"
            height={100}
            width={100}
            timeout={3000}
          />
        </div>
      )}

      <CSSTransition
        className="myTitle"
        in={true}
        appear={true}
        timeout={500}
        unmountOnExit
      >
        <h1 className="pageTitle">Phonebook</h1>
      </CSSTransition>

      <ContactForm />

      <h2 className="contactsTitle">Contacts</h2>

      <CSSTransition
        classNames="myFilter"
        in={contacts.length > 1}
        timeout={250}
        unmountOnExit
      >
        <Filter />
      </CSSTransition>

      <ContactList />
    </ContactsWrapper>
  );
};

export default ContactsPage;
