import { Injectable } from "@angular/core";
import { Observable, BehaviorSubject } from "rxjs";
import { Folder } from "../intefaces/folder";

@Injectable()
export class FolderService {
    private folders: Folder[] = [
        { id: 999, name: 'necklace' }, { id: 333, name: 'bracelet' }
    ];

    private folderSubject = new BehaviorSubject<Folder[]>(this.folders);

    getFolders(): Observable<Folder[]> {
        return this.folderSubject.asObservable();
    }

    
    addFolder(folder: Folder) {
        this.folders = [folder, ... this.folders];
        this.folderSubject.next(this.folders);
    }
}