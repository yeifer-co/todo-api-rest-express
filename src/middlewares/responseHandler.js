import createError from 'http-errors';

// Middleware para manejar respuestas
export const responseHandler = (req, res, next) => {
  // Función para enviar la respuesta
  res.sendResponse = ({ success = true, code = 200, data = null, message = null }) => {
    // Si hay un error, enviar una error al siguiente middleware de manejo de errores
    if (code >= 400) {
      return next(createError(code, message));
    }
    // Construir respesta con los datos proporcionados
    const response = { success, code };
    if (data) response.data = data;
    if (message) response.message = message;

    res.status(code).json(response);
  };

  // Pasar al siguiente middleware
  next();
};
