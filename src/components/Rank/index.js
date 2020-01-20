// Componente responsável por gerenciar o rankingo dos jogadores

import React from 'react';

import { Container } from './styles';

export default function Rank() {
    const ranks = [
        {
            id: 3,
            avatar:
                'https://tse4.mm.bing.net/th?id=OIP.pfdVGYXs6WH-Y1_d6VCxewHaHa&pid=Api&P=0&w=300&h=300',
            name: 'FERNANDO GOMES',
            score: 450,
        },
        {
            id: 1,
            avatar:
                'https://tse1.mm.bing.net/th?id=OIP.RBl5rxK98Bn_9edA_gzvHQHaHa&pid=Api&P=0&w=300&h=300',
            name: 'PEDRO TEXEIRA',
            score: 350,
        },

        {
            id: 2,
            avatar:
                'https://tse4.mm.bing.net/th?id=OIP.PXslPdZU1kL-BNtmYMUpQwHaHa&pid=Api&P=0&w=300&h=300',
            name: 'VINICIUS MORAIS',
            score: 280,
        },
    ];

    return (
        <Container>
            <h1>Ranking</h1>
            {ranks.map(rank => (
                <ul key={rank.id}>
                    <div className="divList">
                        <img src={rank.avatar} alt="imagem" />
                        <div className="infoPlayer">
                            <span className="nameRank">{rank.name}</span>
                            <div className="areaScore">
                                <span className="titleScore">Score:</span>
                                <span className="score">{rank.score} </span>
                            </div>
                        </div>
                    </div>
                </ul>
            ))}
        </Container>
    );
}
