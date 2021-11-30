import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Device } from 'src/app/models/device.model';
import { DeviceService } from 'src/app/services/device.service';

@Component({
  selector: 'app-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.css']
})
export class DeviceComponent implements OnInit {
  @ViewChild('content') content: any;
  action = "add";
  deviceList: any[] = [];
  id: number | undefined;

  allTypes:any[] = [
    {value: 1, typeDescription: 'Electric meter'},
    {value: 2, typeDescription: 'Water meter'},
    {value: 3, typeDescription: 'Gateway'}
  ]

  allStates:any[] = [
    {value: 1, stateDescription: 'State 1'},
    {value: 2, stateDescription: 'State 2'},
    {value: 3, stateDescription: 'State 3'},
    {value: 4, stateDescription: 'State 4'},
    {value: 5, stateDescription: 'State 5'}
  ]

  form: FormGroup;

  constructor(private fb: FormBuilder, private toastr: ToastrService,
    private _deviceService: DeviceService) {
    this.form = this.fb.group(
      {
        serialNumber: ['', [Validators.required, Validators.maxLength(20)]],
        firmwareVersion:['', Validators.maxLength(20)],
        state:[],
        type:[, Validators.required],
        ip:['', Validators.maxLength(20)],
        port:['', Validators.maxLength(4)]
      }
    )
   }

  ngOnInit(): void {
    this.getDevice();
  }

  getDevice(){
    this._deviceService.getDeviceList().subscribe(data => {
      console.log(data);
      this.deviceList = data;
    }, error => {
      this.toastr.error('Unable to recover data', 'Error');
    })
  }

  saveDevice(){
    
    const device:Device = {
      serialNumber: this.form.get('serialNumber')?.value ,
      firmwareVersion: this.form.get('firmwareVersion')?.value ,
      state: this.form.get('state')?.value ,
      type: this.form.get('type')?.value ,
      ip: this.form.get('ip')?.value ,
      port: this.form.get('port')?.value
    }

    if(this.id == undefined){
      //Add new device
      this._deviceService.saveDevice(device).subscribe(data =>{
        this.toastr.success('Device has been successfully saved', 'Saved device');
        this.getDevice();
        this.form.reset();
      }, error => {
        this.toastr.error(error.error.message, 'Error');
      })        
    }
    else{
      //Edit device
      device.id = this.id;
      this._deviceService.updateDevice(this.id, device).subscribe(data =>{
        this.form.reset();
        this.action = 'Add';
        this.id = undefined;
        this.toastr.success('Device has been successfully updated', 'Updated device');
        this.getDevice();
      }, error => {
        this.toastr.error(error.error.message, 'Error');
      })
    }
  }

  resetForm(){
    this.action = 'Add';
    this.id = undefined;
    this.form.reset();
    this.getDevice();
  }

  deleteDevice(id: number){
    this._deviceService.deleteDevice(id).subscribe(data => {
      this.toastr.success('Device has been successfully removed', 'Device removed');
      this.resetForm();
    }, error => {
      this.toastr.error('The device has not been deleted correctly', 'Error');
    })
  }

  editDevice(device: any){
    this.action = 'edit';
    this.id = device.id;

    this.form.patchValue({
      serialNumber: device.serialNumber,
      firmwareVersion:  device.firmwareVersion,
      state: device.state,
      type: device.type,
      ip:  device.ip,
      port: device.port
    })
  }

  openModal(){
    this.content.open();
  }


}
