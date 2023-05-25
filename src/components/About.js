const About = () => {
  return (
    <div className="About-wrap">
      <div className="content-wrap">
        <div className="content">
          <div className="name_break">
            <h1>About</h1>
            <h1>Our</h1>
            <h1>App</h1>
          </div>
          <div className="text_one">
            <p>
              The first chat apps revolutionized the way people communicate
              online and played a significant role in shaping the digital
              communication landscape. One of the earliest and most notable chat
              apps was Internet Relay Chat (IRC), which was developed in 1988 by
              Jarkko Oikarinen.
            </p>

            <button>Find out more</button>
          </div>

          <div>
            <div className="header-img">
              <img
                src={require("./img/about.jpg")}
                className="img-box-about"
              ></img>
            </div>
          </div>
        </div>
      </div>

      <div className="content-two-wrap">
        <div className="content-two">
          <div className="people_gallery">
            <img
              src={require("./img/image01.png")}
              className="img-box-about girl_1"
            ></img>
            <img
              src={require("./img/image01.png")}
              className="img-box-about girl_2"
            ></img>

            <img
              src={require("./img/image01.png")}
              className="img-box-about girl_3"
            ></img>
          </div>
          <div className="content_text">
            <h3>Our team</h3>
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words
            </p>
            <button>Read more</button>
          </div>
        </div>
      </div>

      <div className="app-content-wrap">
        <div className="app-content">
          <div className="man-with-phone">
            <img
              src={require("./img/man-with-phone.png")}
              className="img-box-about girl_3"
            ></img>
          </div>
          <div className="download-content">
            <h2>50% OFF ON EVERY DOWNLOAD NOW OUR APP</h2>
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
            </p>
            <div className="google-apple-store">
              <img
                src={require("./img/play-store.png")}
                className="img-download "
              ></img>
              <img
                src={require("./img/app-store.png")}
                className="img-download "
              ></img>
            </div>
          </div>
        </div>
      </div>
      <div className="app-form-wrap">
        <div className="app-form">
          <h3>Get in touch...</h3>
          <form>
            <input
              type="text"
              id="fname"
              name="fname"
              placeholder="Name"
            ></input>
            <input
              type="number"
              id="lname"
              name="lname"
              placeholder="Phone number"
            ></input>
            <input
              type="email"
              id="lname"
              name="lname"
              placeholder="email"
            ></input>
            <textarea name="comment" form="usrform">
              Enter text here...
            </textarea>
            <input
              type="submit"
              value="Submit"
              className="submit-button"
            ></input>
          </form>
        </div>
        <div className="find-us">
          <div className="icon">
            <img src={require("./img/location.png")} className="icons "></img>
            <p> Lorem Ipsum 31 Cro</p>
          </div>
          <div className="icon">
            <img src={require("./img/call.png")} className="icons "></img>
            <p>(+01) 1234567890</p>
          </div>
          <div className="icon">
            <img src={require("./img/envelope.png")} className="icons "></img>
            <p>mail@domain.com</p>
          </div>
        </div>
        <div className="google_map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d89414.35275452383!2d18.688858849999995!3d45.5463318!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475ce7a869728075%3A0x5b8c725621a41195!2sOsijek!5e0!3m2!1shr!2shr!4v1685019285298!5m2!1shr!2shr"
            width="600"
            height="450"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};
export default About;
