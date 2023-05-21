const About = () => {
  return (
    <div className="About-wrap">
      <div className="content-wrap">
        <div className="content">
          <div className="name_break">
            <h1>about</h1>
            <h1>our</h1>
            <h1>app</h1>
          </div>
          <div className="text_one">
            <p>
              The first chat apps revolutionized the way people communicate
              online and played a significant role in shaping the digital
              communication landscape. One of the earliest and most notable chat
              apps was Internet Relay Chat (IRC), which was developed in 1988 by
              Jarkko Oikarinen.
            </p>
            <p>
              IRC allowed users to join chat rooms or channels and engage in
              real-time text-based conversations with other users. It became
              immensely popular during the early days of the internet and served
              as a precursor to modern chat apps.
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
    </div>
  );
};
export default About;
