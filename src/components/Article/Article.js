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
// return array of [r,g,b,a] from any valid color. if failed returns undefined
const colorArray = (color) => {
  if (!color)
    return;
  if (color.toLowerCase() === 'transparent')
    return [0, 0, 0, 0];
  if (color[0] === '#'){
    if (color.length < 7){
      // convert #RGB and #RGBA to #RRGGBB and #RRGGBBAA
      color = '#' + color[1] + color[1] + color[2] + color[2] + color[3] + color[3] + (color.length > 4 ? color[4] + color[4] : '');
    }
    return [parseInt(color.substr(1, 2), 16),
      parseInt(color.substr(3, 2), 16),
      parseInt(color.substr(5, 2), 16),
      color.length > 7 ? parseInt(color.substr(7, 2), 16)/255 : 1];
  }
  if (color.indexOf('rgb') === -1){
    // convert named colors
    var temp_elem = document.body.appendChild(document.createElement('fictum')); // intentionally use unknown tag to lower chances of css rule override with !important
    var flag = 'rgb(1, 2, 3)'; // this flag tested on chrome 59, ff 53, ie9, ie10, ie11, edge 14
    temp_elem.style.color = flag;
    if (temp_elem.style.color !== flag)
      return; // color set failed - some monstrous css rule is probably taking over the color of our object
    temp_elem.style.color = color;
    if (temp_elem.style.color === flag || temp_elem.style.color === '')
      return; // color parse failed
    color = getComputedStyle(temp_elem).color;
    document.body.removeChild(temp_elem);
  }
  if (color.indexOf('rgb') === 0)
  {
    if (color.indexOf('rgba') === -1)
      color += ',1'; // convert 'rgb(R,G,B)' to 'rgb(R,G,B)A' which looks awful but will pass the regxep below
    return color.match(/[\.\d]+/g).map(function (a)
    {
      return +a
    });
  }
}

const colorMatrix = (color1, color2) => {
    var value = [];
    value = value.concat(
    [color1[0]/256 - color2[0]/256, 0, 0, 0, color2[0]/256]);
    value = value.concat(
    [color1[1]/256 - color2[1]/256, 0, 0, 0, color2[1]/256]);
    value = value.concat(
    [color1[2]/256 - color2[2]/256, 0, 0, 0, color2[2]/256]);
    value = value.concat([0, 0, 0, 1, 0]);
    return value;
}

export default function Opener({ content: { id, headline, kicker, alignment, background, backgroundEffect, backgroundColor, backgroundColor2, colorContrast, imageColor, imageColor2, image, imageEffect }, onArchiveTask, onPinTask }) {
  id = new Date().getTime();
  imageEffect = (['duotone', 'solid',].includes(imageEffect) ) ? imageEffect : 'solid';
  backgroundEffect = (['gradient', 'duotone', 'duotone-hard', 'solid'].includes(backgroundEffect) ) ? backgroundEffect : 'solid';
  background = ( 'zine1' === background ) ? '/images/pattern/zine1b.jpg' : background;

  var backgroundFilter =
  ( <filter id="background-filter">
      <feComponentTransfer color-interpolation-filters="sRGB">
        <feFuncR type="linear" slope="1"></feFuncR>
        <feFuncG type="linear" slope="1"></feFuncG>
        <feFuncB type="linear" slope="1"></feFuncB>
      </feComponentTransfer>
  </filter>);

  var imageFilter =
  ( <filter id="image-filter"> 
      <feComponentTransfer color-interpolation-filters="sRGB">
        <feFuncR type="linear" slope="1"></feFuncR>
        <feFuncG type="linear" slope="1"></feFuncG>
        <feFuncB type="linear" slope="1"></feFuncB>
      </feComponentTransfer>
  </filter>);


  if (backgroundEffect === 'duotone'){
    backgroundFilter = (
      <filter id="background-filter">
        <feComponentTransfer color-interpolation-filters="sRGB">
        <feFuncR type="linear" slope="1" intercept="0"></feFuncR>
        <feFuncG type="linear" slope="1" intercept="0"></feFuncG>
        <feFuncB type="linear" slope="1" intercept="0"></feFuncB>
      </feComponentTransfer>
      <feComponentTransfer color-interpolation-filters="sRGB">
        <feFuncR type="linear" slope="1"></feFuncR>
        <feFuncG type="linear" slope="1"></feFuncG>
        <feFuncB type="linear" slope="1"></feFuncB>
      </feComponentTransfer>
        <feColorMatrix id="duotone-matrix" values={colorMatrix(colorArray(backgroundColor),colorArray(backgroundColor2))} type="matrix" color-interpolation-filters="sRGB"></feColorMatrix>          
      </filter>);
  }
  if (backgroundEffect === 'duotone-hard'){
    backgroundFilter = (
      <filter id="background-filter">
        <feComponentTransfer color-interpolation-filters="sRGB">
          <feFuncR type="linear" slope="3" intercept="-1"></feFuncR>
          <feFuncG type="linear" slope="3" intercept="-1"></feFuncG>
          <feFuncB type="linear" slope="3" intercept="-1"></feFuncB>
        </feComponentTransfer>
        <feComponentTransfer color-interpolation-filters="sRGB">
          <feFuncR type="linear" slope="2"></feFuncR>
          <feFuncG type="linear" slope="2"></feFuncG>
          <feFuncB type="linear" slope="2"></feFuncB>
        </feComponentTransfer>
        <feColorMatrix id="duotone-matrix" values={colorMatrix(colorArray(backgroundColor),colorArray(backgroundColor2))} type="matrix" color-interpolation-filters="sRGB"></feColorMatrix>          
      </filter>);
  }
  if(imageEffect === 'duotone'){
    imageFilter = ( 
      <filter id="image-filter">
        <feComponentTransfer color-interpolation-filters="sRGB">
          <feFuncR type="linear" slope="1" intercept="0"></feFuncR>
          <feFuncG type="linear" slope="1" intercept="0"></feFuncG>
          <feFuncB type="linear" slope="1" intercept="0"></feFuncB>
        </feComponentTransfer>
        <feComponentTransfer color-interpolation-filters="sRGB">
          <feFuncR type="linear" slope="1"></feFuncR>
          <feFuncG type="linear" slope="1"></feFuncG>
          <feFuncB type="linear" slope="1"></feFuncB>
        </feComponentTransfer>
        <feColorMatrix id="duotone-matrix" values={colorMatrix(colorArray(imageColor),colorArray(imageColor2))} type="matrix" color-interpolation-filters="sRGB"></feColorMatrix>          
      </filter> );
  }

  const backgroundImageName = `opener-backgroundimage-${id}`;
  const imageName = `opener-image-${id}`;
  return (
    <div className={`overzine-opener overzine-opener--background-${backgroundEffect} overzine-opener--image-${imageEffect} `}>
      <svg>
        <defs>
          {backgroundFilter}
          {imageFilter}
          <radialGradient id="rgrad" cx="50%" cy="80%" r="75%" > 
            <stop offset="0%" style={ {stopColor: 'rgb(156,154,156)', stopOpacity: 0.25} } />
            <stop offset="100%" style={ {stopColor: 'rgb(156,154,156)', stopOpacity: 0.02} } />
          </radialGradient> 

          <pattern id={backgroundImageName} patternUnits="userSpaceOnUse" width="100%" height="100%">
            <image xlinkHref={background} x="0" y="0" filter="url(#background-filter)" width="100%" height="100%" preserveAspectRatio="xMidYMid slice" externalresourcesrequired="true"></image>
          </pattern>

          <pattern id={imageName} patternUnits="userSpaceOnUse" width="100%" height="100%">
            <image xlinkHref={image} x="0" y="0" filter="url(#image-filter)" width="100%" height="100%" preserveAspectRatio="xMaxYMax meet" externalresourcesrequired="true"></image>
          </pattern>
        </defs>
        <rect fill={backgroundColor} x="0" y="0" width="100%" height="100%"></rect>
        <rect fill={`url(#rgrad)`} x="0" y="0" width="100%" height="100%" preserveAspectRatio="xMaxYMax slice"></rect>
        <rect fill={`url(#${backgroundImageName})`} x="0" y="0" width="100%" height="100%"  preserveAspectRatio="xMaxYMax slice"></rect>
        <rect fill={`url(#${imageName})`} x="0" y="0" width="100%" height="100%" preserveAspectRatio="xMaxYMax slice"></rect>

      </svg>



      <div className={`overzine-opener__text overzine-opener__text-${alignment}`}>
        <sub className="overzine-opener__kicker" style={{ color: colorContrast }}>Backkround: {backgroundEffect} Image: {imageEffect} </sub>
        <h3 className="overzine-opener__headline">{headline } </h3>
      </div>
      <a href="#void" className="scroll" style={{ backgroundColor: colorContrast }}></a>              
    </div>
  );
}