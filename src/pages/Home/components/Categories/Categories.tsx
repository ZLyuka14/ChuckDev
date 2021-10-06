import React from 'react';
import { ICategories } from '../../../../common/interfaces/ICategories';
import ChuckButton from '../ChuckButton/ChuckButton';
import './categories.scss';

/**
 * This component renders categories of Chuck Norris quotes.
 * @param props string array with categories
 * @returns jsx element
 */
export default function Categories(props: ICategories): JSX.Element {
  const { categories } = props;
  return (
    <section className="categories">
      <div className="container">
        <h1 className="categories__title">Categories</h1>
        <div className="categories__row">
          {categories.map((category: string) => (
            <ChuckButton key={category} category={category} />
          ))}
          <ChuckButton key="random" category="random" />
        </div>
      </div>
    </section>
  );
}
