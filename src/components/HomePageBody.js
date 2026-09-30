import React, { useEffect, useRef, useState } from "react";
import "./HomePageBody.css";

const announcements = [
  {
    text: "GSLV-F17 / EOS-05 has successfully accomplished its mission",
    href: "https://www.isro.gov.in/Mission_GSLVF17.html",
  },
  {
    text: "NISAR S-Band SAR data products are now available",
    href: "https://www.isro.gov.in/",
  },
  {
    text: "Bharatiya Antariksh Hackathon 2026 — shortlisted teams announced",
    href: "https://www.isro.gov.in/",
  },
  {
    text: "Young Scientists Programme (YUVIKA) 2026 updates",
    href: "https://www.isro.gov.in/",
  },
  {
    text: "Explore the latest ISRO mission and science updates",
    href: "https://www.isro.gov.in/",
  },
];

const heroSlides = [
  {
    kicker: "Mission update · 04 September 2026",
    title: "GSLV-F17 / EOS-05",
    summary: "A successful launch places EOS-05 into its intended orbit.",
    image: "https://www.isro.gov.in/media_isro/image/poster_IMG/f17_E05_09092026.webp",
    alt: "Launch site during the GSLV-F17 and EOS-05 mission",
    href: "https://www.isro.gov.in/Mission_GSLVF17.html",
  },
  {
    kicker: "India's space journey",
    title: "National Space Day 2026",
    summary: "Celebrating the people, science and missions shaping our future in space.",
    image: "https://www.isro.gov.in/media_isro/image/index/Highlights/01_National_Space_Day.webp",
    alt: "National Space Day celebration artwork",
    href: "https://www.isro.gov.in/",
  },
  {
    kicker: "Science · technology · exploration",
    title: "Ideas that reach beyond Earth",
    summary: "Explore the research and partnerships advancing India's space programme.",
    image: "https://www.isro.gov.in/media_isro/image/index/Highlights/bharatInnovatesbannerv2.webp",
    alt: "Bharat Innovates programme banner",
    href: "https://www.isro.gov.in/",
  },
];

const newsItems = [
  {
    day: "10",
    month: "SEP",
    dateTime: "2026-09-10",
    category: "Events",
    title: "ISRO Chairman participates in the International Space Summit in Paris",
    href: "https://www.isro.gov.in/International_Space_Summit.html",
  },
  {
    day: "08",
    month: "SEP",
    dateTime: "2026-09-08",
    category: "Earth observation",
    title: "EOS-06 observes changing marine productivity in the Equatorial Pacific",
    href: "https://www.isro.gov.in/",
  },
  {
    day: "05",
    month: "SEP",
    dateTime: "2026-09-05",
    category: "Launch vehicles",
    title: "Successful hot test of the CE20 cryogenic engine for the LVM3 mission",
    href: "https://www.isro.gov.in/",
  },
  {
    day: "02",
    month: "SEP",
    dateTime: "2026-09-02",
    category: "Space science",
    title: "ZeeDP 2.0 Space Science Meet held at the Space Applications Centre",
    href: "https://www.isro.gov.in/",
  },
];

const highlights = [
  {
    label: "Digital services",
    image: "https://www.isro.gov.in/media_isro/image/index/Highlights/Digital_Banner.jpg.webp",
    alt: "ISRO digital services banner",
  },
  {
    label: "National Space Day",
    image: "https://www.isro.gov.in/media_isro/image/index/Highlights/01_National_Space_Day.webp",
    alt: "National Space Day 2026",
  },
  {
    label: "Bharat Innovates",
    image: "https://www.isro.gov.in/media_isro/image/index/Highlights/bharatInnovatesbannerv2.webp",
    alt: "Bharat Innovates",
  },
  {
    label: "Cyber security",
    image: "https://www.isro.gov.in/media_isro/image/index/Highlights/Cyber_Security_poster.webp",
    alt: "Cyber security awareness",
  },
  {
    label: "Mega science",
    image: "https://www.isro.gov.in/media_isro/image/index/Highlights/megascience.png.webp",
    alt: "Mega science programme",
  },
];

const portals = [
  {
    title: "SPARK",
    description: "Virtual Space Museum",
    image: "https://www.isro.gov.in/media_isro/image/hormenu/spark.png.webp",
    href: "https://www.isro.gov.in/Virtual_Space_Museum.html",
  },
  {
    title: "MOSDAC",
    description: "Weather and ocean data",
    image: "https://www.isro.gov.in/media_isro/image/hormenu/mosdac.jpg.webp",
    href: "https://www.isro.gov.in/MOSDAC.html",
  },
  {
    title: "Bhoonidhi",
    description: "Earth observation data",
    image: "https://www.isro.gov.in/media_isro/image/hormenu/bhoonidhi.png.webp",
    href: "https://www.isro.gov.in/Bhoonidhi.html",
  },
  {
    title: "Bhuvan",
    description: "Indian geo-platform",
    image: "https://www.isro.gov.in/media_isro/image/hormenu/bhuvan.png.webp",
    href: "https://www.isro.gov.in/Bhuvan.html",
  },
  {
    title: "VEDAS",
    description: "Visualisation of satellite data",
    image: "https://www.isro.gov.in/media_isro/image/hormenu/vedas.png.webp",
    href: "https://www.isro.gov.in/VEDAS.html",
  },
  {
    title: "ISSDC",
    description: "Space science data centre",
    image: "https://www.isro.gov.in/media_isro/image/hormenu/issdc.png.webp",
    href: "https://www.isro.gov.in/ISSDC.html",
  },
];

const missions = [
  {
    date: "04 SEP 2026 · GSLV",
    title: "GSLV-F17 / EOS-05",
    result: "Mission accomplished",
    image: "https://www.isro.gov.in/media_isro/image/poster_IMG/f17_E05_09092026.webp",
    alt: "GSLV-F17 and EOS-05 mission",
    href: "https://www.isro.gov.in/Mission_GSLVF17.html",
  },
  {
    date: "12 JAN 2026 · PSLV",
    title: "PSLV-C62 / EOS-N1",
    result: "View mission",
    image: "https://www.isro.gov.in/media_isro/image/index/Recent/pslvc62_rec.webp",
    alt: "PSLV-C62 and EOS-N1 mission",
    href: "https://www.isro.gov.in/Mission_PSLV_C62.html",
  },
  {
    date: "24 DEC 2025 · LVM3",
    title: "LVM3-M6 / BlueBird",
    result: "View mission",
    image: "https://www.isro.gov.in/media_isro/image/index/Recent/lm3m6rec.png.webp",
    alt: "LVM3-M6 and BlueBird Block-2 mission",
    href: "https://www.isro.gov.in/LVM3_M6_BlueBird_Block2_Mission.html",
  },
  {
    date: "02 NOV 2025 · LVM3",
    title: "LVM3-M5 / CMS-03",
    result: "View mission",
    image: "https://www.isro.gov.in/media_isro/image/index/Recent/lvm3m5_rec03.png.webp",
    alt: "LVM3-M5 and CMS-03 mission",
    href: "https://www.isro.gov.in/LVM3_M5_CMS_03_MISSION.html",
  },
];

function HomePageBody() {
  const [tickerIndex, setTickerIndex] = useState(0);
  const [heroIndex, setHeroIndex] = useState(0);
  const [heroPaused, setHeroPaused] = useState(false);
  const highlightsTrack = useRef(null);
  const currentAnnouncement = announcements[tickerIndex];

  useEffect(() => {
    const timer = window.setInterval(() => {
      setTickerIndex((index) => (index + 1) % announcements.length);
    }, 7000);
    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (heroPaused || reduceMotion) return undefined;

    const timer = window.setInterval(() => {
      setHeroIndex((index) => (index + 1) % heroSlides.length);
    }, 8000);
    return () => window.clearInterval(timer);
  }, [heroPaused]);

  const moveTicker = (direction) => {
    setTickerIndex((index) => (index + direction + announcements.length) % announcements.length);
  };

  const moveHero = (direction) => {
    setHeroIndex((index) => (index + direction + heroSlides.length) % heroSlides.length);
  };

  const scrollHighlights = (direction) => {
    if (!highlightsTrack.current) return;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    highlightsTrack.current.scrollBy({
      left: direction * highlightsTrack.current.clientWidth * 0.8,
      behavior: reduceMotion ? "auto" : "smooth",
    });
  };

  return (
    <main className="isro-home" id="isro-main">
      <section className="isro-ticker" aria-label="ISRO announcements">
        <div className="isro-ticker__inner">
          <span className="isro-ticker__label">Flash News</span>
          <a className="isro-ticker__link" href={currentAnnouncement.href} aria-live="polite">
            {currentAnnouncement.text}
          </a>
          <div className="isro-ticker__controls" aria-label="Flash news controls">
            <button className="isro-icon-button" type="button" aria-label="Previous announcement" onClick={() => moveTicker(-1)}>‹</button>
            <span className="isro-ticker__count" aria-live="polite">
              {String(tickerIndex + 1).padStart(2, "0")} / {String(announcements.length).padStart(2, "0")}
            </span>
            <button className="isro-icon-button" type="button" aria-label="Next announcement" onClick={() => moveTicker(1)}>›</button>
          </div>
        </div>
      </section>

      <section
        className="isro-hero"
        aria-label="Featured ISRO mission"
        onMouseEnter={() => setHeroPaused(true)}
        onMouseLeave={() => setHeroPaused(false)}
        onFocus={() => setHeroPaused(true)}
        onBlur={(event) => {
          if (!event.currentTarget.contains(event.relatedTarget)) setHeroPaused(false);
        }}
      >
        {heroSlides.map((slide, index) => (
          <article
            className={`isro-hero__slide${heroIndex === index ? " isro-hero__slide--active" : ""}`}
            key={slide.title}
            hidden={heroIndex !== index}
          >
            <img className="isro-hero__image" src={slide.image} alt={slide.alt} />
            <div className="isro-hero__shade" />
            <div className="isro-hero__content">
              <p className="isro-eyebrow">{slide.kicker}</p>
              {index === 0 ? (
                <h1>GSLV-F17 <span>/</span> EOS-05</h1>
              ) : (
                <h2>{slide.title}</h2>
              )}
              <p className="isro-hero__summary">{slide.summary}</p>
              <a className="isro-button isro-button--gold" href={slide.href}>
                {index === 0 ? "Explore the mission" : "Discover more"} <span aria-hidden="true">↗</span>
              </a>
            </div>
            <p className="isro-hero__caption">Indian Space Research Organisation</p>
          </article>
        ))}

        <div className="isro-hero__controls" aria-label="Featured story controls">
          <button className="isro-icon-button isro-icon-button--light" type="button" aria-label="Previous featured story" onClick={() => moveHero(-1)}>‹</button>
          <div className="isro-dots" aria-label="Choose a featured story">
            {heroSlides.map((slide, index) => (
              <button
                className="isro-dot"
                key={slide.title}
                type="button"
                aria-label={`Show ${slide.title}`}
                aria-current={heroIndex === index}
                onClick={() => setHeroIndex(index)}
              />
            ))}
          </div>
          <button className="isro-icon-button isro-icon-button--light" type="button" aria-label="Next featured story" onClick={() => moveHero(1)}>›</button>
        </div>
      </section>

      <nav className="isro-shortcuts" aria-label="Quick links">
        <a className="isro-shortcut" href="https://www.isro.gov.in/">
          <span className="isro-shortcut__icon" aria-hidden="true">▤</span><span>Press release</span><span className="isro-shortcut__arrow" aria-hidden="true">↗</span>
        </a>
        <a className="isro-shortcut" href="https://www.isro.gov.in/">
          <span className="isro-shortcut__icon" aria-hidden="true">✦</span><span>Careers</span><span className="isro-shortcut__arrow" aria-hidden="true">↗</span>
        </a>
        <a className="isro-shortcut" href="https://www.isro.gov.in/">
          <span className="isro-shortcut__icon" aria-hidden="true">⌂</span><span>Students</span><span className="isro-shortcut__arrow" aria-hidden="true">↗</span>
        </a>
        <a className="isro-shortcut" href="https://www.isro.gov.in/">
          <span className="isro-shortcut__icon" aria-hidden="true">▣</span><span>Tenders</span><span className="isro-shortcut__arrow" aria-hidden="true">↗</span>
        </a>
      </nav>

      <section className="isro-section isro-news" id="isro-latest-news">
        <div className="isro-section__heading">
          <div><p className="isro-eyebrow isro-eyebrow--blue">What's happening</p><h2>Latest news</h2></div>
          <a className="isro-text-link" href="https://www.isro.gov.in/">All updates <span aria-hidden="true">→</span></a>
        </div>

        <div className="isro-news__layout">
          <article className="isro-news-feature">
            <div className="isro-news-feature__image-wrap">
              <img
                src="https://www.isro.gov.in/media_isro/image/index/Recent/028A6256.jpg"
                alt="ISRO scientists and researchers at a recent event"
                loading="lazy"
              />
              <span className="isro-news-feature__tag">Featured update</span>
            </div>
            <div className="isro-news-feature__copy">
              <p className="isro-date">SPACE SCIENCE · 2026</p>
              <h3>EOS-06 observes changing marine productivity in the Equatorial Pacific</h3>
              <p>Satellite observations help researchers follow important changes in the oceans and climate.</p>
              <a className="isro-text-link" href="https://www.isro.gov.in/">Read the update <span aria-hidden="true">→</span></a>
            </div>
          </article>

          <div className="isro-news-list" aria-label="Recent news">
            {newsItems.map((item) => (
              <article className="isro-news-item" key={item.dateTime}>
                <time className="isro-news-item__date" dateTime={item.dateTime}><strong>{item.day}</strong>{item.month}</time>
                <div className="isro-news-item__copy">
                  <small>{item.category}</small>
                  <a href={item.href}>{item.title}</a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="isro-highlights" id="isro-highlights">
        <div className="isro-section isro-section__heading isro-highlights__heading">
          <div><p className="isro-eyebrow">Explore ISRO</p><h2>Highlights</h2></div>
          <div className="isro-scroll-controls">
            <button className="isro-icon-button isro-icon-button--light" type="button" aria-label="Scroll highlights left" onClick={() => scrollHighlights(-1)}>‹</button>
            <button className="isro-icon-button isro-icon-button--light" type="button" aria-label="Scroll highlights right" onClick={() => scrollHighlights(1)}>›</button>
          </div>
        </div>
        <div className="isro-card-track" ref={highlightsTrack} tabIndex="0" aria-label="ISRO highlights">
          {highlights.map((item) => (
            <a className="isro-highlight-card" href="https://www.isro.gov.in/" key={item.label}>
              <img src={item.image} alt={item.alt} loading="lazy" />
              <span className="isro-highlight-card__label">{item.label}</span>
            </a>
          ))}
        </div>
      </section>

      <section className="isro-section isro-portals" id="isro-portals">
        <div className="isro-section__heading">
          <div><p className="isro-eyebrow isro-eyebrow--blue">Data, discovery and learning</p><h2>ISRO portals</h2></div>
          <a className="isro-text-link" href="https://www.isro.gov.in/">View all portals <span aria-hidden="true">→</span></a>
        </div>
        <div className="isro-portal-grid">
          {portals.map((portal) => (
            <a className="isro-portal-card" href={portal.href} key={portal.title}>
              <img src={portal.image} alt="" loading="lazy" />
              <span><strong>{portal.title}</strong><small>{portal.description}</small></span>
              <span className="isro-portal-card__arrow" aria-hidden="true">↗</span>
            </a>
          ))}
        </div>
      </section>

      <section className="isro-missions" id="isro-missions">
        <div className="isro-section isro-section__heading isro-missions__heading">
          <div><p className="isro-eyebrow">India in space</p><h2>Recent missions</h2></div>
          <a className="isro-button isro-button--outline" href="https://www.isro.gov.in/">Explore all missions <span aria-hidden="true">→</span></a>
        </div>
        <div className="isro-mission-grid">
          {missions.map((mission) => (
            <a className="isro-mission-card" href={mission.href} key={mission.title}>
              <img src={mission.image} alt={mission.alt} loading="lazy" />
              <span className="isro-mission-card__body">
                <small>{mission.date}</small>
                <strong>{mission.title}</strong>
                <span>{mission.result}<b aria-hidden="true">↗</b></span>
              </span>
            </a>
          ))}
        </div>
      </section>

      <section className="isro-section isro-contact" aria-label="ISRO information links">
        <div className="isro-contact__copy">
          <p className="isro-eyebrow isro-eyebrow--blue">Connect with ISRO</p>
          <h2>Curious about space?</h2>
          <p>Find answers, share feedback or get in touch with the Indian Space Research Organisation.</p>
        </div>
        <div className="isro-contact__links">
          <a href="https://www.isro.gov.in/contact.html"><span>Contact us</span><b aria-hidden="true">↗</b></a>
          <a href="https://www.isro.gov.in/ISROAPP/login.jsp"><span>Ask an expert</span><b aria-hidden="true">↗</b></a>
          <a href="https://www.isro.gov.in/ISROAPP/fFBF"><span>Share feedback</span><b aria-hidden="true">↗</b></a>
        </div>
      </section>
    </main>
  );
}

export default HomePageBody;
