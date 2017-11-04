import moment from 'moment'

export default [
  {
    title : 'test Event',
    start: moment(new Date(2017, 11, 5)).format(),
    end: moment(new Date(2017, 11, 6)).format(),
    action: "select",
  },
  {
    title : 'test Event2',
    start:new Date(2017, 10, 7),
    end: new Date(2017, 10, 10),
    action: "select",
  }
]
