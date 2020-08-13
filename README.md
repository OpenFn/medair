# Medair Project Name
Description...

## (1) Functional Requirements
[See here] for the project summary, background, and objectives. 

OpenFn integration was implemented to facilitate automated, secure data exchange between the Primero and Oscar case management systems. This integration supports child protection service delivery and coordination between agency partners. 

_**Flow 1: Oscar referrals --> Primero**_
* User Story 1: As a case worker, I want to send case data to Primero so that I can refer children for services not provided by the government.  

_**Flow 2: Primero case updates --> Oscar**_
* User Story 2: As a case worker, I want to monitor updates to cases referred to external systems so that I can ensure that the child is receiving the appropriate care and that the referral is being managed by the external agency. 


## (2) Systems
OpenFn facilitates a scheduled, bi-directional data sync between the Primero and Oscar systems every hour. 
**APIs** :
* Primero: [Link to API v2]
* Oscar: [Link]

**OpenFn language-packages** (API adaptors) implemented: 
* [language-primero](https://github.com/OpenFn/language-primero)

## (3) Data Flows
[Summarize & link to data flow visual diagrams.]

_**Flow 1: Oscar referrals --> Primero**_
1. Link to OpenFn jobs that automate this flow...

_**Flow 2: Primero cases --> OScar**_
1. Link to OpenFn jobs that automate this flow...


## (4) Flow Triggers
- Trigger Type: Timer

OpenFn jobs run on cron at 15 minutes past the hour. 

### Integration Assumptions 
1. **Unique Identifiers**: ...
3. **Mapping Service Types between Systems**: ...

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
This integration is hosted on [OpenFn.org](https://openfn.org/projects) with Primero SaaS. OpenFn will provide ongoing maintenance support. 

### Support 
Primero system administrators will be responsible for ongoing integration monitoring and management.
- Primero System Administrators: [list emails]
- MOPH System Administrators: [list emails] 

Contact support@openfn.org with any questions or troubleshooting support. 

## Support Checklist
- [ ] OpenFn Admin users & access levels confirmed? 
- [ ] OpenFn Admin training delivered? 
- [ ] Support POCs identified for each connected system? 
