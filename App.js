import React from "react";
import { StyleSheet, Text, View } from "react-native";
import firebase from "firebase";
import SignUpForm from "./components/signUpForm";
import SignInForm from "./components/SignInForm";
import keys from "./keys";

export default class App extends React.Component {
  componentDidMount() {
    // Initialize Firebase
    firebase.initializeApp(keys.firebaseConfig);
  }
  render() {
    return (
      <View style={styles.container}>
        <SignUpForm />
        <SignInForm />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-around"
  }
});
