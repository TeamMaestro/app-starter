export class User {
    firstName: string;

    lastName: string;

    constructor(options: User = <User>{}) {
        this.firstName = options.firstName;
        this.lastName = options.lastName;
    }
}
