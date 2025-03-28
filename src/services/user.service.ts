import { UserModel } from '../models/user.model';

export class UserService {

    static retriveUsers(): UserModel[] {
        if (!localStorage.getItem('users')) {
            const arr: UserModel[] = [
                {
                    email: 'user@example.com',
                    password: 'user123',
                }

            ]
            localStorage.setItem('users', JSON.stringify(arr));

        }
        return JSON.parse(localStorage.getItem('users')!)
    } 
    static login(email: string, password: string): boolean {

    for (let user of this.retriveUsers()) {
        if (user.email === email && user.password === password) {
            localStorage.setItem('active', user.email)
            return true
        }
    }


    return false

}
    static  getActiveUser(): UserModel | null {

        if (!localStorage.getItem('active')) 
            return null


        for (let user of this.retriveUsers()) {
            if (user.email == localStorage.getItem('active')) {
                                return user
            }
        }
        return null

    }

}


