function findStore() {

    const divData = document.getElementById("list");
    divData.innerHTML="";

    const country= document.getElementById("country").value;
    firebase.firestore()
        .collection(country)
        .get()
        .then(snapshot => {
            const stores = snapshot.docs.map(doc => doc.data());
            filterStore(stores);
        })

}

function filterStore(stores){

    const city = document.getElementById("city").value;
    const findData = [];

    stores.forEach(element => {
        if(element.City == city){
            findData.push(element);   
        }
    });
    
    showData(findData);
}

function showData(findData){
    const list = document.getElementById('list');
    
    findData.forEach(data =>{
        const li = document.createElement('li');

        const Name= document.createElement('h2');
        Name.innerHTML = data.Name;
        li.appendChild(Name);

        const City = document.createElement('h4');
        City.innerHTML= data.City;
        li.appendChild(City);

        const Category = document.createElement('p');
        Category.innerHTML = data.Category;
        li.appendChild(Category);

        const deals = document.createElement('p');
        deals.innerHTML = data.Deals;
        li.appendChild(deals);

        list.appendChild(li);
    })
}

function selectCountry(){
    const country = document.getElementById("country").value;

    if(country == "0"){
        const resetCountry = document.getElementById("city");
        while (resetCountry.length) {
            resetCountry.remove(0);
        }

        document.getElementById("city").disabled = true;
    }
    else if(country == "Ireland"){

        const resetCountry = document.getElementById("city");
        while (resetCountry.length) {
            resetCountry.remove(0);
        }
        document.getElementById("city").disabled = false;

        const select = document.getElementById("city");

        var opt1 = document.createElement("option");
        opt1.value = "Dublin";
        opt1.text = "Dublin";
        select.add(opt1, select.options[1]);

        var opt2 = document.createElement("option");
        opt2.value = "Cork";
        opt2.text = "Cork";
        select.add(opt2, select.options[2]);

        var opt3 = document.createElement("option");
        opt3.value = "Limerick";
        opt3.text = "Limerick";
        select.add(opt3, select.options[3]);

    }
    else if(country == "Brazil"){

        const resetCountry = document.getElementById("city");
        while (resetCountry.length) {
            resetCountry.remove(0);
        }
        document.getElementById("city").disabled = false;

        const select = document.getElementById("city");

        var opt1 = document.createElement("option");
        opt1.value = "São Paulo";
        opt1.text = "São Paulo";
        select.add(opt1, select.options[1]);

        var opt2 = document.createElement("option");
        opt2.value = "Rio de Janeiro";
        opt2.text = "Rio de Janeiro";
        select.add(opt2, select.options[2]);

        var opt3 = document.createElement("option");
        opt3.value = "Salvador";
        opt3.text = "Salvador";
        select.add(opt3, select.options[3]);

    }else if(country == "Italy"){
        const resetCountry = document.getElementById("city");
        while (resetCountry.length) {
            resetCountry.remove(0);
        }
        document.getElementById("city").disabled = false;

        const select = document.getElementById("city");

        var opt1 = document.createElement("option");
        opt1.value = "Milan";
        opt1.text = "Milan";
        select.add(opt1, select.options[1]);

        /*
        
        var opt2 = document.createElement("option");
        opt2.value = "Rio de Janeiro";
        opt2.text = "Rio de Janeiro";
        select.add(opt2, select.options[2]);

        var opt3 = document.createElement("option");
        opt3.value = "Salvador";
        opt3.text = "Salvador";
        select.add(opt3, select.options[3]);

        */
    }
}