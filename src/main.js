import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Vue2Editor from "vue2-editor";
import firebase from "firebase/app";
import "firebase/auth";

Vue.use(Vue2Editor);

Vue.config.productionTip = false;

let app;

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    new Vue({
      router,
      store,
      render: (h) => h(App),
    }).$mount("#app");

    console.log(`
      -------------------------------- \n
      You are LoggedIn with: \n
      email: ${firebase.auth().currentUser.email}\n
      uid: ${firebase.auth().currentUser.uid} \n
      user: ${firebase.auth.currentUser}
      --------------------------------
    `);
  }
});
