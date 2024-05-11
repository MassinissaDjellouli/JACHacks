import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss',
})
export class InputComponent implements OnInit {
  @Input() placeholder: string = 'Enter text here...';
  @Input() type: 'text' | 'password' | 'email' = 'text'; // original type
  currentType!: string; // current type
  @Output() onTextChanged = new EventEmitter<string>();

  ngOnInit() {
    this.currentType = this.type;
  }

  // Propagates the input value to the parent component
  onKey(event: any) {
    this.onTextChanged.emit(event.target.value);
  }

  // Toggles the input type between 'password' and 'text'
  toggleType() {
    this.currentType = this.currentType === 'password' ? 'text' : 'password';
  }
}
