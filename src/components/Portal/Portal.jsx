<<<<<<< HEAD
import { Component } from 'react';
import ReactDOM from 'react-dom';

/**
 * @visibleName Portal
 */
type propTypes = {
  children: Node,
  portalRoot?: string,
}

export default class Portal extends Component<propTypes> {
  static defaultProps = { portalRoot: 'portalRoot' };

  constructor(props) {
    super(props);
    this.root = document.getElementById(props.portalRoot);
    this.el = document.createElement('div');
  }

  componentDidMount() {
    if (!this.root) return;
    this.root.appendChild(this.el);
  }

  componentWillUnmount() {
    this.root.removeChild(this.el);
  }
=======
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const portalRoot = document.getElementById('portal');

export default class Portal extends Component{
  constructor(props) {
    super(props);
    this.el = document.createElement('div');
  }

  componentDidMount() { portalRoot.appendChild(this.el) };
  componentWillUnmount() { portalRoot.removeChild(this.el) };
>>>>>>> update

  render() {
    const { children } = this.props;
    return ReactDOM.createPortal(children, this.el);
  }
}
