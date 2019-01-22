import React, { Component } from 'react';

const StepController = (WrappedComponent) => {
  class Controler extends Component {
    constructor(props) {
      super(props);
      this.state = {
        steps: undefined,
        activeStep: 0,
      };
    }

    prevStep = () => {
      this.setState(prevState => ({
        activeStep: prevState.activeStep - 1,
      }));
    };

    nextStep = () => {
      this.setState(prevState => ({
        activeStep: prevState.activeStep + 1,
      }));
    };

    render() {
      const { steps, activeStep } = this.state;

      return (
        <WrappedComponent
          {...this.props}
          steps={steps}
          activeStep={activeStep}
          prevState={this.prevStep}
          nextStep={this.nextStep}
        />
      );
    }
  }
  return Controler;
};

export default StepController;
