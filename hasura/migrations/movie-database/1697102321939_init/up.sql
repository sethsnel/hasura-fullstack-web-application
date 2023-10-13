SET check_function_bodies = false;
CREATE TABLE public."Movies" (
    "Id" integer NOT NULL,
    "Title" text NOT NULL,
    "PosterUrl" text NOT NULL,
    "Description" text NOT NULL
);
CREATE SEQUENCE public."Movies_Id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public."Movies_Id_seq" OWNED BY public."Movies"."Id";
CREATE TABLE public."Profiles" (
    "Id" uuid NOT NULL,
    "Name" text NOT NULL,
    "Email" text NOT NULL
);
CREATE TABLE public."Ratings" (
    "ProfileId" uuid NOT NULL,
    "MovieId" integer NOT NULL,
    "Rating" integer NOT NULL
);
ALTER TABLE ONLY public."Movies" ALTER COLUMN "Id" SET DEFAULT nextval('public."Movies_Id_seq"'::regclass);
ALTER TABLE ONLY public."Movies"
    ADD CONSTRAINT "Movies_pkey" PRIMARY KEY ("Id");
ALTER TABLE ONLY public."Profiles"
    ADD CONSTRAINT "Profiles_pkey" PRIMARY KEY ("Id");
ALTER TABLE ONLY public."Ratings"
    ADD CONSTRAINT "Ratings_ProfileId_MovieId_key" UNIQUE ("ProfileId", "MovieId");
ALTER TABLE ONLY public."Ratings"
    ADD CONSTRAINT "Ratings_pkey" PRIMARY KEY ("ProfileId", "MovieId");
ALTER TABLE ONLY public."Ratings"
    ADD CONSTRAINT "Ratings_MovieId_fkey" FOREIGN KEY ("MovieId") REFERENCES public."Movies"("Id") ON UPDATE CASCADE ON DELETE CASCADE;
ALTER TABLE ONLY public."Ratings"
    ADD CONSTRAINT "Ratings_ProfileId_fkey2" FOREIGN KEY ("ProfileId") REFERENCES public."Profiles"("Id") ON UPDATE CASCADE ON DELETE CASCADE;
