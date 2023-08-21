import React from 'react'
import flightpeople from "../assets/flightpeople.jpg"
import insideflight from "../assets/insideflight.jpg"

const Lounge = () => {
  return (
    <>
    {/* Unaccompanied  Minor  Lounge */}
    <div>
      <h1>Unaccompanied Minor Lounge</h1>
      <div>
        <div>
          <h2>Help through the airport</h2>
          <p>You can also call airlines from your phone and book a flight ticket to one of your favourite destinations.</p>
        </div>

        <div>
          <h2>Core on the flight</h2>
          <p>You can also call airlines from your phone and book a flight ticket to one of your favourite destinations.</p>
        </div>

        <div>
          <h2>Priority Boarding</h2>
          <p>You can also call airlines from your phone and book a flight ticket to one of your favourite destinations.</p>
        </div>
          

        <div>
          <h2>Chauffeur-drive service</h2>
          <p>You can also call airlines from your phone and book a flight ticket to one of your favourite destinations.</p>
        </div>
      </div>
      <div>
        <img src={flightpeople} alt='err'/>
        <img src={insideflight} alt='err'/>
      </div>
    </div>

    </>
  )
}

export default Lounge