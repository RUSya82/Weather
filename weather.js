#!/usr/bin/env node
import { getArgs } from "./helpers/args.js";
import {printSuccess, printError, printHelp} from './services/log.service.js';
import {saveKeyValue} from "./services/storage.service.js";

const initCLI = () => {
    const args = getArgs(process.argv);
    if(args.s){
        printError(args.s);
    }
    if(args.h){
        printHelp();
    }
    if(args.t){
        saveKeyValue('token', args.t)
    }
}
initCLI();