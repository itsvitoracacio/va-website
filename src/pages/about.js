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
        description="Vitor Acacio is an international marketing consultant specializing in building high-converting, lightning-fast websites"
      />
      <h1>Hey, I'm Vitor.</h1>
      <StaticImage
        className={aboutVitorPic}
        alt="Vitor, with a collared shirt, in a country setting, in his engagement day, in a smiling at you"
        src="../images/vitor-profile-square.jpg"
      />
      <p>
        I’m an international marketing consultant to small businesses that sell
        products and services online.
      </p>
      <p>
        In the last five years, I've helped companies{" "}
        <mark>scale their online revenue and operations</mark> — both through
        hands-on implementation and through advisory & training.
      </p>
      <p>
        Recently, I'm specializing in{" "}
        <Link to="/services">
          building high-converting, lightning-fast websites
        </Link>{" "}
        for businesses that need to generate online growth and credibility.
      </p>
      <p>
        The type of content you will find here is mainly made of{" "}
        <Link to="/blog">
          quick actionable lessons from the small business trenches
        </Link>
        , since that's where I spend most of my time.
      </p>
      <p>
        If you’re into that, I'm setting up a newsletter in the next few days so
        can let you know when I drop the next piece.
      </p>
      <p>
        And if you wanna know more, I will also start publishing what I’m up to
        and the projects I’m involved with.
      </p>
      <p>
        For personal stuff, you can reach out to me on{" "}
        <Link to="https://twitter.com/itsvitoracacio">Twitter</Link>. Now, if
        you wanna talk business, it's best to email me at{" "}
        <a href="mailto:vitor@vitoracacio.com">vitor@vitoracacio.com</a>.
      </p>
      <p>Thanks for dropping by!</p>
      <p>- Vitor</p>
    </Page>
  );
};

export default AboutPage;
