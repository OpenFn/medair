// Flow 2: Job to upload Kobo form to central MongoDB
insertDocuments({
  database: 'medair',
  collection: 'beneficiaries',
  documents: (state) => {
    const person = state.data.data;
    return [
      {
        // Bio Section
        name: person.Beneficiary_First_Name + " " + person.Beneficiary_Surname,
        age: person.Beneficiary_Age,
        program: person.Program,
        registrationDate: person.Registration_Date,
        gpsLocation: person._geolocation,

        // Metadata Section
        id: person._id,
        uuid: person._uuid,
        status: person._status,
        tags: ['openfn', 'kobo'],
        timestamp: person._submission_time,
      },
    ];
  },
});