console.log('%c HI', 'color: firebrick')
document.addEventListener("DOMContentLoaded", () => {

//////////////////////////////// CHALLENGE 1 ////////////////////////////////
//////// DELIVERABLES ////////
// Add JavaScript that:
// https://dog.ceo/api/breeds/image/random/4
// on page load, fetches the images using the url above ⬆️
// parses the response as JSON
// adds image elements to the DOM for each 🤔 image in the array

fetch('https://dog.ceo/api/breeds/image/random/4')
    .then(response => response.json())
    .then(data => {
        const dogImageContainer = document.getElementById('dog-image-container')
        data.message.forEach(dog => {
            const dogImage = document.createElement('img')
            dogImage.src = dog
            dogImageContainer.appendChild(dogImage)
    })
    })



//////////////////////////////// CHALLENGE 2 ////////////////////////////////
//////// DELIVERABLES ////////
// After the first challenge is completed, add JavaScript that:
// on page load, fetches all the dog breeds using the url above ⬆️
// adds the breeds to the page in the <ul> provided in index.html

fetch('https://dog.ceo/api/breeds/list/all')
    .then(response => response.json())
    .then(data => {
        const breedList = document.getElementById('dog-breeds');
        const breeds = data.message;
        Object.keys(breeds).forEach(breed => {
            const li = document.createElement('li');
            li.textContent = breed;
            breedList.appendChild(li);
            li.addEventListener('click', () => { 
                li.style.color = 'red';
            });
        });

        const breedDropdown = document.getElementById('breed-dropdown');
        breedDropdown.addEventListener('change', (event) => {
            const selectedValue = event.target.value;
            breedList.innerHTML = '';
            Object.keys(breeds).forEach(breed => {
                if (breed.startsWith(selectedValue)) {
                    const li = document.createElement('li');
                    li.textContent = breed;
                    breedList.appendChild(li);
                    li.addEventListener('click', () => { 
                        li.style.color = 'red';
                    });
                }
            });
        });
    });

   
})


//////////////////////////////// CHALLENGE 3 ////////////////////////////////
//////// DELIVERABLES ////////
// Once all of the breeds are rendered in the <ul>, 
// add JavaScript so that, when the user clicks on any one of the <li>s,
//  the font color of that <li> changes. This can be a color of your choosing.


// See lines 41-43


// //////////////////////////////// CHALLENGE 4 ////////////////////////////////
// //////// DELIVERABLES ////////
// // Once we are able to load all of the dog breeds onto the page, add JavaScript so that 
// // the user can filter breeds that start with a particular letter using a dropdown
