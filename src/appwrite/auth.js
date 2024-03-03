import conf from "../conf/conf.js";
import { Client, Account, ID } from "appwrite";

export class AuthService {
    client = new Client();
    account;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.account = new Account(this.client)
    }

    // async createAccount ({email, password, name}) {
    //     try {
    //         const userAccount = await this.account.create(ID.unique(), email, password, name);

    //         if(userAccount) {
    //             //call another method
    //             return this.login({email, password});

    //         }else {
    //             return userAccount;
    //         }
    //     } catch (error) {
    //         throw error;
    //     }
    // }

    async createAccount({ email, password, name }) {
        try {
            if (!email || !password || !name) {
                throw new Error('Email, password, and Name are required');
            }

            const userAccount = await this.account.create(ID.unique(), email, password, name);

            if (userAccount) {
                // Call another method
                return await this.login({ email, password });
            } else {
                throw new Error('Failed to create user account');
            }
        } catch (error) {
            console.error('Account creation failed:', error.message);
            throw error;
        }
    }


    // async login ({email, password}) {
    //     try {
    //         return await this.account.createEmailSession(email, password);
    //     } catch (error) {
    //         throw error;
    //     }
    // }

    async login({ email, password }) {
        try {
            if (!email || !password) {
                throw new Error('Email and password are required');
            }

            console.log(`Logging in user with email: ${email}`);

            const session = await this.account.createEmailSession(email, password);
            return session;
        } catch (error) {
            console.error('Login failed:', error.message);
            throw error;
        }
    }


    async getCurrentUser() {
        try {
            return await this.account.get();
        } catch (error) {
            console.log("Appwrite serive :: getCurrentUser :: error", error);
        }

        return null;
    }

    async logout() {
        try {
            await this.account.deleteSessions();
        } catch (error) {
            console.log("Appwrite serive :: logout :: error", error);
        }
    }
}

const authService = new AuthService();

export default authService