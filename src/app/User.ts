export class User{
    id: number;
    firstName: string; 
    gender: string;
    course: string; 
    email: string;
    password: string;
    //confirmPwd: string;
    terms: boolean;
    

    constructor(values: Object ={}){
        Object.assign(this, values);
    }
}