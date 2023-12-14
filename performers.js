document.addEventListener('DOMContentLoaded', function () {
    // Fetch data from registration.json
    fetch('registration.json')
        .then(response => response.json())
        .then(data => {
            // Call a function to populate performers
            populatePerformers(data);
        })
        .catch(error => console.error('Error fetching data:', error));
});

function populatePerformers(performersData) {
    const performersContainer = document.getElementById('performers-container');

    // Iterate through each performer in the data
    performersData.forEach(performer => {
        // Create a performer card element
        const performerCard = document.createElement('div');
        performerCard.classList.add('performer-card');

        // Create an image element for the performer photo
        const performerPhoto = document.createElement('img');
        performerPhoto.classList.add('performer-photo');
        performerPhoto.src = performer.Photo;
        performerPhoto.alt = performer.PerformingName;

        // Create elements for performer information
        const performerName = document.createElement('div');
        performerName.classList.add('performer-name');
        performerName.textContent = performer.PerformingName;

        const performerDescription = document.createElement('div');
        performerDescription.classList.add('performer-description');
        performerDescription.textContent = performer.Description;

        const performerSocialMedia = document.createElement('div');
        performerSocialMedia.classList.add('performer-social-media');
        performerSocialMedia.innerHTML = `<a href="${performer.SocialMedia}" target="_blank">Social Media Link</a>`;

        const performerAddress = document.createElement('div');
        performerAddress.classList.add('performer-address');
        performerAddress.textContent = performer.PrearrangedAddress;

        // Append elements to the performer card
        performerCard.appendChild(performerPhoto);
        performerCard.appendChild(performerName);
        performerCard.appendChild(performerDescription);
        performerCard.appendChild(performerSocialMedia);
        performerCard.appendChild(performerAddress);

        // Append the performer card to the container
        performersContainer.appendChild(performerCard);
    });
}

       

