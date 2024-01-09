import { useState, useEffect } from 'react'
import divider from "../../public/pattern-divider-desktop.svg"
import dice from "../../public/icon-dice.svg"
export default function AdviceGenerator(){
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