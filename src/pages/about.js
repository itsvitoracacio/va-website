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
        description="About page for Vitor Acacio. I'm an international online business consultant building my own practice and documenting it."
      />
      <h1>Hey, I'm Vitor.</h1>
      <StaticImage
        className={aboutVitorPic}
        alt="Vitor, with a collared shirt, in a country setting, in his engagement day, smiling at you"
        src="../images/vitor-profile-square.jpg"
      />
      <p>
      I'm an online business consultant to SMBs worldwide, specialising in <span class="yellow-u">marketing</span> and <span class="yellow-u">digital operations</span>.
      </p>
      <p>
        The 3 types of businesses I usually work with are service providers of all sorts, course creators, and eCommerce stores.
      </p>
      <p>
        Over the past five years, I've helped companies{" "}
        <mark>scale their online revenue and operations</mark> — both through
        hands-on implementation and through advisory & training.
      </p>
      <p>
        Recently, I'm launching my own consulting practice to {" "}
        <a href="/">
          help established SMBs build their own digital expertise by creating or training in-house and remote teams
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
        <Link to="https://twitter.com/itsvitoracacio">Twitter</Link> or send me
        an email at{" "}
        <a href="mailto:vitor@vitoracacio.com">vitor@vitoracacio.com</a>.
      </p>
      <p>Thanks for dropping by!</p>
      <p>- Vitor</p>
    </Page>
  );
};

export default AboutPage;
