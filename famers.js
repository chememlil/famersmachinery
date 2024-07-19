const productsArray = [
    {
        "id": 1,
        "name": "Compact Tractors",
        "description": "Ideal for smallholder farms and orchards, compact tractors are nimble and maneuverable, making them suitable for tasks like mowing, tilling, and light hauling.",
        "image": "data:image/jpeg;base64,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",
        "price": "$25,000"
    },
    {
        "id": 2,
        "name": "Utility Tractors",
        "description": "These mid-range tractors are versatile, capable of handling a wide range of implements such as loaders, backhoes, and rotary cutters. They are suitable for general-purpose farm work, including plowing, planting, and landscaping.",
        "image": "path_to_image_url_2",
        "price": "$35,000"
    },
    {
        "id": 3,
        "name": "Row Crop Tractors",
        "description": "Designed for row-crop farming systems, these tractors offer adjustable wheel spacing and specialized tires for navigating between crop rows without damaging plants. They excel in precision planting and spraying operations.",
        "image": "path_to_image_url_3",
        "price": "$40,000"
    },
    {
        "id": 4,
        "name": "Heavy-Duty Tractors",
        "description": "High-horsepower tractors cater to large-scale operations and demanding tasks such as deep plowing, heavy hauling, and field preparation for extensive crop cultivation.",
        "image": "path_to_image_url_4",
        "price": "$60,000"
    },
    {
        "id": 5,
        "name": "Conventional Combine Harvesters",
        "description": "Versatile machines capable of harvesting multiple grain crops like wheat, maize, and soybeans. They integrate harvesting, threshing, and cleaning operations into one pass, reducing labor costs and increasing efficiency.",
        "image": "path_to_image_url_5",
        "price": "$150,000"
    },
    {
        "id": 6,
        "name": "Specialized Harvesters",
        "description": "Variants include rice combine harvesters optimized for paddy fields, equipped with features like flooded paddies and adjustable cutter bars for varying crop heights and conditions.",
        "image": "path_to_image_url_6",
        "price": "$180,000"
    },
    {
        "id": 7,
        "name": "Mechanical Planters",
        "description": "Suitable for small to medium-scale farms, offering precise seed placement and depth control for crops like maize, soybeans, and cotton.",
        "image": "path_to_image_url_7",
        "price": "$10,000"
    },
    {
        "id": 8,
        "name": "Precision Seeders",
        "description": "Equipped with GPS and variable-rate technology, precision seeders adjust seed rates and spacing based on soil conditions and field variability, optimizing seed placement and minimizing wastage.",
        "image": "path_to_image_url_8",
        "price": "$25,000"
    },
    {
        "id": 9,
        "name": "Boom Sprayers",
        "description": "Used for broad-acre applications, boom sprayers deliver pesticides and fertilizers over large fields with adjustable spray widths and precise application rates.",
        "image": "path_to_image_url_9",
        "price": "$15,000"
    },
    {
        "id": 10,
        "name": "Knapsack Sprayers",
        "description": "Portable and versatile, knapsack sprayers are ideal for spot treatments and small plots, ensuring accurate chemical application while minimizing environmental impact.",
        "image": "path_to_image_url_10",
        "price": "$500"
    },
    {
        "id": 11,
        "name": "Drip Irrigation Systems",
        "description": "These systems deliver water directly to the plant root zone, minimizing evaporation and runoff while maximizing water use efficiency for high-value crops like vegetables and orchards.",
        "image": "path_to_image_url_11",
        "price": "$20,000"
    },
    {
        "id": 12,
        "name": "Center Pivot Irrigation",
        "description": "Suitable for large-scale farming, center pivot systems use rotating sprinklers to irrigate circular fields efficiently, ensuring uniform water distribution and crop health.",
        "image": "path_to_image_url_12",
        "price": "$100,000"
    },
    {
        "id": 13,
        "name": "Moldboard Plows",
        "description": "Used for deep tillage and turning soil, moldboard plows break up compacted soil layers and incorporate organic matter to improve soil structure and drainage.",
        "image": "path_to_image_url_13",
        "price": "$8,000"
    },
    {
        "id": 14,
        "name": "Disc Harrows",
        "description": "Disc harrows cut through crop residues and break up soil clumps, preparing a smooth seedbed for planting and promoting seed-to-soil contact.",
        "image": "path_to_image_url_14",
        "price": "$12,000"
    },
    {
        "id": 15,
        "name": "Round Balers",
        "description": "These machines compact hay, straw, or silage into round bales, facilitating easy handling, storage, and transportation for livestock feed.",
        "image": "path_to_image_url_15",
        "price": "$20,000"
    },
    {
        "id": 16,
        "name": "Square Balers",
        "description": "Square balers produce dense, rectangular bales suitable for stacking and efficient use of storage space, ensuring quality forage preservation.",
        "image": "path_to_image_url_16",
        "price": "$25,000"
    },
    {
        "id": 17,
        "name": "Vertical Feed Mixers",
        "description": "These stationary mixers blend grains, protein supplements, and minerals efficiently, ensuring uniform feed distribution and nutritional consistency for livestock health and productivity.",
        "image": "path_to_image_url_17",
        "price": "$15,000"
    },
    {
        "id": 18,
        "name": "Robotic Milking Systems",
        "description": "Robotic milking machines automate the milking process, offering flexibility for cows to be milked multiple times per day based on individual production and health metrics.",
        "image": "path_to_image_url_18",
        "price": "$150,000"
    },
    {
        "id": 19,
        "name": "Solar-Powered Water Pumps",
        "description": "These pumps utilize solar energy to lift and distribute water for irrigation, reducing reliance on fossil fuels and operating costs.",
        "image": "path_to_image_url_19",
        "price": "$8,000"
    },
    {
        "id": 20,
        "name": "Solar-Powered Irrigation Systems",
        "description": "Solar-powered pivots and drip systems provide reliable water delivery for crop irrigation, enhancing farm sustainability and productivity.",
        "image": "path_to_image_url_20",
        "price": "$25,000"
    }
];

async function fetchProducts() {
    try {
        // Simulate fetching data (replace with actual fetch request if needed)
        return productsArray;
    } catch (error) {
        console.error('Error fetching products:', error);
        return [];
    }
}

async function searchProducts() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const productListContainer = document.getElementById('productList');
    productListContainer.innerHTML = ''; // Clear previous results

    const products = await fetchProducts();
    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(searchInput)
    );

    filteredProducts.forEach(product => {
        // Create elements for each product
        const productElement = document.createElement('div');
        productElement.classList.add('product');

        const productInfo = `
            <div class="product-id">ID: ${product.id}</div>
            <div class="product-name">${product.name}</div>
            <div class="product-description">${product.description}</div>
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}" />
            </div>
            <div class="product-price">Price: ${product.price}</div>
        `;

        // Set the innerHTML of productElement to productInfo
        productElement.innerHTML = productInfo;

        // Append productElement to productListContainer
        productListContainer.appendChild(productElement);
    });
}


let slideIndex = 0;
const slides = document.querySelectorAll('.slides img');
const totalSlides = slides.length;

function showSlide(index) {
    if (index < 0) {
        slideIndex = totalSlides - 1;
    } else if (index >= totalSlides) {
        slideIndex = 0;
    }

    // Hide all slides
    slides.forEach(slide => slide.style.display = 'flex');

    // Display the current slide
    slides[slideIndex].style.display = 'flex';
}

function changeSlide(direction) {
    slideIndex += direction;
    showSlide(slideIndex);
}

// Automatically advance slides every 5 seconds
setInterval(() => {
    changeSlide(1);
}, 5000);

// Show the first slide initially
showSlide(slideIndex);


document.getElementById('feedbackForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting

    // Get form values
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;

    // Display confirmation message
    let confirmationDiv = document.getElementById('confirmation');
    confirmationDiv.style.display = 'block';

    // Optionally, you can clear the form fields after submission
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('message').value = '';

    // You can also add additional logic here to actually send the feedback (e.g., via AJAX or form submission to a backend)

    // For demonstration purposes, let's log the values to console
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);
});
