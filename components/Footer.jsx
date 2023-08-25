import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <div class="pt-11">
      <div className="social_media_links">
        <a href="https://www.facebook.com/itsluismeraz" target="_blank">
          <Image
            src="/facebook-logo.png"
            alt="facebook-logo"
            width={33}
            height={33}
            className="socials_logo"
          />
        </a>
        <a href="https://www.instagram.com/itsluismeraz/" target="_blank">
          <Image
            src="/instagram-logo.png"
            alt="instagram-logo"
            width={33}
            height={33}
            className="socials_logo"
          />
        </a>
        <a href="https://twitter.com/itsluismeraz" target="_blank">
          <Image
            src="/twitter-logo.png"
            alt="twitter-logo"
            width={33}
            height={33}
            className="socials_logo"
          />
        </a>
        {/* <a href="https://www.imdb.com" target="_blank">
          <Image
            src="/imdb-logo.png"
            alt="imdb-logo"
            width={33}
            height={33}
            className="socials_logo"
          />
          <FontAwesomeIcon icon={faImdb} size="sm" style={{color: "#9e9e9e",}} />
        </a>
        <a href="https://www.youtube.com" target="_blank">
          <Image
            src="/youtube-logo.png"
            alt="youtube-logo"
            width={33}
            height={33}
            className="socials_logo"
          />
        </a> */}
        <a href="https://www.tiktok.com/@itsluismeraz" target="_blank">
          <Image
            src="/tiktok-logo.png"
            alt="tiktok-logo"
            width={33}
            height={33}
            className="socials_logo"
          />
        </a>
      </div>
      <div className="footer_email">contact@luismeraz.com</div>
    </div>
  );
};

export default Footer;
