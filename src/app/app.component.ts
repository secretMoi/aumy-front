import {Component, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'aumy-front';

  public x: number = -1;
  public y: number = -1;
  public height: number = 0;
  public heightInPercent: number = 0;
  public isClicked: boolean = false;

  @ViewChild('myDiv') myDiv: ElementRef<HTMLDivElement> = {} as any;
  @ViewChild('progressValue') progressValue: ElementRef<HTMLDivElement> = {} as any;

  mouseMoved($event: MouseEvent) {
    if(!this.isClicked) return;

    this.x = $event.clientX - this.myDiv.nativeElement.offsetLeft;
    this.y = $event.clientY - this.myDiv.nativeElement.offsetTop;

    let newHeight = this.myDiv.nativeElement.clientHeight - this.y;
    this.heightInPercent = newHeight / this.myDiv.nativeElement.clientHeight * 100;

    if(this.heightInPercent < 0 || this.heightInPercent > 100) return;
    this.height = newHeight;
  }

  mouseDown($event: MouseEvent) {
    this.isClicked = true;

    this.mouseMoved($event);
  }
}
