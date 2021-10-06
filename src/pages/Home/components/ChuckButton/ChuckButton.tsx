import React from 'react';
import { useDispatch } from 'react-redux';
import { getQuote } from '../../../../store/modules/quote/actions';
import './chuckButton.scss';

/**
 * This component renders button that makes request to backend to receive new quote.
 * Quote category comes with props.
 * @param props holds array with categories of Chuck Norris quotes.
 * @returns jsx element with button
 */
export default function ChuckButton(props: { category: string }): JSX.Element {
  const dispatch = useDispatch();
  const { category } = props;
  return (
    <button
      onClick={async (): Promise<void> => {
        await dispatch(getQuote(category));
      }}
      className="chuck__btn"
    >
      {category}
    </button>
  );
}
