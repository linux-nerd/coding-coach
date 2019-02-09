import React from 'react';
import { storiesOf } from '@storybook/react';

import Loader from './Loader';
import Button from '../button/Button';

class BasicLoader extends React.Component {
  constructor(props) {
    super();
    this.state = {
      isLoading: false,
    };
  }

  btnClick = () => {
    console.log('hefre');
    this.setState({ isLoading: true });
    setTimeout(() => {
      this.setState({ isLoading: false });
    }, 2000);
  };

  render() {
    return (
      <React.Fragment>
        <Loader loading={this.state.isLoading}>
          <span className="hello">This is the content</span>
          <br />
          <span>And</span>
        </Loader>
        <Button onClick={this.btnClick} size="small">
          Show spinner
        </Button>
      </React.Fragment>
    );
  }
}

storiesOf('Components/Loader', module).add('Render Loader', () => {
  return <BasicLoader />;
});
