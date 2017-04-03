import 'jsdom-global/register';
import React from 'react';
import { mount } from 'enzyme';
import Header from './../../../src/components/Header/Header';

describe('Header', () => {
	test('render the component´s h1 text', () => {
		const header = mount(<Header />);
		expect(header.find('h1').text()).toEqual('Vote camisa');
	});
});
