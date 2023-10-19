const baseUrl = 'https://api-adresse.data.gouv.fr';
const addressHtml = document.querySelector('address');

// document.querySelector('#geolocation').addEventListener('click', () => {
//     navigator.geolocation.getCurrentPosition(position => {
//         const {latitude, longitude} = position.coords;
        
//         fetch(`${baseUrl}/reverse/?lon=${longitude}&lat=${latitude}`)
//         .then(response => response.json())
//         .then(response => {
//             addressHtml.textContent = response.features[0].properties.label
//         });
//     });
// });

function getCoords() {
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(position => {
            const { latitude, longitude } = position.coords;
            resolve({ latitude, longitude });
        }, error => {
            reject(error);
        });
    });
}

async function getAddress(latitude, longitude) {
    const response = await fetch(`${baseUrl}/reverse/?lon=${longitude}&lat=${latitude}`);
    const data = await response.json();
    return data.features[0].properties.label;
}

async function main() {
    try {
        const { latitude, longitude } = await getCoords();
        const address = await getAddress(latitude, longitude);
        addressHtml.textContent = address;
    } catch (error) {
        console.error(error);
    }
}

document.querySelector('#geolocation').addEventListener('click', () => {
    main();
});