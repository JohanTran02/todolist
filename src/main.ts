import { initTaskFuncs } from './tasks';
import { taskFunctions } from './taskButtons';
import { taskSearch } from './search';
import { dragging } from './status';
import { dropdown } from './dropdown';
dropdown();
dragging();

const test = [taskSearch(), initTaskFuncs(), taskFunctions()];

test.forEach(func => func);
