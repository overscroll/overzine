import React from 'react';
import ReactDOM from 'react-dom';

import Poster from '../Poster/Poster';
import LogoDesktop from '../LogoDesktop/LogoDesktop';
import Authorbox from '../Authorbox/Authorbox';

class Article extends React.Component {
  constructor (props) {
    super(props);
  }

  checkScrolling(e){
    let section = ReactDOM.findDOMNode(this);
    let sectionTop = section.offsetTop;
    let sectionBottom = section.offsetTop + section.offsetHeight;
    let windowTop = window.scrollY;
    let windowBottom = window.scrollY+window.innerHeight;
    let transform = "translate(0px, 0px)";

    // Is Visisble
    if( windowBottom > sectionTop  && sectionBottom > windowTop ){
      //console.log(`:::${windowBottom} > ${sectionTop} |  ${sectionBottom} > ${windowTop} ` );
      transform = "translate(1px, 0px)";
      if( windowTop >= sectionTop && windowBottom <= sectionBottom ){
        transform = "translate(0px, 0px)";
        var i = 0, child = section;
        for (var i=0; (child=child.previousSibling); i++);
        this.props.onAnimationComplete(i);
      }
    }
  }

  componentDidMount() {
      ReactDOM.findDOMNode(this).addEventListener("transitionEnd", this.props.onAnimationComplete);
      ReactDOM.findDOMNode(this).addEventListener("webkitTransitionEnd", this.props.onAnimationComplete);

      window.addEventListener("scroll", this.checkScrolling.bind(this));
      window.addEventListener("load", this.checkScrolling.bind(this));
      window.addEventListener("resize", this.checkScrolling.bind(this));
  }

  render(){

    // Content Variables
    const content = this.props.data;
    const headline = content.headline || 'Scrolling on the Dancefloor';
    const kicker = content.kicker || '#itsover';
    const colorText = content.colorText || '#FBDEDB';
    const colorContrast = content.colorContrast || '#E33BB2';
    const backgroundColor = content.colorBackground || '#FBDEDB';
    const poster = content.poster || {};

    // Style Variables
    const props = this.props;
    const width = props.style.width || 375;
    const height = props.style.height ||  667;
    const left = props.style.left || 0;
    const opacity = props.style.opacity || 1;
    const transform = props.style.transform || 'translateX(0px) rotateY(0rad);';
    const transformOrigin = props.style.transformOrigin || 'left bottom 0px;';
    const color = colorText;

    // Helper Variables
    const mobile = props.mobile || false;
    const classNameMoving = this.props.moving ? 'stopAnimation' : 'enableAnimation' ;
    const classNamePosition = this.props.position || 'current';
    const linkStyle = { borderBottomColor: props.data.colorContrast, boxShadow: `inset 0 -6px 0 ${props.data.colorContrast}`}
    const posterProps = Object.assign({}, { headline, kicker, backgroundColor, colorText, colorContrast }, poster );
    const articleStyle = { width, height, left, opacity, transform, transformOrigin, color, backgroundColor };
    const articleClassName = `article ${classNameMoving} ${classNamePosition}`;

    return (  
      <article className={articleClassName} style={articleStyle} >
          <LogoDesktop mobile={mobile} color={ props.data.colorContrast} />
          <Poster content={posterProps}/>
          <div className="scrollheading" style={{backgroundColor:props.data.colorBackground}}></div>
          <section className="content">
            <div className="content__inner">
              <p className="meta"><span className="metaDate">08. August 2018</span><a href="/thema/netflix" style={linkStyle}>{props.data.kicker}</a></p>
              <p className="text intro"> „Lorem ipsum“ hat jeder schonmal irgendwo gelesen oder sogar selbst verwendet. Doch wo kommt die Wortfolge eigentlich genau her und was soll sie überhaupt bedeuten?</p>
              <p className="text" > Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et. </p>
              <p className="text" > Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren. </p>
              <p className="text" > Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et </p>
              <div className="scroller" style={{
                  backgroundColor: "#ffbe00",
                  width: "100%",
                  height: "80px",
                  overflow: "scroll"
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
                <Authorbox />
            </div>
          </section>
      </article>
    );
  }
};

export default Article;
