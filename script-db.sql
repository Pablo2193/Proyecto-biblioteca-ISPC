CREATE SCHEMA IF NOT EXISTS 'bibioteca' default char set utl8mba collate utf8mb4_0900_ai_ci;
use bibioteca;


## TABLAS DE BIBLIOTECA ##
create table LIBRO(
ISBN int PRIMARY KEY,
titulo varchar(50),
Autor varchar(50),
TITULO_LIB VARCHAR(100) NOT NULL,
Fecha_publicacion date,
GENERO VARCHAR(50),
EDITORIAL  VARCHAR(40)
)ENGINE=InnoDB;

CREATE TABLE Usuario(
dni INT(8) PRIMARY KEY,
nombre_apellido VARCHAR(100) NOT NULL,
fecha_nac DATE,
edad int(10),
email varchar(40), /*FK*/
direccion varchar(15) /*FK*/
)ENGINE=InnoDB;

CREATE TABLE COPIA(
ID_COPIALIB INT PRIMARY KEY auto_increment,
estado_copia varchar(50),
cantidad_copias varchar(50),
ISBN INT,
foreign key (ISBN) references LIBRO(ISBN) /*fk*/
)ENGINE=InnoDB;


CREATE TABLE Bibliotecario(
ID_bibliotecario INT(8) PRIMARY KEY,
dni int(15) 			/*FK*/,
foreign key (dni) references Usuario(dni),
antiguedad int(4)
)ENGINE=InnoDB;

CREATE TABLE Socio(
ID_socio INT PRIMARY KEY AUTO_INCREMENT,
dni int(8),
foreign key (dni) references Usuario(dni) /*fk*/,
estado_suscripcion varchar(40)
)ENGINE=InnoDB;

CREATE TABLE Reserva(
nro_reserva INT PRIMARY KEY AUTO_INCREMENT,
id_copia INT, /*FK COMPRA*/
foreign key (id_copia) references COPIA(ID_COPIALIB),
id_cliente varchar(40),
foreign key (id_cliente) references Socio(ID_socio),
fecha_reserva date
)ENGINE=InnoDB;


CREATE TABLE PRESTAMO_LIBROS(
nro_prestamo INT primary KEY AUTO_INCREMENT,
id_socio,
foreign key (id_socio) references PRESTAMO_LIBROS(id_socio),
fecha_prestamo date, /**/
tarifa INT, /**/
fecha_renovacion date
)ENGINE=InnoDB;



