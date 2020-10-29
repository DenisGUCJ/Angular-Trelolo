import {
  Component,
  OnInit,
  Input,
  ViewChild,
  ElementRef,
  Output,
  EventEmitter,
} from '@angular/core';

@Component({
  selector: 'app-toggle-input-text',
  templateUrl: './toggle-input-text.component.html',
  styleUrls: ['./toggle-input-text.component.scss'],
})
export class ToggleInputTextComponent implements OnInit {
  @Input() text: string;
  @Input() option: string;
  @Output() changeText = new EventEmitter<string>();

  @ViewChild('input') inputElement: ElementRef;
  toggle: boolean = true;

  constructor() {}

  ngOnInit(): void {
    console.log(this.text.trim())
    console.log(this.text.length)
    if(this.text.trim() === ''){
      this.focusTextarea()
    }
  }

  onClick() {
    this.toggle = !this.toggle;
    if (!this.toggle){
      this.focusTextarea()
    }else{
      this.changeText.emit(this.text)
    }

  }

  onEnter(event) {
    if (event.key === 'Enter') {
      this.toggle = !this.toggle;
      this.changeText.emit(this.text);
    }
  }

  onBlur() {
    this.toggle = true;
    this.changeText.emit(this.text);
  }

  focusTextarea(){
    this.toggle = false;
    setTimeout(() => {
      // this will make the execution after the above boolean has changed
      if (this.inputElement) {
        this.inputElement.nativeElement.focus();
      }
    }, 1);
  }
}
