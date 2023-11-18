import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <div class="pt-11 footer">
      <div className="social_media_links">
        <a href="https://www.facebook.com/itsluismeraz/" target="_blank">
          <Image
            src="./social-media-logos/facebook-logo.png"
            alt="facebook-logo"
            width={35}
            height={35}
            className="socials_logo"
          />
        </a>
        <a href="https://www.instagram.com/itsluismeraz/" target="_blank">
          <Image
            src="./social-media-logos/instagram-logo.png"
            alt="instagram-logo"
            width={35}
            height={35}
            className="socials_logo"
          />
        </a>
        <a href="https://twitter.com/itsluismeraz/" target="_blank">
          <Image
            src="./social-media-logos/twitter-logo.png"
            alt="twitter-logo"
            width={35}
            height={35}
            className="socials_logo"
          />
        </a>
        {/* <a href="https://www.youtube.com/" target="_blank">
          <Image
            src="./social-media-logos/youtube-logo.png"
            alt="youtube-logo"
            width={35}
            height={35}
            className="socials_logo"
          />
        </a> */}
        {/* <a href="https://www.imdb.com/" target="_blank">
          <Image
            src="./social-media-logos/imdb-logo.png"
            alt="imdb-logo"
            width={35}
            height={35}
            className="socials_logo"
          />
        </a> */}
        <a href="https://www.tiktok.com/@itsluismeraz/" target="_blank">
          <Image
            src="./social-media-logos/tiktok-logo.png"
            alt="tiktok-logo"
            width={35}
            height={35}
            className="socials_logo"
          />
        </a>
      </div>
      {/* Email address was created as an image to stop potential bots from spamming the email address. */}
      {/* <div className="footer_email">contact@luismeraz.com</div> */}
      <Image
        src="./email-address.png"
        alt="contact@luismeraz.com"
        width={200}
        height={200}
        className="footer_email"
      />
    </div>
  );
};

export default Footer;
