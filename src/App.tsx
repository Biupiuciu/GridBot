import { useState, useEffect } from "react";
import "./App.css";
const DIRECTIONS = ["N", "E", "S", "W"];
function App() {
  const [robot, setRobot] = useState({ x: 2, y: 2 });
  const [direction, setDirection] = useState(0); // 0: N, 1: E, 2: S, 3: W
  const handleKeyDown = (event: any) => {
    if (event.key === "ArrowUp") {
      setDirection(0);
    } else if (event.key === "ArrowDown") {
      setDirection(2);
    } else if (event.key === "ArrowLeft") {
      setDirection(3);
    } else if (event.key === "ArrowRight") {
      setDirection(1);
    } else if (event.key === " ") {
      move();
    }
  };
  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [direction]);

  const move = () => {
    setRobot((prev) => {
      const newPos = { ...prev };
      switch (DIRECTIONS[direction]) {
        case "N":
          newPos.y = Math.max(0, prev.y - 1);
          break;
        case "E":
          newPos.x = Math.min(4, prev.x + 1);
          break;
        case "S":
          newPos.y = Math.min(4, prev.y + 1);
          break;
        case "W":
          newPos.x = Math.max(0, prev.x - 1);
          break;
      }
      return newPos;
    });
  };
  return (
    <>
      <div className="w-screen h-screen flex flex-col">
        <div className="bg-orange  p-20 text-white flex flex-col justify-center">
          <h1 className="text-4xl mb-10">GridBot Navigator</h1>
          <p className="text-md md:text-xl">
            Welcome to GridBot Navigator! In this application, you control a
            robot on a 5x5 grid. The robot can move forward in the direction it
            is facing and rotate to face North, East, South, or West. Use your
            mouse or keyboard to navigate the grid and explore different
            directions.
          </p>
        </div>
        <div className=" bg-grey flex-1 p-24">
          <div className="md:flex justify-center items-center gap-8 md:gap-12 lg:gap-28">
            <div className=" flex justify-center">
              <div>
                {[...Array(5)].map((_, indexY) => (
                  <div className="flex text-5xl">
                    {[...Array(5)].map((_, indexX) => (
                      <div
                        className={`w-16 lg:w-20 h-16 lg:h-20 rounded border border-dark flex items-center justify-center ${
                          indexX == robot.x && indexY == robot.y
                            ? "bg-orange"
                            : ""
                        }`}
                      >
                        {indexX == robot.x && indexY == robot.y ? (
                          <>🤖</>
                        ) : (
                          <></>
                        )}
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-center">
              <div className="grid grid-rows-3 w-64 h-64 ">
                <div className="flex justify-center ">
                  <div className="translate-y-10">
                    <div
                      className={`triangle ${
                        DIRECTIONS[direction] == "N" && "triangle-border"
                      }`}
                      onClick={() => {
                        setDirection(0);
                      }}
                    >
                      {" "}
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-3">
                  <div className="-rotate-90 -translate-y-6 translate-x-10">
                    <div
                      className={`triangle ${
                        DIRECTIONS[direction] == "W" && "triangle-border"
                      }`}
                      onClick={() => {
                        setDirection(3);
                      }}
                    >
                      {" "}
                    </div>
                  </div>
                  <div
                    className="p-3 z-20"
                    onClick={() => {
                      move();
                    }}
                  >
                    <div className="bg-orange w-full h-full rounded flex items-center justify-center text-white shadow-default">
                      MOVE
                    </div>
                  </div>
                  <div className="rotate-90  translate-y-7 -translate-x-10">
                    <div
                      className={`triangle ${
                        DIRECTIONS[direction] == "E" && "triangle-border"
                      }`}
                      onClick={() => {
                        setDirection(1);
                      }}
                    >
                      {" "}
                    </div>
                  </div>
                </div>
                <div className="flex justify-center rotate-180 ">
                  <div className="translate-y-10">
                    <div
                      className={`triangle ${
                        DIRECTIONS[direction] == "S" && "triangle-border"
                      }`}
                      onClick={() => {
                        setDirection(2);
                      }}
                    >
                      {" "}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
