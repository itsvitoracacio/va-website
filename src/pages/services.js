import * as React from "react";
import { Link } from "gatsby";
import Lander from "../templates/lander";
import "../styles/layout.scss";
import { sectionInner } from "../styles/page.module.scss";
import Metadata from "../components/metadata";
import * as landerStyles from "../styles/lander.module.scss";

const ServicesPage = () => {
  return (
    <Lander>
      <Metadata
        title="Services"
        description="Vitor Acacio is an international marketing consultant specializing in building high-converting, lightning-fast websites"
      />
      <section>
        <div className={sectionInner}>
          <p>Hey, I'm Vitor —</p>
          <p>And let me ask you something...</p>
          <h3>
            Does your website bring in more customers or does it repel them?
          </h3>
          <p>
            I know it sounds a bit dramatic when put like this, but it’s usually
            one or the other. And you can measure it.
          </p>
          <p>
            See, <a href="/">it takes around 0.05 seconds for us to decide</a>{" "}
            whether we're going to stay on a website or leave it for the
            competition.
          </p>
          <p>
            And if your page takes more than 3 seconds to load,{" "}
            <a href="/">you've already lost 53% of your visitors</a> right then.
          </p>
        </div>
      </section>
      <section>
        <div className={sectionInner}>
          <h3>But why does this matter to you?</h3>
          <p>
            Well, just having any sort of website up is not enough anymore. Even
            if you're putting money and effort into online marketing campaigns.
          </p>
          <p>
            Because the truth is,{" "}
            <span class="red-u">
              you might be burning your hard earned money
            </span>{" "}
            trying to make your marketing strategy work on a broken site.
          </p>
          <p>
            If it takes <em>just a bit too long to load</em> and you're paying
            for traffic, that's more than half your advertising budget down the
            drain.
          </p>
          <p>
            <mark>That's far from ideal, right?</mark>
          </p>
          <p>
            And we're only talking about performance here... Not to mention
            responsiveness, conversion, SEO, accessibility and much more.
          </p>
          <p>
            I know. This sounds like a lot. And you can't afford to stop your
            day-to-day management activities to take care of all this stuff.
          </p>
          <p>Well...</p>
        </div>
      </section>
      <section>
        <div className={sectionInner}>
          <h2>Here's how I can help you:</h2>
          <p>
            Over the last 5 years I've specialised in building and growing
            online businesses in various industries.
          </p>
          <p>That includes:</p>
          <ul className={landerStyles.previousProjectsList}>
            <li class={landerStyles.clothesDesigner}>
              Building a new lead acquisition system for a celebrity clothes
              designer
            </li>
            <li class={landerStyles.softwareCompany}>
              Creating the full marketing strategy for a software company
            </li>
            <li class={landerStyles.ecommerceNetwork}>
              And managing a network of eCommerce websites
            </li>
          </ul>
          <p>
            And a crucial step in all those projects was building a new website,
            or improving an existing one.
          </p>
          <p>
            But <span class="yellow-u">on every single project</span>, I came
            across some variation of the same scenario:
          </p>
          <p>
            You see, most small businesses got a website made back when they
            opened up shop several years ago...
          </p>
          <p>And didn't even touch it again.</p>
          <p>
            <span class="red-u">(Is this you?)</span>
          </p>
          <p>
            <mark>
              The main issue, really, is that you end up missing out on the many
              benefits that a powerful website can bring to your business.
            </mark>
          </p>
          <p>
            This is why, after years working with full marketing strategies with
            many moving pieces, I decided to narrow it down.
          </p>
          <p>
            And by specializing in building websites with a cutting edge structure,
            I can make sure that they'll be{" "}
            <span class="yellow-u">
              100% ready for that profitable marketing strategy you need to deploy
            </span>
            .
          </p>
          <p>
            So in order to build a stunning portfolio on this specific area as
            fast as I can, I came up with a very good offer that I can only make available to a few small businesses...
          </p>
        </div>
      </section>
      <section>
        <div className={sectionInner}>
          <h3>Here's what your new website can help you achieve:</h3>
          <ul className={landerStyles.benefitsList}>
            <li class={landerStyles.benefitCard}>
              <h3>Client Acquisition System</h3>
              <p>
                Stop relying on word of mouth and treating your campaigns as
                one-offs. Have all your marketing activities work as an engine.
              </p>
            </li>
            <li class={landerStyles.benefitCard}>
              <h3>High-Converting Design</h3>
              <p>
                With a direct path leading your visitor to the sale, you're able
                to get a higher return on each dollar you put into marketing.
              </p>
            </li>
            <li class={landerStyles.benefitCard}>
              <h3>Market Credibility</h3>
              <p>
                Control the story being told about your business. The way
                customers perceive your brand is key for differentiation.
              </p>
            </li>
            <li class={landerStyles.benefitCard}>
              <h3>Business Development</h3>
              <p>
                Engage with your visitors in different ways based on how close
                they are to buying from you.{" "}
              </p>
            </li>
            <li class={landerStyles.benefitCard}>
              <h3>Paid Ads & SEO Results</h3>
              <p>
                Implement any traffic source the right way. You'll be able to
                tweak your efforts based on accurate data and aim for a higher
                ROI.
              </p>
            </li>
            <li class={landerStyles.benefitCard}>
              <h3>Less Business Headaches</h3>
              <p>
                With your new online hub, It's been quite a while now since SEO
                isn't only keywords and metatags anymore. More than never,
                google cares about the user experience. That's why you need a
                website that's fast, responsive, accessible.
              </p>
            </li>
          </ul>
          <p>
            Of course each website is treated as a different project. And the
            solution is tailored to the specific needs and goals of each
            business.
          </p>
          <p>
            But no matter how unique a website needs to be, top notch quality
            goes across the board.
          </p>
          <div className={landerStyles.featuresListWrapper}>
            <div className={landerStyles.featuresInner}>
              <p>All websites include:</p>
              <ul className={landerStyles.featuresList}>
                <li>Fresh & up-to-date design</li>
                <li>Copy reviewed by an experienced marketer</li>
                <li>All pages custom coded</li>
                <li>Essential on-page SEO</li>
                <li>Lightning-fast performance</li>
                <li>3-week delivery</li>
                <li>30-day support, including changes</li>
              </ul>
            </div>
          </div>
          <p>
            And I'm offering this to you{" "}
            <mark>at a 50% discount, starting at only $1,500</mark> right now.
          </p>
          <p>
            But as soon as I have a robust portfolio for this service, I'll
            begin marketing it so I'll need to raise the prices.
          </p>
          <p>
            As for this current offer, I can only keep it going until my
            schedule is full. So{" "}
            <span class="red-u"> you do not want to miss out</span>.
          </p>
        </div>
      </section>
      <section>
        <div className={sectionInner}>
          <h2>Interested? Alright, here's what you need to do</h2>
          <p>
            Scrolling down a bit more, you'll see{" "}
            <span class="yellow-u">a pre-written message from you to me</span>,
            requesting a free audit of your current website. It comes with
            absolutely no obligation of us working together.
          </p>
          <p>
            We start with the audit in order to assess how far your current
            online strategy is from where you want your business to get to.
          </p>
          <p>
            So fill out the blank spaces in that message below, click the
            confirmation button and I'll get back to you right away.
          </p>
          <p>
            <span class="yellow-u">
              If you don't have a website yet, that's okay
            </span>
            . There's a field in the message for additional comments, so you can
            mention it there.
          </p>
          <h2 id="free-audit-message" className={landerStyles.freeAudit}>Request your free website audit</h2>
          <div>
            <form data-netlify="true" name="audit-form" id="audit-form" className={landerStyles.auditForm}>
              <p className={landerStyles.message1stLine}>
                Hi, Vitor! My name is
                <input
                  type="text"
                  name="name"
                  className={landerStyles.formName}
                  placeholder="your name here"
                />
                .
              </p>
              <p>
                Can you help me with my website? I'll take the free audit,
                please. The link to my website is
                <input
                  type="text"
                  name="website"
                  className={landerStyles.formWebsite}
                  placeholder="link to your website"
                />
                .
              </p>
              <p>
                I'm looking to
                <input
                  type="text"
                  name="goal"
                  className={landerStyles.formGoal}
                  placeholder="your current marketing goal"
                />
                .
              </p>
              <textarea
                name="comment"
                form="audit-form"
                placeholder="Include any additional info here..."
              ></textarea>
              <p>
                Could you get back to me ASAP?
                <br />
                You can reach me at
                <input
                  type="email"
                  name="email"
                  className={landerStyles.formEmail}
                  placeholder="your email address"
                />
                .
              </p>
              <p>Have a great day!</p>
              <button>
                <Link href="/">
                  <input
                    type="button"
                    className={landerStyles.formAuditSubmit}
                    value="Get your free website audit"
                  />
                </Link>
              </button>
            </form>
          </div>
        </div>
      </section>
    </Lander>
  );
};

export default ServicesPage;
