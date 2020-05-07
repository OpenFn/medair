alterState((state) => {
  const pagedData = state.references.map((r) => JSON.parse(r.text).events);
  state.events = [].concat.apply([], pagedData);

  return state;
});

//Flow 3, Job 2 to load DHIS2 data to MungoDB
each(
  '$.events[*]',
  updateDocument({
    database: 'medair',
    collection: 'events',
    filter: (state) => ({ program: state.data.event }),
    changes: (state) => {
      const programMap = {
        M3xtLkYBlKI: 'Food Assistance',
        IpHINAT79UW: 'Child Support',
        eBAyeGv0exc: 'Medical Support',
      };

      const event = state.data;
      event.program = programMap[event.program] || 'Other';
      event.tags = ['openfn', 'dhis2'];

      return event;
    },
    options: { upsert: true },
  })
);
