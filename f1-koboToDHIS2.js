//Flow 1: Job to upload Kobo form to DHIS2 play instance
createTEI({
  trackedEntityType: 'nEenWmSyUEp',
  orgUnit: 'g8upMTyEZGZ',
  attributes: [
    {
      attribute: 'w75KJ2mc4zz', // Attribute Id for FirstName in DHIS2
      value: state.data.data.Beneficiary_First_Name, //Question in Kobo form
    },
    {
      attribute: 'zDhUuAYrxNC', // LastName attribute
      value: state.data.data.Beneficiary_Surname,
    },
  ],
  enrollments: [
    {
      orgUnit: 'g8upMTyEZGZ',
      program: 'IpHINAT79UW', //enroll in Child program
      enrollmentDate: dataValue('data._submission_time')(state).substring(0, 10),
      incidentDate: dataValue('data._submission_time')(state).substring(0, 10),
    },
  ],
});
