//Flow 3, Job 1 to fetch data from DHIS2 play instance

alterState((state) => {
  state.references = [];
  return state;
});

fetchEvents({
  fields: {
    orgUnit: 'g8upMTyEZGZ',
    lastUpdated: new Date(Date.now() - 24 * 60 * 60 * 1000)
      .toISOString()
      .slice(0, 10),
    //program: 'M3xtLkYBlKI', //we can choose to add other filter paramters supported by DHIS2 api
  },
});
