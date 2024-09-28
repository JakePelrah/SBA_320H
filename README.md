 # Run with Express
    npm install
    npm run express
 
 # Routes using React Router
  Add new routes here: [router.tsx](src/routes/router.tsx)
  

  # Authentication using PassportJS
https://www.passportjs.org/concepts/authentication/oauth/
https://www.passportjs.org/packages/passport-google-oauth20/

Learn more at [Using OAuth 2.0 to Access Google APIs](https://developers.google.com/identity/protocols/oauth2#:~:text=After%20the%20user%20approves%20access,to%20obtain%20a%20new%20one.)
https://developers.google.com/identity/protocols/oauth2

  
  Authentication is handled in [auth.js](./src/js/auth.js) 


When a user first logs in, an entry is added to the google_profile table. 


        CREATE TABLE google_profile (
                id character varying NOT NULL,
                refresh_token character varying NOT NULL,
                first_name character varying NOT NULL,
                last_name character varying NOT NULL,
                picture character varying NOT NULL
        );





# Connect PG Simple
https://www.npmjs.com/package/connect-pg-simple

1. create a "session" table in the database, this table is linked in [server.js](./server.js).

        CREATE TABLE "session" (
        "sid" varchar NOT NULL COLLATE "default",
        "sess" json NOT NULL,
        "expire" timestamp(6) NOT NULL
        )
        WITH (OIDS=FALSE);

        ALTER TABLE "session" ADD CONSTRAINT "session_pkey" PRIMARY KEY ("sid") NOT DEFERRABLE INITIALLY IMMEDIATE;

        CREATE INDEX "IDX_session_expire" ON "session" ("expire");

# Installing PostgreSQL

OSX
        
        brew install postgresql@16


