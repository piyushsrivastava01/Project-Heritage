document.addEventListener('DOMContentLoaded', function() {
    // Destinations Data
    const destinations = [
        {
            id: 'taj-mahal',
            title: 'Taj Mahal',
            location: 'Agra, Uttar Pradesh',
            description: 'The Taj Mahal is an ivory-white marble mausoleum on the right bank of the Yamuna river in Agra. It was commissioned in 1632 by the Mughal emperor Shah Jahan to house the tomb of his favorite wife, Mumtaz Mahal.',
            image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
            price: '₹4000'
        },
        {
            id: 'red-fort',
            title: 'Red Fort',
            location: 'Delhi',
            description: 'The Red Fort is a historic fort in the city of Delhi in India that served as the main residence of the Mughal Emperors. Emperor Shah Jahan commissioned construction of the Red Fort on 12 May 1638, when he decided to shift his capital from Agra to Delhi.',
            image: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
            price: '₹5000'
        },
        {
            id: 'hampi',
            title: 'Hampi',
            location: 'Karnataka',
            description: 'Hampi is an ancient village in the south Indian state of Karnataka. It\'s dotted with numerous ruined temple complexes from the Vijayanagara Empire. On the south bank of the River Tungabhadra is the 7th-century Hindu Virupaksha Temple, near the revived Hampi Bazaar.',
            image: 'https://karnatakatourism.org/wp-content/uploads/2020/05/Hampi.jpg',
            price: '₹8000'
        },
        {
            id: 'khajuraho',
            title: 'Khajuraho Temples',
            location: 'Madhya Pradesh',
            description: 'The Khajuraho Group of Monuments are a group of Hindu and Jain temples in Chhatarpur district, Madhya Pradesh, India. They are a UNESCO World Heritage Site. The temples are famous for their nagara-style architectural symbolism and their erotic sculptures.',
            image: 'https://static.toiimg.com/photo/64665528.cms',
            price: '₹8000'
        },
        {
            id: 'ajanta-ellora',
            title: 'Ajanta & Ellora Caves',
            location: 'Maharashtra',
            description: 'The Ajanta Caves are approximately 30 rock-cut Buddhist cave monuments which date from the 2nd century BCE to about 480 CE. The Ellora Caves are a multi-religious rock-cut cave complex with artwork dating from the period 600-1000 CE.',
            image: 'https://indiaforbeginners.com/wp-content/uploads/2020/04/India-for-Beginners-custom-tours-5.jpg',
            price: '₹12000'
        },
        {
            id: 'qutub-minar',
            title: 'Qutub Minar',
            location: 'Delhi',
            description: 'The Qutub Minar is a minaret that forms part of the Qutb complex, a UNESCO World Heritage Site in the Mehrauli area of Delhi. It is one of the most visited tourist spots in the city, mostly built between 1199 and 1220.',
            image: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
            price: '₹6000'
        },
        {
            id: 'Sun Temple',
            title: 'Sun Temple',
            location: 'Konark',
            description: 'This Hindu temple was built in the 13th century and is one of the finest examples of Kalinga architecture. It represents the chariot of the solar deity Surya: on the outer sides, it has 24 wheels carved of stone and richly decorated, being pulled by six horses. Other decorative motifs include lions, musicians, dancers, and erotic scenes.',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Konarka_Temple.jpg/1280px-Konarka_Temple.jpg',
            price: '₹10000'
        },
        {
            id: 'Manas National Park',
            title: 'Manas National Park',
            location: 'Assam',
            description: 'Kaziranga is located in the floodplains of the Brahmaputra River. It is one of the best wildlife sanctuaries in the world, home to the world s largest population of the Indian rhinoceros (pictured), as well as tigers, Asian elephants, wild water buffalo, and the Ganges river dolphin. The wetlands are important for migratory bird species',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Beauty_of_Kaziranga_National_Park.jpg/1280px-Beauty_of_Kaziranga_National_Park.jpg',
            price: '₹11000'
        },
        {
            id: 'Fatehpur Sikri',
            title: 'Fatehpur Sikri',
            location: 'Uttar-Pradesh',
            description: 'For about a decade in the second half of the 16th century, Fatehpur Sikri was the capital of the Mughal Empire under Emperor Akbar, until the capital was moved to Lahore in 1585 and the city was mostly abandoned. The site comprises a large collection of monuments and temples in the Mughal style, such as the Jama Masjid (the gate to the mosque, the Buland Darwaza, pictured), the Panch Mahal palace, and the Tomb of Salim Chishti.',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Fatehput_Sikiri_Buland_Darwaza_gate_2010.jpg/1024px-Fatehput_Sikiri_Buland_Darwaza_gate_2010.jpg',
            price: '₹5500'
        },
        {
            id: 'Sundarbans National Park',
            title: 'Sundarbans National Park',
            location: 'West-Bangal',
            description: 'The national park covers the Indian part of the Sundarbans, the delta of the Ganges and Brahmaputra rivers. It is the world s largest and richest mangrove forest, with about 78 recorded mangrove species. It is a biodiversity hotspot, home to a large population of Bengal tigers (one pictured), as well as an important habitat for the Irrawaddy dolphin and Ganges river dolphin, several species of birds and sea turtles. In Bangladesh, the Sundarbans is listed as a separate World Heritage Site.',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Sundarban_Tiger.jpg/1280px-Sundarban_Tiger.jpg',
            price: '₹12000'
        },
        {
            id: 'Buddhist Monuments',
            title: 'Buddhist Monuments',
            location: 'Sanchi MP',
            description: 'Sanchi is one of the oldest extant Buddhist sanctuaries and was instrumental in the spread of the religion through the Indian subcontinent. It became important under Emperor Ashoka of the Maurya Empire in the 3rd century BCE. The remains of a pillar from the period are preserved. Stupas (Stupa 1 pictured), palaces, temples, and monasteries are preserved in different states of conservation, mostly dating to the 2nd and 1st centuries BCE. The city declined in importance in the 12th century.',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Sanchi1_N-MP-220.jpg/1280px-Sanchi1_N-MP-220.jpg',
            price: '₹15000'
        },
        {
            id: 'Western Ghats',
            title: 'Western Ghats',
            location: 'Maharastra',
            description: 'The Western Ghats is a mountain range that runs along the western coast of the Indian subcontinent. It is covered with montane forests. The area is a biodiversity hotspot and home to endangered species such as the Bengal tiger, lion-tailed macaque, Nilgiri tahr, and Nilgiri langur. In terms of evolutionary history, the area is important given the breakup of Gondwana in the early Jurassic period, after which India was an isolated landmass until its collision with the Eurasian Plate. The World Heritage Site comprises 39 individual properties.',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Pampadumshola.jpg/1280px-Pampadumshola.jpg',
            price: '₹20000'
        },
        {
            id: 'Great Himalayan National Park',
            title: 'Great Himalayan National Park',
            location: 'Himachal Pradesh',
            description: 'The national park covers habitats from alpine peaks of the Himalayas above 6,000 m (20,000 ft) to alpine meadows and riverine forests below 2,000 m (6,600 ft). In total, there are 25 types of forests recorded, and they have rich floral and faunal assemblies, including numerous species of birds, mammals, reptiles, and insects. It is home to endangered species such as the western tragopan and musk deer.',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Himalayn_National_Park_01.jpg/1920px-Himalayn_National_Park_01.jpg',
            price: '₹15000'
        },
        {
            id: ' Nalanda Mahavihara',
            title: ' Nalanda Mahavihara',
            location: 'Bihar',
            description: 'Nalanda Mahavihara was a Buddhist ancient higher-learning institution established in the 5th century and lasting until its sacking in the 13th century. However, some archaeological remains also date back to the 3rd century BCE. The remains include shrines and stupas, viharas (residential and educational buildings), and artworks in different materials. Both the architectural solutions and educational approaches were influential in other similar institutions in the broader region.',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Temple_No.-_3%2C_Nalanda_Archaeological_Site.jpg/1280px-Temple_No.-_3%2C_Nalanda_Archaeological_Site.jpg',
            price: '₹22000'
        },
        {
            id: 'Jaipur City,',
            title: 'Jaipur City,',
            location: 'Rajsthan',
            description: 'Jaipur was founded by the Rajput ruler Jai Singh II in 1727. The city was built with a grid plan, inspired by ancient Hindu and Western ideals, in a departure from the medieval architecture of the region. It was a strong trade centre and home to craftsmen and artists. Important buildings and sites include the Hawa Mahal palace (pictured), Govind Dev Ji Temple, City Palace, and Jantar Mantar, which is listed as a separate World Heritage Site.',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/20191218_Pa%C5%82ac_Wiatr%C3%B3w_w_Jaipurze_1129_9124.jpg/1280px-20191218_Pa%C5%82ac_Wiatr%C3%B3w_w_Jaipurze_1129_9124.jpg',
            price: '₹15000'
        },
        {
            id: 'Sacred Ensembles Hoysalas',
            title: 'Sacred Ensembles Hoysalas',
            location: 'Karnatka',
            description: 'Three Hoysala temples - the Chennakeshava Temple in Belur, the Hoysaleswara Temple in Halebidu and the Keshava temple (pictured) in Somanathapura, dating between the 12th and 14th centuries. Hoysala architecture combined the elements of Dravidian architecture with influences from northern India. The temples were built by the followers of Vaishnavism and Shaivism and they are richly decorated with stone sculptures and carvings. The Chennakeshava Temple in Belur is still an important pilgrimage site.',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Le_temple_de_Chennakesava_%28Somanathapura%2C_Inde%29_%2814465165685%29.jpg/1280px-Le_temple_de_Chennakesava_%28Somanathapura%2C_Inde%29_%2814465165685%29.jpg',
            price: '₹17000'
        },
        {
            id: 'Sri Harimandir Sahib',
            title: 'Sri Harimandir Sahib',
            location: 'Panjab',
            description: 'Sri Harimandir Sahib, also known as the Golden Temple, is the spiritual centre of Sikhism. The temple complex was rebuilt several times. The architectural layout of the complex reflects the spiritual concepts of the religion. The main temple building is richly decorated with floral patterns, either painted or as marble inlay.',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Amritsar_Golden_Temple_3.JPG/1280px-Amritsar_Golden_Temple_3.JPG',
            price: '₹18000'
        },
        {
            id: 'Namdapha National Park',
            title: 'Namdapha National Park',
            location: 'Aruranchal Pradesh',
            description: 'The national park covers an extensive wilderness area mostly covered in forests and sparsely explored. It is located in the Eastern Himalayas. The highest peak is Dapha Bum, at 4,571 m (14,997 ft).',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Forest_snow_Namdapha_IMG_3373_04.jpg/1280px-Forest_snow_Namdapha_IMG_3373_04.jpg',
            price: '₹15000'
        }
       
    ];

    // DOM Elements
    const destinationGrid = document.getElementById('destinationGrid');
    const bookingModal = document.getElementById('bookingModal');
    const authModal = document.getElementById('authModal');
    const confirmationModal = document.getElementById('confirmationModal');
    const loginBtn = document.getElementById('loginBtn');
    const signupBtn = document.getElementById('signupBtn');
    const closeButtons = document.querySelectorAll('.close-btn');
    const tabButtons = document.querySelectorAll('.tab-btn');
    const authForms = document.querySelectorAll('.auth-form');
    const bookingForm = document.getElementById('bookingForm');
    const searchForm = document.getElementById('searchForm');
    const newsletterForm = document.getElementById('newsletterForm');
    const closeConfirmation = document.getElementById('closeConfirmation');

    // Current booking details
    let currentBooking = {};

    // Load destinations
    function loadDestinations(filter = '') {
        destinationGrid.innerHTML = '';
        
        const filteredDestinations = filter ? 
            destinations.filter(dest => dest.id === filter) : 
            destinations;
        
        filteredDestinations.forEach(destination => {
            const card = document.createElement('div');
            card.className = 'destination-card';
            card.innerHTML = `
                <div class="destination-img">
                    <img src="${destination.image}" alt="${destination.title}">
                </div>
                <div class="destination-info">
                    <h3>${destination.title}</h3>
                    <div class="location">
                        <i class="fas fa-map-marker-alt"></i>
                        <span>${destination.location}</span>
                    </div>
                    <p>${destination.description}</p>
                    <div class="destination-meta">
                        <div class="price">From ${destination.price}</div>
                        <button class="book-now" data-id="${destination.id}">Book Now</button>
                    </div>
                </div>
            `;
            destinationGrid.appendChild(card);
        });

        // Add event listeners to book now buttons
        document.querySelectorAll('.book-now').forEach(button => {
            button.addEventListener('click', function() {
                const destId = this.getAttribute('data-id');
                openBookingModal(destId);
            });
        });
    }

    // Open booking modal
    function openBookingModal(destId) {
        const destination = destinations.find(dest => dest.id === destId);
        if (!destination) return;

        document.getElementById('modalTitle').textContent = `Book Tour to ${destination.title}`;
        document.getElementById('tourId').value = destId;
        currentBooking = {
            destination: destination.title,
            price: destination.price
        };

        bookingModal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }

    // Open auth modal
    function openAuthModal(tab = 'login') {
        authModal.style.display = 'block';
        document.body.style.overflow = 'hidden';
        switchTab(tab);
    }

    // Switch between login/signup tabs
    function switchTab(tab) {
        tabButtons.forEach(btn => {
            if (btn.dataset.tab === tab) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });

        authForms.forEach(form => {
            if (form.id === `${tab}Form`) {
                form.style.display = 'block';
            } else {
                form.style.display = 'none';
            }
        });
    }

    // Close modal
    function closeModal(modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }

    // Handle booking form submission
    bookingForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const formData = new FormData(this);
        const bookingDetails = {
            name: formData.get('name'),
            email: formData.get('email'),
            phone: formData.get('phone'),
            date: formData.get('booking-date'),
            participants: formData.get('participants'),
            package: formData.get('package'),
            destination: currentBooking.destination,
            price: currentBooking.price
        };

        // Show confirmation
        showConfirmation(bookingDetails);
        closeModal(bookingModal);
        this.reset();
    });

    // Show confirmation
    function showConfirmation(details) {
        const confirmationDetails = document.getElementById('confirmationDetails');
        confirmationDetails.innerHTML = `
            <p>Thank you, <strong>${details.name}</strong>!</p>
            <p>Your booking for <strong>${details.destination}</strong> on <strong>${details.date}</strong> has been confirmed.</p>
            <p>Package: <strong>${details.package}</strong></p>
            <p>Participants: <strong>${details.participants}</strong></p>
            <p>Total Price: <strong>${details.price}</strong></p>
            <p>A confirmation has been sent to <strong>${details.email}</strong>.</p>
        `;
        
        confirmationModal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }

    // Handle search form
    searchForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const destination = document.getElementById('destination').value;
        loadDestinations(destination);
    });

        // Handle newsletter form submission
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = this.querySelector('input').value;
            alert(`Thank you for subscribing with ${email}! You'll receive our latest offers and updates.`);
            this.reset();
        });
    
        // Event listeners for login/signup buttons
        loginBtn.addEventListener('click', () => openAuthModal('login'));
        signupBtn.addEventListener('click', () => openAuthModal('signup'));
    
        // Event listeners for tab buttons
        tabButtons.forEach(button => {
            button.addEventListener('click', function() {
                const tab = this.dataset.tab;
                switchTab(tab);
            });
        });
    
        // Event listeners for close buttons
        closeButtons.forEach(button => {
            button.addEventListener('click', function() {
                const modal = this.closest('.modal');
                closeModal(modal);
            });
        });
    
        // Close confirmation modal
        closeConfirmation.addEventListener('click', function() {
            closeModal(confirmationModal);
        });
    
        // Close modal when clicking outside
        window.addEventListener('click', function(e) {
            if (e.target.classList.contains('modal')) {
                closeModal(e.target);
            }
        });
    
        // Simple form validation for auth forms
        document.getElementById('loginForm').addEventListener('submit', function(e) {
            e.preventDefault();
            const email = this.querySelector('#login-email').value;
            const password = this.querySelector('#login-password').value;
            
            if (!email || !password) {
                alert('Please fill in all fields');
                return;
            }
            
            // In a real app, you would send this to a server
            alert('Login successful!');
            closeModal(authModal);
            this.reset();
        });
    
        document.getElementById('signupForm').addEventListener('submit', function(e) {
            e.preventDefault();
            const name = this.querySelector('#signup-name').value;
            const email = this.querySelector('#signup-email').value;
            const password = this.querySelector('#signup-password').value;
            const confirm = this.querySelector('#signup-confirm').value;
            
            if (!name || !email || !password || !confirm) {
                alert('Please fill in all fields');
                return;
            }
            
            if (password !== confirm) {
                alert('Passwords do not match');
                return;
            }
            
            // In a real app, you would send this to a server
            alert('Account created successfully! Please login.');
            switchTab('login');
            this.reset();
        });
    
        // Initialize the page
        loadDestinations();
    });