import React from 'react';
import ReactDOM from 'react-dom';

import Poster from '../Poster/Poster';
import LogoDesktop from '../LogoDesktop/LogoDesktop';
import Authorbox from '../Authorbox/Authorbox';
import Image from '../Image/Image';
import uuidv4 from 'uuid/v4';

class Article extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.context);
    this.checkScrolling = this.checkScrolling.bind(this);
  }

  checkScrolling(e) {
    const section = ReactDOM.findDOMNode(this);
    const sectionTop = section.offsetTop;
    const sectionBottom = section.offsetTop + section.offsetHeight;
    const windowTop = window.scrollY;
    const windowBottom = window.scrollY + window.innerHeight;
    let transform = 'translate(0px, 0px)';

    // Is Visisble
    if (windowBottom > sectionTop && sectionBottom > windowTop) {
      // console.log(`:::${windowBottom} > ${sectionTop} |  ${sectionBottom} > ${windowTop} ` );
      transform = 'translate(1px, 0px)';
      if (windowTop >= sectionTop && windowBottom <= sectionBottom) {
        transform = 'translate(0px, 0px)';
        var i = 0; var
child = section;
        for (var i = 0; (child = child.previousSibling); i++);
        this.props.onAnimationComplete(i);
      }
    }
  }

  componentDidMount() {
    ReactDOM.findDOMNode(this).addEventListener('transitionEnd', this.props.onAnimationComplete);
    ReactDOM.findDOMNode(this).addEventListener('webkitTransitionEnd', this.props.onAnimationComplete);

    window.addEventListener('scroll', this.checkScrolling);
    window.addEventListener('load', this.checkScrolling);
    window.addEventListener('resize', this.checkScrolling);
  }

  componentWillUnmount() {
    ReactDOM.findDOMNode(this).removeEventListener('transitionEnd', this.props.onAnimationComplete);
    ReactDOM.findDOMNode(this).removeEventListener('webkitTransitionEnd', this.props.onAnimationComplete);

    window.removeEventListener('scroll', this.checkScrolling);
    window.removeEventListener('load', this.checkScrolling);
    window.removeEventListener('resize', this.checkScrolling);
  }

  render() {
    // Content Variables
    const content = this.props.data || {};
    const kicker = content.kicker || '#itsover';
    const headline = content.headline || 'Scrolling on the Dancefloor';
    const colorText = content.colorText || '#000000';
    const colorContrast = content.colorContrast || '#E33BB2';
    const backgroundColor = content.colorBackground || '#FBDEDB';
    const poster = content.poster || {};
    const id = uuidv4();

    // Style Variables
    const {props} = this;
    const style = this.props.style || {};
    const color = colorText;

    // Helper Variables
    const mobile = props.mobile || false;
    const classNameMoving = this.props.moving ? 'stopAnimation' : 'enableAnimation';
    const classNamePosition = this.props.position || 'current';
    const linkStyle = { borderBottomColor: 'var(--contrast-color)', boxShadow: 'inset 0 -6px 0 var(--contrast-color)' };
    const posterProps = Object.assign({}, {
      headline, kicker, backgroundColor, colorText, colorContrast,
    }, poster);

    const articleStyle = {
      color,
      backgroundColor,
      '--contrast-color': `${props.data.colorContrast}`,
      '--background-color': `${backgroundColor}`,
      '--box-color': `${props.data.colorContrast}`,
    };

    const articleClassName = `article ${classNameMoving} ${classNamePosition} `;

    return (
      <article className={articleClassName} style={articleStyle} >


      <LogoDesktop mobile={mobile} color={ props.data.colorContrast} />
          <Poster content={posterProps}/>
          <div className="scrollheading" style={{ backgroundColor: props.data.colorBackground }}></div>
          <section className="content">
            <div className="content__inner">
              <Authorbox name="Tobias Block" kicker={kicker} date="26. September 2019" imageUrl="https://assets.overscroll.com/authors/tobias.jpg" />

              <p className="text intro"> „Lorem ipsum“ hat jeder schonmal irgendwo gelesen oder sogar selbst verwendet. Doch wo kommt die Wortfolge eigentlich genau her und was soll sie überhaupt bedeuten?</p>
              <p className="text" > Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et. </p>
              <Image data={{
                url: 'https://static.highsnobiety.com/wp-content/uploads/2019/06/26131713/balmain-new-sneaker-collection-film-vitali-gelwich-10.jpg',
                width: 1200,
                height: 920,
                caption: 'Photo by XY',
                copyrightOwner: 'Highsnobiety / Vitali Gelwich',
                copyrightUrl: 'https://www.instagram.com/vitali_gelwich/',
              }} />

              <p className="text" > Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren. </p>
              <p className="text" > Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et </p>
              <div className="scroller" style={{
                width: '100%',
                height: '80px',
                overflow: 'scroll',
              }}>dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd</div>

                <p className="text" > Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et. </p>
                <p className="text" > Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren. </p>
                <p className="text" > Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et. </p>
                <p className="text" > Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren. </p>
                <p className="text" > <a href="http://rp-online.de/" style={linkStyle}>Lorem ipsum</a> dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et. </p>
                <p className="text" > Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren. </p>
                <p className="text" > Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et </p>
                <p className="text" > Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren. </p>
                <p className="text" > Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et </p>
                <p className="text" > Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren. </p>
                <p className="text" > Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et </p>
                <p className="text" > Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren. </p>
                <p className="text" > Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et </p>
                <p className="text" > Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren. </p>
                <p className="text" > Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et </p>
                <p className="text" > Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren. </p>
                <p className="text" > Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et </p>
            </div>
          </section>
      </article>
    );
  }
}

export default Article;
