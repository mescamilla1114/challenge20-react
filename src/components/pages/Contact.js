import React from 'react';

import { checkPassword, validateEmail } from '../../utils/helpers';
export default function Contact() {

  // const [email, setEmail] = useState('');
  // const [name, setUserName] = useState('');
  // const [message, setMessage] = useState('');
  // const [ setErrorMessage] = useState('');

  // const handleInputChange = (e) => {
  //   // Getting the value and name of the input which triggered the change
  //   const { target } = e;
  //   const inputType = target.name;
  //   const inputValue = target.value;

  //   // Based on the input type, we set the state of either email, username, and password
  //   if (inputType === 'email') {
  //     setEmail(inputValue);
  //   } else if (inputType === 'name') {
  //     setUserName(inputValue);
  //   } else {
  //     setMessage(inputValue);
  //   }
  // };

  // const handleFormSubmit = (e) => {
  //   // Preventing the default behavior of the form submit (which is to refresh the page)
  //   e.preventDefault();

  //   // First we check to see if the email is not valid or if the userName is empty. If so we set an error message to be displayed on the page.
  //   if (!validateEmail(email) || !name || !message)  {
  //     setErrorMessage('Email invalid or fields not filled in');
  //     // We want to exit out of this code block if something is wrong so that the user can correct it
  //     return;
  //     // Then we check to see if the password is not valid. If so, we set an error message regarding the password.
  //   }
  // };
  return (
    <div>
      <h1>Contact Page </h1>
      <form>
      <div className="form-group">
        <label htmlFor="search"> name </label>
        <input
          type="text"
          className="form-control"
          placeholder="Name"
          id="name"
        />
        <br /><br />
        <label htmlFor="email">email </label>
        <input
          type="text"
          className="form-control"
          placeholder="email"
          id="email"
        />
        <br /><br />
        <label htmlFor="email">message </label>
        <input
          type="text"
          className="form-control"
          placeholder="Message"
          id="message"
        />
        <br />
        <br />

        <button
         
          className="btn btn-primary"
          type="submit"
        >
          Search
        </button>
      </div>
    </form>
  

    </div>
  );
}
