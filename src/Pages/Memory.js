import React from 'react'
import checklist from "../assets/checklists.png"
import bookandrelax from "../assets/bookandrelax.png"
import bookmarks from "../assets/bookmarks.png"

const Memory = () => {
  return (
    <div>
        <div>
            <h1>Travel to make memories all around the world</h1>
            <button>View all</button>
        </div>
        <div>
        <div>
            <img src={bookandrelax} alt='err'/>
            <h1>Book & Relax</h1>
            <p>You can also call airlines from your phone and book a flight ticket</p>
            </div>

            <div>
            <img src={checklist} alt='err'/>
            <h1>Smart Checklist</h1>
            <p>You can also call airlines from your phone and book a flight ticket</p>
            </div>

            <div>
            <img src={bookmarks} alt='err'/>
            <h1>Save More</h1>
            <p>You can also call airlines from your phone and book a flight ticket</p>
            </div>
        </div>
    </div>
  )
}

export default Memory