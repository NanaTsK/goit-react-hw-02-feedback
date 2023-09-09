import { FeedbackList, FeedbackBtn } from './FeedbackOptions.styled';

// export const Section = ({ title, children }) => {
//   return (
//     <SectionBox>
//       <SectionTitle>{title}</SectionTitle>
//       {children}
//     </SectionBox>
//   );
// };

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <FeedbackList>
      {options.map((option, btnId) => {
        return (
          <li key={btnId}>
            <FeedbackBtn onClick={onLeaveFeedback}>{option}</FeedbackBtn>
          </li>
        );
      })}
    </FeedbackList>
  );
};
