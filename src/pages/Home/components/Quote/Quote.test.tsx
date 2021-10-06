import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Quote from './Quote';

describe('Quote component', () => {
  test('Quote renders using given state', () => {
    const initialState = 'Some cool Chuck Norris quote.';
    const mockStore = configureStore();
    const store = mockStore(initialState);
    render(
      <Provider store={store}>
        <Quote value={initialState} />
      </Provider>
    );
    const quotes = document.querySelectorAll('blockquote');
    expect(quotes).toHaveLength(1);
    expect(screen.getAllByText(initialState)).toHaveLength(1);
  });
});
