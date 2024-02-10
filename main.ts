//% weight=30 icon="\uf0eb" color=#000080 block="KakutyoBlockTop"
namespace kakutyoNameSpace {

    export enum list1{
        //% block="リスト1のひとつめ"
        First = 0,
        //% block="リスト1のふたつめ"
        Second = 1
    }

    export enum list2 {
        First = 0,
        Second = 1
    }

    //% group="kakutyoGroupA"
    //% weight=1
    //% blockId="kakutyoA1BlockId"
    //% block="kakutyoA1Block"
    export function kakutyoA1() {
        //値を返さない関数
        
    }

    //% group="kakutyoGroupA"
    //% weight=2
    //% blockId="kakutyoA2BlockId"
    //% block="kakutyoA2Block %Num"
    export function kakutyoA2(Num:number) {
        //値を返さない関数
        //引数ひとつ
    }

    //% group="kakutyoGroupA"
    //% weight=3
    //% blockId="kakutyoA3BlockId"
    //% block="kakutyoA3Block"
    export function kakutyoA3(handler:()=>void) {
        //値を返さない関数
        //●●の場合
        input.onButtonPressed(Button.A,()=>{handler();})
        //control.onEvent(
        //    1,
        //    EventBusValue.MICROBIT_EVT_ANY,
        //    () => {
        //        handler();
        //    }

        //)
    }

    //% group="kakutyoGroupB"
    //% blockId="kakutyoB1BlockId"
    //% block="kakutyoB1Block"
    export function kakutyoB1(retNum:number) {
        //値を返す関数
        return 1
    }

    //% group="kakutyoGroupB"
    //% blockId="kakutyoB2BlockId"
    //% block="kakutyoB2Block"
    export function kakutyoB2(retBool: boolean) {
        //値を返す関数
        return true
    }
}