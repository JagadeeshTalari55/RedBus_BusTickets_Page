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
    BusType: "SLEEPER",
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

const totalBusTypes = ["SLEEPER", "AC", "NON AC"];

function BusTickets() {
  const [busesTypes, setBusesTypes] = useState(BusesAvailable);
  const [activeCheckboxesArray, setActiveCheckboxesArray] = useState([
    false,
    false,
    false,
  ]);

  // BtnIndex = 0 //BtnName = Sleeper [click]
  // BtnIndex = 1 //BtnName = AC
  // BtnIndex = 2 //BtnName = Non AC
  function modifiedArrayFunc(BtnIndex, BtnName) {
    // BtnIndex = 0 //BtnName = Sleeper

    // activeCheckboxesArray = [false, false, false, false]
    const newActiveCheckArray = activeCheckboxesArray.map((s, i) => {
      // i = 0, s=false , BtnIndex = 0, BtnName = Sleeper
      // i = 1, s=false , BtnIndex = 0, BtnName = Sleeper
      // i = 2, s=false , BtnIndex = 0, BtnName = Sleeper
      // i = 3, s=false , BtnIndex = 0, BtnName = Sleeper

      if (BtnIndex === i) {
        //0 === 0 correct
        //0 === 1 fail
        //0 === 2 fail

        return !s; //s=true
      }
      return s;
      //s=false , i=1
      //s=false , i=2
      //s=false , i=3
    });

    // newActiveCheckArray = [true, false, false, false ]

    let NewBusesArray = [];

    // if (BtnName === "Sleeper") {
    //   NewBusesArray = BusesAvailable.filter((bus) => bus.BusType === "Sleeper");
    // } else if (BtnName === "AC") {
    //   NewBusesArray = BusesAvailable.filter((bus) => bus.BusType === "AC");
    // } else if (BtnName === "NON AC") {
    //   NewBusesArray = BusesAvailable.filter((bus) => bus.BusType === "NON AC");
    // }

    // totalBusTypes = ["SLEEPER", "AC", "NON AC"]
    NewBusesArray = totalBusTypes.map((busType) => {
      // busType = "SLEEPER"
      // busType =  "AC"
      // busType =  "NON AC"

      //BtnName = "SLEEPER"
    
      if (BtnName === busType) {
        return BusesAvailable.filter((bus) => bus.BusType === BtnName);
      }
      return [];
    });

    // NewBusesArray = [ [{ksm array}], [], [] ]

    let TotalNewBusesArray = [
      ...NewBusesArray[0],
      ...NewBusesArray[1],
      ...NewBusesArray[2],
    ];



    // newActiveCheckArray.map(
    //   (s, i) => {
    //     BusesAvailable.filter((o) => {
    //       o.BusType === totalBusTypes[i]
    //     })
    //   }
    // )

    

    setActiveCheckboxesArray(newActiveCheckArray);
    setBusesTypes(TotalNewBusesArray);
  }

  return (
    // Buses Available Total Page
    <>
      <h2> Buses Total Page</h2>
      <div className="BusesTotalPage">
        {/* Side Bar */}
        <div className="BusTypes">
          <div>
            <input
              type="checkbox"
              id="SLEEPER"
              onChange={() => modifiedArrayFunc(0, "SLEEPER")}
            />{" "}
            <label htmlFor="SLEEPER">SLEEPER</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="AC"
              onChange={() => modifiedArrayFunc(1, "AC")}
            />
            <label htmlFor="AC">AC</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="NON_AC"
              onChange={() => modifiedArrayFunc(2, "NON AC")}
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
export default BusTickets;
