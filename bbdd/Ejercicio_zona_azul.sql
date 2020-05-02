CREATE TABLE usuario(
	id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(50),
    apellidos VARCHAR (50),
    email VARCHAR (50),
    dni VARCHAR(9),
    telefono_movil VARCHAR (9),
    numero_cuenta VARCHAR(50)
);
-- Campos obligatorios para que no haya vehiculos sin dueño
CREATE TABLE vehiculo(
	id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    marca VARCHAR(50) NOT NULL,
    matricula VARCHAR(50) NOT NULL,
    modelo VARCHAR(50) NOT NULL,
    tipo_vehiculo ENUM('turismo', 'Moto', 'Furgoneta') NOT NULL,
    id_usuarios INT UNSIGNED NOT NULL,
    FOREIGN KEY (id_usuarios) REFERENCES usuario (id)
);

CREATE TABLE zona (
	id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT, 
    nombre VARCHAR(50),
    precio_minuto DECIMAL (4,2), 
    limite_tiempo INT, -- NUMERO EN MINUTOS
    hora_inicio DATETIME,
    hora_fin DATETIME,
    observaciones VARCHAR(500)
);

CREATE TABLE registro (
	id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    fecha_entrada_aparcamiento TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    fecha_salida_aparcamiento DATETIME,
	multa BOOLEAN,
    precio_multa DECIMAL (4,2),
    id_vehiculos INT UNSIGNED,
    FOREIGN KEY(id_vehiculos) REFERENCES vehiculo (id),
    id_zonas INT UNSIGNED,
    FOREIGN KEY(id_zonas) REFERENCES zona (id)
);

CREATE TABLE reclamo (
	id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
	fecha_reclamo DATETIME,
    motivo VARCHAR(500),
    estado BOOLEAN,
    resultado VARCHAR(50),
    id_registros INT UNSIGNED,
    FOREIGN KEY (id_registros) REFERENCES registro (id)
);

