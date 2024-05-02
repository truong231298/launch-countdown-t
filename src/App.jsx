import iconFa from "/images/icon-facebook.svg"
import iconInta from "/images/icon-instagram.svg"
import iconPin from "/images/icon-pinterest.svg"
import { useState, useEffect } from "react"

export default function App() {
  //1. tao bien dem
  const [seconds, setSeconds] = useState(41)
  const [minutes, setMinutes] = useState(0)
  const [hours, setHours] = useState(23)
  const [days, setDays] = useState(8)
  
  useEffect(() => {
    const timer = setInterval(() => {
      // Decrease seconds by 1
      setSeconds(prevSeconds => {
        if (prevSeconds > 0) {
          return prevSeconds - 1;
        } else {
          // If seconds reach 0, reset to 59 and decrease minutes
          setMinutes(prevMinutes => {
            if (prevMinutes > 0) {
              return prevMinutes - 1;
            } else {
              // If minutes reach 0, reset to 59 and decrease hours
              setHours(prevHours => {
                if (prevHours > 0) {
                  return prevHours - 1;
                } else {
                  // If hours reach 0, reset to 23 and decrease days
                  setDays(prevDays => {
                    if (prevDays > 0) {
                      return prevDays - 1;
                    } else {
                      // If days reach 0, stop the timer
                      clearInterval(timer);
                      return 0;
                    }
                  });
                  return 23;
                }
              });
              return 59;
            }
          });
          return 59;
        }
      });
    }, 1000); // Update every second

    // Clean up timer on unmount
    return () => clearInterval(timer);
  }, []);

  const formatNumber = number => {
    return number < 10 ? `0${number}` : number;
  }
  
  return (
    <main className="min-h-screen bg-Verydarkblue bg-bgHills bg-no-repeat bg-contain bg-bottom">
      <section className="flex justify-center bg-bgStars">
        <article className="flex flex-col items-center gap-10 mt-20">
          <h1 className="uppercase text-xl text-white">we're launching soon</h1>
          {/* countdown time */}
          <div className="flex flex-row gap-4">
            <div className="flex flex-col gap-2">
              <span>{formatNumber(days)}</span>
              <p>DAYS</p>
            </div>
            <div className="flex flex-col gap-2">
              <span>{formatNumber(hours)}</span>
              <p>hours</p>
            </div>
            <div className="flex flex-col gap-2">
              <span>{formatNumber(minutes)}</span>
              <p>minutes</p>
            </div>
            <div className="flex flex-col gap-2">
              <span>{formatNumber(seconds)}</span>
              <p>seconds</p>
            </div>
          </div>
          {/* icon */}
          <div className="absolute bottom-20">
            <div className="flex flex-row gap-8">
              <img src={iconFa} alt="" />
              <img src={iconPin} alt="" />
              <img src={iconInta} alt="" />
            </div>

          </div>
        </article>
      </section>
    </main>
  )
}