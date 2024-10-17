# ImageOptimizerPro
 
Este proyecto es una aplicación en Node.js que permite procesar imágenes (reducir su peso y redimensionarlas) usando ImageMagick en un sistema Ubuntu LTS. La aplicación maneja las solicitudes mediante una cola para evitar la saturación del servidor.

## Requisitos

- Node.js y npm
- ImageMagick v7 o superior
- Ubuntu LTS (o equivalente)

## Instalación

1. **Clonar el repositorio**:
    ```bash
    git clone  https://github.com/tu-usuario/ImageOptimizerPro.git
    cd image-processor
    ```

2. **Instalar Node.js y npm**:
    ```bash
    sudo apt update
    sudo apt install nodejs npm
    ```

3. **Instalar dependencias del proyecto**:
    ```bash
    npm install
    ```

4. **Instalar ImageMagick**:
    ```bash
    sudo apt install imagemagick
    ```

## Ejecución

Para ejecutar el servidor:

1. **Iniciar el servidor**:
    ```bash
    node server.js
    ```

    Deberías ver un mensaje indicando que el servidor está escuchando en el puerto especificado (por defecto, 3000).

## Uso

Puedes enviar peticiones al servidor para procesar imágenes utilizando herramientas como `cURL` o Postman.

### Usando cURL

Para subir una imagen y procesarla, usa el siguiente comando (ajusta los valores de `resize` y `quality` según sea necesario):

```bash
curl -X POST http://localhost:3000/upload \
     -F "image=@ruta/a/tu/image.jpg" \
     -F "resize=200x200" \
     -F "quality=80"
```

### Usando Postman

Crear una nueva solicitud:

```bash
Método: POST
URL: http://localhost:3000/upload
Configurar la solicitud:
```

Ve a la pestaña "Body".
Selecciona "form-data".
Añade un campo con el nombre image, selecciona "File" y elige una imagen de tu computadora.
Añade campos para resize y quality con los valores deseados, por ejemplo, 200x200 y 80.

Enviar la solicitud:
Haz clic en "Enviar" para enviar la solicitud al servidor.


### Contribuciones

Las contribuciones son bienvenidas. Si tienes alguna mejora, por favor abre un issue o envía un pull request.

### Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo `LICENSE` para más detalles.

