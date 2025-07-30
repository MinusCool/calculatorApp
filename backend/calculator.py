from fastapi import HTTPException

def calculate(operand1: float, operand2: float, operator: str) ->float:
    if operator == '+':
        return operand1 + operand2
    elif operator == '-':
        return operand1 - operand2
    elif operator == '*':
        return operand1 * operand2
    elif operator == '/':
        if operand1 == 0:
            raise HTTPException(status_code=400, 
                                detail="Division by zero is not allowed!")
        return operand1 / operand2
    else:
        raise HTTPException(status_code=400, 
                            detail="Unsupported operator")