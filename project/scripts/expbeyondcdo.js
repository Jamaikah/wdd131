document.getElementById("lastModified").textContent = document.lastModified;

const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
})


const places = [
    {
        name: "Whitewater Rafting",
        location: "Cagayan de Oro",
        description: "Experience guided rafting adventures along the Cagayan de Oro River.",
        image: "images/water-rafting.webp",
        categories: ["Adventure", "Water Activities", "Photography"],
        link: "https://www.google.com/maps/search/?api=1&query=CDO+White+Water+Rafting"
    },
    {
        name: "Mapawa Nature Park",
        location: "Cugman, Cagayan de Oro",
        description: "Explore forest scenery, Waterfalls, and outdoor adventures.",
        image: "images/mapawa-park.webp",
        categories: ["Adventure", "Hiking & Nature", "Photography"],
        link: "https://www.cagayandeoro.gov.ph/index.php/item/367-mapawa-nature-park.html"
    },
    {
        name: "City Museum of Cagayan de Oro",
        location: "Gaston Park area, Cagayan de Oro",
        description: "Discover the history and heritage of Cagayan de Oro.",
        image: "images/city-museum.webp",
        categories: ["Culture & History", "Photography"],
        link: "https://www.google.com/maps/search/?api=1&query=City+Museum+Cagayan+de+Oro"
    },
    {
        name: "Macahambus Cave and Hill",
        location: "Cagayan de Oro",
        description: "Explore a natural and historical site connected to the Battle of Macahambus.",
        image: "images/macahambus-cave.webp",
        categories: ["Culture & History", "Hiking & Nature", "Photography"],
        link: "https://www.google.com/maps/search/?api=1&query=Macahambus+Cave+Cagayan+de+Oro"
    },
    {
        name: "F.S. Catanico Falls",
        location: "Cagayan de Oro",
        description: "Enjoy waterfall scenery and the surrounding natural landscape.",
        image: "images/catanico-falls.webp",
        categories: ["Waterfalls", "Hiking & Nature", "Photography"],
        link: "https://www.google.com/maps/search/?api=1&query=FS+Catanico+Falls"
    },
    {
        name: "Gaston Park",
        location: "Downtown Cagayan de Oro",
        description: "Relax in a historic city park near important downtown landmarks.",
        image: "images/gaston-park.webp",
        categories: ["Chill Spots", "Culture & History", "Photography"],
        link: "https://www.google.com/maps/search/?api=1&query=Gaston+Park+Cagayan+de+Oro"
    },
    {
        name: "Museum of Three Cultures",
        location: "Capitol University, Cagayan de Oro",
        description: "Learn about the cultures, traditions, and history of Mindanao.",
        image: "images/museum-three-cultures.webp",
        categories: ["Culture & History", "Photography"],
        link: "https://www.google.com/maps/search/?api=1&query=Museum+of+Three+Cultures"
    },
    {
        name: "Dahilayan Adventure Park",
        location: "Manolo Fortich, Bukidnon",
        description: "Enjoy outdoor rides, adventure activities, and mountain views.",
        image: "images/dahilayan-park.webp",
        categories: ["Adventure", "Hiking & Nature", "Photography"],
        link: "https://www.dahilayanadventurepark.com/"
    },
    {
        name: "Cowboy's Camp",
        location: "Libona, Bukidnon",
        description: "Discover an outdoor destination for enjoying the countryside scenery.",
        image: "images/cowboys-camp.webp",
        categories: ["Chill Spots", "Hiking & Nature", "Adventure"],
        link: "https://www.google.com/maps/search/?api=1&query=Cowboys+Camp+Libona+Bukidnon"
    },
    {
        name: "Initao-Libertad Protected Landscape and Seascape",
        location: "Initao and Libertad, Misamis Oriental",
        description: "Discover a protected natural area with forest and coastal scenery.",
        image: "images/initao-libertad.webp",
        categories: ["Hiking & Nature", "Beaches & Islands", "Photography"],
        link: "https://pais.bmb.gov.ph/home/info/DENRRX00003"
    },
    {
        name: "Sagpulon Falls",
        location: "Jasaan, Misamis Oriental",
        description: "Visit a scenic waterfall surrounded by natural landscapes.",
        image: "images/sagpulon-falls.webp",
        categories: ["Waterfalls", "Hiking & Nature", "Photography", "Chill Spots"],
        link: "https://www.google.com/maps/search/?api=1&query=Sagpulon+Falls+Jasaan"
    },
    {
        name: "Camiguin Island",
        location: "Camiguin",
        description: "Explore an island province known for waterfalls, beaches, and volcanic scenery.",
        image: "images/camiguin-island.webp",
        categories: ["Beaches & Islands", "Hiking & Nature", "Culture & History", "Photography"],
        link: "https://camiguin.gov.ph/where-to-go/"
    },
    {
        name: "Mantigue Island Nature Park",
        location: "Mahinog, Camiguin",
        description: "Enjoy island scenery, sandy shores, and surrounding marine habitats.",
        image: "images/mantigue-island.webp",
        categories: ["Beaches & Islands", "Hiking & Nature", "Photography", "Chill Spots"],
        link: "https://camiguin.gov.ph/where-to-go/"
    },
    {
        name: "Tuasan Falls",
        location: "Catarman, Camiguin",
        description: "Discover a waterfall surrounded by greenery and rocky scenery.",
        image: "images/tuasan-falls.webp",
        categories: ["Waterfalls", "Hiking & Nature", "Photography"],
        link: "https://camiguin.gov.ph/where-to-go/"
    },
    {
        name: "The Lonewolf Café",
        location: "Cagayan de Oro",
        description: "Take a break from exploring with a café stop for drinks and relaxation.",
        image: "images/lonewolf-cafe.webp",
        categories: ["Cafés & Food Trips", "Chill Spots", "Photography"],
        link: "https://www.google.com/maps/search/?api=1&query=The+Lonewolf+Cafe+Cagayan+de+Oro"
    },
    {
        name: "Fukuro",
        location: "Cagayan de Oro",
        description: "Add a local food and drink stop to your CDO café-hopping trip.",
        image: "images/fukuro-cafe.webp",
        categories: ["Cafés & Food Trips", "Chill Spots", "Photography"],
        link: "https://www.google.com/maps/search/?api=1&query=The+Fukkuru+Cagayan+de+Oro"
    },
    {
        name: "Chingkeetea",
        location: "Cagayan de Oro",
        description: "Enjoy Taiwanese-style tea drinks from a local tea brand.",
        image: "images/chingkeetea.webp",
        categories: ["Cafés & Food Trips", "Chill Spots"],
        link: "https://chingkeetea.com/"
    },
    {
        name: "Bowerbird Coffee Ph",
        location: "Cagayan de Oro",
        description: "Make time for a coffee break while exploring the local café scene.",
        image: "images/bowerbird.webp",
        categories: ["Cafés & Food Trips", "Chill Spots", "Photography"],
        link: "https://www.google.com/maps/search/?api=1&query=Bowerbird+Coffee+Ph+Cagayan+de+Oro"
    },
    {
        name: "Kohi Mina Café",
        location: "Cagayan de Oro",
        description: "Discover another café stop for drinks and a relaxed break.",
        image: "images/kohi-mina.webp",
        categories: ["Cafés & Food Trips", "Chill Spots", "Photography"],
        link: "https://www.google.com/maps/search/?api=1&query=Kohi+Mina+Cafe+Cagayan+de+Oro"
    },
    {
        name: "Higala Ridge",
        location: "Indahag area, Cagayan de Oro",
        description: "Enjoy overlooking views of the city and surrounding hills.",
        image: "images/higala-ridge.webp",
        categories: ["Chill Spots", "Cafés & Food Trips", "Photography"],
        link: "https://www.google.com/maps/search/?api=1&query=Higala+Ridge+Cagayan+de+Oro"
    },
    {
        name: "Eden's Solace",
        location: "Indahag, Cagayan de Oro",
        description: "Take in scenic city views from a hilltop garden and viewing spot.",
        image: "images/edens-solace.webp",
        categories: ["Chill Spots", "Hiking & Nature", "Photography"],
        link: "https://www.google.com/maps/search/?api=1&query=Edens+Solace+Cagayan+de+Oro"
    },
    {
        name: "Amaya View",
        location: "Indahag, Cagayan de Oro",
        description: "Enjoy panoramic views and explore a hillside leisure destination.",
        image: "images/amaya-view.webp",
        categories: ["Adventure", "Chill Spots", "Cafés & Food Trips", "Photography"],
        link: "https://www.google.com/maps/search/?api=1&query=Amaya+View+Cagayan+de+Oro"
    }
];


const placeContainer = document.querySelector("#container");

function placesDisplay(list) {
    if (!placeContainer) return;

    placeContainer.innerHTML = "";

    list.forEach(places => {
        const card = document.createElement("section");
        card.className = "places-card";

        card.innerHTML = `
            <h2>${places.name}</h2>
            <img src="${places.image}" alt="${places.name}" loading="lazy">
            <p><span class="label">Location:</span> ${places.location}</p >
            <p><span class="label">Description:</span> ${places.description}</p>
            <p><span class="label">Link:</span> ${places.link}</p>`;

        placeContainer.appendChild(card);
    });
};

const allLink = document.querySelector("#navigation-act a:nth-child(1)");
const adventureLink = document.querySelector("#navigation-act a:nth-child(2)");
const hikingLink = document.querySelector("#navigation-act a:nth-child(3)");
const waterfallsLink = document.querySelector("#navigation-act a:nth-child(4)");
const beachesLink = document.querySelector("#navigation-act a:nth-child(5)");
const cafeLink = document.querySelector("#navigation-act a:nth-child(6)");
const chillLink = document.querySelector("#navigation-act a:nth-child(7)");
const cultureLink = document.querySelector("#navigation-act a:nth-child(8)");
const photoLink = document.querySelector("#navigation-act a:nth-child(9)");

if (allLink) {
    allLink.addEventListener("click", (e) => {
        e.preventDefault();
        placesDisplay(places);
    });
}

if (adventureLink) {
    adventureLink.addEventListener("click", (e) => {
        e.preventDefault();
        const filtered = places.filter(place =>
            place.categories.includes("Adventure")
        );
        placesDisplay(filtered);
    });
}

if (hikingLink) {
    hikingLink.addEventListener("click", (e) => {
        e.preventDefault();
        const filtered = places.filter(place =>
            place.categories.includes("Hiking")
        );
        placesDisplay(filtered);
    });
}

if (waterfallsLink) {
    waterfallsLink.addEventListener("click", (e) => {
        e.preventDefault();
        const filtered = places.filter(place =>
            place.categories.includes("Waterfalls")
        );
        placesDisplay(filtered);
    });
}

if (beachesLink) {
    beachesLink.addEventListener("click", (e) => {
        e.preventDefault();
        const filtered = places.filter(place =>
            place.categories.includes("Beaches")
        );
        placesDisplay(filtered);
    });
}

if (cafeLink) {
    cafeLink.addEventListener("click", (e) => {
        e.preventDefault();
        const filtered = places.filter(place =>
            place.categories.includes("Cafe")
        );
        placesDisplay(filtered);
    });
}

if (chillLink) {
    chillLink.addEventListener("click", (e) => {
        e.preventDefault();
        const filtered = places.filter(place =>
            place.categories.includes("Chill")
        );
        placesDisplay(filtered);
    });
}

if (cultureLink) {
    cultureLink.addEventListener("click", (e) => {
        e.preventDefault();
        const filtered = places.filter(place =>
            place.categories.includes("Culture")
        );
        placesDisplay(filtered);
    });
}

if (photoLink) {
    photoLink.addEventListener("click", (e) => {
        e.preventDefault();
        const filtered = places.filter(place =>
            place.categories.includes("Photo")
        );
        placesDisplay(filtered);
    });
}

placesDisplay(places);

const form = document.querySelector('#feedbackForm');

if (form) {
    form.addEventListener('submit', () => {
        const type = form.querySelector('input[name="type"]:checked').value;
        const rating = form.querySelector('input[name="rating"]:checked').value;

        localStorage.setItem('submissionType', type);
        localStorage.setItem('submissionRating', rating);

        let reviewCount = getReviewCount() || 0;
        reviewCount = reviewCount + 1;
        setReviewCount(reviewCount);
    });
}

const display = document.querySelector('#reviewCount');
const response = document.querySelector('#response');

if (display && response) {
    const type = localStorage.getItem('submissionType');
    const rating = Number(localStorage.getItem('submissionRating'));
    const reviewCount = getReviewCount() || 0;

    display.textContent = reviewCount;

    const times = reviewCount === 1 ? 'time' : 'times';

    if (type === 'inquiry') {
        response.textContent =
            `Thank you for your inquiry! You have submitted feedback and inquiries ${reviewCount} ${times}.`;
    } else if (type === 'feedback') {
        response.textContent = rating >= 3
            ? `Thank you for your feedback. We appreciate it! You have submitted feedback and inquiries ${reviewCount} ${times}.`
            : `Thank you for your feedback. We'll try our best to improve our website! You have submitted feedback and inquiries ${reviewCount} ${times}.`;
    }
}

function setReviewCount(count) {
    localStorage.setItem('reviewCount', JSON.stringify(count));
}

function getReviewCount() {
    return JSON.parse(localStorage.getItem('reviewCount'));
}