import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  @Input() isModal: boolean = false;
  @Output() outsideEvent = new EventEmitter<any>();
  @Output() paymentEvent = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {

  }


  outslideClick(event: any) {
    const className = event.target.className;
    if (className === 'modal') {
      this.closeModal();
    }
  }

  closeModal() {
    this.outsideEvent.emit();
  }

  payment() {
    
  }
}
