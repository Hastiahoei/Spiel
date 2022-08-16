import React from 'react';
import "./board.css";

// Funktion die random Lnadscape erzeugt aus NOSW
// Funktion die eine Reihe der Landscapes zusammenfasst



function makeRow(y) {
    // const Array = [[1,y],[2,y],[3,y]]
    const coordinates = [];
    for (let x =1;x < 6; x++) {
       coordinates.push([x,y]);
        
    }
    return coordinates.map(coordinate => <div 
        datax = {coordinate[0]} 
        className="landscape"
        datay = {coordinate[1]}>
        {direction(coordinate[0], coordinate[1])}
        </div>)
}

function makeColumn() {
    const elements = []
    for(let y = 1; y < 6 ; y++) {
        elements.push(<div className='row'>{makeRow(y)}</div>)
    }
    return elements
}

function direction(x,y){
    let directions = ['N','E','S','W'];

    if(x===1){
        directions = directions.filter(direction => direction !== 'W')
    }

    if(x===5){
        directions = directions.filter(direction => direction !== 'E')
    }

    if(y===1){
        directions = directions.filter(direction => direction !== 'N')
    }

    if(y===5){
        directions = directions.filter(direction => direction !== 'S')
    }

    function randomDirection(possibleDirections){
        const randomIndex = ~~(Math.random()*possibleDirections.length);
        //console.log(randomIndex);
     return directions[randomIndex]
    }

     let allowedDirections = randomDirection(directions)

     directions = directions.filter(direction => direction !== allowedDirections)


     while (allowedDirections.length < directions.length) {
        const coin = ~~(Math.random()*2)

        if(coin === 1){
            allowedDirections += randomDirection(directions)
        } else {
            return allowedDirections
        }
     } 
     return allowedDirections
        
     
}

export default function Board() {

    return(
        <div className='board'>
            {makeColumn()}
        </div>
    );

}