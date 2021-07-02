import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import Page from "../components/page";
import { sectionInner } from "../components/page.module.css";
import { aboveTheFold, aboutVitorPic } from "../components/page.module.css";

const AboutPage = () => {
  return (
    <Page>
      <section className={aboveTheFold}>
        <div className={sectionInner}>
          <h1>Hey, I'm Vitor.</h1>
          <StaticImage
            className={aboutVitorPic}
            alt="Vitor, with a collared shirt, in a country setting, in his engagement day, in a smiling at you"
            src="../images/vitor-profile-square.jpg"
          />
          <p>
            I’m an international marketing consultant to small businesses that sell products and services online.
          </p>
          <p>
            In the last five years, I've helped companies{" "}
            <mark>scale their online revenue and operations</mark> — both through hands-on implementation and through advisory & training.
          </p>
          <p>
            Recently, I'm specializing in{" "}
            <Link to="/">
              building high-converting, lightning-fast websites
            </Link>{" "}
            for businesses that need to generate online growth and credibility.
          </p>
          <p>
            The type of content you will find here is mainly made of{" "}
            <Link to="/">
              quick actionable lessons from the small business trenches.
            </Link>
          </p>
          <p>
            If you’re into that, I can <Link to="/">let you know</Link> when I drop the next piece.
          </p>
          <p>
            And if you wanna know more, this is{" "}
            <Link to="/">what I’m up to</Link> and the projects I’m involved with.
          </p>
          <p>
            For personal stuff, you can reach out to me on{" "}
            <Link to="https://twitter.com/itsvitoracacio">Twitter</Link>. Now, if you wanna talk business, it's best to email me at
            vitor@vitoracacio.com.
          </p>
          <p>Thanks for dropping by!</p>
          <p>- Vitor</p>
        </div>
      </section>
    </Page>
  );
};

export default AboutPage;
