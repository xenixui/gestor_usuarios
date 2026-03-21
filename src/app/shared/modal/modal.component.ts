import { Component, input} from '@angular/core';

@Component({
  selector: 'app-modal',
  imports: [],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css',
})
export class ModalComponent {
  title = input<string>('');
  text = input<string>('');
  username = input<string | null>(null);
  onClick = input<() => void | Promise<void>>(() => {});
}
