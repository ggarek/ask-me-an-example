import React  from 'react';
import { FormattedMessage } from 'react-intl';

/**
 * @class App
 */
export default class App extends React.Component {
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
        <FormattedMessage id="greet" defaultMessage="Hey!" tagName="h3"/>
        <i><FormattedMessage id="what-do-you-want" defaultMessage="What do you want!"/></i>
        <div>
          <FormattedMessage id="i-want" />
          <select onChange={this.handleAmountChange}>
            <option>1</option>
            <option>2</option>
            <option>5</option>
            <option>21</option>
          </select>
          <FormattedMessage id="pancakes" values={{ count }}/>
        </div>
      </div>
    );
  }
}
