const container = document.querySelector(".container");

const urls = [
    "https://source.unsplash.com/random/800x800/?sky",
    "https://source.unsplash.com/random/800x800/?landscape",
    "https://source.unsplash.com/random/800x800/?ocean",
    "https://source.unsplash.com/random/800x800/?mountain",
    "https://source.unsplash.com/random/800x800/?forset",
    "https://source.unsplash.com/random/800x800/?desert"
];

let cardCount = 0;

function appendNewCard() {
    const card = new Card({
        imgUrl: urls[cardCount % 6],
        onDismiss: appendNewCard
    })
    container.append(card.element);
    cardCount++;

    const cards = document.querySelectorAll(".card:not(.disMiss)");
    cards.forEach((card, index) => {
        card.style.setProperty('--i', index)
    })
}

for (var i=0;i<6;i++){
    appendNewCard();
}