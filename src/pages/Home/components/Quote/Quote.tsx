import React from 'react';
import './quote.scss';

/**
 * This component renders Chuck Norris quote. Also holds Chuck Norris image that stares on the user through the screen.
 * @param props string with Chuck Norris quote
 * @returns jsx element
 */
export default function Quote(props: { value: string }): JSX.Element {
  const { value } = props;
  return (
    <div className="container">
      <div className="quote">
        <blockquote className="quote__block">{value}</blockquote>
      </div>
    </div>
  );
}
