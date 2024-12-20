import { Injectable } from '@angular/core';
import { Container } from '../models/container';

@Injectable({
	providedIn: 'root'
})
export class DatabaseService {
	constructor() { }

	getContainers() : Container[]{
		return [new Container("nigger", 48.1804422,16.3749007)];
	}

}
