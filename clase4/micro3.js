function traducirPalabra(palabra) {
    switch (palabra) {
      case "perro":
        return "dog";
      case "gato":
        return "cat";
      case "puerta":
        return "door";
      case "ventana":
        return "window";
      case "mesa":
        return "table";
      default:
        return "La palabra ingresada es incorrecta";
    }
  }
  
  // Ejemplo de uso
  const palabraUsuario = "gato";
  const traduccion = traducirPalabra(palabraUsuario);
  console.log(`La traducción de "${palabraUsuario}" al inglés es: ${traduccion}`);
  
  // Puedes probar con otras palabras
  const otraPalabra = "bicicleta";
  const otraTraduccion = traducirPalabra(otraPalabra);
  console.log(`La traducción de "${otraPalabra}" al inglés es: ${otraTraduccion}`);
  