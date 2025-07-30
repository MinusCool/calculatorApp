import React, {useState} from 'react'
import axios from 'axios'
import './Calculator.css'

const Calculator=()=>{
    const [display, setDisplay]=useState('')
    const [result, setResult]=useState(null)
    const [isResultShown, setIsResultShown]=useState(false)

    const handleClick=(value)=>{
        if(value==='C'){
            setDisplay('')
            setResult(null)
            setIsResultShown(false)
            return
        }
        if(value==='<-'){
            setDisplay(prev=>prev.slice(0,-1))
            return
        }
        if(value==='='){
            let operator
            for(const op of ['+','-','x',':']){
                if(display.includes(op)){
                    operator = op
                    break
                }
            }
            if(!operator){
                alert("Invalid operator!")
                return
            }
            const [left,right] = display.split(operator)
            const operand1 = parseFloat(left)
            const operand2 = parseFloat(right)

            if(isNaN(operand1)||isNaN(operand2)){
                alert("Invalid number input!")
                return
            }
            const opSymbol = operator === 'x'?'*' : operator === ':'?'/' : operator

            axios.post('http://127.0.0.1:8000/calculate',{
                operand1,
                operand2,
                operator:opSymbol
            }).then(res=>{
                setResult(res.data.result)
                setDisplay(`${res.data.result}`)
                setIsResultShown(true)
            }).catch(err=>{
                const detail = err.response?.data?.detail
                alert(detail||"Can't Connect To Server")
            })
            return
        }
        if(isResultShown){
            if(['+','-','x',':'].includes(value)){
                setDisplay(`${result}${value}`)
                setIsResultShown(false)
            }
            else{
                setDisplay(value)
                setResult(null)
                setIsResultShown(false)
            }
        }
        else{
            setDisplay(prev=>prev+value)
        }
    }

    const buttons=[
        '<-', ' ', ' ', ':',
        '7' , '8', '9', 'x',
        '4' , '5', '6', '-',
        '1' , '2', '3', '+',
        'C' , '0', '.', '='
    ]

    return(
        <div className='calculator'>
            <div className='display'>
                {display||'0'}
            </div>
            <div className='buttons'>
                {buttons.map((btn,index)=>(
                    btn.trim()===''?(
                        <button key={index} className='empty' 
                        disabled aria-hidden='true'/>
                    ):(
                        <button key={index} onClick={()=>handleClick(btn)}>
                        {btn}
                        </button>
                    )
                ))}
            </div>
        </div>
    )
}

export default Calculator