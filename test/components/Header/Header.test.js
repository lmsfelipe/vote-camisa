import React from 'react';
import { shallow } from 'enzyme';
import Header from './../../../src/components/Header/Header';

describe('Header', () => {
	test('render the component´s h1 text', () => {
		const header = shallow(<Header />);
		expect(header.find('h1').text()).toEqual('Vote camisa');
	});
});
