import { UserDB, UserModel, USER_ROLES } from "../types";

export class User {    
    constructor(
        private id: string,
        private name: string,
        private email: string,
        private password: string,
        private role: USER_ROLES,
        private createdAt: string
    ) {}

    public getId(): string {
        return this.id;
    }
    
    public setId(value: string): void {
        this.id = value;
    }

    public getName(): string {
        return this.name;
    }

    public setName(value: string): void {
        this.name = value;
    }

    public getEmail(): string {
        return this.email;
    }

    public setEmail(value: string): void {
        this.email = value;
    }

    public getPassword(): string {
        return this.password;
    }

    public setPassword(value: string): void {
        this.password = value;
    }

    public getRole(): USER_ROLES {
        return this.role;
    }

    public setRole(value: USER_ROLES): void {
        this.role = value;
    }

    public getCreatedAt(): string {
        return this.createdAt;
    }

    public setCreatedAt(value: string): void {
        this.createdAt = value;
    }

    public toDBModel(): UserDB {
        const { id, name, email, password, role, createdAt } = this;
        return {
            id,
            name,
            email,
            password,
            role,
            created_at: createdAt
        };
    }

    public toBusinessModel(): UserModel {
        const { id, name, email, password, role, createdAt } = this;
        return {
            id,
            name,
            email,
            password,
            role,
            createdAt
        };
    }
}