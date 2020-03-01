import React from 'react';
import { shallow,mount} from 'enzyme';
import ColorList from './ColorList';
import { StyleSheetTestUtils } from 'aphrodite/no-important';

beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
});
afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

test('ColorList component color param select check ', () => {
    const onChange = jest.fn();
    const colorList = mount(<ColorList currentSelected={'green'} onChange={onChange} />);
    expect(colorList.find('[selected=true]').props().selected).toEqual(true);
});

test('ColorList component color param not found ', () => {
    const onChange = jest.fn();
    const colorList = mount(<ColorList currentSelected={'NO_COLOR'} onChange={onChange} />);
    expect(colorList.find('[selected=false]').length).toEqual(4);
});
