// @flow
import { Component } from 'react';
import ReactDOM from 'react-dom';
import styles from './Portal.module.scss';

/**
 * @visibleName Portal
 */
type propTypes = {
  children: Node,
}

export default class Portal extends Component<propTypes> {
  constructor(props) {
    super(props);
    this.el = document.createElement('div');
    this.el.setAttribute('class', styles.portal);
    document.body.appendChild(this.el);
  }

  componentWillUnmount() {
    document.body.removeChild(this.el);
  }

  render() {
    const { children } = this.props;
    return ReactDOM.createPortal(children, this.el);
  }
}
