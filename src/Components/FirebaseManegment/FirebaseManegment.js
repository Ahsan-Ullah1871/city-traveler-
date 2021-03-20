import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "../../firebase.config";

export const initializeFramework = () => {
	if (!firebase.apps.length) {
		firebase.initializeApp(firebaseConfig);
	}
};

export const createNewAccount = (email, password, name) => {
	return firebase
		.auth()
		.createUserWithEmailAndPassword(email, password)
		.then((res) => {
			// Signed in
			const newInfo = res.user;
			newInfo.error = "";
			newInfo.success = true;
			newInfo.isSingdIn = true;
			updateName(name);
			return newInfo;
			// ...
		})
		.catch((error) => {
			var errorMessage = error.message;
			const newInfo = {};
			newInfo.error = errorMessage;
			newInfo.success = false;
			return newInfo;
			// ..
		});
};

export const signInOldUser = (email, password) => {
	return firebase
		.auth()
		.signInWithEmailAndPassword(email, password)
		.then((res) => {
			// Signed in
			const newInfo = res.user;
			newInfo.error = "";
			newInfo.success = true;
			newInfo.isSingdIn = true;
			return newInfo;
			// ...
		})
		.catch((error) => {
			var errorMessage = error.message;
			const newInfo = {};
			newInfo.error = errorMessage;
			newInfo.success = false;
			return newInfo;
		});
};

const updateName = (name) => {
	var user = firebase.auth().currentUser;

	user.updateProfile({
		displayName: name,
	})
		.then(function () {
			// Update successful.
			console.log("name change");
		})
		.catch(function (error) {
			// An error happened.
		});
};

export const signInWithGoogle = () => {
	var provider = new firebase.auth.GoogleAuthProvider();
	return firebase
		.auth()
		.signInWithPopup(provider)
		.then((result) => {
			/** @type {firebase.auth.OAuthCredential} */
			var credential = result.credential;

			// This gives you a Google Access Token. You can use it to access the Google API.
			var token = credential.accessToken;
			// The signed-in user info.
			var user = result.user;
			return user;
		})
		.catch((error) => {
			// Handle Errors here.
			var errorCode = error.code;
			var errorMessage = error.message;
			// The email of the user's account used.
			var email = error.email;
			// The firebase.auth.AuthCredential type that was used.
			var credential = error.credential;
			// ...
		});
};

export const signInWithFacebook = () => {
	var provider = new firebase.auth.FacebookAuthProvider();
	return firebase
		.auth()
		.signInWithPopup(provider)
		.then((result) => {
			/** @type {firebase.auth.OAuthCredential} */
			var credential = result.credential;

			// The signed-in user info.
			var user = result.user;
			return user;

			// This gives you a Facebook Access Token. You can use it to access the Facebook API.
			var accessToken = credential.accessToken;

			// ...
		})
		.catch((error) => {
			// Handle Errors here.
			var errorCode = error.code;
			var errorMessage = error.message;
			// The email of the user's account used.
			var email = error.email;
			// The firebase.auth.AuthCredential type that was used.
			var credential = error.credential;

			// ...
		});
};

export const signOut = () => {
	return firebase
		.auth()
		.signOut()
		.then((res) => {
			// Sign-out successful.
			const user = res;
			return user;
		})
		.catch((error) => {
			// An error happened.
		});
};
