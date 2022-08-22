import {initializeOpeningDaysData} from './group-opening-hours'
const mapDayToWeek = {
    0: 'sunday',
    1: 'monday',
    2:'tuesday',
    3:'wednesday',
    4: 'thursday',
    5: 'friday',
    6 : 'saturday'
  }

export const isPlaceOpened =(days)=>{
    const groupedOpeningHours =initializeOpeningDaysData(days)
    const todaysDate = new Date()
    const todaysDay = todaysDate.getDay()
    const currentdaydata = groupedOpeningHours[mapDayToWeek[todaysDay]]
    let isOpened = false
    if(!!currentdaydata?.value){
        currentdaydata?.value?.forEach((each)=>{
            const {start,end} = each 
            const splitStart = start?.split(':')
            const splitEnd = end?.split(':')
            const startDate = (new Date(todaysDate)).setHours(splitStart[0] , splitStart[1],0)
            const endDate = (new Date(todaysDate)).setHours(splitEnd[0], splitEnd[1] , 0)
            
            if(todaysDate>=startDate && todaysDate<=endDate)
            isOpened = true

        })
    }
    return isOpened
  }

