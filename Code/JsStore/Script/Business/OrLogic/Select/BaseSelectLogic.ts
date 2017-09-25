module JsStore {
    export module Business {
        export module OrLogic {
            export module Select {
                export class BaseSelect extends Base {
                    Results = [];
                    Sorted: boolean = false;
                    SkipRecord;
                    LimitRecord;
                    CheckFlag = false;
                }
            }
        }
    }
}