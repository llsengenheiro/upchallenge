import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    background-color: #456678;
    align-items: center;
    justify-content: space-between;
    position: relative;

    .cenarioGif {
        display: flex;
        .pause {
            position: absolute;
            font-size: 170px;
            color: #ff4;
            font-weight: bold;
            top: 50%;
            left: 35%;
        }
    }

    .imgScenary {
        margin: 20px;
        height: 900px;
        width: 900px;
    }
    .car {
        max-width: 350px;
        max-height: 200px;
        position: absolute;
        top: 73%;
        left: 57%;
    }
    .cenarioStatic {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`;

export const Car = styled.img`
    max-width: 350px;
    max-height: 200px;
    position: absolute;
    top: 73%;
    left: ${({ positionCar }) => positionCar};
`;

/**
 * Style to form start
 */

export const Form = styled.div`
    display: flex;
    flex-direction: column;
    width: 600px;
    height: 300px;
    background-color: rgba(235, 235, 235, 0.4);
    position: absolute;
    top: 500px;
    align-items: center;

    border: 1px solid #000;
    border-radius: 10%;

    h1 {
        font-size: 50px;
        font-weight: bold;
        color: blue;
        margin-bottom: 30px;
    }
    span {
        font-size: 26px;
        margin-bottom: 15px;
    }
    input {
        padding: 10px;
        height: 40px;

        font-size: 16px;
        text-align: center;
        margin-bottom: 20px;
    }
    button {
        padding: 10px;
        width: 100px;
        font-size: 20px;
        background: #007700;
        border-radius: 10%;
    }
`;

export const Count = styled.div`
    display: flex;

    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 200px;
    height: 200px;
    position: absolute;

    h1 {
        font-size: 100px;
        position: absolute;
        color: #ff0;
    }
`;
