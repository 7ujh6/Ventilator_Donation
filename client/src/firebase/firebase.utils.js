import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';




const config = {
    apiKey: "AIzaSyDaZiqbkNS-wFDih0zU3rv0bUYC_gU8LiY",
    authDomain: "langflash-db.firebaseapp.com",
    databaseURL: "https://langflash-db.firebaseio.com",
    projectId: "langflash-db",
    storageBucket: "langflash-db.appspot.com",
    messagingSenderId: "750372521965",
    appId: "1:750372521965:web:1394ec28b8a0f9e00bc9e4",
    measurementId: "G-JY3RHBYG3X"
  };

firebase.initializeApp(config);


export const createUserDocument = async (userAuth, additionalData) => {
    if (!userAuth)
        return;


    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();
    
    if (!snapShot.exists)
    {
        const {email, uid} = userAuth;
        const joinDate = new Date();


        const displayName = !userAuth.displayName ? userAuth.displayName : additionalData.displayName;

        try {
            await userRef.set({uid, displayName, email, joinDate, ...additionalData});
        } catch (error) {
            console.log("error creating user", error.message)
        }
    }

    //changeCurrentUser(snapShot.data());
    return userRef;
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({prompt: 'select_account'});

export const SignInWithGoogle = () => auth.signInWithPopup(provider);

export const fetchReferenceObject =  async (referenceString) => {
    var profileData = {};
    await firestore.doc(referenceString).get().then((document) => {
        profileData = {...profileData, data: document.data()};
    })

    return profileData;
}

export const fetchUserArray = async () => {
    const temp = [];
    await firestore.collection('/users').get().then((collection) => {
        collection.forEach((document) => {temp.push(document.data())}) 
    });
    return temp;
}

export const alterActiveDecks = async (id, activeDecks) => {
    await firestore.doc(`users/${id}`).update({activeDecks: activeDecks});
    return activeDecks;
}

export const appendToActiveDecks = async (id, activeDecks) => {
    await firestore.doc(`users/${id}`).update({activeDecks: activeDecks});
    return activeDecks;
}

export const filterActiveFriends = async (friendsList) => {
    return await friendsList.filter((friend, idx) => idx < 5 && firestore.doc(friend).get().activityStatus === "online");
}

export const appendFriend = async (id, friendsList, friend) => {
    //caches the referenceString within friendsList at this point
    return await firestore.doc(`users/${id}`).update({friendsList: [...friendsList, friend]});
}

export const deleteFriend = async (id, friendsList, friend) => {
        return await firestore.doc(`users/${id}`).update({friendsList: await friendsList.filter((it) => it === friend)});
}

export const blackListUser = async (id, blackList, user) => {
    return await firestore.doc(`users/${id}`).update({blackList: [...blackList, user]});
}

export const whiteListUser = async (id, blackList, user) => {
    return await firestore.doc(`users/${id}`).update({blackList: await blackList.filter((it) => it === user)});
}

export const updateDisplayName = async (id, displayName) => {
    await firestore.doc(`users/${id}`).update({displayName: displayName});
    return displayName;
}

export const updateDisplayIcon = async (id, displayIcon) => {
    await firestore.doc(`users/${id}`).update({displayIcon: displayIcon});
    return displayIcon;
}

export const updateActivityStatus = async (id, activityStatus) => {
    const update = activityStatus === "offline" ? "online" : "offline";
    await firestore.doc(`users/${id}`).update({activityStatus: update})
    return update;
} 

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
    const collectionRef = firestore.collection(collectionKey);
    const batch = firestore.batch();
    objectsToAdd.forEach(obj => {const newDocRef = collectionRef.doc()
    batch.set(newDocRef, obj)});


   return await batch.commit();
  }


export default firebase;