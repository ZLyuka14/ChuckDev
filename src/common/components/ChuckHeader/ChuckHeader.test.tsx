import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import ChuckHeader from './ChuckHeader';

describe('ChuckHeader component', () => {
  test('ChuckHeader renders using given state', () => {
    const initialState = 'url';
    const mockStore = configureStore();
    const store = mockStore(initialState);
    render(
      <Provider store={store}>
        <ChuckHeader logo={initialState} />
      </Provider>
    );
    const logos = document.querySelectorAll('img');
    expect(logos).toHaveLength(1);
    expect(screen.getAllByAltText('Chuck logo')).toHaveLength(1);
  });
});
