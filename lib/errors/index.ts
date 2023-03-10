// export class ApiError extends Error {
//   response: {
//     statusCode: number;
//     message: string;
//   };
//   constructor(statusCode: number, message: string) {
//     super(message);
//     this.response = {
//       statusCode,
//       message
//     };
//   }
// }

export class EmailFormatError extends Error {
  constructor(message: string) {
    super(message);
  }
}
