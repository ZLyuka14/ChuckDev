import React from 'react';
import { connect } from 'react-redux';
import ChuckHeader from '../../common/components/ChuckHeader/ChuckHeader';
import { ICategories } from '../../common/interfaces/ICategories';
import { IQuote } from '../../common/interfaces/IQuote';
import { getQuotesCategories } from '../../store/modules/categories/actions';
import { getQuote } from '../../store/modules/quote/actions';
import Categories from './components/Categories/Categories';
import Quote from './components/Quote/Quote';
import './home.scss';

type PropsType = StateType & MethodsType;

type MethodsType = {
  getQuotesCategories: () => Promise<void>;
  getQuote: (category: string) => Promise<void>;
};

type StateType = ICategories & {
  quote: IQuote;
};

/**
 * This class renders home page. Page contains list of сategories of Chuck Norris quotes.
 */
class Home extends React.Component<PropsType, StateType> {
  async componentDidMount(): Promise<void> {
    const { getQuotesCategories: getCategories } = this.props;
    const { getQuote: getRandomQuote } = this.props;
    await getCategories();
    await getRandomQuote('random');
  }

  render(): JSX.Element {
    const { categories } = this.props;
    const { quote } = this.props;
    return (
      <div className="wrapper">
        <ChuckHeader logo={quote.icon_url} />
        <Categories categories={categories} />
        <Quote value={quote.value} />
      </div>
    );
  }
}

const mapStateToProps = (state: PropsType): StateType => {
  const { categories } = state;
  const { quote } = state;
  return { categories: Object.values(categories), quote };
};

export default connect(mapStateToProps, { getQuotesCategories, getQuote })(Home);
