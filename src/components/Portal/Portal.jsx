import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import styles from './Portal.module.scss';

/**
 * @visibleName Portal
 */
export default class Portal extends PureComponent {
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

Portal.propTypes = { children: PropTypes.element.isRequired };
