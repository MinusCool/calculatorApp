from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from models import CalculationRequest
from calculator import calculate

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def read_root():
    return {"message": "Mini Calculator App"}

@app.post("/calculate")
def perform_calculation(request: CalculationRequest):
    result = calculate(request.operand1, request.operand2, request.operator)
    return {"result": result}
