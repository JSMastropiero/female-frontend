import * as moment from 'moment';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
    providedIn: 'root'
})

export class Utils{

    constructor(private _snackBar: MatSnackBar){

    }
    // capitalize
    public setCapitalize(word: string) {
        if (!word) return word;
        return word[0].toUpperCase() + word.substr(1).toLowerCase();
    }
    // date format
    getDateFormat(date: any, format: string = 'DD/MM/YYYY HH:mm') {
        return moment(date).format(format)
    }


    // selected focus text
    selectedFocus(event: any){
    let input: HTMLInputElement = event.target;
    if(input.type == 'number' && input.value == "0"){
        input.select();
    }
    }
  
    // true is day | false is night
    isDay(): Boolean{
        let result = moment().isBetween(
                                        moment().set('hour', 7),
                                        moment().set('hour', 20)
                                        );
        return result;

    }


    setMyStyles(color:any) {
        let styles = {
            'background-color': color,
        };
        return styles;
    }

    setStyleTextColor(color:any) {
        let styles = {
            'background-color': color,
            'color': 'white'
        };
        return styles;
    }

    // temp session
    getNumber(){
        return moment().format('YYYYMMDDhmmss');
    }

    getHumansDate(date: any = null): string{
        let text = '';
        if(date){
        text += ' Última modificación ' + moment(date).fromNow()
        }
        return text;
    }


    openSnackBar(message: string, action: string = '', duration: number = 3000) {
        this._snackBar.open(
            message, 
            action, 
            {
                duration: duration
            }
            );
    }

}