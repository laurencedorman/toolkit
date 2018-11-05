// @flow
import React from 'react';
import { Transition } from 'react-transition-group';
import styles from './Modal.module.scss';

/**
 * @visibleName Alert
 */
type propTypes = {
  showAlert?: boolean,
  transitionTime?: number,
  theme?: Array<'default', 'light', 'danger', 'hint'>,
  textAlert: string,
  handleClose: () => {},
  closeButton?: 'string',
};

export default class Modal extends Component<propTypes> {
  static defaultProps = {
    showAlert: false,
    transitionTime: 150,
    theme: 'default',
    closeButton: 'close',
  };

  constructor(props) {
    super(props);
    this.state = { open: false }
  }

  render() {
    const { showAlert, transitionTime, theme, textAlert, closeButton, handleClose } = this.props;

    return(
      <Transition in={showAlert} timeout={transitionTime}>
        {state => (
          <div className={`${styles.modal} ${styles[state]}`} onClick={handleClose}>
            <div className={styles[theme]}>
              <button type="button" onClick={handleClose}>{closeButton}</button>
              <p>{textAlert}</p>
            </div>
          </div>
        )}
      </Transition>
    )
  }
}
