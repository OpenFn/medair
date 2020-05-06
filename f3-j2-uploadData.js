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
      const event = state.data;
      event.tags = ['openfn', 'dhis2'];

      return event;
      // return null;
    },
    options: { upsert: true },
  })
);
