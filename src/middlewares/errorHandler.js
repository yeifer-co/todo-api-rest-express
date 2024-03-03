// Middleware de manejo de errores
export const errorHandler = (err, req, res, next) => {
  console.error("Stack trace: ", err.stack); // Imprimir el stack trace del error en la consola para propósitos de registro

  // Determinar el código de estado y el mensaje de error adecuados
  const statusCode = err.statusCode || 500;
  const errorMessage = err.message || 'Internal Server Error';

  // Enviar una respuesta al cliente con el código de estado y el mensaje de error
  res.status(statusCode).json({ success: false, code: statusCode, error: errorMessage });
};
