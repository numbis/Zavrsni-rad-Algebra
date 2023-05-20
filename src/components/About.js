const About = () => {
  return (
    <div className="About-wrap">
      <div className="content">
        <h1>About Page</h1>
        <div className="frist-content">
          <p>
            The first chat apps revolutionized the way people communicate online
            and played a significant role in shaping the digital communication
            landscape. One of the earliest and most notable chat apps was
            Internet Relay Chat (IRC), which was developed in 1988 by Jarkko
            Oikarinen.
          </p>
          <img src={require("./img/about.jpg")} className="img-box-about"></img>
        </div>
      </div>
    </div>
  );
};
export default About;
