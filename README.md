# Guía de Instalación del Proyecto

Antes de comenzar, asegúrate de tener instalados los siguientes requisitos:

- **Node.js** - [Descargar Node.js](https://nodejs.org/en/download/prebuilt-installer) - v22.10.0 (LTS)
- **npm** - Incluido con Node.js
- **pnpm** - Después de instalar Node.js, abre tu terminal como administrador y ejecuta el siguiente comando:

```bash
npm install -g pnpm
```

Para confirmar que tienes las herramientas instaladas, ejecuta los siguientes comandos en tu terminal:

```bash
node -v
npm -v
pnpm -v
```

### Pasos para Clonar y Configurar el Proyecto

1. Clona el repositorio en tu máquina local:

   ```bash
   git clone https://github.com/Ch31ios/Curriculum.git
   ```

2. Navega al directorio del proyecto:

   ```bash
   cd Curriculum
   ```

3. Instala las dependencias:

   ```bash
   pnpm install
   ```

4. Inicia el proyecto con el siguiente comando:

   ```bash
   pnpm start
   ```

Después de seguir estos pasos, el proyecto estará configurado y listo para ejecutarse localmente.

### Editar los Datos del Currículum

1. Ve a la carpeta `src/data` dentro del proyecto.

2. Abre el archivo `information.json`.

3. Modifica la información del currículum (acerca, experiencia, educación, etc.).

4. Agrega enlaces dentro del mismo archivo para personalizar los links en el currículum web.

Con estos pasos podrás personalizar fácilmente el currículum y los enlaces interactivos.
