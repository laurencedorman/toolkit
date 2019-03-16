import { PureComponent } from 'react';
import PropTypes from 'prop-types';


export default class StepControler extends PureComponent {
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
    this.ismounted = true;
    const { getActiveStep } = this.props;
    if (this.ismounted) {
      if (getActiveStep) this.setActiveStep(getActiveStep);
    }
  }

  componentWillUnmount() {
    this.ismounted = false;
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

StepControler.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.func,
  ]),
  getActiveStep: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.func,
  ]),
};
