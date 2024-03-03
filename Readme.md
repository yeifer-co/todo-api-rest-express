# AUTORITY CHALLENGE API BOILERPLATE

Express backend boilerplate for Autority Challenge.

### Prerequisites

- [NodeJS v16](https://nodejs.org/)
- [PostgresSQL](https://www.postgresql.org/)

## Getting Started

Clone this project in your repository
Create PostgresSQL Data base with name `autority-challenge` on local or cloud and configure user and password

### Configure the database

Create a migration for the database table `todo` and columns:

| Name      | Type |
| ----------- | ----------- |
| id      | int AUTO_INCREMENT PRIMARY KEY       |
| name   | varchar NOT NULL       |
| description  | text NOT NULL       |
| author   | varchar NOT NULL       |
| isComplete  | boolean NOT NULL       |
| createdAt   | datetime NOT NULL DETAUL CURRENT_TIMESTAMP |
| updateAt   | datetime NOT NULL DETAUL CURRENT_TIMESTAMP |
| deleteAt   | datetime |


Copy `.env.example` in new file with name `.env` and enter your database information.

## Run migrations

```bash
npm run migrate
```
**Note:** *The project have a migration for reference: 'src/database/migrations/20221001094700-create-user-table-reference.js'*

**Note:** *The api route 'http://localhost:4000/health' test the server and database*

## Start Development Server

Install the project dependencies:

```bash
npm install
```

Start the dev server

```bash
npm run dev
```

## Work your apis APIs under the following criteria

| API               |    CRUD    |                                Description |
| :---------------- | :--------: | -----------------------------------------: |
| GET /tasks        |  **READ**  |        Get all Task created in `todo` table |
| GET /task/{id}    |  **READ**  |        Get the Task by id from `todo` table |
| POST /task        | **CREATE** | Create a Task and insert into `todo` table |
| PUT /task/{id}    | **UPDATE** |            Update the Task by id in `todo` table |
| DELETE /task/{id} | **DELETE** |            Delete a Task by id from `todo` table |

## Diagrams

### Entities Relationship

![entities_relationship](https://www.plantuml.com/plantuml/svg/NP11QWH124NtTGgPpK38N20CmuIGWzZbfrDGNHQM3Mb2xXvhrsGZ-jJln-TmDj-tcgwVmq5IU3NUcF3TQybCbGUXUH4MZ5TYjxBiheCECbJEHHi62MAG5XwOgV0Sw6mXCqMxwO7iUarfIlb15rVH2uNsJEWd4RrG4NgZqfpkznKDnWvvFA9rkqLel27w8moqDUgmawrq3mDdpBj_gPr96H-wzGgVwujg1RV0sJ0Fl7lGC8n0UvV_I30NJ-WtfIUQnCV-0000 "entities_relationship")

### Sequence Diagram

![sequence_api](https://www.plantuml.com/plantuml/svg/rPLHJzim4CVV_IbEbYh1L8HAtYg1wAXXI6ojcdGyK1ukjLiiKZjBt4tJjE_EsUwsXf4nrcdI_E2SdVF_xduvAwUrmygjLmLZTmgbgY1L7zRAE8q5I8tB2bTW5-3k50p6bp37egZPmbf7hcDSAkYKD7UyJwV0seKLOoMfwhakqJWuhopDDmne78U5CZAi3cW4W_FNEBzVLdOjOmZEsMr3X0iZIwl9eZGu0DQ0fMOI7UPOAoyotBBz81UPC-QqAnHSA0Sa30xh-vgncDF1YHVfmuN8u32-mRdJ7z6feCveyauoxqCghiHP1g_WV39w2yvA-yFNXv4vbRFHk_aoCpEdPHzwNMyPNAa-y8mYG8-7BMaDRIsmgDNCVAMjxqUEkX3y_JeUETe-uggrFt7Bf6h43wbI0g6oVvz2m6NK9__z8-o06lBFe6KhxyFUIu33zHin4QG7nz1hf__IofyXkOjSWyfPfS9U0FCOoNYKRfYq4xbybuf9Hezi57di-MIwuEFlm_l1rLIai1TJItWtPhJ_6w2IdofBTW7r1t8DKDDI_WBKz5ll9EsafkFX81CHKahDvWDJq_Z6tMwYP7Sscxlmbz0yeTOWCrI5QYKpf0j3HJyBP-FtvBNwRuYSqZ-4VbiF "sequence_api")

![sequence_api](https://www.plantuml.com/plantuml/svg/1/rPLHJzim4CVV_IbEbYh1L8HAtYg1wAXXI6ojcdGyK1ukjLiiKZjBt4tJjE_EsUwsXf4nrcdI_E2SdVF_xduvAwUrmygjLmLZTmgbgY1L7zRAE8q5I8tB2bTW5-3k50p6bp37egZPmbf7hcDSAkYKD7UyJwV0seKLOoMfwhakqJWuhopDDmne78U5CZAi3cW4W_FNEBzVLdOjOmZEsMr3X0iZIwl9eZGu0DQ0fMOI7UPOAoyotBBz81UPC-QqAnHSA0Sa30xh-vgncDF1YHVfmuN8u32-mRdJ7z6feCveyauoxqCghiHP1g_WV39w2yvA-yFNXv4vbRFHk_aoCpEdPHzwNMyPNAa-y8mYG8-7BMaDRIsmgDNCVAMjxqUEkX3y_JeUETe-uggrFt7Bf6h43wbI0g6oVvz2m6NK9__z8-o06lBFe6KhxyFUIu33zHin4QG7nz1hf__IofyXkOjSWyfPfS9U0FCOoNYKRfYq4xbybuf9Hezi57di-MIwuEFlm_l1rLIai1TJItWtPhJ_6w2IdofBTW7r1t8DKDDI_WBKz5ll9EsafkFX81CHKahDvWDJq_Z6tMwYP7Sscxlmbz0yeTOWCrI5QYKpf0j3HJyBP-FtvBNwRuYSqZ-4VbiF "sequence_api")

![sequence_api](https://www.plantuml.com/plantuml/svg/2/rPLHJzim4CVV_IbEbYh1L8HAtYg1wAXXI6ojcdGyK1ukjLiiKZjBt4tJjE_EsUwsXf4nrcdI_E2SdVF_xduvAwUrmygjLmLZTmgbgY1L7zRAE8q5I8tB2bTW5-3k50p6bp37egZPmbf7hcDSAkYKD7UyJwV0seKLOoMfwhakqJWuhopDDmne78U5CZAi3cW4W_FNEBzVLdOjOmZEsMr3X0iZIwl9eZGu0DQ0fMOI7UPOAoyotBBz81UPC-QqAnHSA0Sa30xh-vgncDF1YHVfmuN8u32-mRdJ7z6feCveyauoxqCghiHP1g_WV39w2yvA-yFNXv4vbRFHk_aoCpEdPHzwNMyPNAa-y8mYG8-7BMaDRIsmgDNCVAMjxqUEkX3y_JeUETe-uggrFt7Bf6h43wbI0g6oVvz2m6NK9__z8-o06lBFe6KhxyFUIu33zHin4QG7nz1hf__IofyXkOjSWyfPfS9U0FCOoNYKRfYq4xbybuf9Hezi57di-MIwuEFlm_l1rLIai1TJItWtPhJ_6w2IdofBTW7r1t8DKDDI_WBKz5ll9EsafkFX81CHKahDvWDJq_Z6tMwYP7Sscxlmbz0yeTOWCrI5QYKpf0j3HJyBP-FtvBNwRuYSqZ-4VbiF "sequence_api")

![sequence_api](https://www.plantuml.com/plantuml/svg/3/rPLHJzim4CVV_IbEbYh1L8HAtYg1wAXXI6ojcdGyK1ukjLiiKZjBt4tJjE_EsUwsXf4nrcdI_E2SdVF_xduvAwUrmygjLmLZTmgbgY1L7zRAE8q5I8tB2bTW5-3k50p6bp37egZPmbf7hcDSAkYKD7UyJwV0seKLOoMfwhakqJWuhopDDmne78U5CZAi3cW4W_FNEBzVLdOjOmZEsMr3X0iZIwl9eZGu0DQ0fMOI7UPOAoyotBBz81UPC-QqAnHSA0Sa30xh-vgncDF1YHVfmuN8u32-mRdJ7z6feCveyauoxqCghiHP1g_WV39w2yvA-yFNXv4vbRFHk_aoCpEdPHzwNMyPNAa-y8mYG8-7BMaDRIsmgDNCVAMjxqUEkX3y_JeUETe-uggrFt7Bf6h43wbI0g6oVvz2m6NK9__z8-o06lBFe6KhxyFUIu33zHin4QG7nz1hf__IofyXkOjSWyfPfS9U0FCOoNYKRfYq4xbybuf9Hezi57di-MIwuEFlm_l1rLIai1TJItWtPhJ_6w2IdofBTW7r1t8DKDDI_WBKz5ll9EsafkFX81CHKahDvWDJq_Z6tMwYP7Sscxlmbz0yeTOWCrI5QYKpf0j3HJyBP-FtvBNwRuYSqZ-4VbiF "sequence_api")

![sequence_api](https://www.plantuml.com/plantuml/svg/4/rPLHJzim4CVV_IbEbYh1L8HAtYg1wAXXI6ojcdGyK1ukjLiiKZjBt4tJjE_EsUwsXf4nrcdI_E2SdVF_xduvAwUrmygjLmLZTmgbgY1L7zRAE8q5I8tB2bTW5-3k50p6bp37egZPmbf7hcDSAkYKD7UyJwV0seKLOoMfwhakqJWuhopDDmne78U5CZAi3cW4W_FNEBzVLdOjOmZEsMr3X0iZIwl9eZGu0DQ0fMOI7UPOAoyotBBz81UPC-QqAnHSA0Sa30xh-vgncDF1YHVfmuN8u32-mRdJ7z6feCveyauoxqCghiHP1g_WV39w2yvA-yFNXv4vbRFHk_aoCpEdPHzwNMyPNAa-y8mYG8-7BMaDRIsmgDNCVAMjxqUEkX3y_JeUETe-uggrFt7Bf6h43wbI0g6oVvz2m6NK9__z8-o06lBFe6KhxyFUIu33zHin4QG7nz1hf__IofyXkOjSWyfPfS9U0FCOoNYKRfYq4xbybuf9Hezi57di-MIwuEFlm_l1rLIai1TJItWtPhJ_6w2IdofBTW7r1t8DKDDI_WBKz5ll9EsafkFX81CHKahDvWDJq_Z6tMwYP7Sscxlmbz0yeTOWCrI5QYKpf0j3HJyBP-FtvBNwRuYSqZ-4VbiF "sequence_api")
