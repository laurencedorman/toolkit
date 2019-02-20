// @flow
import { Component } from 'react';
import ReactDOM from 'react-dom';
import cn from 'classnames';
import styles from './Portal.module.scss';

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
    this.ismounted = true;
    if (!this.root) return;

    if (this.ismounted) {
      const portalClass = cn(styles.portalChild);

      this.el.setAttribute('class', portalClass);
      this.root.appendChild(this.el);
    }
  }

  componentWillUnmount() {
    this.ismounted = false;
    this.root.removeChild(this.el);
  }

  render() {
    const { children } = this.props;
    return ReactDOM.createPortal(children, this.el);
  }
}
