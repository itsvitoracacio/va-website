import * as React from "react";
import { Link } from 'gatsby'
import Page from "../templates/page";
import Metadata from "../components/metadata";

const PrivacyNotice = () => {
  return (
    <Page>
      <Metadata
        title="Privacy Notice"
        description="This is how this website handles data from its users. TL;DR: we only collect data that you actively submit. Our third party providers collect essential data to be able to provide their services and to comply with regulations."
      />
      <h1>Privacy Notice</h1>
      <p>At the moment, <Link to="/services">this is the only page that lets me collect any data from you</Link>. And I don’t use any type of website activity tracker, so the only data that I collect is what you actively submit.</p>
      <p>They are: your <strong>name</strong>, <strong>email address</strong>, <strong>website url</strong> and <strong>marketing goal</strong>. I’ll never sell or share your data with anyone, or use it to spam you.</p>
      <p>If you wish to stop receiving my emails for whatever reason, <span class="yellow-u">you can do so at anytime</span>. I can also delete the data I have on you, if you want. Just ask me on <a href="mailto:vitor@vitoracacio.com">vitor@vitoracacio.com</a>.</p>
      <p>As for the third party providers that help me run this website:</p>
      <ul>
        <li><em>ConvertKit</em> powers my email communication. They say that <a href="https://convertkit.com/privacy">they won’t sell your data</a>, but they may share it with their service providers, who also need to comply with their privacy policy.</li>
        <li><em>Netlify</em> hosts this website. They say <a href="/">they collect some data on you</a>, including logs of IP addresses, to comply with legal obligations and to maintain security of the service.</li>
        <li>I wasn’t able to find out whether <em>Namecheap</em> <a href="https://www.namecheap.com/legal/general/privacy-policy/">collects data on you or not</a>. They’re the ones who provide me the domain name.</li>
      </ul>
      <p>All in all, this is still considerably less data collection than the average website we all use daily.</p>
      <p>If any of the above changes at some point, I’ll update this page as well.</p>
      <p>- Vitor</p>
    </Page>
  );
};

export default PrivacyNotice;