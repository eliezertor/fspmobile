import firebase from '../config/firebase.config';

//Built in Firebase to validate new user
const emailVerification = () => {
  var user = firebase.auth().currentUser;

  user
    .sendEmailVerification()
    .then(function () {
      /**
       * ! TODO: display message to user once registered to head to their email and validate account.
       */
      // Email sent.
      console.log('email sent');
    })
    .catch(function (error) {
      // An error happened.
    });
};

export default { emailVerification };
