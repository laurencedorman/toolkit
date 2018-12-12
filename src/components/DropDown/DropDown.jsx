// @flow
import React, { PureComponent } from 'react';
import { Spring, animated } from 'react-spring';
import cn from 'classnames';
import { Button, Icon } from 'components';

import styles from './DropDown.module.scss';

/**
 * @visibleName DropDown
 */
type propTypes = {
  title: string | Node,
  options: Array,
  right?: boolean,
  on: boolean,
  toggle: () => void,
  itemClick: () => void,
  className?: string,
  disabled?: boolean,
  icon?: boolean,
};

/* eslint-disable */
export default class DropDown extends PureComponent<propTypes> {
  static defaultProps = {
    right: false,
    disabled: false,
    icon: true,
    className: '',
  };

  constructor(props) {
    super(props);
    this.button = React.createRef();
    this.item = React.createRef();
    this.state = {
      buttonWidth: '',
      itemWidth: '',
    };
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKey);
  }

  componentDidUpdate(props, state) {
    if (state.buttonWidth !== state.itemWidth) {
      this.handleWidth();
    }
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKey);
  }

  handleKey = (e) => {
    const { on, toggle } = this.props;

    const keys = {
      Escape: () => {
        e.preventDefault();
        !on
          ? e.stopPropagation()
          : toggle();
      },
    };

    keys[e.key]
    && keys[e.key]();
  };

  handleWidth = (e, toggle) => {
    if (e) {
      this.setState({
        buttonWidth: this.button.current.offsetWidth,
        itemWidth: this.item.current.offsetWidth + 31,
      });
      toggle();
    }
  };

  renderOptions = (on, toggle) => {
    const { options, itemClick, right, className } = this.props;

    const container = cn(
      styles.container,
      {
        [styles.show]: on,
        [styles.right]: right,
      },
    );

    const itemOption = item => cn(
      className,
      {[styles.disabled]: item.disabled}
    );

    const Items = options.map(item => {
      return (
        <li
          key={item.title}
          className={itemOption(item)}
          data-value={item.title}
          disabled={item.disabled}
          onClick={!item.disabled ? itemClick : null}
          ref={this.item}
        >
          {item.title}
        </li>
      )
    });

    return (
      <div
        className={container}
        right={right ? 1 : 0}
      >
        <ul
          className={styles.list}
          onClick={toggle}
        >
          {Items}
        </ul>
      </div>
    );
  };

  render() {
    const { title, on, toggle, className, disabled, icon } = this.props;
    const { buttonWidth, itemWidth } = this.state;

    const wrapper = cn(
      styles.wrapper,
      className,
    );

    const iconButton = cn(
      styles.iconButton,
      { [styles.rotate]: on },
    );

    // console.log('button: ', buttonWidth);
    // console.log('item: ', itemWidth);

    return (
      <div className={wrapper}>
        {on
          && <div className={styles.closeTarget} onClick={toggle} /> }
        <Spring
          native
          reset
          config={{ tension: 250, friction: 20, mass: 0.2, precision: 1 }}
          from={{ w: buttonWidth }}
          to={{ w: itemWidth }}
        >
          {({ w }) => (
            <animated.div
              className={styles.animated}
              style={{
                maxWidth: w.interpolate(w => w)
              }}
            >
              <Button
                onClick={e => this.handleWidth(e, toggle)}
                className={styles.button}
                disabled={disabled}
                ref={this.button}
              >
                {title}
                {icon
                  && <Icon
                  name="chevron-left"
                  size="10"
                  className={iconButton}
                />}
              </Button>
            </animated.div>
          )}
        </Spring>
        {this.renderOptions(on, toggle)}
      </div>
    );
  }
}
/* eslint-enable */
