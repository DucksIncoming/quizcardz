const cardData = fetch("cards.json")

function updateSet() {
    setID = document.getElementById("dropdown").value;
    if (setID != "Select Set") {
        console.log("Changing to: " + setID);
    }

    console.log(cardData);
}