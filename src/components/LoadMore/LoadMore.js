import React from 'react';

class LoadMore extends React.Component {

  constructor(props) {
    super(props);
    this.props.loadMore = props.loadMore || () => {};
    this.handleClick = this.handleClick.bind(this);
  }

  render() {
    return (<div className="overzine-loadmore">
            <button onClick={this.handleClick}>Load More</button>
            </div>);
  }

  handleClick() {
    this.props.loadMore();
  }
}
export default LoadMore;