import React from 'react';
import ReactDOM from 'react-dom';
import Article from './Article';

class ArticleSingleView extends React.Component {

  constructor(props) {
    super(props);
    this.state = { 
        width:  400,
        height: 300,
        currentItem: 0,
        translateX: 0,
        mobile: true,
      };
  }

  updateDimensions() {
    let update_width  = window.innerWidth;
    let update_height = window.innerHeight;
    let update_mobile = window.matchMedia('screen and (max-width: 48em)').matches;
    this.setState({ width: update_width, height: update_height, mobile: update_mobile });
}

    componentDidMount() {
    document.body.classList.toggle('desktop', false);
    document.body.classList.toggle('mobile', true);
    window.addEventListener("resize", this.updateDimensions.bind(this));
    window.addEventListener("load", this.updateDimensions.bind(this));
    this.updateDimensions();
  }

  render() {
    const styles = { ...this.props.style, ...{ width: this.state.width }};
    return (
        <Article
        position="current"
        data={this.props.data}
        onAnimationComplete={this.props.onAnimationComplete}
        mobile = {this.state.mobile}
        style={styles} />
    );
  }
}

export default ArticleSingleView;
