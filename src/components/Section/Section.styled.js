import { styled } from 'styled-components';

// export const Container = styled.div`
//   background-color: rgba(104, 133, 176, 0.7);
//   border-radius: 8px;
//   box-shadow: 0px 0px 2px 1px rgba(0, 0, 0, 0.7);
//   color: #fff;
//   margin: 10px auto;
//   padding: 15px;
//   width: 300px;
// `;

export const SectionTitle = styled('h2')({
  fontSize: '28px',
  textShadow: '1px 3px 0 #505050, -1px 3px 0 #505050',
  letterSpacing: '0.9px',
});

export const SectionBox = styled('section')({
  paddingTop: '10px',
  paddingBottom: '40px',
  //   textAlign: 'center',
});
