export interface Customer {
    username: string,
    firstname: string,
    lastname: string,
    password: string,
    token : string,
    email: string,
    phone: string,
    countryID : number,
    prefferedPortID : number

}

export interface UserFormValues {
    username: string,
    email: string,
    password: string,

}