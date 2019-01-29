import { Component } from 'react';

type propTypes = {
  children: Node,
  getActiveStep?: number,
};

export default class StepControler extends Component<propTypes> {
  static defaultProps = { getActiveStep: undefined };

  constructor(props) {
    super(props);
    this.state = {
      activeStep: 0,
      totalStep: undefined,
      direction: 'up',
    };
  }

  componentDidMount() {
    const { getActiveStep } = this.props;
    if (getActiveStep) this.setActiveStep(getActiveStep);
  }

  setActiveStep = activeStep => this.setState({ activeStep });

  setTotalStep = totalStep => this.setState({ totalStep });

  prevStep = () => {
    this.setState(prevState => ({
      direction: 'down',
      activeStep: prevState.activeStep === 0
        ? 0
        : prevState.activeStep - 1,
    }));
  };

  nextStep = () => {
    const { totalStep } = this.state;

    this.setState(prevState => ({
      direction: 'up',
      activeStep: prevState.activeStep === totalStep - 1
        ? totalStep - 1
        : prevState.activeStep + 1,
    }));
  };

  render() {
    const { children } = this.props;
    const { activeStep, direction } = this.state;

    return children({
      prevStep: this.prevStep,
      nextStep: this.nextStep,
      setTotalStep: this.setTotalStep,
      activeStep,
      direction,
    });
  }
}
