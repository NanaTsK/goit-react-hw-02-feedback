import { Container } from './index.styled';
import { Section } from './Section/Section';

export const App = () => {
  return (
    <Container>
      <Section title="Please leave feedback"></Section>
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

// import Header from './1-Header/Header';
// import Content from './2-Content/Content';

// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         // display: 'flex',
//         // justifyContent: 'center',
//         // alignItems: 'center',
//         fontSize: 40,
//         color: '#010101',
//         marginTop: 20,
//         marginLeft: 20,
//         // textTransform: 'uppercase',
//       }}
//     >
//       <span style={{ textTransform: 'uppercase' }}>react-module-1 :</span>
//       <Header />
//       <Content />
//     </div>
//   );
// };
