// @flow
import React, { Fragment, PureComponent } from 'react';
// import ReactDOM from 'react-dom';
import Icon from '../Icon';
import styles from './Modal.module.scss';

/**
 * @visibleName Modal
 */
type propTypes = {
  children: string | Node,
  content: string,
};

export default class Modal extends PureComponent<propTypes> {
  constructor(props) {
    super(props);
    this.state = { active: false }
  }

  handleKey = e => e.keyCode === 27 && this.setState({ active: false });
  handleShow = () => this.setState({ active: true });
  handleHide = () => this.setState({ active: false });

  componentDidMount() {
    document.addEventListener("keydown", this.handleKey, false);
  };

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKey, false);
  }

  renderModal = () => {
    const { content } = this.props;
    const { active } = this.state;

    if (active) {
      return (
        <div
          className={styles.modal}
          onClick={this.handleHide}
          onKeyPress={this.handleKey}>
          <div>
            <Icon
              name="close-circle"
              size="26"
              onClick={this.handleHide}
              className={styles.icon} />
            <p>{content}</p>
          </div>
        </div>
      )
    }
  };

  render() {
    const { children } = this.props;

    return(
      <Fragment>
        <span onClick={this.handleShow}>{children}</span>
        {this.renderModal()}
      </Fragment>
    )
  }
}
