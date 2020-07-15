
/** ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export class UserInput {
    id: number;
    username?: string;
    password: string;
    prenom?: string;
    nom?: string;
    email?: string;
    type: number;
    CreatedOn?: DateTime;
    ModifiedOn?: DateTime;
}

export class Expediteur {
    id: number;
    prenom: string;
    nom: string;
    typecommerce: number;
    nbrdepots: number;
    milage?: DateTime;
    createdon?: DateTime;
    modifiedon?: DateTime;
}

export class Producteur {
    id: number;
    prenom?: string;
    address1?: string;
}

export class User {
    id: number;
    username?: string;
    password: string;
    prenom?: string;
    nom?: string;
    email?: string;
    type: number;
    CreatedOn?: DateTime;
    ModifiedOn?: DateTime;
}

export abstract class IQuery {
    abstract getExpediteur(id: number): Expediteur | Promise<Expediteur>;

    abstract fetchExpediteurByName(name: string): Expediteur | Promise<Expediteur>;

    abstract fetchExpediteurs(): Expediteur[] | Promise<Expediteur[]>;

    abstract getProducteur(id: number): Producteur | Promise<Producteur>;

    abstract fetchTraks(): Producteur[] | Promise<Producteur[]>;

    abstract getUser(id: number): User | Promise<User>;

    abstract getUsers(): User[] | Promise<User[]>;

    abstract fetchUserByName(prenom: string): User | Promise<User>;
}

export abstract class IMutation {
    abstract upNbrDepotsExpediteur(id: number): Expediteur | Promise<Expediteur>;

    abstract deleteUser(id: number): User | Promise<User>;

    abstract updateUser(userInput: UserInput): User | Promise<User>;

    abstract createUser(userInput: UserInput): User | Promise<User>;
}

export type DateTime = any;
