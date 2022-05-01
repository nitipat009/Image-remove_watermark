from fastapi import FastAPI

import uvicorn
from fastapi.middleware.cors import CORSMiddleware

from routes.r_model1 import model1

origins = ["*"]
app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(model1)


if __name__ == "__main__":
    uvicorn.run("app:app", host='localhost', port=5000 ,reload=True )