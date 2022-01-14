import { Component, Input, OnInit, ChangeDetectorRef, SimpleChanges, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  @Input() isModal: boolean = false;
  @Output() outsideEvent = new EventEmitter<any>();
  constructor(private cd: ChangeDetectorRef) { }

  ngOnInit(): void {

  }

  ngOnChanges(simpleChanges: SimpleChanges) {
    console.log('previousValue : ',simpleChanges.isModal.previousValue);
  }

  outslideClick(event: any) {
    const className = event.target.className;
    if (className === 'wrap') {
      this.outsideEvent.emit();
    }
  }
}
