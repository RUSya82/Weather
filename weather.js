#!/usr/bin/env node
import { getArgs } from "./helpers/args.js";
import {printSuccess, printError, printHelp} from './services/log.service.js';
import {saveKeyValue, getKeyValue} from "./services/storage.service.js";

const saveToken = async (token) => {
    if (!token.length) {
        printError('Не передан token');
        return;
    }
    try {
        await  saveKeyValue('token', token);
        printSuccess('Token saved');
    } catch (e){
        printError(e.message);
    }
}
const initCLI = () => {
    const args = getArgs(process.argv);
    if(args.s){
        printError(args.s);
    }
    if(args.h){
        printHelp();
    }
    if(args.t){
        return saveToken(args.t)
    }
}
initCLI();