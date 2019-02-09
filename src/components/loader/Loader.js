import React from 'react';
import Spinner from './Spinner';

export default class Loader extends React.Component {
  constructor(props) {
    super(props);
    this.ref = React.createRef();
  }

  static defaultProps = {
    component: 'div',
    loadedClassName: 'contentLoaded',
    parentClassName: 'loader',
  };

  componentWillReceiveProps(nextProps) {
    // console.log(this.ref);
  }

  componentDidUpdate() {
    if (this.ref.current) {
      console.log(this.ref.current.clientHeight);
    }
  }

  render() {
    const { children } = this.props;
    let props;
    if (this.props.loading) {
      props = {
        key: 'content',
        className: `${this.props.parentClassName} invisible`,
        ref: this.ref,
      };
      const El = React.createElement(this.props.component, props, children);

      return React.createElement(
        this.props.component,
        {
          className: 'relative',
          style: { display: 'flex', alignItems: 'center', justifyContent: 'center' },
        },
        [<Spinner className="absolute" key="loader" />, El],
      );
    } else {
      props = { key: 'content', className: `${this.props.loadedClassName} visible` };
      return React.createElement(this.props.component, props, children);
    }
  }
}
