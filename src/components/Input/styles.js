import styled from 'styled-components';

export const InputContainer = styled.div`
    width: 100%;
    height: 75px;

    display: flex;
    align-items: center;
    justify-content: flex-end;

    font-size: 24px;
    font-family: 'Poppins', sans-serif;
    padding: 0 0 10px 0;

    input {
        width: 100%;
        height: 135px;
        background-color: #1c1c1c;
        border: 4px solid #198553;
        border-radius: 6px;
        cursor: pointer;
        text-align: right;
        padding: 0 8px 0 0;
        font-size: 24px;
        font-family: 'Poppins', sans-serif;
        color: #FFF;
        margin-bottom: 70px;
    }

    input:focus {
        outline:none;
    }
`