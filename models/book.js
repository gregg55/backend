    "use strict";
      const { Model } = require("sequelize");
       module.exports = (sequelize, DataTypes) => {
        class Book extends Model {
         
          static associate(models) {
            "use strict";
            const { Model } = require("sequelize");
            module.exports = (sequelize, DataTypes) => {
              class Book extends Model {

            static associate(models) {
            Book.belongsTo(models.Author, { foreignKey: "authorId" });
          }
        }
        Book.init(
          {
            name: DataTypes.STRING,
          },
          {
            sequelize,
            modelName: "Book",
          }
        );
        return Book;
      };
    }
  }

  Book.init(
    {
      title: DataTypes.STRING,
      authorId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Book",
    }
  );
  return Book;
};