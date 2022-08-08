function findStore() {

    const country= document.getElementById("country").value;
    console.log(country);
    firebase.firestore()
        .collection(country)
        .get()
        .then(snapshot => {
            const stores = snapshot.docs.map(doc => doc.data());
            showStore(stores);
        })
}

function showStore(stores){
    console.log(stores);
}

