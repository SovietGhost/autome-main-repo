export abstract class BaseUploader {
  abstract upload(file: File): Promise<string>;
}
