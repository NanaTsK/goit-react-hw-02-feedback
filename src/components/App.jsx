import { Container } from './index.styled';
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Component } from 'react';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  render() {
    return (
      <Container>
        <Section title="We'd love your feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.handlerFeedback}
          />
        </Section>
        <Section title="Statistics"></Section>
      </Container>
    );
  }
}

// FeedbackOptions = ({ options, onLeaveFeedback

/* <div className="Container">
  <section>
    <h1>Section Title</h1>
    <p>Some content related to this section.</p>
  </section>
  ;
  <section>
    <h1>Section Title</h1>
    <p>Some content related to this section.</p>
  </section>
  ;
</div>; */
