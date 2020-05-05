// Flow 2: Job to upload Kobo form to central MongoDB
insertDocuments({
  database: 'medair',
  collection: 'beneficiaries',
  documents: (state) => {
    return state.data.map((person) => {
      return { name: person.name, age: person.age };
    });
  },
});