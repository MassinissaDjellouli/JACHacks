import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
  @Input() click!: () => void;
  @Input() label!: string;
  @Input() disabled: boolean = false;

  constructor() {}

  ngOnInit(): void {}
}
