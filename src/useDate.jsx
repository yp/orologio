import { useState, useEffect } from "react";

export const useDate = () => {
    const [today, setDate] = useState(new Date()); // Save the current date to be able to trigger an update

    useEffect(() => {
        const timer = setInterval(() => { // Creates an interval which will update the current data every minute
            // This will trigger a rerender every component that uses the useDate hook.
            setDate(new Date());
        }, 10000);
        return () => {
            clearInterval(timer); // Return a funtion to clear the timer so that it will stop being called on unmount
        }
    }, []);

    const [hour, minutes] = [
        today.getHours(),
        today.getMinutes(),
    ];

    const time = `${hour}`.padStart(2, "0") + ":" + `${minutes}`.padStart(2, "0");

    return [
        time,
    ];
};