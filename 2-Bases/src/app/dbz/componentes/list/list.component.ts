import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Character } from "../../interfaces/character.interface";

@Component({
    selector: 'app-dbz-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.css'],

})

export class ListComponent {
    @Output()
    public onDelete: EventEmitter<number> = new EventEmitter();
    public id: number = 0;

    @Input()
    public characterList: Character[] = [{
        name: 'Trunks',
        power: 10
    }]

    onDeleteId(index :number):void{
        this.id = index
        this.onDelete.emit(this.id)
    } 

}