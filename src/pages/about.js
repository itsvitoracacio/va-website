import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import Page from "../templates/page";
import { aboutVitorPic } from "../styles/page.module.scss";
import Metadata from "../components/metadata";

const AboutPage = () => {
  return (
    <Page>
      <Metadata
        title="About"
        description="About page for Vitor Acacio. I'm an international digital business consultant building my own practice and documenting it."
      />
      <h1>Hey, I'm Vitor.</h1>
      <StaticImage
        className={aboutVitorPic}
        alt="Vitor, with a collared shirt, in a country setting, in his engagement day, smiling at you"
        src="../images/vitor-profile-square.jpg"
      />
      <p>
      I'm a digital business consultant to SMBs worldwide, specialising in <span className="yellow-u" >marketing</span> and <span className="yellow-u">digital operations</span>.
      </p>
      <p>
        The 3 types of businesses I usually work with are service providers of all sorts, course creators, and eCommerce stores.
      </p>
      <p>
        Over the past five years, I've helped companies{" "}
        <span className="yellow-u">scale their online revenue and operations</span> — both through hands-on implementation and through advisory & training.
      </p>
      <p>
        Recently, I'm launching my own business to {" "}
        <a href="/">
          help small business owners have access to top-notch websites that get consistent results for their businesses at an affordable rate
        </a>
        .
      </p>
      <p>
        The type of content you will find here is mainly made of{" "}
        <Link to="/journal">
          quick, actionable lessons from the small business trenches
        </Link>
        {" "}since that's where I spend most of my time.
      </p>
      <p>
        If you’re into that, I'm setting up a newsletter in the next few days so
        I can let you know when I drop the next piece.
      </p>
      <p>
        To get in touch, you can reach out to me on{" "}
        <Link to="https://twitter.com/itsvitoracacio">twitter</Link> or send me
        an email at{" "}
        <a href="mailto:vitor@vitoracacio.com">vitor@vitoracacio.com</a>.
      </p>
      <p>Thanks for dropping by!</p>
      <p>- Vitor</p>
    </Page>
  );
};

export default AboutPage;
