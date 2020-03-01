import React from 'react';
import {shallow} from 'enzyme';
import {Note} from './Note';
import {StyleSheetTestUtils} from 'aphrodite/no-important';

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});
afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

test('Note component requires deleteCB as function and input text ', () => {
  const deleteCB = jest.fn();
  const noteList = shallow(<Note text={'TEXT'} color={'COLOR'} deleteCB={deleteCB}/>);
  expect(noteList.text()).toEqual('TEXTDELETE');
});

test('Missing input text in Note component', () => {
  const deleteCB = jest.fn();
  const noteList = shallow(<Note color={'COLOR'} deleteCB={deleteCB}/> );
  expect(noteList.text()).toEqual('');
});

test('Missing deleteCB function in Note component', () => {
  const deleteCB = jest.fn();
  const noteList = shallow(<Note color={'COLOR'} deleteCB={deleteCB}/> );
  expect(noteList.text()).toEqual('');
});