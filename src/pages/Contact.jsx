import React from "react";
import { FaInstagram, FaTwitter, FaGithub } from "react-icons/fa";
import { useForm, ValidationError } from "@formspree/react";

export default function Contact() {
  const [state, handleSubmit] = useForm("mvoyvddb");

  return (
    <div className="container py-5 contact-page">
      <div className="text-center">
        <h1 className="t-primary">Contact me</h1>
        <p className="text-secondary">
          Feel free to contact me anytime by using my details down below.
        </p>
      </div>
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-6">
            {state.succeeded ? (
              <div className="text-dark h5 text-center alert alert-success">
                Submitted !
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <label className="text-secondary bold" htmlFor="email">
                  Email Address
                </label>
                <input
                  className="form-control"
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Your email.."
                />
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                />
                <textarea
                  placeholder="Message here.."
                  className="form-control mt-4"
                  id="message"
                  name="message"
                  rows={5}
                />
                <ValidationError
                  prefix="Message"
                  field="message"
                  errors={state.errors}
                />
                <button
                  className="btn btn-green w-75 mt-4"
                  type="submit"
                  disabled={state.submitting}
                >
                  Send message
                </button>
              </form>
            )}
          </div>
          <div className="col-6 text-center text-secondary">
            <div className="mb-3 bold">Movie site by Harmony Chikari</div>
            <a className="d-block" href="tel:+27835141538">
              Phone number : +27 83 514 1538
            </a>
            <a className="d-block" href="mailto:harmochiky2@gmail.com">
              Email : harmochiky2@gmail.com
            </a>
            <div className="mt-3 d-flex icon-section justify-content-center align-items-center">
              <span>Follow me on:</span>
              <a className="d-block ml-2" href="https://github.com/harmochiky">
                <FaGithub />
              </a>
              <a className="d-block mx-2" href="http://twitter.com/chikx_12">
                <FaTwitter />
              </a>
              <a className="d-block" href="https://www.instagram.com/chikx_12">
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
