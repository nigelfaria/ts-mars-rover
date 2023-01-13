import { Command } from "../../src/model/Command";

describe("Command Functionality", () => {

    test("createCommands" ,()=>{
        expect(Command.createCommands([])).toStrictEqual([]);
        expect(Command.createCommands([""])).toStrictEqual([new Command(Command.commandTypes[4],[""])]);
        expect(Command.createCommands(["5 5"])).toStrictEqual([new Command(Command.commandTypes[0],["5","5"])]);
    });

    test("parseCommand - createMap", () => {
        expect(Command.parseCommand("5 5")).toStrictEqual(new Command(Command.commandTypes[0],["5","5"]));
        expect(Command.parseCommand("5 5 5")).toStrictEqual(new Command(Command.commandTypes[4],["5","5", "5"]));
        expect(Command.parseCommand("blahblah")).toStrictEqual(new Command(Command.commandTypes[4],["blahblah"]));
        expect(Command.parseCommand("3 4")).toStrictEqual(new Command(Command.commandTypes[0],["3","4"]));  
        expect(Command.parseCommand("blahblah")).toStrictEqual(new Command(Command.commandTypes[4],["blahblah"]));      
    });
    test("parseCommand - createRover", () => {
        expect(Command.parseCommand("0 0 N" )).toStrictEqual(new Command(Command.commandTypes[1],["0","0", "N"]));
        expect(Command.parseCommand("5 5 S")).toStrictEqual(new Command(Command.commandTypes[1],["5","5", "S"]));
        expect(Command.parseCommand("-5 4 S")).toStrictEqual(new Command(Command.commandTypes[4],["-5","4", "S"]));
        expect(Command.parseCommand("5 5 A")).toStrictEqual(new Command(Command.commandTypes[4],["5","5", "A"]));

    });
});