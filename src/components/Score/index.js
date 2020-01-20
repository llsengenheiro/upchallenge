// Componente para controlar os pontos do jogo e quantas volta já foram feitas

import React, { useState, useEffect } from 'react';

import { Container } from './styles';

export default function Score(props) {
    // Props referente ao componente pai "GAME" name é o nome do motoriasta e
    // o "run" é apra monitorar se o jogo está pausado ou rodando
    const { name, run } = props;

    // Estado para controlar os pontos
    const [scoreNow, setScorenow] = useState(0);
    // Estado para controlar o número de volta
    const [lap, setLap] = useState(0);

    // variaveís auxiliarea para fazer o calculo de Pontos e Voltas
    let score = 0;
    let lapCount = 0;
    let timeLap = 0;
    let time = 0;

    useEffect(() => {
        if (run) {
            time = setInterval(function() {
                // pontos são somados a cada interação e quanto maior o número de voltas mais pontos são somados
                score += 10 + timeLap;
                setScorenow(scoreNow + score);

                // a cada 5 interações conta-se uma volta
                if (lapCount >= 5) {
                    timeLap += 1;
                    setLap(timeLap);
                    lapCount = 0;
                } else {
                    lapCount += 1;
                }
            }, 1000);
        }

        return () => {
            clearInterval(time);
        };
    }, [run]);

    return (
        <Container>
            <div className="infoArea">
                <div className="infoDetail">
                    <span className="titleInfo">DRIVER:</span>
                    <span className="info">{name}</span>
                </div>

                <div className="infoDetail">
                    <span className="titleInfo">SCORE:</span>
                    <span className="info">{scoreNow}</span>
                </div>
                <div className="infoDetail">
                    <span className="titleInfo"> VOLTAS:</span>
                    <span className="info">{lap}</span>
                </div>
            </div>
        </Container>
    );
}
