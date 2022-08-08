//Retrieve bank feedback.
findFeedbacks();
function findFeedbacks() {
    firebase.firestore()
        .collection('feedback')
        .get()
        .then(snapshot => {
            const feedbacks = snapshot.docs.map(doc => doc.data());
            showFeedbacks(feedbacks);
        })
}

//Get feedback from firestore/firebase and show it on screen.
function showFeedbacks(feedbacks){
    const list = document.getElementById('list');
    
    feedbacks.forEach(feedback =>{
        console.log(feedback.username);
        const li = document.createElement('li');

        const name = document.createElement('h4');
        name.innerHTML= feedback.username;
        li.appendChild(name);

        const msg = document.createElement('p');
        msg.innerHTML = feedback.feedbackUser;
        li.appendChild(msg);

        list.appendChild(li);
    })
}

const form = {
    name: () => document.getElementById('name'),
    feedback: () => document.getElementById('feedback'),
    avaliation: () => document.getElementById('avaliation')
}

//Send the feedback to the bank.
function sendFeedback(){
    const feedback = {
        username :form.name().value,
        feedbackUser : form.feedback().value,
        avaliation : form.avaliation().value
    }

    firebase.firestore()
    .collection("feedback")
    .add(feedback)
    .then(() =>{
        alert("Thanks for your opinion.");
        window.location.href="../../html/localShopToGo.html";
    })
    .catch(() =>{
        alert(Erro);
    })


}
