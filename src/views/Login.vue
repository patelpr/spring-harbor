<template>
  <section id="firebaseui-auth-container"></section>
</template>
<script>
import * as firebaseui from "firebaseui";
import firebase from "firebase/compat/app";
import "firebaseui/dist/firebaseui.css";
// import auth from "../main.js";
export default {
  mounted() {
    var ui = new firebaseui.auth.AuthUI(firebase.auth());
    var uiConfig = {
      signInOptions: [
        {
          provider: firebaseui.auth.PhoneAuthProvider.PROVIDER_ID,
          recaptchaParameters: {
            type: "image", // 'audio'
            size: "normal", // 'invisible' or 'compact'
            badge: "bottomleft", //' bottomright' or 'inline' applies to invisible.
          },
          defaultCountry: "US", // Set default country to the United Kingdom (+44).
          // For prefilling the national number, set defaultNationNumber.
          // This will only be observed if only phone Auth provider is used since
          // for multiple providers, the NASCAR screen will always render first
          // with a 'sign in with phone number' button.
          defaultNationalNumber: "1234567890",
          // You can also pass the full phone number string instead of the
          // 'defaultCountry' and 'defaultNationalNumber'. However, in this case,
          // the first country ID that matches the country code will be used to
          // populate the country selector. So for countries that share the same
          // country code, the selected country may not be the expected one.
          // In that case, pass the 'defaultCountry' instead to ensure the exact
          // country is selected. The 'defaultCountry' and 'defaultNationaNumber'
          // will always have higher priority than 'loginHint' which will be ignored
          // in their favor. In this case, the default country will be 'GB' even
          // though 'loginHint' specified the country code as '+1'.
          loginHint: "+11234567890",
        },
      ],
    };
    ui.start("#firebaseui-auth-container", uiConfig);
  },

  // Initialize the FirebaseUI Widget using Firebase.
};
</script>
