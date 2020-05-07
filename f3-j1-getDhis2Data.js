//Flow 3, Job 1 to fetch data from DHIS2 play instance

alterState(state => {
  state.references = [];
  return state;
})

fetchEvents({
  fields: {
    orgUnit: 'g8upMTyEZGZ',
    lastUpdated: '2019-08-21', //this will return a smaller payload; speak to how filtering could be dynamic
    //lastUpdated: 'last24HoursFromNow` 
    //program: 'M3xtLkYBlKI', //we can choose to add other filter paramters supported by DHIS2 api
  },
});
