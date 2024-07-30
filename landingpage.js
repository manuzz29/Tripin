gsap.from("#ship",{
    x:1050,
    duration:15,
    delay:2,
    repeat:-1,
    yoyo:true,
})
const firebaseConfig = {
    apiKey: "AIzaSyCGqjyWXw_zQhgjMkF6itk3R-joYtLxS7E",
    authDomain: "tripin-1dc04.firebaseapp.com",
    projectId: "tripin-1dc04",
    storageBucket: "tripin-1dc04.appspot.com",
    messagingSenderId: "632088011747",
    appId: "1:632088011747:web:77c777996de2d7836cb6d6",
    measurementId: "G-STCPJY38RP"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  // Initialize the FirebaseUI Widget using Firebase
  var ui = new firebaseui.auth.AuthUI(firebase.auth());

  // Configure the FirebaseUI Widget
  var uiConfig = {
      signInSuccessUrl: 'index.html',
      signInOptions: [
          firebase.auth.GoogleAuthProvider.PROVIDER_ID
      ],
      // Terms of service url
      tosUrl: '<your-tos-url>',
      // Privacy policy url
      privacyPolicyUrl: '<your-privacy-policy-url>'
  };

  // The start method will wait until the DOM is loaded.
  ui.start('#firebaseui-auth-container', uiConfig);

  // Add event listener to the login button
  document.getElementById('login-btn').addEventListener('click', function() {
      ui.start('#firebaseui-auth-container', uiConfig);
  });