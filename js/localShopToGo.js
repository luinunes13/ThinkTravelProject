function findStore() {

    const country= document.getElementById("country").value;
    console.log(country);
    firebase.firestore()
        .collection(country)
        .get()
        .then(snapshot => {
            const stores = snapshot.docs.map(doc => doc.data());
            filtertore(stores);
        })
}

function filterStore(stores){

    const city = document.getElementById("city").value;
    const category = document.getElementById("category").value;
    const findData = [];

    stores.forEach(element => {
        if(element.City == city){
            if(element.Category == category){
                findData.push(element);
            }
        }
    });
    
    showData(findData);
}

showData(findaData){
    
}

