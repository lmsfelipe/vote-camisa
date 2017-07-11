import React from 'react';
import { mount } from 'enzyme';
import ItemName from './../../../src/components/ItemName/ItemName';
import 'jsdom-global/register';

describe('ItemName', () => {
	test('render the component`s p text', () => {
		const itemName = mount(<ItemName name='Santos'/>);
		expect(itemName.find('p').text()).toEqual('Santos');
	});
});
