import firebase from '../config/firebase.config';

const emailVerification = () => {
  var user = firebase.auth().currentUser;

  user
    .sendEmailVerification()
    .then(function () {
      // Email sent.
      console.log('email sent');
    })
    .catch(function (error) {
      // An error happened.
    });
};

export default { emailVerification };
