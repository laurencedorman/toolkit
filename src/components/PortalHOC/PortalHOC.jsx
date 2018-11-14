import React from 'react';
import ReactDOM from 'react-dom';

const withPortal = Component => () => {
  class HOC extends React.Component<propTypes> {
    static defaultProps = { portalRoot: 'portalRoot' }

    constructor(props) {
      super(props);
      this.root = document.getElementById(props.portalRoot);
      this.el = document.createElement('div');
    }

    componentDidMount() {
      if (this.root) {
        this.root.appendChild(this.el);
      }
    }

    componentWillUnmount() {
      if (this.root) {
        this.root.removeChild(this.el);
      }
    }

    render() {
      return ReactDOM.createPortal(Component, this.el);
    }
  }

  return HOC;
};

export default withPortal;
