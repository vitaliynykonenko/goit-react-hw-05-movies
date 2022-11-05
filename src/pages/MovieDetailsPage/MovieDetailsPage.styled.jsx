import styled from 'styled-components';

export const BackButton = styled.button`
cursor: pointer;
width: 80px;
text-align: center;
font-weight: bold;
padding: 8px 15px;
margin-bottom: 15px;
box-shadow: 1px 2px 2px 0 rgb(0, 0, 0/0.5);
transition: box-shadow 250ms linear;
border-radius: 10px;
border: 1px solid #2196f3;

:hover {
    background-color: #2196f3;
    color: white;
  }
`;

export const Reviews = styled.p`

display: inline-block;
padding: 8px 15px;
border-radius: 10px;
border: 1px solid #2196f3;
margin-right: 30px;
color: black;
font-weight: bold;
:hover {
    background-color: #2196f3;
    color: white;
 
`;

export const Cast = styled.p`

display: inline-block;
padding: 8px 28px;
border-radius: 10px;
border: 1px solid #2196f3;
color: black;
font-weight: bold;
:hover {
    background-color: #2196f3;
    color: white;
 
`;
