'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    let filepath = path.join(__dirname,'./categoryImg');

    const img1 = fs.readFileSync(filepath+"/furniture.png");
    const img2 = fs.readFileSync(filepath+"/elctronics.png")
    const img3 = fs.readFileSync(filepath+"/car.png")
    await queryInterface.bulkInsert('Categories',[
      {
        categoryName:"furniture",
        categoryImage:img1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        categoryName:"electronics",
        categoryImage:img2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        categoryName:"cars",
        categoryImage:img3,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
