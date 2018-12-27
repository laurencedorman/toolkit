import React, { Component } from 'react';
import { Wrapper } from 'components';

/* eslint-disable */
export default class Tabs extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { children } = this.props;

    return (
      <Wrapper>
        <Wrapper>top</Wrapper>
        <Wrapper>{children}</Wrapper>
      </Wrapper>
    );
  }
}

/* eslint-enable */
