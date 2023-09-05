import { useState } from "react";
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
];

function BusTickets() {
  const ACBuses = BusesAvailable.filter((bus) => bus.BusType === "AC");
  const Sleeper = BusesAvailable.filter((bus) => bus.BusType === "Sleeper");
  const NonAC = BusesAvailable.filter((bus) => bus.BusType === "NON AC");

  const [busesTypes, setBusesTypes] = useState(BusesAvailable);

  return (
    <div>
      <div className="BusTypes">
        <div>
          <input type="checkbox" id="SEATER" />{" "}
          <label htmlFor="SEATER">SEATER</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="SLEEPER"
            onChange={() => setBusesTypes(Sleeper)}
          />{" "}
          <label htmlFor="SLEEPER">SLEEPER</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="AC"
            onChange={() => setBusesTypes(ACBuses)}
          />
          <label htmlFor="AC">AC</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="NON_AC"
            onChange={() => setBusesTypes(NonAC)}
          />
          <label htmlFor="NON_AC">NON AC</label>
        </div>
      </div>
      <div className="BusAvailable">
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
  );
}
export default BusTickets;
