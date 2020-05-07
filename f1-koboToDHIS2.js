//Flow 1: Job to upload Kobo form to DHIS2 play instance
createTEI({ //Helper function to create Tracked Entity Instance
    "trackedEntityType": "nEenWmSyUEp",
    "orgUnit": "g8upMTyEZGZ",
    "attributes": [
      {
        "attribute": "w75KJ2mc4zz", // Attribute Id for FirstName
        "value": dataValue("data.Beneficiary_First_Name")(state) //Question in Kobo form
      },
      {
        "attribute": "zDhUuAYrxNC", 
        "value": dataValue("data.Beneficiary_Surname")(state)
      }
      /*{
      attribute: 'attributeId', // Other DHIS2 attributes...
      value: sourceValue, //Map to Kobo source...
    },*/
    ],
    "enrollments": [
      {
          "orgUnit": "g8upMTyEZGZ",
          "program": "IpHINAT79UW", 
          "enrollmentDate": dataValue("data._submission_time")(state).substring(0,10), //only return YYYY-MM-DD, no timestamp
          "incidentDate": dataValue("data._submission_time")(state).substring(0,10)
       }
     ]
  });
