import React from 'react';
import './header.scss';

type HeaderProps = {
  logo: string;
};

/**
 * This component renders header of the Chuck Norris quotes.
 * @param props holds url to Chuck Norris logo
 * @returns jsx element with header that holds logo and title
 */
export default function ChuckHeader(props: HeaderProps): JSX.Element {
  const { logo } = props;
  return (
    <header className="header">
      <div className="container">
        <div className="header__row">
          <div className="header__logo">
            <img src={logo} alt="Chuck logo" width={43} height={43} />
          </div>
          <div className="header__title">Chuck Norris</div>
        </div>
      </div>
    </header>
  );
}
