import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Crop } from 'src/app/models/crop';
import { CommonService } from 'src/app/services/common.service';
import {DynamicDialogRef,DynamicDialogConfig} from 'primeng/dynamicdialog';

@Component({
  selector: 'app-edit-crop',
  templateUrl: './edit-crop.component.html',
  styleUrls: ['./edit-crop.component.css'],
})
export class EditCropComponent implements OnInit, OnChanges {
  crop!: Crop;
  editForm!: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private commonService: CommonService,
    private router: Router,
    private activatedRoute : ActivatedRoute,
    public ref: DynamicDialogRef, public config: DynamicDialogConfig
  ) {
    this.editForm = this.formBuilder.group({
      id: [null,Validators.required],
      name:  [null,Validators.required],
      description: [null,Validators.required],
      quantity: [null,Validators.required],
      price: [0, Validators.required],
    });
  }

  ngOnInit(): void {
    console.log("ngonit")
    this.crop = this.config.data?.crop;  
    this.setDefaults();  
    
  }
  ngOnChanges(): void {
   // this.setDefaults();
  }
  setDefaults() {
    if(this.crop){
      this.editForm.setValue({
        id : this.crop.id,
        name : this.crop.name,
        description: this.crop.description,
        quantity : this.crop.quantity,
        price : this.crop.price
      });

    }

  }
  submit(): void {
    if(!this.crop){
      this.commonService.addNewCrop(this.editForm.value).subscribe(
        (data) => { console.log(data);
            this.ref.close(data);
        },
  
        (error) => {console.log(`error occured while adding new crop  $error`);
            this.ref.close({status:false, roomId : this.crop.id});
      },
      );
    }else{
       const cropId = {id: this.crop.id};
      const udatedCrop : Crop ={
       ...cropId, ...this.editForm.value
      }
    this.commonService.updateCrop(udatedCrop).subscribe(
      (data) => { console.log(data);
          this.ref.close(data);
      },

      (error) => {console.log(`error occured while updating room details $error`);
      this.ref.close(udatedCrop);
    },
    );
  }
  }

  reset(): void {
    this.editForm.reset();
  }

  cancel(): void {
    this.ref.close();
  }
}
