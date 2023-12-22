// spara ner vår url i en variabel
const url = "http://localhost:3000/users";

// hämtning av url och sen placering av data i form av HTMLElement-objekt i DOM-trädet 
fetch(url)
    .then((response) => response.json())
    .then((users) => {
        const newUl = document.createElement('ul');
        const div = document.querySelector('.container');
        div.insertAdjacentElement('beforeend', newUl);

        // loopa igenom alla users och placera dom individuellt i DOM-trädet 
        users.forEach(user => {
            const newLi = document.createElement('li');
            newLi.style.backgroundColor = user.color;
            const fullName = user.firstName + '  ' + user.lastName;
            const userName = user.username;
            const html = `<h2 style="font-family:Avenir Next; font-size:20px; font-weight:400; margin: 15px 0px 0px 0px; padding: 15px 0px 0px 15px;"; >${fullName}</h2>
            <p style="font-family: Avenir Next; font-size:13px; font-weight: 400; font-style: italic; margin: 0; padding: 5px 0px 15px 15px;">Username: ${userName}</p>`;
            newUl.insertAdjacentElement('beforeend', newLi);
            newLi.insertAdjacentHTML('beforeend', html);
        })
    });