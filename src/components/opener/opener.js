import React from 'react';

const hexToRgbA = ( hex, a ) =>  {
  var c;
  if(/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)){
      c= hex.substring(1).split('');
      if(c.length== 3){
          c= [c[0], c[0], c[1], c[1], c[2], c[2]];
      }
      c= '0x'+c.join('');
      return 'rgba('+[(c>>16)&255, (c>>8)&255, c&255].join(',')+', ' + a +')';
  }
  throw new Error('Bad Hex');
}


export default function Opener({ content: { id, headline, kicker, alignment, theme, backgroundEffect, backgroundColor, backgroundColor2, colorContrast, imageColor, imageColor2, image, imageEffect }, onArchiveTask, onPinTask }) {

  imageEffect = (['png', 'fullscreen', 'pngduotone', 'fullscreenduotone'].includes(imageEffect) ) ? imageEffect : 'png';
  backgroundEffect = (['gradient', 'zine1', 'zine2'].includes(backgroundEffect) ) ? backgroundEffect : 'gradient';

  let layer1Style = { backgroundColor: backgroundColor };
  let layer2Style = { };
  let layer3Style = { };
  let imageLayer1Style = {};
  let imageLayer2Style = {};


  if (backgroundEffect === 'gradient'){
    backgroundColor2 = (! backgroundColor2) ? '#9b9b9b': backgroundColor2; 
    layer1Style = { backgroundColor: backgroundColor }
    layer2Style = { background: `-webkit-radial-gradient(60% bottom, ellipse cover, ${hexToRgbA(backgroundColor2, 0.35)} 0%,${hexToRgbA(backgroundColor2, 0.02)} 100%)`}
  }

  if (backgroundEffect === 'zine1'){
    layer3Style = { backgroundColor: backgroundColor2 };
  }

  if (imageEffect === 'pngduotone'){
    imageLayer1Style = { backgroundColor: imageColor, WebkitMask: 'url(/images/objects/mask.png) 100%  100%/100% no-repeat' };
    imageLayer2Style = { backgroundColor: imageColor2, WebkitMask: 'url(/images/objects/mask.png) 100%  100%/100% no-repeat' };
  }

  return (
    <div className={`overzine-opener overzine-opener--background-${backgroundEffect} overzine-opener--image-${imageEffect} `}>
      <div className={`overzine-opener__layer1`} style={layer1Style} ></div>
      <div className={`overzine-opener__layer2`} style={layer2Style} ></div>
      <div className={`overzine-opener__layer3`} style={layer3Style} ></div>

      <div className={`overzine-opener__object`}>
        <div className={`overzine-opener__imagelayer1`} style={imageLayer1Style} ></div>
        <div className={`overzine-opener__imagelayer2`} style={imageLayer2Style} ></div>
        <img className={"overzine-opener__image"} src={image} />
      </div>

      <div className={`overzine-opener__image3`}></div>

      <div className={`overzine-opener__text overzine-opener__text-${alignment}`}>
        <sub className="overzine-opener__kicker" style={{ color: colorContrast }}>Backkround: {backgroundEffect} Image: {imageEffect} </sub>
        <h3 className="overzine-opener__headline">{headline } </h3>
      </div>
      <a href="#void" className="scroll" style={{ backgroundColor: colorContrast }}></a>              
    </div>
  );
}