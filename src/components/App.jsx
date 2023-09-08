import { Container } from './index.styled';
import { Section } from './Section/Section';

export const App = () => {
  return (
    <Container>
      <Section title="We'd love your feedback"></Section>
      <Section title="Statistics"></Section>
    </Container>
  );
};

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
