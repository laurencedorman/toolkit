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
    const { children } = this.props;
    return ReactDOM.createPortal(children, this.el);
  }
}
