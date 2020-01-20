import styled from 'styled-components';

export const Container = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    width: 25%;

    h1 {
        align-self: center;
        margin: 10px 20px;
    }

    .divList {
        display: flex;
        flex-direction: row;
        background: #ccc;
        margin: 5px;
        border-color: #555;
        border-width: 4;
        padding: 5px;
        width: 300px;
        align-items: center;

        img {
            width: 60px;
            height: 60px;
            border-radius: 50%;
            margin-right: 20px;
        }
        .infoPlayer {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;

            .nameRank {
                margin-left: 5px;
                font-size: 18px;
                font-weight: bold;
                margin-bottom: 15px;
            }

            .areaScore {
                display: flex;
                flex-direction: row;

                align-items: center;
            }
            .titleScore {
                font-size: 24px;
                font-weight: bold;
                margin-right: 8px;
            }
            .score {
                font-size: 20px;
                color: #0000ff;
                font-weight: bold;
                text-align: center;
                flex: 1;
            }
        }
    }
`;
