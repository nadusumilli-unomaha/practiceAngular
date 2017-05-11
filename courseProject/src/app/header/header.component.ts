import { Component, EventEmitter, Output } from '@angular/core'

@Component ({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.css']
})

export class HeaderComponent {
	name = 'Nikhit';
	@Output() componentSelected = new EventEmitter<string>();
	onSelect(selectedComponent: string) {
		this.componentSelected.emit(selectedComponent);
	}
}  