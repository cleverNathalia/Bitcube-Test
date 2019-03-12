# Bitcube

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Follow these steps:
    1. Make sure you installed Angular => `npm install -g @angular/cli`
    2. Copy the whole folder to your computer.
    3. Navigate into the folder using your the command line for example: C:\Users\Danielle Groenewald\Desktop\Bitcube-Test>
    4. When inside the folder run `ng build` then `ng serve --open`
    5. A window/tab will open in your browser displaying the project.
    6. Use the mock data that I set up to log in with a user.
    
    NB: Note about the mock data:
        All of the users have unique ID's, for example the user Koos is friends with the users with the id's 2,3 and 4; therefore Piet, Jannie and Sannie. 
    
## MOCK DATA

1. Koos Kombuis:
id: 1
fname: "Koos"
lname: "Kombuis"
email: "koos@gmail.com"
passw: "123@kKoos"
friends: [2, 3, 4]
friendRequest: [5, 6]

2. Piet Van Rensburg:
id: 2 
fname: "Piet" 
lname: "Van Rensburg" 
email: "piet@gmail.com" 
passw: "123#pPiet" 
friends: [0] 
friendRequest: [1,3]

3. Jannie Oosthuizen:
id: 3 
fname: "Jannie" 
lname: "Oosthuizen" 
email: "oos@gmail.com" 
passw: "O_J1234" 
friends: [3, 4] 
friendRequest: [6,7,8]

4. Sannie Suikerbos:
id: 4 
fname: "Sannie" 
lname: "Suikerbos" 
email: "san1@gmail.com" 
passw: "suikerBos123#" 
friends: [5] 
friendRequest: [0]

5. Bennie Van Eeden:
id: 5 
fname: "Bennie" 
lname: "Van Eeden"
email: "ben@gmail.com" 
passw: "ben123*B" 
friends: [9, 10] 
friendRequest: [1]

6. Linda Maree:
id: 6 
fname: "Linda" 
lname: "Maree" 
email: "lin@gmail.com" 
passw: "marEE1234@" 
friends: [0] 
friendRequest: [6]

7. Amanda Klintville:
id: 7 
fname: "Amanda" 
lname: "Klintville" 
email: "amandaK@gmail.com" 
passw: "amandaK@123" 
friends: [2] 
friendRequest: [10]

8. Sarel Poggenpoel:
id: 8 
fname: "Sarel" 
lname: "Poggenpoel" 
email: "sarelP@gmail.com" 
passw: "sarel#P123" 
friends: [7] 
friendRequest: [3]

9. Jacky Johannesburg:
id: 9 
fname: "Jacky" 
lname: "Johannesburg" 
email: "Jacks@gmail.com" 
passw: "Jjacky123@" 
friends: [1, 2, 3, 4, 5] 
friendRequest: [7,8]

10. Thadeus Gous:
id: 10 
fname: "Thadeus" 
lname: "Gous" 
email: "thadeusgous@gmail.com" 
passw: "gousT123$" 
friends: [7, 1] 
friendRequest: [0]
