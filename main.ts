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
    //% blockId="kakutyoA1BlockId"
    //% block="kakutyoA1Block"
    export function kakutyoA1() {
        //値を返さない関数
        
    }

    //% group="kakutyoGroupA"
    //% blockId="kakutyoA2BlockId"
    //% block="kakutyoA2Block %Num"
    export function kakutyoA2(Num:number) {
        //値を返さない関数
        //引数ひとつ
    }

    //% group="kakutyoGroupB"
    //% blockId="kakutyoB1BlockId"
    //% block="kakutyoB1Block"
    export function kakutyoB1(retNum:number) {
        //値を返す関数
        return 1
    }
}