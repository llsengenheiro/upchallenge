import React, { useState } from 'react';
import KeyboardEventHandler from 'react-keyboard-event-handler';

// Componente responsável por controlar o rank dos jogadores
import Rank from '../../components/Rank';
// Componente responsável por controlar  os Pontos e Voltas do jogo
import Score from '../../components/Score';

import som from '../../assets/Top_Gear.mp3';
import scenary from '../../assets/scenary.gif';
import scenaryStatic from '../../assets/scenaryStatic.png';
import car from '../../assets/car.svg';

import { Container, Car, Form, Count } from './styles';

export default function Game() {
    // Estado para controlar se o jogo terminou ou não
    const [gameOver, setGameover] = useState(true);
    // Estado para controlar se o jogo está pausado ou não
    const [run, setRun] = useState(false);
    // Estado para controlar o nome do jogador (motorista)
    const [driver, setDriver] = useState('DRIVER');
    // Estado para controlar a posição do carro na tela
    const [positionCar, setPositioncar] = useState('40%');
    // Estado para controlar a contagem regressiva
    const [countDown, setCountdown] = useState(3);
    // Estado para controlar a visibilidade do formulário
    const [displayForm, setDisplayform] = useState(true);

    // função para dar iníco ao jogo, após preencher o formulário e clicar no botão de start
    function handleStart() {
        setDisplayform(false);
        let timeStart = 3;
        const count = setInterval(function() {
            timeStart -= 1;
            setCountdown(timeStart);
            if (timeStart < 0) {
                clearInterval(count);
                setCountdown(0);
                setGameover(false);
                setRun(true);
            }
        }, 1000);
    }

    // função para coletar a tecla clicada e selecionar a ação do carro ou pausar o jogo

    function handleKeytouch(key) {
        if (run) {
            switch (key) {
                case 'left':
                    setPositioncar('23%');
                    break;
                case 'down':
                    setPositioncar('40%');
                    break;
                case 'right':
                    setPositioncar('57%');
                    break;
                case 'a':
                    setPositioncar('23%');
                    break;
                case 's':
                    setPositioncar('40%');
                    break;
                case 'd':
                    setPositioncar('57%');
                    break;

                default:
                    setRun(!run);
            }
        } else {
            setRun(!run);
        }
    }
    return (
        <Container>
            <Score name={driver} run={run} />
            {!gameOver ? (
                <>
                    <div className="cenarioGif">
                        <audio src={som} type="audio/mpeg" autoPlay />

                        <img
                            className="imgScenary"
                            src={run ? scenary : scenaryStatic}
                            alt="Cenário"
                        />
                        {!run ? <h1 className="pause">PAUSE !</h1> : null}
                    </div>
                    <Car src={car} alt="Car2" positionCar={positionCar} />
                    <KeyboardEventHandler
                        handleKeys={['all']}
                        onKeyEvent={key => handleKeytouch(key)}
                    />
                </>
            ) : (
                <>
                    <div className="cenarioStatic">
                        <img
                            className="imgScenary"
                            src={scenaryStatic}
                            alt="Cenário"
                        />
                        {/**
                         * Mostrar o formulário para inserir o nome do piloto, quando o jogo está encerrado,
                         * após clicar no botão de start inicia a contagem regressiva.
                         * "displayForm" gerencia qual componente irá aparacer, Form ou Count.
                         */}
                        {displayForm ? (
                            <Form>
                                <h1>Welcome UpChallenge</h1>
                                <span>DRIVER:</span>
                                <input
                                    type="name"
                                    placeholder="Digite o nome do Piloto"
                                    onChange={item =>
                                        setDriver(item.target.value)
                                    }
                                />
                                <button
                                    type="button"
                                    onClick={() => handleStart()}
                                >
                                    START
                                </button>
                            </Form>
                        ) : (
                            <Count>
                                <h1>{countDown === 0 ? 'GO!!!' : countDown}</h1>
                            </Count>
                        )}
                    </div>
                </>
            )}
            <Rank />
        </Container>
    );
}
