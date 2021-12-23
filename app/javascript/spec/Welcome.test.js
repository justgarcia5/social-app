import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
// import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { mount, shallow, render } from 'enzyme';
Enzyme.configure({ adapter: new Adapter() });

import Welcome from '../components/Welcome';

describe('Welcome', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<Welcome debug />);

    expect(component).toMatchSnapshot();
  });

  it('should render correctly with no props', () => {
    const component = shallow(<Welcome/>);

    expect(component).toMatchSnapshot();
  });

  it('should render banner text correctly with given strings', () => {
    const strings = ['one', 'two'];
    const component = shallow(<Welcome list={strings} />);
    expect(component).toMatchSnapshot();
  });
});