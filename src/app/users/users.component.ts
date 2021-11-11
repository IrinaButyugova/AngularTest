import {TemplateRef, ViewChild} from '@angular/core';
import {Component, OnInit} from '@angular/core';

import {NewUser} from '../models/new-user';
import {UserService} from '../services/user.service';
    
@Component({ 
    selector: 'users', 
    templateUrl: './users.component.html',
    providers: [UserService]
}) 
export class UsersComponent implements OnInit {

    @ViewChild('readOnlyTemplate', {static: false}) readOnlyTemplate: TemplateRef<any>|undefined;
    @ViewChild('editTemplate', {static: false}) editTemplate: TemplateRef<any>|undefined;
        
    editedUser: NewUser|null = null;
    users: Array<NewUser>;
    isNewRecord: boolean = false;
    statusMessage: string = "";
        
    constructor(private serv: UserService) {
        this.users = new Array<NewUser>();
    }
        
    ngOnInit() {
        this.loadUsers();
    }

    private loadUsers() {
        this.serv.getUsers().subscribe((data: Array<NewUser>) => {
                this.users = data; 
            });
    }

    addUser() {
        this.editedUser = new NewUser("","",0);
        this.users.push(this.editedUser);
        this.isNewRecord = true;
    }

    editUser(user: NewUser) {
        this.editedUser = new NewUser(user._id, user.name, user.age);
    }

    loadTemplate(user: NewUser) {
        if (this.editedUser && this.editedUser._id === user._id) {
            return this.editTemplate;
        } else {
            return this.readOnlyTemplate;
        }
    }

    saveUser() {
        if (this.isNewRecord) {
            this.serv.createUser(this.editedUser as NewUser).subscribe(data => {
                this.statusMessage = 'Данные успешно добавлены',
                this.loadUsers();
            });
            this.isNewRecord = false;
            this.editedUser = null;
        } else {
            this.serv.updateUser(this.editedUser as NewUser).subscribe(data => {
                this.statusMessage = 'Данные успешно обновлены',
                this.loadUsers();
            });
            this.editedUser = null;
        }
    }

    cancel() {
        if (this.isNewRecord) {
            this.users.pop();
            this.isNewRecord = false;
        }
        this.editedUser = null;
    }
    deleteUser(user: NewUser) {
        this.serv.deleteUser(user._id).subscribe(data => {
            this.statusMessage = 'Данные успешно удалены',
            this.loadUsers();
        });
    }
}