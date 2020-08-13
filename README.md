# Medair Project Name
This is a sample documentation page pulled from the UNICEF Cambodia integration project. 

## (1) Functional Requirements
- [x] Business value articulated?
- [x] User Stories documented?
- [x] Data Sharing protocols signed-off by partners?

[See this Word document]() for the project summary, background, and objectives. 

OpenFn integration was implemented to facilitate automated, secure data exchange between the Primero and Oscar case management systems. This integration supports child protection service delivery and coordination between agency partners. 

_**Flow 1: Oscar referrals --> Primero**_
* User Story 1: As a case worker, I want to send case data to Primero so that I can refer children for services not provided by the government.  

_**Flow 2: Primero case updates --> Oscar**_
* User Story 2: As a case worker, I want to monitor updates to cases referred to external systems so that I can ensure that the child is receiving the appropriate care and that the referral is being managed by the external agency. 


## (2) Systems
OpenFn facilitates a scheduled, bi-directional data sync between the Primero and Oscar systems every hour. 
**APIs** :

**Primero** is UNICEF's open-source case management tool for managing child protection service delivery.
- [Link to API v2]()

**Oscar** is the case management tool used by the Cambodia government and key partner organizations for managing delivery of a range of social services. 
- [Link to API docs]()

**OpenFn language-packages** (API adaptors) implemented: 
* [language-primero](https://github.com/OpenFn/language-primero)
* [language-http](https://github.com/OpenFn/language-http)

## (3) Data Flows
To operationalize the user stories, the below OpenFn jobs were implemented to automate this data flow: 
[Link to data flow visual diagrams.]()

_**Flow 1: Oscar referrals --> Primero**_
1. `getOscarCases.js`
2. `postToPrimero.js`

_**Flow 2: Primero cases --> OScar**_
1. `getPrimeroCases.js`
2. `postToOscar.js`


## (4) Flow Triggers
- Trigger Type: Timer

OpenFn jobs run on cron at 15 minutes past the hour. 

### Integration Assumptions 
1. **Unique Identifiers**: OpenFn will perform upsert() (update if record exists, create if new) operations in both the Primero and OSCaR systems when syncing data. To ensure no duplicate cases are entered, OpenFn will use the below identifiers to check for existing cases. We assume that these identifiers are unique.
Oscar unique id: `global_id` (represented as `oscar_number` in Primero system)
Primero unique id: `case_id` (represented as `external_id` in Oscar system)
3. **Service Mappings**: Primero and Oscar partners have signed off on these service mappings to align on service classification types for referrals. If any services change, [this map]() referenced in the OpenFn jobs must be updated.

## (5) Data Flow Mappings & Transformations
[See this table](https://docs.google.com/spreadsheets/d/1f1fT3qmM4mKT98AaJ0ArlgONQRC-W9ghoa-j4BswwbM/edit?usp=sharing) for the integration mapping specifications. 

## (6) Change Management
System administrators are responsible for identifying if changes may impact the OpenFn integration. These may include the following. 
1. If login credentials are changed for either system, the relevant **Credential** must be updated in OpenFn.org. 
2. If system changes are made to any of the **fields** referenced in the [field mappings](https://docs.google.com/spreadsheets/d/1f1fT3qmM4mKT98AaJ0ArlgONQRC-W9ghoa-j4BswwbM/edit?usp=sharing), the OpenFn jobs should be reviewed and tested to confirm no impact on the integration. 
3. If the list of available  **Services** in either system changes, then the Services Map should be reviewed in the [mapping document]() to confirm no updates are required in the OpenFn jobs. 
4. ...

## (7) Administration
### Provisioning, Hosting, & Maintenance
This integration is hosted on [OpenFn.org](https://openfn.org/projects) with Primero SaaS. OpenFn will provide ongoing maintenance support. Primero system administrators will be responsible for integration monitoring and identifying when Primero system changes require integration updates. 

### Support 
Primero system administrators will be responsible for ongoing integration monitoring and management.
- Primero System Administrators: [list emails]
- MOPH System Administrators: [list emails] 

Contact support@openfn.org with any questions or troubleshooting support. 

## Support Checklist
- [ ] OpenFn Admin users & access levels confirmed? 
- [ ] OpenFn Admin training delivered? 
- [ ] Support POCs identified for each connected system? 
