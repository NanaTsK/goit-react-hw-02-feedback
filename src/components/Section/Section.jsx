import { SectionBox, SectionTitle } from './Section.styled';

export const Section = ({ title, children }) => {
  return (
    <SectionBox>
      <SectionTitle>{title}</SectionTitle>
      {children}
    </SectionBox>
  );
};
// export const Section = ({ title, children }) => {
//   return (
//     <SectionBox>
//       <SectionTitle>{title}</SectionTitle>
//       {children}
//     </SectionBox>
//   );
// };
