
import { initializeOpeningDaysData } from './group-opening-hours'
const mapDayToWeek = {
    0: 'sunday',
    1: 'monday',
    2: 'tuesday',
    3: 'wednesday',
    4: 'thursday',
    5: 'friday',
    6: 'saturday'
}

export const nearestOpenedInterval = (currentdaydata, todaysDate) => {
    return currentdaydata?.value?.find((each) => {
        const { start, end } = each
        const splitStart = start?.split(':')
        const splitEnd = end?.split(':')
        const startDate = (new Date(todaysDate)).setHours(splitStart[0], splitStart[1], 0)
        const endDate = (new Date(todaysDate)).setHours(splitEnd[0], splitEnd[1], 0)

        return todaysDate >= startDate && todaysDate <= endDate
    })
}

export const nearestUpcomingOpenedInterval = (currentdaydata, todaysDate) => {
    return currentdaydata?.value?.find((each) => {
        const { start, end } = each
        const splitStart = start?.split(':')
        const splitEnd = end?.split(':')
        const startDate = (new Date(todaysDate)).setHours(splitStart[0], splitStart[1], 0)
        return todaysDate <= startDate 
    })
    
}


const getCurrentDate = () => {
    return new Date('August 22, 2022 12:15:30')
}
export const isPlaceOpened = (days) => {
    const groupedOpeningHours = initializeOpeningDaysData(days)
    const todaysDate = getCurrentDate()
    const todaysDay = todaysDate.getDay()
    const currentdaydata = groupedOpeningHours[mapDayToWeek[todaysDay]]
    let isOpened = false
    if (!!currentdaydata?.value) {
        isOpened = !!nearestOpenedInterval(currentdaydata, todaysDate)
    }
    return isOpened
}
const findFutureDaysIntervals = (todaysDate,groupedOpeningHours) => {
    const todaysDay = todaysDate.getDay()
    let nextDay=todaysDay+1 
    for(let counter=1 ; counter <7 ; counter++){
        let dayTimings =groupedOpeningHours[mapDayToWeek[nextDay%7]]?.value
        if(dayTimings?.length)
        return dayTimings[0]
        else 
        nextDay++
    }
    return
}

export const getcloseOpenNearestTime = (days) => {
    const todaysDate = getCurrentDate()
    const todaysDay = todaysDate.getDay()
    const groupedOpeningHours = initializeOpeningDaysData(days)
    console.log(groupedOpeningHours)
    const currentdaydata = groupedOpeningHours[mapDayToWeek[todaysDay]]
    let nearestOpenedIntervalToday = nearestOpenedInterval(currentdaydata, todaysDate)
    if (nearestOpenedIntervalToday)
        return nearestOpenedIntervalToday?.end
   
     const nearestUpcomingOpenTime = nearestUpcomingOpenedInterval(currentdaydata, todaysDate)?.start

    if (nearestUpcomingOpenTime)
        return  nearestUpcomingOpenTime
    else
    return findFutureDaysIntervals(todaysDate, groupedOpeningHours)?.start || ''


}
/*
if closed
  nearest start time next interval in the day 
  else 
  nearest start time  next interval in the upcoming days 

if opened 
    end timing of the interval 
*/