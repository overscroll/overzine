import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';

class LogoDesktop extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clip: 'rect(auto, auto, auto, auto)',
    };
    this.clipLogo = this.clipLogo.bind(this);
  }

  clipLogo() {
    const section = ReactDOM.findDOMNode(this).parentElement;
    const clipTop = section.offsetTop - window.scrollY - 10;
    const clipBottom = section.offsetTop + section.offsetHeight - window.scrollY - 10;
    const clip = 'rect('+clipTop+'px, auto, '+clipBottom+'px, auto)';
    this.setState({clip: clip });
  }

  componentDidMount() {
    window.addEventListener("scroll", this.clipLogo, true);
    window.addEventListener("load", this.clipLogo, true);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.clipLogo, true);
    window.removeEventListener('load', this.clipLogo, true);
  }

  render() {
    const { props } = this;
 
    return (
        <div>
          <Link to="/frontpage">
        <div className="logoDesktop" style={{ backgroundColor: props.color, clip: this.state.clip }}></div>
        </Link>
        </div>
    );
  }
}

export default LogoDesktop;