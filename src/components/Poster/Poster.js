import React from 'react';
import uuidv4 from 'uuid/v4';

const Poster = (props) => {
  const { content } = props;

  const id = uuidv4();
  const headline = content.headline || "The Extraordinary Journey of this Headline";
  const kicker = content.kicker || "Kicker";
  const colorContrast = content.colorContrast|| '#F46772';
  const colorText = content.colorText || "#000000";
  const alignment = content.alignment || "left";

  // Foreground Image
  const image = content.image || null;
  const imageEffect = (['duotone', 'solid',].includes(content.imageEffect) ) ? content.imageEffect : 'solid';
  const imageColor = content.imageColor || null;
  const imageColor2 = content.imageColor2 || null;

  // Background Image
  const background = ( 'zine1' === content.background ) ? '/images/pattern/zine1b.jpg' : content.background;
  const backgroundEffect = (['gradient', 'duotone', 'duotone-hard', 'solid'].includes(content.backgroundEffect) ) ? content.backgroundEffect : 'solid';
  const backgroundColor = content.backgroundColor || "#96D7CD";
  const backgroundColor2 = content.backgroundColor2 || backgroundColor;
  const backgroundImageName = `opener-backgroundimage-${id}`;
  const imageName = `opener-image-${id}`;

  return (
    <div className={`overzine-opener overzine-opener--background-${backgroundEffect} overzine-opener--image-${imageEffect} `}>
      <svg className={`overzine-opener__svg`}>
        <defs>
          { SvgBackgroundFilter(backgroundEffect, backgroundColor, backgroundColor2) }
          { SvgImageFilter(imageEffect, imageColor, imageColor2) }
          <radialGradient id="rgrad" cx="50%" cy="80%" r="75%" > 
            <stop offset="0%" style={ {stopColor: 'rgb(156,154,156)', stopOpacity: 0.25} } />
            <stop offset="100%" style={ {stopColor: 'rgb(156,154,156)', stopOpacity: 0.02} } />
          </radialGradient> 

          <pattern id={backgroundImageName} patternUnits="userSpaceOnUse" width="100%" height="100%">
            <image xlinkHref={background} x="0" y="0" filter="url(#background-filter)" width="100%" height="100%" preserveAspectRatio="xMidYMid slice" externalResourcesRequired="true"></image>
          </pattern>

          <pattern id={imageName} patternUnits="userSpaceOnUse" width="100%" height="100%">
            <image xlinkHref={image} x="0" y="0" filter="url(#image-filter)" width="100%" height="100%" preserveAspectRatio="xMaxYMax meet" externalResourcesRequired="true"></image>
          </pattern>
        </defs>
        <rect fill={backgroundColor} x="0" y="0" width="100%" height="100%"></rect>
        <rect fill={'url(#rgrad)'} x="0" y="0" width="100%" height="100%" preserveAspectRatio="xMaxYMax slice"></rect>
        <rect fill={`url(#${backgroundImageName})`} x="0" y="0" width="100%" height="100%"  preserveAspectRatio="xMaxYMax slice"></rect>
        <rect fill={`url(#${imageName})`} x="0" y="0" width="100%" height="100%" preserveAspectRatio="xMaxYMax slice"></rect>
      </svg>

      <div className={`overzine-opener__text overzine-opener__text-${alignment}`}>
        <sub className="overzine-opener__kicker" style={{ color: colorContrast }}>{kicker}</sub>
        <h3 className="overzine-opener__headline"  style={{ color: colorText }}>{headline}</h3>
      </div>

      <svg className="overzine-opener__swipeup" width="79px" height="33px" viewBox="0 0 79 33" version="1.1" xmlns="http://www.w3.org/2000/svg" >
      <g id="arrow" stroke="none" fill="none" fillRule="evenodd">
            <polyline
              id="Path-2"
              transform="translate(36.750000, 11.000000) scale(-0.5, 0.5) rotate(-180.000000) translate(-36.750000, -11.000000) "
              stroke={colorContrast} strokeWidth="5" points="0 0 35.5 22 73.5 1.5"
            />
      </g>
    </svg>
    </div>
  );
};

// Help Function

const SvgBackgroundFilter = (backgroundEffect, backgroundColor, backgroundColor2) => {
  switch (backgroundEffect) {
    case 'duotone': return (
      <filter id="background-filter">
        <feComponentTransfer colorInterpolationFilters="sRGB">
        <feFuncR type="linear" slope="1" intercept="0"></feFuncR>
        <feFuncG type="linear" slope="1" intercept="0"></feFuncG>
        <feFuncB type="linear" slope="1" intercept="0"></feFuncB>
      </feComponentTransfer>
      <feComponentTransfer colorInterpolationFilters="sRGB">
        <feFuncR type="linear" slope="1"></feFuncR>
        <feFuncG type="linear" slope="1"></feFuncG>
        <feFuncB type="linear" slope="1"></feFuncB>
      </feComponentTransfer>
        <feColorMatrix id="duotone-matrix" values={colorMatrix(colorArray(backgroundColor),colorArray(backgroundColor2))} type="matrix" colorInterpolationFilters="sRGB"></feColorMatrix>          
      </filter>);

    case 'duotone-hard': return (
      <filter id="background-filter">
        <feComponentTransfer colorInterpolationFilters="sRGB">
          <feFuncR type="linear" slope="3" intercept="-1"></feFuncR>
          <feFuncG type="linear" slope="3" intercept="-1"></feFuncG>
          <feFuncB type="linear" slope="3" intercept="-1"></feFuncB>
        </feComponentTransfer>
        <feComponentTransfer colorInterpolationFilters="sRGB">
          <feFuncR type="linear" slope="2"></feFuncR>
          <feFuncG type="linear" slope="2"></feFuncG>
          <feFuncB type="linear" slope="2"></feFuncB>
        </feComponentTransfer>
        <feColorMatrix id="duotone-matrix" values={colorMatrix(colorArray(backgroundColor),colorArray(backgroundColor2))} type="matrix" colorInterpolationFilters="sRGB"></feColorMatrix>          
      </filter>);

    default: return (
      <filter id="background-filter">
        <feComponentTransfer colorInterpolationFilters="sRGB">
          <feFuncR type="linear" slope="1"></feFuncR>
          <feFuncG type="linear" slope="1"></feFuncG>
          <feFuncB type="linear" slope="1"></feFuncB>
        </feComponentTransfer>
      </filter>);
  }
};

const SvgImageFilter = (imageEffect, imageColor, imageColor2) => {
  switch (imageEffect) {
    case 'duotone': return ( 
      <filter id='image-filter'>
        <feComponentTransfer colorInterpolationFilters='sRGB'>
          <feFuncR type="linear" slope="1" intercept="0"></feFuncR>
          <feFuncG type="linear" slope="1" intercept="0"></feFuncG>
          <feFuncB type="linear" slope="1" intercept="0"></feFuncB>
        </feComponentTransfer>
        <feComponentTransfer colorInterpolationFilters='sRGB'>
          <feFuncR type="linear" slope="1"></feFuncR>
          <feFuncG type="linear" slope="1"></feFuncG>
          <feFuncB type="linear" slope="1"></feFuncB>
        </feComponentTransfer>
        <feColorMatrix id="duotone-matrix" values={colorMatrix(colorArray(imageColor),colorArray(imageColor2))} type="matrix" colorInterpolationFilters="sRGB"></feColorMatrix>          
      </filter>);

    default: return (
      <filter id="image-filter">
        <feComponentTransfer colorInterpolationFilters="sRGB">
          <feFuncR type="linear" slope="1"></feFuncR>
          <feFuncG type="linear" slope="1"></feFuncG>
          <feFuncB type="linear" slope="1"></feFuncB>
        </feComponentTransfer>
      </filter>);
  }
};


// return array of [r,g,b,a] from any valid color. if failed returns undefined
const colorArray = (color) => {
  if (!color)
    return;
  if (color.toLowerCase() === 'transparent')
    return [0, 0, 0, 0];
  if (color[0] === '#')
  {
    if (color.length < 7)
    {
      // convert #RGB and #RGBA to #RRGGBB and #RRGGBBAA
      color = '#' + color[1] + color[1] + color[2] + color[2] + color[3] + color[3] + (color.length > 4 ? color[4] + color[4] : '');
    }
    return [parseInt(color.substr(1, 2), 16),
      parseInt(color.substr(3, 2), 16),
      parseInt(color.substr(5, 2), 16),
      color.length > 7 ? parseInt(color.substr(7, 2), 16)/255 : 1];
  }
  if (color.indexOf('rgb') === -1)
  {
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
};

export default Poster;
