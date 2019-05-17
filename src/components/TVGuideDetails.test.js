import React from 'react';
import {shallow} from 'enzyme'

import TVGuideDetails from './TVGuideDetails';

const testTVGuide = [
    {
      show: {
        name: 'Test Show'
      }
    }
]  

describe('<TVGuideDetails />', () => {
  it('renders component', () => {
    const wrapper = shallow(<TVGuideDetails 
      fetching={false}
      tvGuide={testTVGuide}
      error={null}
    />)
  
    expect(wrapper.find('.tvGuide-details').length).toEqual(1)
    
    expect(wrapper.find('.heading').length).toEqual(1)
    expect(wrapper.find('.heading').text()).toContain('TVGuide')

    expect(wrapper.find('.show-name').length).toEqual(1)
    expect(wrapper.find('.show-name').text()).toContain('Test Show')
  });
});
