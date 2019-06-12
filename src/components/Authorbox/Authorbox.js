import React from 'react';

const Authorbox = (props) => (
  <div className="authors">
    <div className="authors__item">
        <h3 className="authors__headline">Über den Autor</h3>
        <img className="authors__image" src="/images/authors/authors_tobias.jpg" />
        <p className="authors__name">Tobias — @heytobey</p>
        <p className="authors__description">Seine große Leidenschaft ist das Internet. Es dauerte zwar 28 Jahre, aber dann fing er endlich an zu bloggen. Endlich!</p>  
        <a className="authors__follow" href="https://twitter.com/heytobey">follow</a>
    </div>
    <div className="authors__item">
        <h3 className="authors__headline">Folge uns auf Twitter</h3>
        <img className="authors__image" src="/images/authors/authors_overscroll.jpg" />
        <p className="authors__name">@overscroll</p>
        <p className="authors__description">Wir sind der Blog fürs digitale Zeitgeschehen. Folge uns auf Twitter und verpasse nichts!</p>  
        <a className="authors__follow" href="https://twitter.com/overscroll">follow </a>
    </div>
  </div>
);

export default Authorbox;
