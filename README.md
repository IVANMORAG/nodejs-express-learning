# Curso de Express

Este repositorio contiene una colección de proyectos y ejercicios desarrollados como parte de un curso práctico para aprender y aplicar los conceptos de desarrollo backend con **Node.js**, **Express.js**, y otras herramientas como **Mongoose**, **Vite**, y **React**.  

Los proyectos están organizados en orden progresivo para entender desde conceptos básicos hasta la integración de servicios más complejos.  

---

## Proyectos

### 1. **API de Autenticación Básica**
- **Descripción**: Implementa una API de autenticación básica con un sistema de tokens sencillo (sin JWT) para entender los conceptos fundamentales.
- **Objetivo**: Aprender cómo manejar tokens para autenticar y autorizar usuarios en un sistema backend.
- **Stack**: Node.js, Express.js.

---

### 2. **Gestión de Usuarios**
- **Descripción**: Construye una API para gestionar usuarios utilizando el Proyecto 1 como base para la autenticación. Incluye funcionalidades para:
  - Crear, leer, actualizar y eliminar usuarios (CRUD).
  - Conexión a una base de datos MongoDB usando Mongoose.
- **Objetivo**: Explorar cómo estructurar APIs RESTful y manejar datos persistentes.
- **Stack**: Node.js, Express.js, Mongoose.

---

### 3. **API Gateway Sencilla**
- **Descripción**: Implementa un gateway que actúa como intermediario entre las solicitudes de los clientes y los proyectos 1 y 2. El gateway:
  - Redirige solicitudes al servicio correspondiente.
  - Facilita la comunicación entre APIs separadas.
- **Objetivo**: Aprender el concepto y la implementación básica de un API Gateway.
- **Stack**: Node.js, Express.js.

---

### 4. **Aplicación Frontend con React**
- **Descripción**: Construye una aplicación web utilizando **Vite** y **React** que interactúa con el API Gateway del Proyecto 3.  
  - La aplicación permite realizar operaciones expuestas por los servicios del backend.
- **Objetivo**: Aprender cómo conectar un cliente frontend con APIs backend.
- **Stack**: React.js, Vite, Axios.

---

## Examen Final

### **Sistema de Préstamos**
- **Descripción**: Ejercicio práctico que consiste en:
  - Una librería que maneja usuarios y un API Gateway.
  - La funcionalidad principal es determinar si un usuario puede solicitar un préstamo o no, aplicando los conceptos de APIs separadas que interactúan a través de un API Gateway.
- **Objetivo**: Reafirmar los conocimientos adquiridos sobre la integración de APIs y manejo de gateways.
- **Stack**: Node.js, Express.js.

---

## Instalación y Uso

1. **Clonar el repositorio**:
   ```bash
   git clone https://github.com/tu-usuario/nombre-del-repositorio.git
   cd nombre-del-repositorio
   ```

2. Instalar dependencias:
   Cada proyecto tiene su propio directorio con un archivo package.json. Ve al directorio correspondiente e instala las dependencias con:
   ```bash
   npm install
   ```

## Tecnologías Utilizadas
* Node.js

* Express.js

* MongoDB (Mongoose)

* React.js (Vite)

* Axios

## Contribuciones

Si tienes sugerencias o mejoras, no dudes en abrir un issue o enviar un pull request.

## Autor

Iván Mora
Estudiante de Ingeniería en Sistemas Computacionales.
