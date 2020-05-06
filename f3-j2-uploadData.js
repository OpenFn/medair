//Flow 3, Job 2 to load DHIS2 data to MungoDB
insertDocuments({
  database: 'medair',
  collection: 'events',
  documents: (state) => {
    console.log('DHIS2 refs: ' + JSON.stringify(state.references));
    console.log('DHIS2 data: ' + JSON.stringify(state.data));
    const event = state.references[0];
    return [
      {
        // Metadata Section
        id: event._id,
        uuid: event._uuid,
        event_status: event._status,
        tags: ['openfn', 'dhis2'],
        timestamp: event._submission_time,
      },
    ];
  },
});
