import { initTaskFuncs } from './tasks';
import { taskFunctions } from './taskButtons';
import { taskSearch } from './search';
import { dragging } from './status';
dragging();

const test = [taskSearch(), initTaskFuncs(), taskFunctions()];

test.forEach(func => func);
