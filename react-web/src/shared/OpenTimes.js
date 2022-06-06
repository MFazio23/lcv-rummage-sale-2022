import React from "react";

function OpenTimes(props) {
    const days = ["W", "T", "F", "S"];

    return <div className="days-open-dots">
        {days.map(day => {
            const isOpen = props.house.daysOpen[day.toLowerCase()];
            return <OpenTimeItem key={day} isOpen={isOpen} day={day}/>
        })}
    </div>
}

function OpenTimeItem(props) {
    return <div className={`day-open-dot ${(props.isOpen ? " is-open" : "")}`}>{props.day}</div>
}

export default OpenTimes;