import { createWriteStream } from "fs";
import { BaseUploader } from "./base_uploader";

export class LocalUploader extends BaseUploader {
  async upload(file: File) {
    const fileReader = file.stream().getReader();
    const writeStream = createWriteStream("./public/uploads/" + file.name);
    while (true) {
      const { done, value } = await fileReader.read();
      if (done) break;
      writeStream.write(value);
    }
    return new Promise<string>((resolve, reject) => {
      writeStream.on("finish", () => {
        resolve("/uploads/" + file.name);
      });
      writeStream.on("error", (error) => {
        reject(error);
      });
      writeStream.end();
    });
  }
}
