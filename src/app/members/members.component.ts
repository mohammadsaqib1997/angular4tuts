import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-members',
    templateUrl: './members.component.html',
    styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {

    members = [
        "User1",
        "User1",
        "User1",
        "User1",
        "User1"
    ];
    newMember: string = "";

    addMember = () => {
        this.newMember = this.newMember.trim();
        if(this.newMember != ""){
            this.members.push(this.newMember);
            this.newMember = "";
        }
    };

    removeMember = (index) => {
        this.members.splice(index, 1);
    };

    constructor() {
    }

    ngOnInit() {
    }

}
