import React from 'react';
import '../../index.css'
import avatar from '../../assets/images/avatar.jpg';


const AboutMe = () => (
  <div className="about_me__wrapper">
    <img className="about_me__avatar"
      src={avatar}
      alt="Marlena">
    </img>
    <h1>Witam na mojej stronie</h1>
    <p>Skoro już tu jesteś prawdopodobnie widziałeś już moje CV i zastanawiasz się czy będę pasowała do Twojego zespołu. Zatem poznajmy się!</p>
    <div className="about_me_social_media_wrapper">
      <a href="www.facebook.pl">Facebook</a>
    </div>
  </div>
)

export default AboutMe;