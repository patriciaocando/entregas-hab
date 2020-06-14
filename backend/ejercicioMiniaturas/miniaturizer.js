const fs = require("fs").promises;
const path = require("path");
const minimist = require("minimist");
const sharp = require("sharp");

/* 
--input - dir=<directorio_origen> --output-dir=<directorio_destino> */

const data = minimist(process.argv.slice(2));

async function main() {
  try {
    const pathImages = path.join(__dirname, data["input-dir"]);
    const pathMiniatures = path.join(__dirname, data["output-dir"]);

    try {
      await fs.access(pathImages);
    } catch (error) {
      throw new Error(
        "el directorio de imagenes no existe o no es un directorio"
      );
    }

    try {
      await fs.mkdir(pathMiniatures);
      console.log(`¡EL directorio se ha creado exitosamente!`);
    } catch (error) {
      console.log("El directorio de destino ya existe");
    }

    let imagesDirectory;
    try {
      imagesDirectory = await fs.readdir(pathImages);

      for (const image of imagesDirectory) {
        const imageSharp = sharp(path.join(pathImages, image));
        const metadata = await imageSharp.metadata();

        if (
          metadata.format === "jpeg" ||
          metadata.format === "png" ||
          metadata.format === "jpg"
        ) {
          const miniature = imageSharp.resize(700, 700);

          miniature.composite([
            {
              input: "./logo.png",
              gravity: "southeast",
            },
          ]);

          miniature.toFile(path.join(pathMiniatures, `foto${image}`));
        }
      }
      console.log("Se han creado las miniaturas");
    } catch (error) {
      throw new Error(error.message);
    }
  } catch (error) {
    console.error(error.message);
  }
}
main();
