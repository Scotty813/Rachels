import Image from "next/image";
import apaLogoImg from "../assets/apa-logo.jpeg";
import cashPoolImg from "../assets/event-cash-pool.webp";
import dartsImg from "../assets/event-darts.webp";
import dollarTacosImg from "../assets/gallery-dollar-tacos.webp";
import espressoMartinisImg from "../assets/gallery-espresso-martinis.webp";
import rachelsSelfieImg from "../assets/gallery-rachels-selfie.webp";
import wingsServiceImg from "../assets/gallery-wings-service.webp";
import barFriendsImg from "../assets/rachels-bar-friends.webp";
import exteriorImg from "../assets/rachels-exterior.webp";
import poolGroupImg from "../assets/rachels-pool-group.jpg";
import heroImg from "../assets/rachels-pool-room.webp";
import teamPoolImg from "../assets/rachels-team-pool.jpg";
import fridaySpecialImg from "../assets/special-friday.webp";
import mondaySpecialImg from "../assets/special-monday.webp";
import sundaySpecialImg from "../assets/special-sunday.webp";
import thursdaySpecialImg from "../assets/special-thursday.webp";
import tuesdaySpecialImg from "../assets/special-tuesday.webp";

const heroImageSizes = "100vw";
const specialImageSizes =
  "(max-width: 620px) 100vw, (max-width: 900px) 50vw, 20vw";
const activityImageSizes =
  "(max-width: 620px) 100vw, (max-width: 900px) 36vw, 21vw";
const galleryImageSizes =
  "(max-width: 620px) 100vw, (max-width: 900px) 50vw, 33vw";

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
    ],
  },
];

const poolEvents = [
  {
    title: "APA League Nights",
    image: apaLogoImg,
    alt: "APA poolplayers.com logo",
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

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Z"
      />
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37Z"
      />
      <path fill="currentColor" d="M17.5 6.5h.01v.01h-.01z" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path
        fill="currentColor"
        d="M14.2 8.9V7.2c0-.8.6-1 1.1-1h1.9V3h-2.8c-3.1 0-4.3 1.9-4.3 4.1v1.8H7.8v3.4h2.3V21h4.1v-8.7h2.8l.5-3.4h-3.3Z"
      />
    </svg>
  );
}

function GoogleIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path
        fill="currentColor"
        d="M21.6 12.23c0-.73-.07-1.43-.19-2.1H12v3.97h5.38a4.6 4.6 0 0 1-2 3.02v2.58h3.24c1.9-1.75 2.98-4.32 2.98-7.47Z"
      />
      <path
        fill="currentColor"
        d="M12 22c2.7 0 4.97-.9 6.62-2.42l-3.24-2.58c-.9.6-2.05.96-3.38.96-2.61 0-4.82-1.76-5.61-4.13H3.04v2.66A10 10 0 0 0 12 22Z"
      />
      <path
        fill="currentColor"
        d="M6.39 13.83a6 6 0 0 1 0-3.66V7.51H3.04a10 10 0 0 0 0 8.98l3.35-2.66Z"
      />
      <path
        fill="currentColor"
        d="M12 6.04c1.47 0 2.79.51 3.82 1.5l2.87-2.87A9.6 9.6 0 0 0 12 2a10 10 0 0 0-8.96 5.51l3.35 2.66C7.18 7.8 9.39 6.04 12 6.04Z"
      />
    </svg>
  );
}

export default function Home() {
  const mapsUrl =
    "https://www.google.com/maps/search/?api=1&query=Rachel%27s%20Place%2010061%20W%20Hillsborough%20Ave%20Tampa%20FL%2033615";
  const socialLinks = [
    {
      label: "Instagram",
      href: "https://www.instagram.com/rachels_place10061/",
      icon: <InstagramIcon />,
    },
    {
      label: "Facebook",
      href: "https://www.facebook.com/rachel.place.37",
      icon: <FacebookIcon />,
    },
    {
      label: "Google Maps",
      href: mapsUrl,
      icon: <GoogleIcon />,
    },
  ];

  return (
    <main>
      <section className="hero" id="top" aria-labelledby="hero-title">
        <Image
          className="hero__image"
          src={heroImg}
          alt="Rachel's Place pool room with four pool tables, high-top seating, and neon signs"
          priority
          loading="eager"
          sizes={heroImageSizes}
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
          </p>
          <div className="hero__actions" aria-label="Rachel's Place actions">
            <a className="button button--secondary" href={mapsUrl}>
              Get Directions
            </a>
            <a className="button button--ghost" href="#specials">
              View Specials and Events
            </a>
          </div>
        </div>
        <div className="hero__facts" aria-label="Quick facts">
          <span>10061 W Hillsborough Ave</span>
          <span>Open daily 3 PM - 3 AM</span>
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
            Happy hour until 6pm, free pool until 8pm, APA league nights,
            cash tournaments, and darts at 10061 W Hillsborough Ave, Tampa, FL
            33615.
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
                  <Image
                    src={special.image}
                    alt={special.alt}
                    sizes={specialImageSizes}
                  />
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
            </div>
            <div className="activity-list">
              {poolEvents.map((event) => (
                <article
                  className={`activity-card${event.image ? "" : " activity-card--text-only"}`}
                  key={event.title}
                >
                  {event.image ? (
                    <div className="activity-card__media">
                      <Image
                        src={event.image}
                        alt={event.alt}
                        sizes={activityImageSizes}
                      />
                    </div>
                  ) : null}
                  <div>
                    <h4>{event.title}</h4>
                    <ul>
                      {event.details.map((detail) => (
                        <li
                          key={
                            typeof detail === "string" ? detail : detail.href
                          }
                        >
                          <span>
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
                          </span>
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
            </div>
            <div className="activity-list">
              {dartsEvents.map((event) => (
                <article className="activity-card" key={event.title}>
                  <div className="activity-card__media">
                    <Image
                      src={event.image}
                      alt={event.alt}
                      sizes={activityImageSizes}
                    />
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
          an easy place to meet up, play a few games, catch up over drinks,
          and stay late without the downtown hassle.
        </p>
      </section>

      <section className="photo-gallery" aria-labelledby="gallery-title">
        <div className="gallery__intro">
          <p className="eyebrow">Inside the room</p>
          <h2 id="gallery-title">
            A look at <span className="brand-name">Rachel&apos;s Place</span>
          </h2>
        </div>
        <div
          className="gallery-grid"
          aria-label="Rachel's Place photo gallery"
        >
          {galleryPhotos.map((photo) => (
            <figure
              className={`gallery-card${photo.variant ? ` gallery-card--${photo.variant}` : ""}${photo.fit ? ` gallery-card--${photo.fit}` : ""}`}
              key={photo.title}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                sizes={galleryImageSizes}
              />
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

      <section
        className="split-section"
        id="food"
        aria-labelledby="food-title"
      >
        <div className="section-copy">
          <p className="eyebrow">Food & drinks</p>
          <h2 id="food-title">Cold drinks and tasty bar bites</h2>
          <p>
            Grab wings, empanadas, pot stickers, burgers, sandwiches, and a
            cold beer or cocktail while you watch the game, shoot pool, or
            settle in with friends. It is casual, quick, and exactly what you
            want on a late night.
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
          Whether you&apos;re stopping in after work, meeting friends for pool,
          or looking for a late-night Tampa bar with food and games,{" "}
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
          <h2 id="visit-title">Open daily 3 PM - 3 AM</h2>
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
      <footer className="site-footer" aria-label="Site footer">
        <div className="site-footer__brand">
          <a className="brand" href="#top" aria-label="Rachel's Place home">
            <span className="brand-name">Rachel&apos;s Place</span>
          </a>
          <address>
            10061 W Hillsborough Ave
            <br />
            Tampa, FL 33615
          </address>
          <a className="site-footer__phone" href="tel:+18133743957">
            (813) 374-3957
          </a>
        </div>

        <div className="site-footer__links">
          <nav className="site-footer__nav" aria-label="Footer navigation">
            <a href="#specials">Specials</a>
            <a href="#food">Food</a>
            <a href="#games">Games</a>
            <a href="#visit">Visit</a>
          </nav>
          <div className="site-footer__socials" aria-label="Social links">
            {socialLinks.map((link) => (
              <a
                className="site-footer__social"
                href={link.href}
                key={link.label}
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.icon}
                <span className="sr-only">{link.label}</span>
              </a>
            ))}
          </div>
        </div>
      </footer>
    </main>
  );
}
