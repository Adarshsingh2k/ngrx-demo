export class User {
    // constructor(){}
    constructor(
        private email: string,
        private token: string,
        private localId: string,
        private expirationDate: Date
      ) {}
}