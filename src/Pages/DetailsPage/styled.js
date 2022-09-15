import styled from 'styled-components';

export const MainContainer = styled.div `

    display: grid;
    width: auto;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(6, 1fr);
    grid-column-gap: 10px;
    grid-row-gap: 2px;
    grid-gap: 5px;
    background-color: lightblue;
    padding: 10px;

    div  {
        width: 100%;
        height: 90%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background-color: rgba(255, 255, 255, 0.8);
        padding: 15px 0;
        font-size: 20px;
        
    }
`




export const Grid1 = styled.div`
     grid-area: 1 / 1 / 4 / 2;
`

export const Grid2 = styled.div `
    grid-area: 4 / 1 / 7 / 2;
`

export const Grid3 = styled.div `
    grid-area: 1 / 2 / 7 / 3;
`

export const Grid4 = styled.div `
     grid-area: 1 / 3 / 7 / 4; 
`