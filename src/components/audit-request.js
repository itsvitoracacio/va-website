import * as React from "react";
import * as formMessageStyles from "../styles/form-message.module.scss";

const FormAuditRequest = () => {
  return (
    <form
      name="audit-form"
      method="post"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      onSubmit="submit"
      action="/audit-requested"
      className={formMessageStyles.auditForm}
    >
      <input type="hidden" name="form-name" value="audit-form" />
      <p className={formMessageStyles.message1stLine}>
        Hi, Vitor! My name is
        <input
          type="text"
          name="name"
          className={formMessageStyles.formName}
          placeholder="your name here"
        />
        .
      </p>
      <div hidden><input name="bot-field" /></div>
      <p>
        Can you help me with my website? I'll take the free audit, please. The
        link to my website is
        <input
          type="text"
          name="website"
          className={formMessageStyles.formWebsite}
          placeholder="link to your website"
        />
        .
      </p>
      <p>
        I'm looking to
        <input
          type="text"
          name="goal"
          className={formMessageStyles.formGoal}
          placeholder="your current marketing goal"
        />
        .
      </p>
      <textarea
        name="comment"
        form="audit-form"
        placeholder="Include any additional info here..."
      />
      <p>
        Could you get back to me ASAP?
        <br />
        You can reach me at
        <input
          type="email"
          name="email"
          className={formMessageStyles.formEmail}
          placeholder="your email address"
        />
        .
      </p>
      <p>Have a great day!</p>
      <button type="submit">
        Get your free website audit
      </button>
    </form>
  );
};

export default FormAuditRequest;