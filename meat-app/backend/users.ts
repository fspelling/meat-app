export class User {
    constructor(public email: string, public name: string, public password: string) { }

    matches(another: User): boolean {
        return (another !== undefined && another.email === this.email && another.name === this.name && another.password === this.password)
    }
}

export const users: {[key: string]: User} = {
    "julia@gmail.com": new User('julia@gmail.com', 'julia', 'julia123'),
    "amanda@gmail.com": new User('amanda@gmail.com', 'amanda', 'amanda123')
};