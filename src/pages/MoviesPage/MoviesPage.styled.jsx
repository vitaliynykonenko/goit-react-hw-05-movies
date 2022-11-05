import styled from 'styled-components';

export const SearchForm = styled.form`
margin-left: 35%;
margin-right: 30%;
`;

export const InputForm = styled.input`
padding: 10px 15px;
border-radius: 10px;
border: 3px solid #2196f3;
margin-right: 20px;
font-size: 20px;
outline: transparent;

:hover {
    background-color: #f4f8fa;
`;

export const SearchButton = styled.button`
cursor: pointer;
padding: 8px 15px;
margin-bottom: 15px;
box-shadow: 1px 2px 2px 0 rgb(0, 0, 0/0.5);
transition: box-shadow 250ms linear;
border-radius: 10px;
border: 3px solid #2196f3;
font-weight: bold;

:hover {
    background-color: #2196f3;
    color: white;
`;