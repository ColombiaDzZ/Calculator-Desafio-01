import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #1c1c1c;
    display: flex;
    align-items: center;
    justify-content: center;
    
`
export const Content = styled.div`
    background-color: #1c1c1c;
    width: 50%;
    border: 4px solid #198553;
    border-radius: 6px;
    padding: 0px 10px 10px 10px;
`
export const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 4px;
`
export const Column = styled.div`
    display: flex;
    flex-direction: Column;
    justify-content: space-between;
    align-items: center;
`