// perfil
// let perfil = "administrador";

// si esta en blanco => debe especificar el perfil de usuario

// si es administrador => usted tiene todos los permisos del sistema

// si es asistente => usted solo tiene permisos  de registrar, modificar y consultar datos

// si es invitado => usted tiene solo permiso de consultar datos

// si es indefinido => perfil invalido

// switch (key) {
//     case value:
        
//         break;
//     case value:
        
//         break;
//     case value:
        
//         break;
//     case value:
        
//         break;
//     case value:
        
//         break;

//     default:
//         break;
// }

// Variable para almacenar el perfil del usuario
let perfil = 'asistente'; // Asignar aquí el perfil del usuario

// Función para mostrar mensaje según el perfil
function mostrarMensajeSegunPerfil(perfil) {
  switch (perfil.toLowerCase()) {
    case 'administrador':
      console.log('Usted tiene todos los privilegios de uso del sistema');
      break;
    case 'asistente':
      console.log('Usted sólo tiene permisos de registrar, modificar y consultar datos');
      break;
    case 'invitado':
      console.log('Usted sólo tiene permisos de consultar datos');
      break;
    default:
      console.log('Debe especificar un perfil válido');
  }
};

// Mostrar mensaje según el perfil
mostrarMensajeSegunPerfil(perfil);

// Validar si se especificó el perfil
if (perfil === '') {
  console.log('Debe especificar el perfil del usuario');
}
