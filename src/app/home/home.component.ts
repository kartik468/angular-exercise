import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, ValidatorFn } from '@angular/forms';
import { pairwise, startWith } from 'rxjs/operators';

@Component({
  selector: 'kar-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  textValue = '2';

  selectedDevice = 'd2';

  devices = ['d1', 'd2', 'd3'];

  reactiveForm: FormGroup;

  nameControl: FormControl;

  ratingControl: FormControl;
  ratingControlForm: FormGroup;

  constructor(private changeDetectorRef: ChangeDetectorRef, private fb: FormBuilder) {}

  onChange(val) {
    console.log('PREV1', this.textValue);
    // this.textValue = val;
    console.log('NEXT1', val);
    console.log('----');

    console.log(val);
    if (confirm('device value will be changed')) {
      this.textValue = val;
    } else {
      const temp = this.textValue;
      this.textValue = '1';
      this.changeDetectorRef.detectChanges();
      this.textValue = temp;
      this.changeDetectorRef.detectChanges();
    }
  }

  onDeviceChange(val) {
    console.log(val);
    if (confirm('device value will be changed')) {
      this.selectedDevice = val;
    } else {
      const temp = this.selectedDevice;
      this.selectedDevice = '1';
      this.changeDetectorRef.detectChanges();
      this.selectedDevice = temp;
      this.changeDetectorRef.detectChanges();
    }
  }

  ngOnInit() {
    this.nameControl = new FormControl('initial');
    this.nameControl.valueChanges.subscribe(val => {
      console.log(val);
    });
    setTimeout(() => {
      this.nameControl.setValue('later');
    }, 2000);
    this.initRatingControl();

    // setTimeout(() => {
    //   this.selectedDevice = 'd3';
    // }, 2000);
    this.reactiveForm = this.fb.group({
      example1: ['']
      // example2: ['']
    });

    // this.reactiveForm.get('example1').valueChanges.subscribe(val => {
    //   console.log('example 1', val);
    // });

    // this.reactiveForm.get('example2').valueChanges.subscribe(val => {
    //   console.log('example 2', val);
    // });
    const control = this.reactiveForm.get('example1');

    control.valueChanges.pipe(startWith(''), pairwise()).subscribe(([prev, cur]) => {
      console.log('example 1 prev val', prev);
      console.log('example 1 cur val', cur);
      console.log('---');

      // if (confirm('value will be changed')) {
      // } else {
      //   control.setValue(prev, { emitEvent: false });
      // }
    });
  }

  initRatingControl() {
    // this.ratingControl = new FormControl(2);
    // this.ratingControlNew = new FormControl(1);
    // // this.ratingControlNew.disable();
    // this.ratingControlNew.valueChanges.subscribe(val => {
    //   console.log('rating control val: ', val);
    // });
    // setTimeout(() => {
    //   this.ratingControlNew.setValue(4);
    // }, 3000);
    // setTimeout(() => {
    //   this.ratingControlNew.setValue(3);
    // }, 6000);

    const ratingControlValidator: ValidatorFn = control => {
      return control.value === null || control.value === 0 ? { required: true } : null;
    };
    this.ratingControlForm = new FormGroup({
      rating: new FormControl(3, { validators: [ratingControlValidator] })
    });
  }
}
