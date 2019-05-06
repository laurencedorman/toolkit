import React from 'react';
import { shallow } from 'enzyme';
import Link from '../Link';

describe('Link', () => {
  it('should display an anchor tag if href in props', () => {
    const wrapper = shallow(<Link href="http://google.fr">Google</Link>);

    expect(wrapper.type()).toEqual('a');
    expect(wrapper).toMatchSnapshot();
  });

  it('should display a button tag if onClick in props', () => {
    const wrapper = shallow(<Link onClick={() => null}>Click me</Link>);

    expect(wrapper.type()).toEqual('button');
    expect(wrapper.find('[type="button"]')).toHaveLength(1);
    expect(wrapper).toMatchSnapshot();
  });

  it('should pass through props correctly', () => {
    const wrapper = shallow(
      <Link target="_blank" alt="Some alt text" href="http://google.fr">
        Google
      </Link>
    );

    expect(wrapper.find('[target="_blank"]')).toHaveLength(1);
    expect(wrapper.find('[alt="Some alt text"]')).toHaveLength(1);
  });
});
