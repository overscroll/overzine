import React from 'react';

function DotPattern(props) {
  const space = props.space / 5 || 4;
  const width = props.width / 5 || 6;
  const scale = 0.6;
  const rotate = props.rotate || 0;
  const color = props.color || '#DAA6B5';
  const backgroundColor = props.backgroundColor || '#F1D9D9';

  const containerWidth = 2 * width + 2 * space;
  return (
      <g>
        <pattern id="dotsPattern" viewBox={`0,0,${containerWidth},${containerWidth}`} x="0" y="0" width={containerWidth} height={containerWidth} patternUnits="userSpaceOnUse" >
          <rect width={containerWidth} height={containerWidth} fill={backgroundColor} />
          <path id="path" transform={`translate(${width + space},0) scale(${width / 28})`} d="M11.4782749,1.32271318 C11.8082749,1.28871318 11.4782749,1.32271318 12.3903745,1.56805437 C19.9533745,-1.75294563 23.4225464,0.457228463 24.7165464,5.78922846 C26.4065464,12.7502285 23.9775464,17.1132285 17.0635464,19.5562285 C12.0395464,21.3302285 7.16354639,23.9682285 2.29854639,19.0892285 C0.615546393,17.4002285 -0.228453607,15.6632285 0.0535463928,13.3422285 C1.80554639,3.05122846 2.93027494,2.17971318 11.4782749,1.32271318 Z" fill={color} />
          <path id="path" transform={`translate(0, ${width + space} ) scale(${width / 28})`} d="M11.4782749,1.32271318 C11.8082749,1.28871318 11.4782749,1.32271318 12.3903745,1.56805437 C19.9533745,-1.75294563 23.4225464,0.457228463 24.7165464,5.78922846 C26.4065464,12.7502285 23.9775464,17.1132285 17.0635464,19.5562285 C12.0395464,21.3302285 7.16354639,23.9682285 2.29854639,19.0892285 C0.615546393,17.4002285 -0.228453607,15.6632285 0.0535463928,13.3422285 C1.80554639,3.05122846 2.93027494,2.17971318 11.4782749,1.32271318 Z" fill={color} />
          <path id="path" transform={`translate(0, 0 ) scale(${width / 28})`} d="M1.0576,7.0178 C6.0086,1.4738 13.1196,1.5778 19.4906,0.9118 C25.0396,0.3308 28.3516,11.5818 24.6616,17.2888 C21.3116,22.4698 9.3346,25.1898 4.0546,21.9698 C1.3496,21.4798 0.1976,19.8918 0.4886,17.1418 C0.8436,13.7788 -0.1454,10.3368 1.0576,7.0178" fill={color} />
          <path id="path" transform={`translate(${width + space}, ${width + space} ) scale(${width / 28})`} d="M1.0576,7.0178 C6.0086,1.4738 13.1196,1.5778 19.4906,0.9118 C25.0396,0.3308 28.3516,11.5818 24.6616,17.2888 C21.3116,22.4698 9.3346,25.1898 4.0546,21.9698 C1.3496,21.4798 0.1976,19.8918 0.4886,17.1418 C0.8436,13.7788 -0.1454,10.3368 1.0576,7.0178" fill={color} />
        </pattern>
        <pattern id="dots" x="0" y="0" width={containerWidth} height={containerWidth} patternTransform={`rotate(${rotate}) scale(${scale})`} patternUnits="userSpaceOnUse" >
          <rect x="0" y="0" width={containerWidth} height={containerWidth} fill="url(#dotsPattern)" />
        </pattern>
      </g>
  );
}

export default DotPattern;
