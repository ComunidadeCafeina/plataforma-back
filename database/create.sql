create schema compiladoras;

create table compiladoras.projects (
    id serial primary key NOT NULL,
    brandIcon char(50) NOT NULL,
    title char(50) NOT NULL,
    description char(200) NOT NULL,
    restrict boolean NOT NULL,
    link char(50) NOT NULL
)

create table compiladoras.socialNetworks (
    id serial primary key NOT NULL,
    text char(50) NOT NULL,
    icon char(50) NOT NULL,
    link char(50) NOT NULL
);