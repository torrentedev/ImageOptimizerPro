const express = require('express');
const multer = require('multer');
const { exec } = require('child_process');
const Queue = require('bull');

const app = express();
const upload = multer({ dest: 'uploads/' });
const imageQueue = new Queue('image processing');

// Configuración del puerto
const PORT = process.env.PORT || 3000;

// Procesamiento de la cola
imageQueue.process(async (job, done) => {
  const { path, options } = job.data;
  const output = `uploads/output-${Date.now()}.jpg`; // Nombre del archivo de salida
  
  let command = `magick ${path} ${options} ${output}`;

  exec(command, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error: ${error.message}`);
      return done(new Error(error.message));
    }
    if (stderr) {
      console.error(`Stderr: ${stderr}`);
      return done(new Error(stderr));
    }
    console.log(`Stdout: ${stdout}`);
    done(null, output);
  });
});

// Endpoint para subir y procesar imágenes
app.post('/upload', upload.single('image'), (req, res) => {
  const { file } = req;
  const { resize, quality } = req.body;

  let options = '';
  if (resize) {
    options += `-resize ${resize} `;
  }
  if (quality) {
    options += `-quality ${quality} `;
  }

  imageQueue.add({
    path: file.path,
    options: options.trim()
  });

  res.send('Imagen subida y en proceso.');
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
