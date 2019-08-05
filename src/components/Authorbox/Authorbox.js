import React from 'react';

const Authorbox = (props) => {
  const { kicker, date, name, imageUrl } = props;
  const kickerElement = <a href='' >#{kicker}</a>;

  return (
  <div className="overzine-authorbox">
    <div className="overzine-authorbox__item">
        <img className="overzine-authorbox__image" src={imageUrl} />
        <p className="overzine-authorbox__name">Von {name}</p>
        <p className="overzine-authorbox__description">{date} — {kickerElement}</p>
    </div>
  </div>);
};

export default Authorbox;
