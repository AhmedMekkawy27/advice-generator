/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react'
import styled, {css} from 'styled-components'
import divider from "../../public/pattern-divider-desktop.svg"
import dice from "../../public/icon-dice.svg"
export default function AdviceGenerator(){
    const Button = styled.button`
    background-color: transparent;
    border-radius: 3px;
    border: 2px solid #BF4F74;
    color: #BF4F74;
    margin: 0 1em;
    padding: 0.25em 1em;
    ${props =>
props.primary &&
      css`
        background-color: #5e0f2a;
        color: white;
      `};
  `
    let [randomNumber, setRandomNumber] = useState(1)
    let [advices, setAdvices] = useState([])
    useEffect(()=>{
        fetch(`https://api.adviceslip.com/advice/${randomNumber}`)
        .then(res=> res.json())
        .then(json=>{
            setAdvices(json)
        })
    },[randomNumber])
    function randomGenerate(){
        setRandomNumber((Math.random()*224).toFixed())
    }
    return(
        <>
        <Button primary={false}>Button</Button>
        <Button primary={true}>Primary Button</Button>
            <div className="container">
                <p className='advice-no'>Advice # {randomNumber}</p>
                <h2 className='advice'>{advices.slip && JSON.stringify(advices.slip.advice)}</h2>
                <div className="divider">
                    <img src={divider} alt="" />
                </div>
                <button className='btn' onClick={randomGenerate}>
                    <img src={dice} alt="" />
                </button>
            </div>
        </>
    )
}