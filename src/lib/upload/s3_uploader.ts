// import { s3Client } from "~/server/aws/s3";
// import { BaseUploader } from "./base_uploader";
// import { env } from "~/env";
// import {
//   CreateMultipartUploadCommand,
//   UploadPartCommand,
// } from "@aws-sdk/client-s3";

// const getFileName = (fileName: string) =>
//   `https://${env.AWS_BUCKET_NAME}.s3.${env.AWS_REGION}.amazonaws.com/${fileName}`;

// export class S3Uploader extends BaseUploader {
//   async upload(file: File) {
//     const fileUUID = crypto.randomUUID();
//     const name = `${fileUUID}.${file.name.split(".").pop()}`;
//     const { UploadId } = await s3Client.send(
//       new CreateMultipartUploadCommand({
//         Key: name,
//         Bucket: env.AWS_BUCKET_NAME,
//       }),
//     );

//     const allParts = [];

//     const reader = file.stream().getReader();
//     while (true) {
//       const { done, value } = await reader.read();
//       if (done) {
//         break;
//       }
//       await s3Client
//         .send(
//           new UploadPartCommand({
//             Bucket: env.AWS_BUCKET_NAME,
//             Key: name,
//             PartNumber: allParts.length + 1,
//             UploadId,
//             Body: value,
//           }),
//         )
//         .then(({ ETag }) => {
//           allParts.push({ ETag, PartNumber: allParts.length + 1 });
//         });
//     }

//     try {
//       await state.done();
//       return getFileName(name);
//     } catch (error) {
//       console.error("error", error);
//       throw new Error("Failed to upload file");
//     }
//   }
// }
