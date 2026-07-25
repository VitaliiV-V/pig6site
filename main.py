import time
import uvicorn
from fastapi import FastAPI
from fastapi.responses import FileResponse

app = FastAPI(
    title="Pig6Bot API"
)


@app.get("/")
async def root():
    return FileResponse("index.html")

@app.get("/style.css")
async def root():
    return FileResponse("style.css")

@app.get("/script.js")
async def root():
    return FileResponse("script.js")

@app.get("/pig6.jpg")
async def image():
    return FileResponse(
        "logo.png",
        media_type="image/png"
    )

if __name__ == "__main__":
    while True:
        try:
            uvicorn.run(
                "main:app",
                host="0.0.0.0",
                port=3000,
                reload=True,
                access_log=False
            )
            break
        except Exception as e:
            print(f"{e}")
            time.sleep(3)