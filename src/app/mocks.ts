
export class Friends {
    id: number;
    fname: string;
    lname: string;
    email: string;
    passw: string;
    friends: number[];
    friendRequest: number[];
}

export const FRIENDS: Friends[] = [
    { id: 1, fname: "Koos", lname: "Kombuis", email: "koos@gmail.com", passw: "123@kKoos", friends: [2, 3, 4], friendRequest: [5, 6] },
    { id: 2, fname: "Piet", lname: "Van Rensburg", email: "piet@gmail.com", passw: "123#pPiet", friends: [0], friendRequest: [1,3] },
    { id: 3, fname: "Jannie", lname: "Oosthuizen", email: "oos@gmail.com", passw: "O_J1234", friends: [3, 4], friendRequest: [6,7,8] },
    { id: 4, fname: "Sannie", lname: "Suikerbos", email: "san1@gmail.com", passw: "suikerBos123#", friends: [5], friendRequest: [0] },
    { id: 5, fname: "Bennie", lname: "Van Eeden", email: "ben@gmail.com", passw: "ben123*B", friends: [9, 10], friendRequest: [1] },
    { id: 6, fname: "Linda", lname: "Maree", email: "lin@gmail.com", passw: "marEE1234@", friends: [0], friendRequest: [6] },
    { id: 7, fname: "Amanda", lname: "Klintville", email: "amandaK@gmail.com", passw: "amandaK@123", friends: [2], friendRequest: [10] },
    { id: 8, fname: "Sarel", lname: "Poggenpoel", email: "sarelP@gmail.com", passw: "sarel#P123", friends: [7], friendRequest: [3] },
    { id: 9, fname: "Jacky", lname: "Johannesburg", email: "Jacks@gmail.com", passw: "Jjacky123@", friends: [1, 2, 3, 4, 5], friendRequest: [7,8] },
    { id: 10, fname: "Thadeus", lname: "Gous", email: "thadeusgous@gmail.com", passw: "gousT123$", friends: [7, 1], friendRequest: [0] }
];