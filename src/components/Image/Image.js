import React from 'react';
import LazyLoad from 'react-lazyload';


const Image = (props) => {
  const data = props.data;
  const maxWidth = props.data.maxWidth || 1200;

  const copyright = (data.copyrightUrl)
    ? (<a href={data.copyrightUrl} className="overzine-image--credit" itemProp="name">{data.copyrightOwner}</a>)
    : (<span itemProp="name">{data.copyrightOwner}</span>);


  return (
    <figure className="overzine-image " itemProp="image" itemScope="" itemType="http://schema.org/ImageObject">
    <div className="overzine-image__aspect-ratio" style={{ maxWidth }}>
      <div className="overzine-image__aspect-ratio-fill" style={{ paddingBottom: `${data.height / data.width * 100}%` }}></div>
      <LazyLoad height={200} offset={100}>
        <img sizes="(min-width: 1260px) 1200px, (min-width: 1024px) 960px, (min-width: 640px) 100vw, 100vw" alt="" className="overzine-image__image "
        srcSet={`${data.url} 480w, ${data.url} 680w, ${data.url} 960w, ${data.url} 1200w`} src={data.url} style={{ maxWidth }} />
      </LazyLoad>
    </div>
    <small title={data.caption} itemProp="copyrightHolder" itemScope="" itemType="http://schema.org/Person">
     {copyright}
    </small>
    <meta itemProp="width" content={data.width} />
    <meta itemProp="height" content={data.height} />
    <meta itemProp="url" content={data.url} />
  </figure>
  )
};

export default Image;
