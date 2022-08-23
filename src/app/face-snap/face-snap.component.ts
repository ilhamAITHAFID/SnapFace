import { Component, OnInit,Input } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapsService } from '../services/face-snaps.service';
@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
// Pemiere exemple ajouter des donnes aux class FaceSnapComponent pour exercer sur la partie affichge des donnes dynamiques
export class FaceSnapComponent implements OnInit  {
  @Input() faceSnap!:FaceSnap;
  buttonText!:string;
  constructor(private faceSnapsService: FaceSnapsService) {}
  ngOnInit(){
    this.buttonText='Oh Snap!';
  }
  onSnap(){
    if (this.buttonText==='Oh Snap!'){
      //this.faceSnap.snaps++;
      this.faceSnapsService.snapFaceSnapById(this.faceSnap.id);
      this.buttonText='Ops UnSnap';
    }
    else {
      //this.faceSnap.snaps--;
      this.faceSnapsService.unsnapFaceSnapById(this.faceSnap.id);
      this.buttonText='Oh Snap!';
    }
    
  }


 

}
