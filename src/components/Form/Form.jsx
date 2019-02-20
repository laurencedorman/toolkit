// @flow
import React, { Component } from 'react';

type propTypes = { children: Node };

/* eslint-disable */
export default class Form extends Component<propTypes> {
  constructor(props) {
    super(props);
    this.state = {
      value: [],
      data: undefined,
    };
  }

  handleInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleFieldChange = (field) => (event, value, selectedKey) => {
    let data = { ...this.state.data };
    data[field] = value;
    this.setState({ data });
  };

  onSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    console.log(Array.from(data.entries()));
  };


  render() {
    const { children } = this.props;

    return (
      <form onSubmit={this.onSubmit}>
        {React.Children.map(children, child => (
          React.cloneElement(
            child,
            {
              onChange: this.handleFieldChange(child.props.name),
            },
          )
        ))}
      </form>
    );
  }
}
/* eslint-enable */
