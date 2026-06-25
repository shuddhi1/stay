const WHATSAPP_NUMBER = "917906734034";
const GOOGLE_REVIEWS_URL =
  "https://www.google.com/search?gs_ssp=eJzj4tVP1zc0LI_PK0k3MTY0YLRSNagwtjSwSDE0MDAwTjUyNzAxtTKoMDJKSk41MzZOMTcxtUwyTfUSzUlNzUlUKC5JrCxWyC0tLs7PL8pMBQAo4BbC&q=leela+stays+mussoorie&rlz=1C1CHBF_enIN1041IN1042&oq=l&gs_lcrp=EgZjaHJvbWUqFQgBEC4YJxivARjHARiABBiKBRiOBTIGCAAQRRg5MhUIARAuGCcYrwEYxwEYgAQYigUYjgUyBggCEEUYPDIGCAMQRRg8MgYIBBBFGDwyBggFEEUYPDIGCAYQRRg9MgYIBxBFGDzSAQgxNjcyajBqN6gCCLACAfEFEgKM40NJzy_xBRICjONDSc8v&sourceid=chrome&ie=UTF-8#mpd=~8721747575385288145/customers/reviews";

const rooms = [
  {
    id: "cabin",
    name: "Cabin",
    short: "A warm wooden cabin with loft-style sleeping and valley views.",
    image: ["/images/cabin-bedroom.jpeg","/images/cabin/sofa.jpeg","/images/cabin-balcony-night.jpeg"],
    description:
      "A cozy wooden cabin with a loft bed, lounge seating, balcony access, warm lighting, and beautiful night views from the room.",
    occupants: "5 adults",
    amenities: ["Loft bed", "Sofa seating", "Balcony", "Valley view", "Wi-Fi", "Attached bath"]
  },
  {
    id: "deluxe-suite",
    name: "Deluxe Suite",
    short: "A larger stay with room for everyone to settle in.",
    image:
      "/images/Deluxe-suite.jpeg",
    description:
      "Designed for people who need extra  space, storage, and a relaxed living corner for slower mornings.",
    occupants: "2+1 adults",
    amenities: ["King bed", "Attached bath", "Dedicated Work bench", "Wi-Fi", "Hot water" , "Floor Seating"]
  },
  {
    id: "balcony-premium",
    name: "Balcony Premium",
    short: "Private balcony, fresh air, and peaceful evening views.",
    image:
      "/images/balcony.jpeg",
    description:
      "A premium category for guests who enjoy their own outdoor corner for chai, reading, and quiet sunset time.",
    occupants: "2 adults",
    amenities: ["Private balcony", "King bed", "Mountain view", "Wi-Fi", "Hot water"]
  },
  {
    id: "comfort-room",
    name: "Comfort Room",
    short: "Flexible twin beds for friends, colleagues, or siblings.",
    image:
      "/images/cozy.jpeg",
    description:
      "A practical and polished room category with separate beds and all the essentials for an easy stay.",
    occupants: "2 adults",
    amenities: ["Twin beds", "Attached bath", "Wi-Fi", "Room service"]
  },
  {
    id: "Dormatory",
    name: "Dormatory",
    short: "A shared space for budget travelers.",
    image:
      "/images/dorm.jpeg",
    description:
      "Perfect for guests who prefer a little independence, with a compact kitchenette and a comfortable sleeping area.",
    occupants: "4 adults ",
    amenities: [ "Single beds", "Dining nook", "Wi-Fi"]
  },
  {
    id: "lawn-view",
    name: "Lawn View Room",
    short: "Open-sky access and a breezy lawn feel.",
    image:
        "/images/lawn-room.jpeg",
    description:
      "A favorite for guests who want quick access to the lawn and an airy room with plenty of natural light.",
    occupants: "2 adults",
    amenities: ["Lawn access", "Queen bed", "Wi-Fi"]
  },
 
];

const gallery = [
  
  "/images/cabin-loft-bed.jpeg",
"/images/cabin-stairs.jpeg",
  "/images/cabin-balcony-night.jpeg",
  "/images/Banner.jpeg",
 "/images/cabin-sofa.jpeg",
  "/images/cabin-wood-hall.jpeg",
  "/images/balcony.jpeg",
"/images/lawn-room.jpeg",
  "/images/lawn-bathroom.jpeg",
  "/images/lawn-window.jpeg",
  "/images/stay-view.jpeg",
  "/images/dorm-bathroom.jpeg",
  "/images/balcony-bathroom.jpeg",
  "/images/cabin-bathroom.jpeg",
   "/images/Balcony-balcony.png",
   "/images/open-area.png"

];

const reviews = [
  {
    name: "Google guest",
    stay: "Cabin stay",
    rating: 5,
    text: "Beautiful wooden interiors, a peaceful vibe, and a lovely view from the property. The cabin feels warm and private."
  },
  {
    name: "Google guest",
    stay: "Family trip",
    rating: 5,
    text: "A comfortable homestay with clean rooms and helpful hosts. The mountain setting makes the stay feel special."
  },
  {
    name: "Google guest",
    stay: "Weekend getaway",
    rating: 5,
    text: "Great place to relax with friends or family. The cabin layout, balcony, and night views are the highlight."
  },
  {
    name: "Google guest",
    stay: "Couple stay",
    rating: 5,
    text: "Cozy rooms, warm lighting, and a calm location. Easy to enquire and plan the stay."
  }
];

const root = document.getElementById("root");
let selectedRoomId = rooms[0].id;
let selectedReviewIndex = Math.floor(Math.random() * reviews.length);

function getSelectedRoom() {
  return rooms.find((room) => room.id === selectedRoomId) || rooms[0];
}

function getWhatsAppLink() {
  const room = getSelectedRoom();
  const checkIn = document.getElementById("checkIn")?.value || "Check-in not selected";
  const checkOut = document.getElementById("checkOut")?.value || "Check-out not selected";
  const guests = document.getElementById("guests")?.value || "2";
  const message = [
    "Hello Leela Stays, I would like to enquire about a room booking.",
    `Room: ${room.name}`,
    `Dates: ${checkIn} to ${checkOut}`,
    `Guests: ${guests}`,
    `Possible occupants: ${room.occupants}`
  ].join("\n");

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

function updateWhatsAppLinks() {
  document.querySelectorAll("[data-whatsapp]").forEach((link) => {
    link.href = getWhatsAppLink();
  });
}

function renderFeaturedReview() {
  const review = reviews[selectedReviewIndex];
  const featured = document.getElementById("featuredReview");

  if (!featured) return;

  featured.innerHTML = `
    <div class="review-card__top">
      <span class="stars" aria-label="${review.rating} star rating">${"★".repeat(review.rating)}</span>
      <span>${review.stay}</span>
    </div>
    <p>“${review.text}”</p>
    <strong>${review.name}</strong>
  `;
}

function renderRoomDetail() {
  const room = getSelectedRoom();
  const dateLabel = document.getElementById("dateLabel");
  const checkIn = document.getElementById("checkIn")?.value;
  const checkOut = document.getElementById("checkOut")?.value;

  document.getElementById("roomImage").src = room.image;
  document.getElementById("roomImage").alt = room.name;
  document.getElementById("roomLabel").textContent = room.name;
  document.getElementById("roomTitle").textContent = room.name;
  document.getElementById("roomDescription").textContent = room.description;
  document.getElementById("roomOccupants").textContent = room.occupants;
  dateLabel.textContent = checkIn && checkOut ? `${checkIn} to ${checkOut}` : "Choose above";
  document.getElementById("roomAmenities").innerHTML = room.amenities
    .map((amenity) => `<span>${amenity}</span>`)
    .join("");

  document.querySelectorAll(".room-tab").forEach((button) => {
    const isActive = button.dataset.roomId === selectedRoomId;
    button.classList.toggle("room-tab--active", isActive);
    button.setAttribute("aria-selected", String(isActive));
  });

  updateWhatsAppLinks();
}

function render() {
   const room = getSelectedRoom();
  root.innerHTML = `
  
    <main>
      <section class="hero" aria-label="Leela Stays homestay">
        <div class="hero__backdrop"></div>
        <nav class="nav" aria-label="Main navigation">
          <a class="brand" href="#top" aria-label="Leela Stays home">
            <img class="brand__logo" src="/images/leela-logo.jpeg" alt="" />
            <span>Leela Stays</span>
          </a>
          <div class="nav__links">
            <a href="#gallery">Photos</a>
            <a href="#rooms">Rooms</a>
            <a href="#enquire">Enquire</a>
          </div>
        </nav>

        <div class="hero__content" id="top">
          <div class="hero__copy">
            <span class="eyebrow">Peaceful private homestay</span>
            <h1>Leela Stays</h1>
            <p>A modern homestay made for easy family holidays, workations, and quiet weekend escapes. Browse photos, choose your room, and enquire directly on WhatsApp.</p>
            <div class="hero__actions">
              <a class="button button--primary" href="#rooms">Select a room</a>
              <a class="button button--ghost" href="#gallery">View photos</a>
            </div>
          </div>

          <div class="booking-panel" id="enquire" aria-label="Quick enquiry">
            <div>
              <span class="panel-label">Quick enquiry</span>
              <h2>Plan your stay</h2>
            </div>
            <label>
              <span>Check-in</span>
              <input id="checkIn" type="date" />
            </label>
            <label>
              <span>Check-out</span>
              <input id="checkOut" type="date" />
            </label>
            <label>
              <span>Guests</span>
              <input id="guests" min="1" max="12" type="number" value="2" />
            </label>
            <a class="button button--whatsapp" data-whatsapp target="_blank" rel="noreferrer">Book & enquire</a>
          </div>
        </div>

        <div class="hero__stats" aria-label="Stay highlights">
          <div class="stat"><span>Boutique rooms</span></div>
          <div class="stat"><span>Safe family stay</span></div>
          <div class="stat"><span>Fast Wi-Fi</span></div>
          <div class="stat"><span>Parking available</span></div>
        </div>
      </section>

      <section class="section section--intro">
        <div>
          <span class="section-kicker">A warm, polished stay</span>
          <h2>Comfortable rooms, homely service, and spaces that feel easy from the first minute.</h2>
        </div>
        <p>Leela Stays is arranged for travellers who want the privacy of a hotel with the warmth of a home. Every category includes clean bedding, attached washrooms, thoughtful basics, and friendly help with local recommendations.</p>
      </section>

      <section class="gallery-section" id="gallery" aria-label="Photo gallery">
        <div class="section-heading">
          <span class="section-kicker">Photos</span>
          <h2>Some pictures before you book</h2>
        </div>
        <div class="gallery">
          ${gallery.map((photo, index) => `<img src="${photo}" alt="Leela Stays ${room.name} view ${index + 1}" />`).join("")}
        </div>
      </section>

      <section class="rooms-section" id="rooms">
        <div class="section-heading">
          <span class="section-kicker">Room selection</span>
          <h2>Choose from Six room categories</h2>
        </div>

        <div class="rooms-layout">
          <div class="room-tabs" role="tablist" aria-label="Room categories">
            ${rooms
              .map(
                (room) => `
                  <button class="room-tab${room.id === selectedRoomId ? " room-tab--active" : ""}" data-room-id="${room.id}" role="tab" aria-selected="${room.id === selectedRoomId}">
                    <span>${room.name}</span>
                    <small>${room.short}</small>
                  </button>
                `
              )
              .join("")}
          </div>

          <article class="room-detail">
            <div class="room-banner">
              <img id="roomImage" src="${getSelectedRoom().image}" alt="${getSelectedRoom().name}" />

              <div class="room-banner__label" id="roomLabel">${getSelectedRoom().name}</div>
            </div>

            <div class="room-detail__body">
              <div>
                <span class="section-kicker">Selected room</span>
                <h3 id="roomTitle">${getSelectedRoom().name}</h3>
                <p id="roomDescription">${getSelectedRoom().description}</p>
              </div>

              <div class="room-meta">
                <div>
                  <span>Possible occupants</span>
                  <strong id="roomOccupants">${getSelectedRoom().occupants}</strong>
                </div>
                <div>
                  <span>Dates selected</span>
                  <strong id="dateLabel">Choose above</strong>
                </div>
              </div>

              <div class="amenities">
                <h4>Amenities provided</h4>
                <div id="roomAmenities">
                  ${getSelectedRoom().amenities.map((amenity) => `<span>${amenity}</span>`).join("")}
                </div>
              </div>

              <a class="button button--primary room-cta" data-whatsapp target="_blank" rel="noreferrer">Book & enquire on WhatsApp</a>
            </div>
          </article>
        </div>
      </section>

      <section class="amenity-section" aria-label="Common amenities">
        <div class="section-heading">
          <span class="section-kicker">Included comforts</span>
          <h2>Everything guests usually ask for, already thought through.</h2>
        </div>
        <div class="amenity-grid">
          ${["Wi-Fi", "Tea & coffee", "Meals on request", "Hot water", "Parking"]
            .map((label) => `<div class="amenity-card"><span>${label}</span></div>`)
            .join("")}
        </div>
      </section>

      <section class="reviews-section" id="reviews" aria-label="Guest reviews">
        <div class="section-heading">
          <div>
            <span class="section-kicker">Guest reviews</span>
            <h2>What guests say about Leela Stays</h2>
          </div>
          <a class="button button--review" href="${GOOGLE_REVIEWS_URL}" target="_blank" rel="noreferrer">View Google reviews</a>
        </div>

        <div class="reviews-layout">
          <article class="review-feature">
            <span class="panel-label">Random review</span>
            <div id="featuredReview"></div>
            <button class="review-refresh" id="nextReview" type="button">Show another review</button>
          </article>

          <div class="review-list">
            ${reviews
              .map(
                (review) => `
                  <article class="review-card">
                    <div class="review-card__top">
                      <span class="stars" aria-label="${review.rating} star rating">${"★".repeat(review.rating)}</span>
                      <span>${review.stay}</span>
                    </div>
                    <p>“${review.text}”</p>
                    <strong>${review.name}</strong>
                  </article>
                `
              )
              .join("")}
          </div>
        </div>
      </section>

      <section class="closing">
        <div>
          <span class="section-kicker">Ready when you are</span>
          <h2>Send your room choice and travel dates straight to Leela Stays.</h2>
        </div>
        <a class="button button--whatsapp" data-whatsapp target="_blank" rel="noreferrer">Enquire now</a>
      </section>

      <footer>
        <span>Leela Stays</span>
        <span class="stars" aria-label="Five star rating">★★★★★</span>
      </footer>
    </main>
  `;

  document.querySelectorAll(".room-tab").forEach((button) => {
    button.addEventListener("click", () => {
      selectedRoomId = button.dataset.roomId;
      renderRoomDetail();
    });
  });

  ["checkIn", "checkOut", "guests"].forEach((id) => {
    document.getElementById(id).addEventListener("input", renderRoomDetail);
  });

  document.getElementById("nextReview").addEventListener("click", () => {
    selectedReviewIndex = (selectedReviewIndex + 1) % reviews.length;
    renderFeaturedReview();
  });

  setInterval(() => {
    selectedReviewIndex = (selectedReviewIndex + 1) % reviews.length;
    renderFeaturedReview();
  }, 6500);

  renderFeaturedReview();
  updateWhatsAppLinks();
}

render();
