const { useEffect, useMemo, useState } = React;

function Icon({ name, size = 20, fill = "none" }) {
  return <i data-lucide={name} data-size={size} data-fill={fill} aria-hidden="true" />;
}

const WHATSAPP_NUMBER = "917906734034";

const rooms = [
  {
    id: "cabin",
    name: "Cabin",
    short: "A warm wooden cabin with loft-style sleeping and valley views.",
    image: "/images/cabin-bedroom.jpeg",
    description:
      "A cozy wooden cabin with a loft bed, lounge seating, balcony access, warm lighting, and beautiful night views from the room.",
    occupants: "5 adults",
    amenities: ["Loft bed", "Sofa seating", "Balcony", "Valley view", "Wi-Fi", "Attached bath"]
  },
  {
    id: "family-suite",
    name: "Family Suite",
    short: "A larger stay with room for everyone to settle in.",
    image:
      "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1400&q=85",
    description:
      "Designed for families who need extra sleeping space, storage, and a relaxed living corner for slower mornings.",
    occupants: "4 adults",
    amenities: ["King bed", "Sofa bed", "Attached bath", "Wardrobe"]
  },
  {
    id: "balcony-premium",
    name: "Balcony Premium",
    short: "Private balcony, fresh air, and peaceful evening views.",
    image:
      "https://images.unsplash.com/photo-1609949279531-cf48d64bed89?auto=format&fit=crop&w=1400&q=85",
    description:
      "A premium category for guests who enjoy their own outdoor corner for chai, reading, and quiet sunset time.",
    occupants: "2 adults",
    amenities: ["Private balcony", "King bed", "Mountain view", "Wi-Fi", "Hot water"]
  },
  {
    id: "twin-comfort",
    name: "Twin Comfort Room",
    short: "Flexible twin beds for friends, colleagues, or siblings.",
    image:
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1400&q=85",
    description:
      "A practical and polished room category with separate beds and all the essentials for an easy stay.",
    occupants: "2 adults",
    amenities: ["Twin beds", "Study table", "Attached bath", "Wi-Fi", "Room service"]
  },
  {
    id: "studio-kitchenette",
    name: "Studio With Kitchenette",
    short: "A self-contained room for longer, calmer stays.",
    image:
      "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1400&q=85",
    description:
      "Perfect for guests who prefer a little independence, with a compact kitchenette and a comfortable sleeping area.",
    occupants: "2 adults + 1 child",
    amenities: ["Kitchenette", "Queen bed", "Dining nook", "Mini fridge", "Wi-Fi"]
  },
  {
    id: "terrace-view",
    name: "Terrace View Room",
    short: "Open-sky access and a breezy terrace feel.",
    image:
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1400&q=85",
    description:
      "A favorite for guests who want quick access to the terrace and an airy room with plenty of natural light.",
    occupants: "3 adults",
    amenities: ["Terrace access", "Queen bed", "Extra mattress",  "Wi-Fi"]
  },

];

const gallery = [
  "/images/cabin-loft-bed.jpeg",
  "/images/cabin-bedroom.jpeg",
  "/images/cabin-balcony-night.jpeg",
  "/images/cabin-stairs.jpeg",
  "/images/cabin-sofa.jpeg",
  "/images/cabin-wood-hall.jpeg",
  "/images/Banner.jpeg",
];

const stayHighlights = [
  { icon: "sparkles", label: "Boutique rooms" },
  { icon: "shield-check", label: "Safe family stay" },
  { icon: "wifi", label: "Fast Wi-Fi" },
  { icon: "circle-parking", label: "Parking available" }
];

const commonAmenities = [
  { icon: "wifi", label: "Wi-Fi" },
  { icon: "coffee", label: "Tea & coffee" },
  { icon: "utensils", label: "Meals on request" },
  { icon: "waves", label: "Hot water" },

  { icon: "circle-parking", label: "Parking" }
];

function App() {
  const [selectedRoomId, setSelectedRoomId] = useState(rooms[0].id);
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState(2);

  const selectedRoom = useMemo(
    () => rooms.find((room) => room.id === selectedRoomId) ?? rooms[0],
    [selectedRoomId]
  );

  useEffect(() => {
    lucide.createIcons({
      attrs: {
        "stroke-width": 2.2
      }
    });
  });

  const whatsappLink = useMemo(() => {
    const message = [
      "Hello Leela Stays, I would like to enquire about a room booking.",
      `Room: ${selectedRoom.name}`,
      `Dates: ${checkIn || "Check-in not selected"} to ${checkOut || "Check-out not selected"}`,
      `Guests: ${guests}`,
      `Possible occupants: ${selectedRoom.occupants}`
    ].join("\n");

    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  }, [checkIn, checkOut, guests, selectedRoom]);

  return (
    <main>
      <section className="hero" aria-label="Leela Stays homestay">
        <div className="hero__backdrop" />
        <nav className="nav" aria-label="Main navigation">
          <a className="brand" href="#top" aria-label="Leela Stays home">
            <img className="brand__logo" src="/images/leela-logo.jpeg" alt="" />
            <span>Leela Stays</span>
          </a>
          <div className="nav__links">
            <a href="#gallery">Photos</a>
            <a href="#rooms">Rooms</a>
            <a href="#enquire">Enquire</a>
          </div>
        </nav>

        <div className="hero__content" id="top">
          <div className="hero__copy">
            <span className="eyebrow">
              <Icon name="map-pin" size={16} />
              Peaceful private homestay
            </span>
            <h1>Leela Stays</h1>
            <p>
              A modern homestay made for easy family holidays, workations, and quiet weekend
              escapes. Browse photos, choose your room, and enquire directly on WhatsApp.
            </p>
            <div className="hero__actions">
              <a className="button button--primary" href="#rooms">
                Select a room
                <Icon name="chevron-right" size={18} />
              </a>
              <a className="button button--ghost" href="#gallery">
                <Icon name="image" size={18} />
                View photos
              </a>
            </div>
          </div>

          <div className="booking-panel" id="enquire" aria-label="Quick enquiry">
            <div>
              <span className="panel-label">Quick enquiry</span>
              <h2>Plan your stay</h2>
            </div>
            <label>
              <span>Check-in</span>
              <input type="date" value={checkIn} onChange={(event) => setCheckIn(event.target.value)} />
            </label>
            <label>
              <span>Check-out</span>
              <input type="date" value={checkOut} onChange={(event) => setCheckOut(event.target.value)} />
            </label>
            <label>
              <span>Guests</span>
              <input
                min="1"
                max="12"
                type="number"
                value={guests}
                onChange={(event) => setGuests(event.target.value)}
              />
            </label>
            <a className="button button--whatsapp" href={whatsappLink} target="_blank" rel="noreferrer">
              <Icon name="message-circle" size={18} />
              Book & enquire
            </a>
          </div>
        </div>

        <div className="hero__stats" aria-label="Stay highlights">
          {stayHighlights.map(({ icon, label }) => (
            <div className="stat" key={label}>
              <Icon name={icon} size={20} />
              <span>{label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section section--intro">
        <div>
          <span className="section-kicker">A warm, polished stay</span>
          <h2>Comfortable rooms, homely service, and spaces that feel easy from the first minute.</h2>
        </div>
        <p>
          Leela Stays is arranged for travellers who want the privacy of a hotel with the warmth of a
          home. Every category includes clean bedding, attached washrooms, thoughtful basics, and
          friendly help with local recommendations.
        </p>
      </section>

      <section className="gallery-section" id="gallery" aria-label="Photo gallery">
        <div className="section-heading">
          <span className="section-kicker">Photos</span>
            <h2>See the Cabin before you book</h2>
        </div>
        <div className="gallery">
          {gallery.map((photo, index) => (
            <img key={photo} src={photo} alt={`Leela Stays gallery view ${index + 1}`} />
          ))}
        </div>
      </section>

      <section className="rooms-section" id="rooms">
        <div className="section-heading">
          <span className="section-kicker">Room selection</span>
          <h2>Choose from seven room categories</h2>
        </div>

        <div className="rooms-layout">
          <div className="room-tabs" role="tablist" aria-label="Room categories">
            {rooms.map((room) => (
              <button
                className={room.id === selectedRoom.id ? "room-tab room-tab--active" : "room-tab"}
                key={room.id}
                onClick={() => setSelectedRoomId(room.id)}
                role="tab"
                aria-selected={room.id === selectedRoom.id}
              >
                <span>{room.name}</span>
                <small>{room.short}</small>
              </button>
            ))}
          </div>

          <article className="room-detail">
            <div className="room-banner">
              <img src={selectedRoom.image} alt={selectedRoom.name} />
              <div className="room-banner__label">
                <Icon name="bed-double" size={18} />
                {selectedRoom.name}
              </div>
            </div>

            <div className="room-detail__body">
              <div>
                <span className="section-kicker">Selected room</span>
                <h3>{selectedRoom.name}</h3>
                <p>{selectedRoom.description}</p>
              </div>

              <div className="room-meta">
                <div>
                  <Icon name="users" size={20} />
                  <span>Possible occupants</span>
                  <strong>{selectedRoom.occupants}</strong>
                </div>
                <div>
                  <Icon name="calendar-days" size={20} />
                  <span>Dates selected</span>
                  <strong>{checkIn && checkOut ? `${checkIn} to ${checkOut}` : "Choose above"}</strong>
                </div>
              </div>

              <div className="amenities">
                <h4>Amenities provided</h4>
                <div>
                  {selectedRoom.amenities.map((amenity) => (
                    <span key={amenity}>{amenity}</span>
                  ))}
                </div>
              </div>

              <a className="button button--primary room-cta" href={whatsappLink} target="_blank" rel="noreferrer">
                <Icon name="message-circle" size={18} />
                Book & enquire on WhatsApp
              </a>
            </div>
          </article>
        </div>
      </section>

      <section className="amenity-section" aria-label="Common amenities">
        <div className="section-heading">
          <span className="section-kicker">Included comforts</span>
          <h2>Everything guests usually ask for, already thought through.</h2>
        </div>
        <div className="amenity-grid">
          {commonAmenities.map(({ icon, label }) => (
            <div key={label} className="amenity-card">
              <Icon name={icon} size={22} />
              <span>{label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="closing">
        <Icon name="mountain" size={30} />
        <div>
          <span className="section-kicker">Ready when you are</span>
          <h2>Send your room choice and travel dates straight to Leela Stays.</h2>
        </div>
        <a className="button button--whatsapp" href={whatsappLink} target="_blank" rel="noreferrer">
          <Icon name="message-circle" size={18} />
          Enquire now
        </a>
      </section>

      <footer>
        <span>Leela Stays</span>
        <span>Photos and room details can be replaced from the React data file.</span>
        <span className="stars" aria-label="Five star rating">
          <Icon name="star" size={16} fill="currentColor" />
          <Icon name="star" size={16} fill="currentColor" />
          <Icon name="star" size={16} fill="currentColor" />
          <Icon name="star" size={16} fill="currentColor" />
          <Icon name="star" size={16} fill="currentColor" />
        </span>
      </footer>
    </main>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
