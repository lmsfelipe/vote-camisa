import 'jsdom-global/register';
import React from 'react';
import { mount } from 'enzyme';
import ShirtDetailsContainer from './../../src/containers/ShirtDetailsContainer';

describe('ShirtDetailsContainer', () => {
	test('render the button´s text', () => {
		const container = mount(<ShirtDetailsContainer />).dive();
		const button = container.find('.ShirtDetailsContainer__button');

		console.log(container);

		button.simulate('click');

		expect(button.text()).toEqual('Vote camisa');
	});
});
