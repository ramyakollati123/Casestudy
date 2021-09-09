import { Component, OnInit } from '@angular/core';
import { Message } from 'src/app/models/messages';
import { Crop } from 'src/app/models/crop';
import { CommonService } from 'src/app/services/common.service';
import { DialogService } from 'primeng/dynamicdialog';
import { EditCropComponent } from './edit-crop/edit-crop.component';
import { MessageService } from 'primeng/api';
import { Categories } from 'src/app/models/categories';


@Component({
  selector: 'app-crop-rooms',
  templateUrl: './manage-crop.component.html',
  styleUrls: ['./manage-crop.component.css'],
  providers: [DialogService, MessageService],
})
export class ManageCropComponent implements OnInit {
  crops: Crop[] = [];
  cropSelectedForEdit!: Crop;
  isEditing: boolean = false;
  isNewCrop: boolean = false;
  showmsg: boolean = false;
  message: string = '';
  statusMessages: Message[] = [];
  categories :  Categories[] =[];

  constructor(
    private commonService: CommonService,
    public dialogService: DialogService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.fetchAllCrops();
    //this.fetchAllCategories();
  }


   fetchAllCrops() {
    this.commonService.getAllCrops().subscribe(
      (data) => (this.crops = data),
      (err) => console.log(`error occured while fetchin all crops ${err}`),
      () => console.log('fetching all crops service executed')
    );
  }

  editCropDetails(crop: Crop, index: number) {
    console.log(`crop selected for editing ${crop} and index no is ${index} `);
    this.isEditing = true;
    this.cropSelectedForEdit = crop;
    const ref = this.dialogService.open(EditCropComponent, {
      showHeader: false,
      width: '50%',
      data: {
        crop: crop,
      },
      closeOnEscape: false,
      dismissableMask: false,
      closable: false,
      style: {
        border: '1px solid  black',
        padding: 0,
        'border-radius': '24px',
        'background-color': 'transparent',
      },
      contentStyle: {
        'max-height': '500px',
        overflow: 'auto',
        padding: 0,
        'border-radius': '24px',
        'background-color': 'transparent',
        border: '1 px solid black',
      },
    });
    ref.onClose.subscribe((data: { status: boolean }) => {
      if (data && data.status === true) {
        this.fetchAllCrops();
        this.messageService.add({
          severity: 'success',
          summary: 'Crop update status',
          detail: 'Crop updated successfully',
        });
      } else{
        this.fetchAllCrops();
        this.messageService.add({
          severity: 'success',
          summary: 'Crop update status',
          detail:
            'Crop updated successfully',
        });
      }
     
    });
  }

  addNewCrop(): void {
    this.isNewCrop = true;
    const ref = this.dialogService.open(EditCropComponent, {
      showHeader: false,
      width: '50%',
      data: {
       
      },
      closeOnEscape: false,
      dismissableMask: false,
      closable: false,
      style: {
        border: '1px solid  black',
        padding: 0,
        'border-radius': '24px',
        'background-color': 'transparent',
      },
      contentStyle: {
        'max-height': '500px',
        overflow: 'auto',
        padding: 0,
        'border-radius': '24px',
        'background-color': 'transparent',
        border: '1 px solid black',
      },
    });

    ref.onClose.subscribe((data: { status: boolean }) => {
      if (data && data.status === true) {
        this.fetchAllCrops();
        this.messageService.add({
          severity: 'success',
          summary: 'Crop Add status',
          detail: 'Crop created successfully',
        });
      } else {
        this.messageService.add({
          severity: 'error',
          summary: 'Crop Add status',
          detail:
            'Crop  has failed to create. PLease try again',
        });
      }
    });
  }
  

  deleteCropDetails(crop : Crop) {
    this.commonService.deleteCrop(crop).subscribe(
      (data) => {
        this.messageService.add({
          severity: 'success',
          summary: 'Crop Delete status',
          detail: `Crop Deleted successfully`,
        });
        this.fetchAllCrops();
      },
      (err) => {
        this.fetchAllCrops();
        this.messageService.add({
        severity: 'success',
        summary: 'Crop Delete status',
        detail:
          `Crop Deleted successfully`,
      });
     
    },
      () => console.log('fetching all crops service executed')
    );
   
  }
getAllCrops(){}
  
}
