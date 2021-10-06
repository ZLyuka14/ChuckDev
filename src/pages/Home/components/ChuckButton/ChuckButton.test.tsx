import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import ChuckButton from './ChuckButton';

describe('ChuckButton component', () => {
  test('ChuckButton renders using given state', () => {
    const initialState = 'testButton';
    const mockStore = configureStore();
    const store = mockStore(initialState);
    render(
      <Provider store={store}>
        <ChuckButton category={initialState} />
      </Provider>
    );
    expect(screen.getAllByRole('button')).toHaveLength(1);
    expect(screen.getAllByText('testButton')).toHaveLength(1);
  });
});
