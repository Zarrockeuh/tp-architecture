--
-- PostgreSQL database dump
--

-- Dumped from database version 12.5 (Ubuntu 12.5-0ubuntu0.20.04.1)
-- Dumped by pg_dump version 12.5 (Ubuntu 12.5-0ubuntu0.20.04.1)

-- Started on 2020-12-13 17:01:02 UTC

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- TOC entry 2976 (class 1262 OID 16578)
-- Name: airportdb; Type: DATABASE; Schema: -; Owner: airportdbuser
--

CREATE ROLE airportdbuser WITH LOGIN SUPERUSER NOCREATEDB CREATEROLE NOINHERIT REPLICATION CONNECTION LIMIT -1 PASSWORD 'airportdbpassword';

CREATE DATABASE airportdb WITH TEMPLATE = template0 ENCODING = 'UTF8' LC_COLLATE = 'fr_FR.UTF-8' LC_CTYPE = 'fr_FR.UTF-8';


ALTER DATABASE airportdb OWNER TO airportdbuser;

\connect airportdb

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 203 (class 1259 OID 18066)
-- Name: airport; Type: TABLE; Schema: public; Owner: airportdbuser
--

CREATE TABLE public.airport (
    trigramme character varying(3) NOT NULL,
    name character varying(255) NOT NULL,
    city character varying(255) NOT NULL,
    country character varying(255) NOT NULL
);


ALTER TABLE public.airport OWNER TO airportdbuser;

--
-- TOC entry 207 (class 1259 OID 18183)
-- Name: flight; Type: TABLE; Schema: public; Owner: airportdbuser
--

CREATE TABLE public.flight (
    id integer NOT NULL,
    hdep time without time zone NOT NULL,
    harr time without time zone NOT NULL,
    nbstop integer,
    stop character varying(255),
    planeid integer NOT NULL,
    departure character varying(255) NOT NULL,
    arrival character varying(255) NOT NULL
);


ALTER TABLE public.flight OWNER TO airportdbuser;

--
-- TOC entry 206 (class 1259 OID 18181)
-- Name: flight_id_seq; Type: SEQUENCE; Schema: public; Owner: airportdbuser
--

CREATE SEQUENCE public.flight_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.flight_id_seq OWNER TO airportdbuser;

--
-- TOC entry 2977 (class 0 OID 0)
-- Dependencies: 206
-- Name: flight_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: airportdbuser
--

ALTER SEQUENCE public.flight_id_seq OWNED BY public.flight.id;


--
-- TOC entry 205 (class 1259 OID 18175)
-- Name: plane; Type: TABLE; Schema: public; Owner: airportdbuser
--

CREATE TABLE public.plane (
    id integer NOT NULL,
    nbseats integer NOT NULL,
    brand character varying(255) NOT NULL
);


ALTER TABLE public.plane OWNER TO airportdbuser;

--
-- TOC entry 204 (class 1259 OID 18173)
-- Name: plane_id_seq; Type: SEQUENCE; Schema: public; Owner: airportdbuser
--

CREATE SEQUENCE public.plane_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.plane_id_seq OWNER TO airportdbuser;

--
-- TOC entry 2978 (class 0 OID 0)
-- Dependencies: 204
-- Name: plane_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: airportdbuser
--

ALTER SEQUENCE public.plane_id_seq OWNED BY public.plane.id;


--
-- TOC entry 209 (class 1259 OID 18209)
-- Name: reservation; Type: TABLE; Schema: public; Owner: airportdbuser
--

CREATE TABLE public.reservation (
    id integer NOT NULL,
    useremail character varying(320) NOT NULL,
    flightid integer NOT NULL,
    cost double precision NOT NULL
);


ALTER TABLE public.reservation OWNER TO airportdbuser;

--
-- TOC entry 208 (class 1259 OID 18207)
-- Name: reservation_id_seq; Type: SEQUENCE; Schema: public; Owner: airportdbuser
--

CREATE SEQUENCE public.reservation_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.reservation_id_seq OWNER TO airportdbuser;

--
-- TOC entry 2979 (class 0 OID 0)
-- Dependencies: 208
-- Name: reservation_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: airportdbuser
--

ALTER SEQUENCE public.reservation_id_seq OWNED BY public.reservation.id;


--
-- TOC entry 202 (class 1259 OID 18058)
-- Name: users; Type: TABLE; Schema: public; Owner: airportdbuser
--

CREATE TABLE public.users (
    email character varying(255) NOT NULL,
    password character varying(255) NOT NULL,
    nom character varying(255) NOT NULL,
    prenom character varying(255) NOT NULL
);


ALTER TABLE public.users OWNER TO airportdbuser;

--
-- TOC entry 2820 (class 2604 OID 18186)
-- Name: flight id; Type: DEFAULT; Schema: public; Owner: airportdbuser
--

ALTER TABLE ONLY public.flight ALTER COLUMN id SET DEFAULT nextval('public.flight_id_seq'::regclass);


--
-- TOC entry 2819 (class 2604 OID 18178)
-- Name: plane id; Type: DEFAULT; Schema: public; Owner: airportdbuser
--

ALTER TABLE ONLY public.plane ALTER COLUMN id SET DEFAULT nextval('public.plane_id_seq'::regclass);


--
-- TOC entry 2821 (class 2604 OID 18212)
-- Name: reservation id; Type: DEFAULT; Schema: public; Owner: airportdbuser
--

ALTER TABLE ONLY public.reservation ALTER COLUMN id SET DEFAULT nextval('public.reservation_id_seq'::regclass);


--
-- TOC entry 2964 (class 0 OID 18066)
-- Dependencies: 203
-- Data for Name: airport; Type: TABLE DATA; Schema: public; Owner: airportdbuser
--

INSERT INTO public.airport (trigramme, name, city, country) VALUES ('JFK', 'Aeroport international - John-F.-Kennedy', 'New York', 'USA');
INSERT INTO public.airport (trigramme, name, city, country) VALUES ('CDG', 'Aeroport Roissy Charles de Gaules', 'Paris', 'FRANCE');
INSERT INTO public.airport (trigramme, name, city, country) VALUES ('DTW', 'Aeroport metropolitain de Detroit', 'Detroit', 'USA');


--
-- TOC entry 2968 (class 0 OID 18183)
-- Dependencies: 207
-- Data for Name: flight; Type: TABLE DATA; Schema: public; Owner: airportdbuser
--

INSERT INTO public.flight (id, hdep, harr, nbstop, stop, planeid, departure, arrival) VALUES (1, '12:00:00', '20:35:00', NULL, NULL, 2, 'CDG', 'JFK');
INSERT INTO public.flight (id, hdep, harr, nbstop, stop, planeid, departure, arrival) VALUES (2, '13:00:00', '21:50:00', NULL, NULL, 3, 'CDG', 'DTW');
INSERT INTO public.flight (id, hdep, harr, nbstop, stop, planeid, departure, arrival) VALUES (3, '09:00:00', '10:50:00', NULL, NULL, 1, 'DTW', 'JFK');
INSERT INTO public.flight (id, hdep, harr, nbstop, stop, planeid, departure, arrival) VALUES (4, '20:00:00', '04:35:00', NULL, NULL, 4, 'JFK', 'CDG');
INSERT INTO public.flight (id, hdep, harr, nbstop, stop, planeid, departure, arrival) VALUES (5, '20:20:00', '08:00:00', 1, 'DTW', 2, 'JFK', 'CDG');


--
-- TOC entry 2966 (class 0 OID 18175)
-- Dependencies: 205
-- Data for Name: plane; Type: TABLE DATA; Schema: public; Owner: airportdbuser
--

INSERT INTO public.plane (id, nbseats, brand) VALUES (1, 50, 'Boeing');
INSERT INTO public.plane (id, nbseats, brand) VALUES (2, 50, 'Airbus');
INSERT INTO public.plane (id, nbseats, brand) VALUES (3, 40, 'Airbus');
INSERT INTO public.plane (id, nbseats, brand) VALUES (4, 100, 'Airbus');


--
-- TOC entry 2970 (class 0 OID 18209)
-- Dependencies: 209
-- Data for Name: reservation; Type: TABLE DATA; Schema: public; Owner: airportdbuser
--



--
-- TOC entry 2963 (class 0 OID 18058)
-- Dependencies: 202
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: airportdbuser
--



--
-- TOC entry 2980 (class 0 OID 0)
-- Dependencies: 206
-- Name: flight_id_seq; Type: SEQUENCE SET; Schema: public; Owner: airportdbuser
--

SELECT pg_catalog.setval('public.flight_id_seq', 5, true);


--
-- TOC entry 2981 (class 0 OID 0)
-- Dependencies: 204
-- Name: plane_id_seq; Type: SEQUENCE SET; Schema: public; Owner: airportdbuser
--

SELECT pg_catalog.setval('public.plane_id_seq', 4, true);


--
-- TOC entry 2982 (class 0 OID 0)
-- Dependencies: 208
-- Name: reservation_id_seq; Type: SEQUENCE SET; Schema: public; Owner: airportdbuser
--

SELECT pg_catalog.setval('public.reservation_id_seq', 27, true);


--
-- TOC entry 2825 (class 2606 OID 18073)
-- Name: airport airport_pkey; Type: CONSTRAINT; Schema: public; Owner: airportdbuser
--

ALTER TABLE ONLY public.airport
    ADD CONSTRAINT airport_pkey PRIMARY KEY (trigramme);


--
-- TOC entry 2829 (class 2606 OID 18191)
-- Name: flight flight_pkey; Type: CONSTRAINT; Schema: public; Owner: airportdbuser
--

ALTER TABLE ONLY public.flight
    ADD CONSTRAINT flight_pkey PRIMARY KEY (id);


--
-- TOC entry 2827 (class 2606 OID 18180)
-- Name: plane plane_pkey; Type: CONSTRAINT; Schema: public; Owner: airportdbuser
--

ALTER TABLE ONLY public.plane
    ADD CONSTRAINT plane_pkey PRIMARY KEY (id);


--
-- TOC entry 2831 (class 2606 OID 18214)
-- Name: reservation reservation_pkey; Type: CONSTRAINT; Schema: public; Owner: airportdbuser
--

ALTER TABLE ONLY public.reservation
    ADD CONSTRAINT reservation_pkey PRIMARY KEY (id);


--
-- TOC entry 2823 (class 2606 OID 18065)
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: airportdbuser
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (email);


--
-- TOC entry 2834 (class 2606 OID 18202)
-- Name: flight flight_arrival_fkey; Type: FK CONSTRAINT; Schema: public; Owner: airportdbuser
--

ALTER TABLE ONLY public.flight
    ADD CONSTRAINT flight_arrival_fkey FOREIGN KEY (arrival) REFERENCES public.airport(trigramme);


--
-- TOC entry 2833 (class 2606 OID 18197)
-- Name: flight flight_departure_fkey; Type: FK CONSTRAINT; Schema: public; Owner: airportdbuser
--

ALTER TABLE ONLY public.flight
    ADD CONSTRAINT flight_departure_fkey FOREIGN KEY (departure) REFERENCES public.airport(trigramme);


--
-- TOC entry 2832 (class 2606 OID 18192)
-- Name: flight flight_planeid_fkey; Type: FK CONSTRAINT; Schema: public; Owner: airportdbuser
--

ALTER TABLE ONLY public.flight
    ADD CONSTRAINT flight_planeid_fkey FOREIGN KEY (planeid) REFERENCES public.plane(id);


--
-- TOC entry 2836 (class 2606 OID 18220)
-- Name: reservation reservation_flightid_fkey; Type: FK CONSTRAINT; Schema: public; Owner: airportdbuser
--

ALTER TABLE ONLY public.reservation
    ADD CONSTRAINT reservation_flightid_fkey FOREIGN KEY (flightid) REFERENCES public.flight(id);


--
-- TOC entry 2835 (class 2606 OID 18215)
-- Name: reservation reservation_useremail_fkey; Type: FK CONSTRAINT; Schema: public; Owner: airportdbuser
--

ALTER TABLE ONLY public.reservation
    ADD CONSTRAINT reservation_useremail_fkey FOREIGN KEY (useremail) REFERENCES public.users(email);


-- Completed on 2020-12-13 17:01:02 UTC

--
-- PostgreSQL database dump complete
--

