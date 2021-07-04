import * as React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import * as landerStyles from "../styles/lander.module.scss";

const Lander = ({ children }) => {
  return (
    <Layout>
      <section className={landerStyles.welcomeSection}>
        <div className={landerStyles.innerWrapper}>
          <div className={landerStyles.welcomeContainer}>
            <h1>
              Are you feeling{" "}
              <span class="red-circle">
                stuck
                <svg viewBox="0 0 70 36">
                  <path d="M6.9739 30.8153H63.0244C65.5269 30.8152 75.5358 -3.68471 35.4998 2.81531C-16.1598 11.2025 0.894099 33.9766 26.9922 34.3153C104.062 35.3153 54.5169 -6.68469 23.489 9.31527" />
                </svg>
              </span>{" "}
              with online <span class="yellow-u">marketing & sales?</span>
            </h1>
            <h2>
              You might be wasting your time and money trying to make it work on a broken site. Get your <strong>high-converting, lightning-fast website</strong> built by a
              marketing pro.
            </h2>
            <div>
              <button type="button">
                <Link to="/">Get a free audit of your website</Link>
              </button>
            </div>
          </div>
        </div>
      </section>
      {children}
    </Layout>
  );
};

export default Lander;
