import { Component , OnInit} from '@angular/core';
import { FaceSnap } from './models/face-snap.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  facesnaps!:FaceSnap[];
  /**mySnap !:FaceSnap;
  mySnap2 !:FaceSnap;
  mySnap3 !:FaceSnap;
 /**  methode d'initilisation cest j'ai met le constructeur dans la class FaceSnap
  * ngOnInit() {
    this.mySnap= new FaceSnap('firstsnap2','this2 first image first snap', new Date(),0,"../assets/images/a.jpg",'Maroc');
    this.mySnap2= new FaceSnap('firstsnap2222','this2 first image first snap1222', new Date(),0,"../assets/images/a.jpg");
    
  }**/
  /* cette methode si j'ai creer la class sface snap simplement declaration de chaque propriete avec son type et ! pour mentioner que pas dinnitialisation et ? pour les attributs optionnelles*/
  ngOnInit() {}
  title='';
}
