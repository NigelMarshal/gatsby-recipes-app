import React from "react"
import Layout from "../components/Layout"

const Contact = () => {
  return (
    <Layout>
      <main className="page">
        <section className="contact-page">
          <article className="contact-info">
            <h3>Get in touch</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Distinctio ea voluptatum vero eveniet tempore consequatur
              repudiandae voluptate nam. Odio natus maiores, labore corrupti
              iusto odit perferendis consequatur obcaecati quae accusamus, vitae
            </p>
            <p>Lorem ipsum dolor sit amet.</p>
          </article>
          <article>
            <form className="form contact-form">
              <div className="form-row">
                <label htmlFor="name">Your Name</label>
                <input type="text" name="name" id="name" />
              </div>
              <div className="form-row">
                <label htmlFor="email">Your email</label>
                <input type="text" name="email" id="email" />
              </div>
              <div className="form-row">
                <label htmlFor="message">message</label>
                <textarea name="message" id="message"></textarea>
              </div>
              <button type="submit" className="btn block">
                Submit
              </button>
            </form>
          </article>
        </section>
      </main>
    </Layout>
  )
}

export default Contact
