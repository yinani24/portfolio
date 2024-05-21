import { TimeWorked } from "./interfaces";

export function calculateTotalTimeWorked({startMonth, startYear}: TimeWorked) {
    const currentDate: Date = new Date();
    const startDate: Date = new Date(startYear, startMonth - 1); 
    const differenceInMilliseconds = currentDate.getTime() - startDate.getTime();
    const millisecondsPerMonth = 1000 * 60 * 60 * 24 * 30.44;
    const totalTimeInMonths = differenceInMilliseconds / millisecondsPerMonth;

    // Check if the total time is more than 12 months
    if (totalTimeInMonths % 12 == 0) {
        const years = Math.floor(totalTimeInMonths / 12);
        return `${years} years`;
    } 
    else if(totalTimeInMonths >= 12){
        const years = Math.floor(totalTimeInMonths / 12);
        const months = Math.round(totalTimeInMonths % 12);
        return `${years} years ${months} months`;
    }
    else {
        const roundedMonths = Math.round(totalTimeInMonths);
        return `${roundedMonths} months`;
    }
}
