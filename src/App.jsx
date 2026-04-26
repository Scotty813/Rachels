import cashPoolImg from "./assets/event-cash-pool.png";
import dartsImg from "./assets/event-darts.png";
import dollarTacosImg from "./assets/gallery-dollar-tacos.png";
import espressoMartinisImg from "./assets/gallery-espresso-martinis.png";
import rachelsSelfieImg from "./assets/gallery-rachels-selfie.png";
import wingsServiceImg from "./assets/gallery-wings-service.png";
import barFriendsImg from "./assets/rachels-bar-friends.webp";
import exteriorImg from "./assets/rachels-exterior.webp";
import poolGroupImg from "./assets/rachels-pool-group.jpg";
import heroImg from "./assets/rachels-pool-room.webp";
import teamPoolImg from "./assets/rachels-team-pool.jpg";
import fridaySpecialImg from "./assets/special-friday.png";
import mondaySpecialImg from "./assets/special-monday.png";
import sundaySpecialImg from "./assets/special-sunday.png";
import thursdaySpecialImg from "./assets/special-thursday.png";
import tuesdaySpecialImg from "./assets/special-tuesday.png";
import "./App.css";

const highlights = [
  {
    kicker: "Low-key nights",
    title: "A local bar that feels easy to stay awhile",
    body: "Cold drinks, familiar faces, friendly service, and a casual room built for catching up after work or closing out the night.",
  },
  {
    kicker: "Games on deck",
    title: "Pool, darts, sports, and a little competition",
    body: "Settle into a table, watch the game, or make it a few rounds with friends. Rachel’s keeps the night moving without making a fuss.",
  },
  {
    kicker: "Bar food",
    title: "Wings, empanadas, quick bites, and comfort food",
    body: "A focused menu with the kind of late-night bar food regulars actually come back for.",
  },
];

const menuItems = [
  "Bang Bang Chicken Wings",
  "Naked wings",
  "Empanadas",
  "Pan-fried pot stickers",
  "Burgers and sandwiches",
  "Cold beer and cocktails",
];

const reviews = [
  "Easygoing bartenders, familiar faces, and a room that feels comfortable right away.",
  "A solid spot for pool, sports, cold drinks, and catching up without making it complicated.",
  "Laid-back late nights, quick bites, and enough neighborhood energy to make one drink turn into a few.",
];

const dailySpecials = [
  {
    day: "Monday",
    title: "Manic Monday",
    image: mondaySpecialImg,
    alt: "Rachel's Place Manic Monday specials poster",
    details: ["Happy hour 3-6 PM", "Free pool 3-8 PM"],
  },
  {
    day: "Tuesday",
    title: "Taco Tuesday",
    image: tuesdaySpecialImg,
    alt: "Rachel's Place Taco Tuesday specials poster",
    details: [
      "$1 beef or chicken tacos",
      "Happy hour 3-6 PM",
      "Free pool 3-8 PM",
    ],
  },
  {
    day: "Thursday",
    title: "75 cent wings",
    image: thursdaySpecialImg,
    alt: "Rachel's Place Thursday specials poster",
    details: ["Happy hour 3-6 PM", "75 cent wings", "Free pool 3-8 PM"],
  },
  {
    day: "Friday",
    title: "BOGO drinks",
    image: fridaySpecialImg,
    alt: "Rachel's Place Friday drink special and 8-ball tournament poster",
    details: [
      "BOGO drinks until 8 PM (Restrictions apply)",
      "Free pool 3-8 PM",
    ],
  },
  {
    day: "Sunday",
    title: "Sunday Funday",
    image: sundaySpecialImg,
    alt: "Rachel's Place Sunday Funday specials poster",
    details: [
      "$2 domestic beers",
      "$3 wells until 6 PM",
      "Free pool until 8 PM",
      "Kitchen is open",
    ],
  },
];

const poolEvents = [
  {
    title: "APA League Nights",
    details: [
      "Monday night 9-ball",
      "Wednesday 8-ball",
      "Starts at 7 PM",
      {
        textBefore: "Speak to the bartenders for more information or visit ",
        linkText: "Tampa Bay APA",
        href: "https://tampabay.apaleagues.com/Default.aspx",
      },
    ],
  },
  {
    title: "Cash Tournaments",
    image: cashPoolImg,
    alt: "Rachel's Place cash pool tournaments poster",
    details: [
      "Tuesday 9-ball",
      "Friday 8-ball",
      "Starts at 8 PM",
      "$10 entry",
      "1st place cash prize",
      "2nd and 3rd get gift certificates",
    ],
  },
];

const dartsEvents = [
  {
    title: "Monday night darts tournament",
    image: dartsImg,
    alt: "Rachel's Place Monday night darts tournament poster",
    details: [
      "7:30 PM signup and practice",
      "Starts at 8 PM",
      "$10 buy-in",
      "Winner takes cash grand prize",
      "2nd and 3rd get gift certificates",
    ],
  },
];

const galleryPhotos = [
  {
    src: rachelsSelfieImg,
    alt: "Two smiling guests at Rachel's Place",
    title: "Rachel's nights",
    variant: "portrait",
    fit: "contain",
  },
  {
    src: exteriorImg,
    alt: "Rachel's Place exterior with bright pink window lettering and neon beer signs",
    title: "Rachel's Place at night",
    variant: "feature",
  },
  {
    src: heroImg,
    alt: "Rachel's Place pool room with four pool tables, high-top seating, and neon signs",
    title: "Pool tables and sports",
    variant: "wide",
  },
  {
    src: barFriendsImg,
    alt: "Friends smiling at the bar with drinks inside Rachel's Place",
    title: "Friends at the bar",
  },
  {
    src: teamPoolImg,
    alt: "Rachel's Place pool team posing with cues around a pool table",
    title: "APA League Night",
  },
  {
    src: espressoMartinisImg,
    alt: "Espresso martinis on the bar at Rachel's Place",
    title: "Espresso martinis",
    variant: "portrait",
    fit: "contain",
  },
   {
    src: poolGroupImg,
    alt: "A group of pool players smiling over a Rachel's Place pool table",
    title: "Cash tournament",
  },
  {
    src: wingsServiceImg,
    alt: "Rachel's Place bartender holding a basket of wings at the bar",
    title: "Wings from the bar",
    variant: "portrait",
    fit: "contain",
  },
  {
    src: dollarTacosImg,
    alt: "Plate of tacos with lime for Taco Tuesday at Rachel's Place",
    title: "$1 tacos",
    variant: "wide",
    fit: "contain",
  },
];

const hours = [
  ["Monday", "3 PM - 3 AM"],
  ["Tuesday", "3 PM - 3 AM"],
  ["Wednesday", "3 PM - 3 AM"],
  ["Thursday", "3 PM - 3 AM"],
  ["Friday", "3 PM - 3 AM"],
  ["Saturday", "3 PM - 3 AM"],
  ["Sunday", "3 PM - 3 AM"],
];

function App() {
  const mapsUrl =
    "https://www.google.com/maps/search/?api=1&query=Rachel%27s%20Place%2010061%20W%20Hillsborough%20Ave%20Tampa%20FL%2033615";

  return (
    <main>
      <section className="hero" id="top" aria-labelledby="hero-title">
        <img
          className="hero__image"
          src={heroImg}
          alt="Rachel's Place pool room with four pool tables, high-top seating, and neon signs"
        />
        <div className="hero__overlay" />
        <nav className="topbar" aria-label="Primary navigation">
          <a className="brand" href="#top" aria-label="Rachel's Place home">
            <span className="brand-name">Rachel&apos;s Place</span>
          </a>
          <div className="topbar__links">
            <a href="#specials">Specials</a>
            <a href="#food">Food</a>
            <a href="#games">Games</a>
            <a href="#visit">Visit</a>
          </div>
        </nav>
        <div className="hero__content">
          <p className="eyebrow">Tampa neighborhood bar & grill</p>
          <h1 id="hero-title">
            <span className="brand-name">Rachel&apos;s Place</span>
          </h1>
          <p className="hero__lead">
            Your neighborhood spot for food, drinks, pool, and late nights.
            Located on W Hillsborough Ave in Tampa.
          </p>
          <div className="hero__actions" aria-label="Rachel's Place actions">
            <a className="button button--primary" href="tel:+18133743957">
              Call
            </a>
            <a className="button button--secondary" href={mapsUrl}>
              Get Directions
            </a>
            <a className="button button--ghost" href="#visit">
              View Hours
            </a>
          </div>
        </div>
        <div className="hero__facts" aria-label="Quick facts">
          <span>10061 W Hillsborough Ave</span>
          <span>Open daily until 3 AM</span>
          <span>Pool • Darts • Sports</span>
        </div>
      </section>

      <section
        className="events-specials"
        id="specials"
        aria-labelledby="specials-title"
      >
        <div className="events__intro">
          <div>
            <p className="eyebrow">Events & specials</p>
            <h2 id="specials-title">
              What&apos;s happening at{" "}
              <span className="brand-name">Rachel&apos;s</span>
            </h2>
          </div>
          <p>
            Happy hour until 6pm, free pool until 8pm, APA league nights, cash
            tournaments, and darts at 10061 W Hillsborough Ave, Tampa, FL 33615.
          </p>
        </div>

        <div className="specials-block">
          <div className="specials-heading">
            <p className="eyebrow">Daily specials</p>
            <h3>Pick your night</h3>
          </div>
          <div
            className="daily-specials-grid"
            aria-label="Daily specials by day"
          >
            {dailySpecials.map((special) => (
              <article className="special-day-card" key={special.day}>
                <div className="special-day-card__media">
                  <img src={special.image} alt={special.alt} loading="lazy" />
                </div>
                <div className="special-day-card__body">
                  <p>{special.day}</p>
                  <h4>{special.title}</h4>
                  <ul>
                    {special.details.map((detail) => (
                      <li key={detail}>{detail}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="activity-specials-grid">
          <section
            className="activity-panel"
            aria-labelledby="pool-events-title"
          >
            <div className="specials-heading">
              <p className="eyebrow">Pool</p>
              <h3 id="pool-events-title">Leagues and cash tournaments</h3>
            </div>
            <div className="activity-list">
              {poolEvents.map((event) => (
                <article
                  className={`activity-card${event.image ? "" : " activity-card--text-only"}`}
                  key={event.title}
                >
                  {event.image ? (
                    <div className="activity-card__media">
                      <img src={event.image} alt={event.alt} loading="lazy" />
                    </div>
                  ) : null}
                  <div>
                    <h4>{event.title}</h4>
                    <ul>
                      {event.details.map((detail) => (
                        <li key={typeof detail === "string" ? detail : detail.href}>
                          {typeof detail === "string" ? (
                            detail
                          ) : (
                            <>
                              {detail.textBefore}
                              <a
                                href={detail.href}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                {detail.linkText}
                              </a>
                            </>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section
            className="activity-panel"
            aria-labelledby="darts-events-title"
          >
            <div className="specials-heading">
              <p className="eyebrow">Darts</p>
              <h3 id="darts-events-title">Monday night darts</h3>
            </div>
            <div className="activity-list">
              {dartsEvents.map((event) => (
                <article className="activity-card" key={event.title}>
                  <div className="activity-card__media">
                    <img src={event.image} alt={event.alt} loading="lazy" />
                  </div>
                  <div>
                    <h4>{event.title}</h4>
                    <ul>
                      {event.details.map((detail) => (
                        <li key={detail}>{detail}</li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </div>
      </section>

      <section className="intro" aria-labelledby="intro-title">
        <div>
          <p className="eyebrow">Why locals go</p>
          <h2 id="intro-title">
            A Tampa spot for great drinks and familiar energy
          </h2>
        </div>
        <p>
          <span className="brand-name">Rachel&apos;s Place</span> gives locals
          an easy place to meet up, play a few games, catch up over drinks, and
          stay late without the downtown hassle.
        </p>
      </section>

      <section className="photo-gallery" aria-labelledby="gallery-title">
        <div className="gallery__intro">
          <p className="eyebrow">Inside the room</p>
          <h2 id="gallery-title">
            A look at <span className="brand-name">Rachel&apos;s Place</span>
          </h2>
        </div>
        <div className="gallery-grid" aria-label="Rachel's Place photo gallery">
          {galleryPhotos.map((photo) => (
            <figure
              className={`gallery-card${photo.variant ? ` gallery-card--${photo.variant}` : ""}${photo.fit ? ` gallery-card--${photo.fit}` : ""}`}
              key={photo.title}
            >
              <img src={photo.src} alt={photo.alt} loading="lazy" />
              <figcaption>{photo.title}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section
        className="highlight-grid"
        aria-label="Rachel's Place highlights"
      >
        {highlights.map((item) => (
          <article className="highlight" key={item.title}>
            <p className="eyebrow">{item.kicker}</p>
            <h2>{item.title}</h2>
            <p>{item.body}</p>
          </article>
        ))}
      </section>

      <section className="split-section" id="food" aria-labelledby="food-title">
        <div className="section-copy">
          <p className="eyebrow">Food & drinks</p>
          <h2 id="food-title">Cold drinks and tasty bar bites</h2>
          <p>
            Grab wings, empanadas, pot stickers, burgers, sandwiches, and a cold
            beer or cocktail while you watch the game, shoot pool, or settle in
            with friends. It is casual, quick, and exactly what you want on a
            late night.
          </p>
        </div>
        <div className="menu-list" aria-label="Menu highlights">
          {menuItems.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </section>

      <section className="games-band" id="games" aria-labelledby="games-title">
        <div>
          <p className="eyebrow">Pool, darts & sports</p>
          <h2 id="games-title">Come for a drink. Stay for another game.</h2>
        </div>
        <p>
          Whether you're stopping in after work, meeting friends for pool, or
          looking for a late-night Tampa bar with food and games,
          <span className="brand-name">Rachel&apos;s</span> is ready for you.
        </p>
      </section>

      <section className="social-proof" aria-labelledby="reviews-title">
        <div className="section-copy">
          <p className="eyebrow">Local reputation</p>
          <h2 id="reviews-title">A place people come back to</h2>
        </div>
        <div className="quote-grid">
          {reviews.map((review) => (
            <blockquote key={review}>
              <p>{review}</p>
            </blockquote>
          ))}
        </div>
      </section>

      <section className="visit" id="visit" aria-labelledby="visit-title">
        <div className="visit__copy">
          <p className="eyebrow">
            Visit <span className="brand-name">Rachel&apos;s Place</span>
          </p>
          <h2 id="visit-title">Open daily until 3 AM</h2>
          <address>
            10061 W Hillsborough Ave
            <br />
            Tampa, FL 33615
          </address>
          <a className="phone-link" href="tel:+18133743957">
            (813) 374-3957
          </a>
          <div className="visit__actions">
            <a className="button button--primary" href="tel:+18133743957">
              Call Now
            </a>
            <a className="button button--secondary" href={mapsUrl}>
              Directions
            </a>
            <a
              className="button button--ghost"
              href="https://www.instagram.com/rachels_place10061/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
          </div>
        </div>
        <div className="hours-card" aria-label="Hours">
          <h3>Hours</h3>
          <dl>
            {hours.map(([day, time]) => (
              <div key={day}>
                <dt>{day}</dt>
                <dd>{time}</dd>
              </div>
            ))}
          </dl>
          <p>
            Free parking, wheelchair-accessible entry, dine-in, takeout, bar
            games, sports, beer, cocktails, and late-night food.
          </p>
        </div>
      </section>
    </main>
  );
}

export default App;
