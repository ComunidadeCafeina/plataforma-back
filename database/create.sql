create schema compiladoras;

create table compiladoras.projects (
    id serial primary key NOT NULL,
    brandicon char(50) NOT NULL,
    title char(50) NOT NULL,
    descriptio char(200) NOT NULL,
    restrict boolean NOT NULL,
    link char(50) NOT NULL
)

create table compiladoras.socialNetworks (
    id serial primary key NOT NULL,
    texto char(50) NOT NULL,
    icon char(50) NOT NULL,
    link char(50) NOT NULL
);