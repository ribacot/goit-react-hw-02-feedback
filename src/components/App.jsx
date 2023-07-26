import React from 'react';
import Section from './section/Section';
import ButtonFeedback from './buttons_feedback/ButtonsFeedback';
import StatisticsFeedback from './statistics_feedbeck/StatisticsFeedback';
export class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
   increementFeedback = name => {
    this.setState(prevState => ({
      [name]: prevState[name] + 1,
    }));
  };
  render() {
    return (
      <>
        <Section title="Please leave feedback">
          <ButtonFeedback
            stateValue={this.state}
            click={this.increementFeedback}
          ></ButtonFeedback>
        </Section>
        <Section title="Statistics">
          <StatisticsFeedback stateValue={this.state}></StatisticsFeedback>
        </Section>
      </>
    );
  }
}
