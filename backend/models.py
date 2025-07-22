from pydantic import BaseModel

class CalculationRequest(BaseModel):
    operand1: float
    operand2: float
    operator: str
