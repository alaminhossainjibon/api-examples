const loadBuddies = () => {
    fetch('https://randomuser.me/api/?results=5')
        .then(res => res.json())
        .then(data => displayBuddies(data))
}
// function ke call kora hoyeche
loadBuddies();
const displayBuddies = data => {
    //ekhane buddy guloke pete tar mul name deya hoyeche result
    const buddies = data.results;

    const buddiesDiv = document.getElementById('buddies');

    // console.log(data.results);
    //loop thru kora hoyeche.
    for (const buddy of buddies) {
        console.log(buddy);

        const p = document.createElement('p');
        // dynamic vabe buddy er info neya hoyeche
        p.innerText = `name: ${buddy.name.title} ${buddy.name.first} ${buddy.name.last} email: ${buddy.email}`;

        buddiesDiv.appendChild(p);
    }
}