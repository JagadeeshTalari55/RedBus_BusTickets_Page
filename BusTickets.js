import { useEffect, useState } from "react";
import "./BusTickets.css";

const BusesAvailable = [
  {
    Travels: "Ramana Tours And Travels",
    BusTypeString: "A/C Sleeper (2+1)",
    BusType: "AC",
    DepatureTime: "20:30",
    StartingTicketPrice: 1430,
    TotalSeatsAvailable: 22,
    TotalSingleSeats: 5,
  },
  {
    Travels: "KSM Road Lines",
    BusTypeString: "Sleeper",
    BusType: "Sleeper",
    DepatureTime: "23:15",
    StartingTicketPrice: 1699,
    TotalSeatsAvailable: 30,
    TotalSingleSeats: 10,
  },
  {
    Travels: "Bharathi Travels",
    BusTypeString: "Non Ac Sleeper",
    BusType: "NON AC",
    DepatureTime: "20:50",
    StartingTicketPrice: 1530,
    TotalSeatsAvailable: 24,
    TotalSingleSeats: 6,
  },
  {
    Travels: "VSR Tours and Travels",
    BusTypeString: "A/C Sleeper (2+1)",
    BusType: "AC",
    DepatureTime: "20:40",
    StartingTicketPrice: 1699,
    TotalSeatsAvailable: 21,
    TotalSingleSeats: 5,
  },
  {
    Travels: "VSR Tours and Travels",
    BusTypeString: "A/C Sleeper (2+1)",
    BusType: "AC",
    DepatureTime: "20:40",
    StartingTicketPrice: 1699,
    TotalSeatsAvailable: 21,
    TotalSingleSeats: 5,
  },
];

function BusTickets2() {
  const ACBusesArray = BusesAvailable.filter((bus) => bus.BusType === "AC"); //[{ramana toHaveFormValues}, {vsr tours and travels}, {vsr tours and travels} ]
  const SleeperBusesArray = BusesAvailable.filter(
    (bus) => bus.BusType === "Sleeper"
  ); //[{ksm road Lines}, ]
  const NonACBusesArray = BusesAvailable.filter(
    (bus) => bus.BusType === "NON AC"
  ); //[{bharathi travels}]

  const [busesTypes, setBusesTypes] = useState(BusesAvailable);

  //   useEffect(callbackfuntion, [dependency array])

  return (
    // Buses Available Total Page
    <>
      <h2> Buses Total Page</h2>
      <div className="BusesTotalPage">
        {/* Side Bar */}
        <div className="BusTypes">
          <div>
            <input type="checkbox" id="SEATER" />{" "}
            <label htmlFor="SEATER">SEATER</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="SLEEPER"
              onChange={() => setBusesTypes(SleeperBusesArray)}
            />{" "}
            <label htmlFor="SLEEPER">SLEEPER</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="AC"
              onChange={() => setBusesTypes(ACBusesArray)}
            />
            <label htmlFor="AC">AC</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="NON_AC"
              onChange={() => setBusesTypes(NonACBusesArray)}
            />
            <label htmlFor="NON_AC">NON AC</label>
          </div>
        </div>
        {/* Total Buses Available Cards */}
        <div className="BusAvailable">
          {/* Modified Array --> Filter Array ( AC Array, Sleeper Array, Non Ac Array) */}
          {busesTypes.map((Bus, i) => {
            return (
              <div key={i} className="BusDetails">
                <div>
                  <h3>{Bus.Travels}</h3>
                  <div className="busType">{Bus.BusTypeString}</div>
                </div>
                <h4>{Bus.DepatureTime}</h4>
                <p>
                  Starts from INR
                  <b>{Bus.StartingTicketPrice}</b>
                </p>
                <div>
                  <p>{Bus.TotalSeatsAvailable} Seats Avaialble</p>
                  <p>{Bus.TotalSingleSeats} Single</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
export default BusTickets2;
