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
      lastStep: false,
    };
  }

  componentDidMount() {
    const { getActiveStep } = this.props;
    if (getActiveStep) this.setActiveStep(getActiveStep);
  }

  componentWillUnmount() {
    this.setActiveStep(undefined);
  }

  setActiveStep = activeStep => this.setState({ activeStep });

  setTotalStep = totalStep => this.setState({ totalStep });

  prevStep = () => {
    const { totalStep } = this.state;

    this.setState(prevState => ({
      direction: 'down',
      activeStep: prevState.activeStep === 0
        ? 0
        : prevState.activeStep - 1,
      lastStep: prevState.activeStep !== totalStep - 1 && false,
    }));
  };

  nextStep = () => {
    const { totalStep } = this.state;

    this.setState(prevState => ({
      direction: 'up',
      activeStep: prevState.activeStep === totalStep - 1
        ? totalStep - 1
        : prevState.activeStep + 1,
      lastStep: prevState.activeStep === totalStep - 1 && true,
    }));
  };

  render() {
    const { children } = this.props;
    const {
      activeStep, direction, lastStep, totalStep,
    } = this.state;

    return children({
      prevStep: this.prevStep,
      nextStep: this.nextStep,
      setTotalStep: this.setTotalStep,
      activeStep,
      direction,
      lastStep,
      totalStep,
    });
  }
}
