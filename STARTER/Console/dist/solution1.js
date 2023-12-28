import { sayHello, ConsoleUtil } from "./utilities/console-util.js";
import { MessageEnum } from "./enums/message-enum.js";
$(document).ready(function () {
    let consoleUtil = new ConsoleUtil(3, 100);
    for (let i = 0; i < 10; i++) {
        $("#solution-1").before(consoleUtil.rowMessage(sayHello("Jimmy"), MessageEnum.Successful));
    }
    for (let i = 0; i < 10; i++) {
        $("#solution-1").before(consoleUtil.rowMessage(sayHello("Johnny"), MessageEnum.Failure));
    }
});
//# sourceMappingURL=solution1.js.map