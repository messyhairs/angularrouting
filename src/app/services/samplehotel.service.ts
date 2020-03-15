import { Observable } from 'rxjs';
import { Hotels } from './hotels';


export class SamplehotelService {

  public getHotels() {

    let hotels: Hotels[];

    // hotels = [
    //   // new Hotels(1, 'Memory Card', 500),
    //   // new Hotels(2, 'Pen Drive', 750),
    //   // new Hotels(3, 'Power Bank', 100)
    // ];
    hotels = [{
      hotelID: 1,
      name: 'hotel sai',
      price: 2300
    },
    {
      hotelID: 2,
      name: 'hotel krishna',
      price: 2400
    }];

    return hotels;
  }


  public getProduct(id) {
    const hotels: Hotels[] = this.getHotels();
    return hotels.find(p => p.hotelID === id);
  }


}
