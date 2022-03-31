BEGIN;

DROP TABLE IF EXISTS "admin", "events";

CREATE TABLE IF NOT EXISTS "admin" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "name" text NOT NULL,
    "password" text NOT NULL,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    "updated_at" TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

INSERT INTO
    "admin"("name", "password")
VALUES
    ('gregolrl', 'gregolrl');

COMMIT;


BEGIN; 

CREATE TABLE IF NOT EXISTS "events" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "year" INT NOT NULL DEFAULT 2022,
    "month" text NOT NULL,
    "day" INT NOT NULL,
    "logo" text,
    "title" text NOT NULL,
    "description" text NOT NULL

);

insert into "events"("year", "month", "day", "logo", "title", "description") 
VALUES (2022, 'janvier', 15, 'balade', 'tour du lac', 'jolie balade');

COMMIT;