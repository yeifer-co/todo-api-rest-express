export const up = async (queryInterface, Sequelize) => {
  await queryInterface.createTable('todo', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    name: {
      allowNull: false,
      type: Sequelize.STRING,
    },
    description: {
      allowNull: false,
      type: Sequelize.TEXT,
    },
    author: {
      allowNull: false,
      type: Sequelize.STRING,
    },
    isComplete: {
      allowNull: false,
      type: Sequelize.BOOLEAN,
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
    },
    deletedAt: {
      allowNull: true,
      type: Sequelize.DATE,
    },
  });

  // Agregar datos a la tabla 'todo'
  await queryInterface.bulkInsert('todo', [
    /*
    {
      name: 'Busca el Gold Bug 🐞',
      description: 'Encuentra y elimina el bug más escurridizo. 🏆',
      author: 'Rory Zambrano',
      isComplete: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    */
    {
      name: 'El código secreto 🕵️‍♂️',
      description: 'Descifra un código encriptado con razones para contratarte 😉',
      author: 'Yeifer Muñoz',
      isComplete: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Proyecto TARDIS ⏳',
      description: 'Desarrolla una función para corregir errores antes de que sucedan 🚀',
      author: 'Guillermo Conesa',
      isComplete: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Escapar del Bucle 🌀',
      description: 'Supera el temido bucle infinito con ingenio y habilidades de programación 💪',
      author: 'Yeifer Muñoz',
      isComplete: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Adopta a un Dev 🐱‍💻',
      description: 'Yeifer esta contando chistes malisimos. Contratalo para que programe como un tipo serio. 🤣🤦‍♂️',
      author: 'Guillermo Conesa',
      isComplete: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Safari de Bugs 🐾',
      description: 'Embárcate en un safari de bugs salvajes con Yeifer, el domador de bugs 🦁🔍',
      author: 'Rory Zambrano',
      isComplete: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ]);
};

export const down = (queryInterface) => queryInterface.dropTable('todo');
