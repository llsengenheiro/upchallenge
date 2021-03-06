import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    background-color: #456678;
    align-items: center;
    justify-content: center;
    width: 25%;
    margin: 10px;

    .infoArea {
        display: flex;
        flex-direction: row;
        background-color: #ccc;
        width: 90%;
    }
    .infoDetail {
        display: flex;
        flex-direction: column;
        margin: 10px;
        border: 1px solid #000;
        padding: 2px;
        align-items: center;
        width: 30%;

        .titleInfo {
            font-weight: bold;
            margin-bottom: 10px;
        }
    }
`;
