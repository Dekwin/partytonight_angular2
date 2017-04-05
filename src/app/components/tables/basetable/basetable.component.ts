import {
  Component, OnInit, style, animate, transition, trigger, state, Input, Output, EventEmitter,
  ChangeDetectorRef, ChangeDetectionStrategy
} from '@angular/core';
import {PaginatorComponent} from "../../utils/paginator/paginator.component";

@Component({
  selector: 'app-basetable',
  templateUrl: './basetable.component.html',
  styleUrls: ['./basetable.component.css'],
  animations: [
    trigger('reloadData', [
      state('false' , style({ opacity: 1, transform: 'scale(1.0)' })),
      state('true', style({ opacity: 0, transform: 'scale(0.0)'  })),
      transition('1 => 0', animate('300ms')),
      transition('0 => 1', animate('900ms'))
    ])
  ],
  entryComponents : [PaginatorComponent],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BasetableComponent implements OnInit {

  @Input() apiMethod: Function;
  @Output() dataEmitter = new EventEmitter();
  
  reloadData: boolean;
  
  constructor() {

  }
  
  ngOnInit() {
  }
  
  
  
  dataReceived(data){
    this.stopReloadingView();
    this.dataEmitter.emit(data);
  }

  dataBeganLoad(page){
    this.startReloadingView();
  }
  
  stopReloadingView(){
    this.reloadData = false;
  }

  startReloadingView(){
    this.reloadData = true;
  }
  
}
