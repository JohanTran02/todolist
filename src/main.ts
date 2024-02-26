import { initTaskFuncs } from './tasks';
import { taskFunctions } from './taskButtons';
import { taskSearch } from './search';

const test = [taskSearch(), initTaskFuncs(), taskFunctions()];

test.forEach(func => func);
