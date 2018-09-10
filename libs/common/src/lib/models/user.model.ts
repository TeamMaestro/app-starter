export class User {
    /**
     * The first name of the user
     */
    firstName: string;
    /**
     * The last name of the user
     */
    lastName: string;

    constructor(options: User = <User>{}) {
        this.firstName = options.firstName;
        this.lastName = options.lastName;
    }

}
