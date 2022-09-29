const firebaseApp = firebase.initializeApp({

    apiKey: "AIzaSyDEJ70oPoYPU6u2z75GawvVoZgHsHi8evg",
    authDomain: "fir-frontend-9cb3b.firebaseapp.com",
    projectId: "fir-frontend-9cb3b",
    storageBucket: "fir-frontend-9cb3b.appspot.com",
    messagingSenderId: "684120340455",
    appId: "1:684120340455:web:99df243846b0073d1e2f42",
    measurementId: "G-LWBXCFDL3V"

});

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

const saveData = () => {
    const email = document.getElementById('email').value
    const password = document.getElementById('password').value

    db.collection('users')
        .add({
            email: email,
            password: password
        })
        .then((data) => {
            console.log(data.id)
        })
        .catch((error) => {
            alert(error.message)
            console.log(error.message)
        })
};


const readData = () => {

    db.collection('users')
        .get()
        .then((data) => {
            console.log(data.docs.map((item) => {
                return { ...item.data(), id: item.id }
            }))
        })
        .catch((error) => {
            alert(error.message)
            console.log(error.message)
        })
};


const updateData = () => {
    db.collection('users').doc('G2JmQnuoCHwF8Gji7V4f')
        .update({
            email: "sahu@gmail.com",
            password: 987456
        })
        .then(() => {
            alert('Data updated..!!')
        })
};


const deleteData = () => {
    db.collection('users').doc('G2JmQnuoCHwF8Gji7V4f').delete()
        .then(() => {
            alert('Data deleted..!!')
        })
};