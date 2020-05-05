// Flow 2: Job to upload Kobo form to central MongoDB
insertDocuments({
  database: 'medair',
  collection: 'beneficiaries',
  documents: (state) => {
    return state.data.map((ben) => {
      return { name: ben.name, age: ben.age };
    });
  },
});