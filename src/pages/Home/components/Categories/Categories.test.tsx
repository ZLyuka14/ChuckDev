import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Categories from './Categories';

describe('Categories component', () => {
  test('Categories renders with only "random" button if categories array is empty', () => {
    const initialState: string[] = [];
    const mockStore = configureStore();
    const store = mockStore(initialState);
    render(
      <Provider store={store}>
        <Categories categories={initialState} />
      </Provider>
    );
    expect(screen.getAllByRole('button')).toHaveLength(1);
    expect(screen.getByText('random')).toBeInTheDocument();
  });
  test('Categories renders with given categories array', () => {
    const initialState: string[] = [
      'testCategory01',
      'testCategory02',
      'testCategory03',
      'testCategory04',
      'testCategory05',
    ];
    const mockStore = configureStore();
    const store = mockStore(initialState);
    render(
      <Provider store={store}>
        <Categories categories={initialState} />
      </Provider>
    );
    expect(screen.getByText('Categories')).toBeInTheDocument();
    expect(screen.getAllByRole('button')).toHaveLength(6);
    expect(screen.getByText('random')).toBeInTheDocument();
  });
});
