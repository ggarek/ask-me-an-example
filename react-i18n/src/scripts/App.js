import React, { PropTypes } from 'react';
import i18n from './i18n';

/**
 * @class App
 */
export default class App extends React.Component {
  static propTypes = {};
  static defaultProps = {};

  constructor(...args) {
    super(...args);
    this.state = { count: 1 };
  }

  handleAmountChange = (se) => {
    const count = Number(se.target.value);
    if (Number.isFinite(count) && this.state.count !== count) {
      this.setState({ count });
    }
  };

  render() {
    const { count } = this.state;
    return (
      <div>
        <h3>{ i18n('greet') }</h3>
        <i>{ i18n('what-do-you-want') }</i>
        <div>
          <span>{ i18n('i-want') }</span>
          <select onChange={this.handleAmountChange}>
            <option>1</option>
            <option>2</option>
            <option>5</option>
            <option>21</option>
          </select>
          <span>{ i18n('pancakes', { count }) }</span>
        </div>
      </div>
    );
  }
}
