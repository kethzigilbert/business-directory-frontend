import { isEmpty } from "lodash";
import isEqual from "lodash/isEqual"

const initializeOpeningDaysData = (days) => {

  let initialDaysData = {};
  ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].forEach((eachDay, index) => {
    initialDaysData[eachDay.toLowerCase()] = {
      label: eachDay,
      value: [],
    }
  })

  Object.keys(days).forEach((each) => initialDaysData[each].value = days[each])
  return initialDaysData
}

const groupSimiliarOpenedDays = (initialDaysData) => {

  let startObjectValue = null,
    startDayName = null,
    endDayName = null;

  const finalGroupedDays = [];
  Object.keys(initialDaysData).forEach((eachDay, index) => {
    const currentDayObject = initialDaysData[eachDay]?.value;
    const currentDayName = initialDaysData[eachDay]?.label;
    if (index === 0) {
      startObjectValue = currentDayObject;
      startDayName = currentDayName;
    } else {
      if (isEqual(currentDayObject, startObjectValue)) {
        endDayName = currentDayName;
      }
      if (!isEqual(currentDayObject, startObjectValue)) {
        finalGroupedDays.push({
          label:
            endDayName === null
              ? startDayName
              : `${startDayName} - ${endDayName}`,
          value: startObjectValue
        });
        startObjectValue = currentDayObject;
        startDayName = currentDayName;

        endDayName = null;
      }
      if (index === Object.keys(initialDaysData).length - 1) {
        finalGroupedDays.push({
          label:
            endDayName !== null
              ? `${startDayName} - ${endDayName}`
              : startDayName,
          value: currentDayObject
        });
      }
    }


  });
  return finalGroupedDays;
}


const improveLabels = (groupedDays) => {

  const timeValuesToString = (values) => {
    if (isEmpty(values)) return ['Closed']
    else
      return values?.map(each => `${each?.start}-${each?.end}`)
  }

  return groupedDays.map((each) => ({
    label: each?.label,
    values: timeValuesToString(each?.value)
  }))

}
const groupOpeningHours = (days = {}) => {
  const initialDaysData = initializeOpeningDaysData(days)
  const groupedDays = groupSimiliarOpenedDays(initialDaysData)
  const groupedOpeningHours = improveLabels(groupedDays)
  return groupedOpeningHours;
}


export default groupOpeningHours;