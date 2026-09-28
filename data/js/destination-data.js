// Destination Data for Uganda
window.destinationData = {
    "queen-elizabeth-national-park": {
        "title": "Queen Elizabeth National Park",
        "category": "National Parks & Wildlife Reserves",
        "tags": ["National Park", "Tree-climbing Lions", "Kazinga Channel"],
        "short_description": "Home to tree-climbing lions, elephants, hippos, and over 600 bird species along the Kazinga Channel connecting Lakes Edward and George.",
        "full_description": `
            <h2>About Queen Elizabeth National Park</h2>
            <p>Queen Elizabeth National Park (QENP) is Uganda's most popular savanna park and a UNESCO-designated Biosphere Reserve for humanity. Located in western Uganda, the park includes the Maramagambo Forest, Kyambura Gorge, Kazinga Channel, and the crater lakes region.</p>
            
            <h3>Key Highlights:</h3>
            <ul>
                <li><strong>Tree-climbing lions</strong> in the Ishasha sector</li>
                <li><strong>Kazinga Channel boat cruise</strong> with hippos, crocodiles, and birds</li>
                <li><strong>Kyambura Gorge chimpanzee tracking</strong></li>
                <li><strong>Over 600 bird species</strong> including the shoebill stork</li>
                <li><strong>Crater lakes</strong> with stunning scenery</li>
            </ul>
            
            <h3>Activities Available:</h3>
            <ul>
                <li>Game drives (morning, afternoon, night)</li>
                <li>Boat cruise on Kazinga Channel</li>
                <li>Chimpanzee tracking in Kyambura Gorge</li>
                <li>Bird watching</li>
                <li>Nature walks</li>
                <li>Cultural encounters</li>
            </ul>
        `,
        "location": "Western Uganda, spanning Kasese, Kamwenge, Rubirizi, and Rukungiri districts",
        "size": "1,978 sq km",
        "best_time": "January-February and June-July (Dry seasons)",
        "activities": ["Game drives", "Boat cruise", "Chimpanzee tracking", "Bird watching", "Nature walks"],
        "wildlife": ["Lions", "Elephants", "Buffalos", "Hippos", "Crocodiles", "600+ bird species"],
        "image": "https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
        "tours": [
            {
                "name": "2-Day Queen Elizabeth Safari",
                "duration": "2 days / 1 night",
                "price": "From $450 per person",
                "includes": ["Accommodation", "All meals", "Game drives", "Boat cruise", "Park fees", "Guide"]
            },
            {
                "name": "3-Day Queen Elizabeth & Kibale",
                "duration": "3 days / 2 nights",
                "price": "From $750 per person",
                "includes": ["Accommodation", "All meals", "Game drives", "Boat cruise", "Chimpanzee tracking", "Park fees"]
            }
        ]
    },
    
    "murchison-falls-national-park": {
        "title": "Murchison Falls National Park",
        "category": "National Parks & Wildlife Reserves",
        "tags": ["National Park", "Nile River", "Big Five"],
        "short_description": "Uganda's largest national park where the Nile River forces through a 7-meter gap creating the powerful Murchison Falls, home to abundant wildlife.",
        "full_description": `
            <h2>About Murchison Falls National Park</h2>
            <p>Murchison Falls National Park is Uganda's largest protected area at 3,840 sq km. The park is bisected by the Victoria Nile, which plunges 45 meters over the remnant rift valley wall, creating the dramatic Murchison Falls, the centerpiece of the park.</p>
            
            <h3>Key Highlights:</h3>
            <ul>
                <li><strong>Murchison Falls</strong> - World's most powerful waterfall</li>
                <li><strong>Victoria Nile boat cruise</strong> to the base of the falls</li>
                <li><strong>Big Five viewing</strong> (except rhinos)</li>
                <li><strong>Budongo Forest chimpanzee tracking</strong></li>
                <li><strong>Bird watching</strong> with 450+ species including the rare shoebill</li>
            </ul>
        `,
        "location": "Northwestern Uganda, Masindi District",
        "size": "3,840 sq km",
        "best_time": "December-February (Dry season)",
        "activities": ["Game drives", "Boat cruise", "Chimpanzee tracking", "Hiking", "Bird watching"],
        "wildlife": ["Lions", "Elephants", "Buffalos", "Leopards", "Giraffes", "Hippos"],
        "image": "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
        "tours": [
            {
                "name": "3-Day Murchison Falls Safari",
                "duration": "3 days / 2 nights",
                "price": "From $650 per person",
                "includes": ["Accommodation", "All meals", "Game drives", "Boat cruise", "Park fees"]
            }
        ]
    },
    
    "kidepo-valley-national-park": {
        "title": "Kidepo Valley National Park",
        "category": "National Parks & Wildlife Reserves",
        "tags": ["National Park", "Remote", "Wilderness"],
        "short_description": "Remote wilderness in northeastern Uganda with stunning landscapes, cheetahs, ostriches, and authentic Karamojong culture. One of Africa's most spectacular parks.",
        "full_description": `
            <h2>About Kidepo Valley National Park</h2>
            <p>Kidepo Valley National Park is one of Africa's most spectacular wilderness areas. Located in the remote Karamoja region, it offers truly wild safari experiences with fewer tourists and abundant wildlife.</p>
            
            <h3>Key Highlights:</h3>
            <ul>
                <li><strong>Cheetah sightings</strong> - only park in Uganda with cheetahs</li>
                <li><strong>Karamojong cultural experiences</strong></li>
                <li><strong>Stunning Narus Valley scenery</strong></li>
                <li><strong>Excellent bird watching</strong> with 475+ species</li>
                <li><strong>Authentic wilderness experience</strong></li>
            </ul>
        `,
        "location": "Northeastern Uganda, Kaabong District",
        "size": "1,442 sq km",
        "best_time": "November-March",
        "activities": ["Game drives", "Bird watching", "Cultural visits", "Hiking", "Nature walks"],
        "wildlife": ["Lions", "Elephants", "Cheetahs", "Zebras", "Ostriches", "Giraffes"],
        "image": "https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80"
    }
    
    // Add ALL your other destinations here following the same format
    // For now, I'll add a few more examples:
    
    // ... (Add all 56+ destinations from your Uganda.html)
};

// Optional: Load from JSON file if you prefer
async function loadDestinationData() {
    try {
        const response = await fetch('data/uganda-destinations.json');
        const data = await response.json();
        // Convert array to object keyed by slug
        const destinationsObj = {};
        data.destinations.forEach(dest => {
            destinationsObj[dest.slug] = dest;
        });
        window.destinationData = destinationsObj;
    } catch (error) {
        console.log('Using hardcoded destination data');
    }
}

// Load data on page load
document.addEventListener('DOMContentLoaded', loadDestinationData);