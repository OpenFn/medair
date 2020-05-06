//Flow 3, Job 1 to fetch data from DHIS2 play instance

alterState(state => {
  // We don't care about the last run!
  state.references = [];
  return state;
})

fetchEvents({
  fields: {
    orgUnit: 'g8upMTyEZGZ',
    profram: 'IpHINAT79UW',
    lastUpdated: '2019-08-21', //this will return a smaller payload; speak to how filtering could be dynamic
  },
});
