import { Injectable } from "@angular/core";
import { FaceSnap } from "../models/face-snap.model";

@Injectable({
    providedIn:'root',
})
export class FaceSnapsService {

    facesnaps :FaceSnap[]=[
        {
          id:1,
          title :'firstsnap1',
          description:'this1 first image first snap',
          createdDate:new Date(),
          snaps:255,
          imageUrl :"../assets/images/a.jpg",
          location:'Maroc'
        },
        {
          id:2,
          title :'firstsnap2',
          description:'this2 SECOND image SECOND snap',
          createdDate:new Date(),
          snaps:0,
          imageUrl :"../assets/images/a.jpg",
          location:'Paris'
        },
        {
          id:3,
          title :'firstsnap3',
          description:'this3 SECOND3 image SECOND3 snap',
          createdDate:new Date(),
          snaps:200,
          imageUrl :"../assets/images/a.jpg"
  
        },
        {
          id:4,
          title :'firstsnap4',
          description:'this1 first image first snap',
          createdDate:new Date(),
          snaps:100,
          imageUrl :"../assets/images/a.jpg",
          location:'Maroc'
        },
        {
          id:5,
          title :'firstsnap5',
          description:'this2 SECOND image SECOND snap',
          createdDate:new Date(),
          snaps:10,
          imageUrl :"../assets/images/a.jpg",
          location:'Paris'
        },
        {
          id:6,
          title :'firstsnap6',
          description:'this3 SECOND3 image SECOND3 snap',
          createdDate:new Date(),
          snaps:0,
          imageUrl :"../assets/images/a.jpg"
  
        }
      ];
      getAllFaceSnaps():FaceSnap []{
        return this.facesnaps;
      };


      snapFaceSnapById(faceSnapId:number):void{
        const faceSnap =this.facesnaps.find(faceSnap => faceSnap.id === faceSnapId);
        if (faceSnap) {
          faceSnap.snaps++;
      } else {
          throw new Error('FaceSnap not found!');
      }
      }

      unsnapFaceSnapById(faceSnapId: number): void {
        const faceSnap = this.facesnaps.find(faceSnap => faceSnap.id === faceSnapId);
        if (faceSnap) {
            faceSnap.snaps--;
        } else {
            throw new Error('FaceSnap not found!');
        }
    }
      
}