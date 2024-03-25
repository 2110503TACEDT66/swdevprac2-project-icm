export interface DentistItem {
    _id: string,
    name: string,
    years_of_experience: string,
    area_of_expertise: string,
    picture: string,
    __v: number,
    id: string
  }
  
export interface DentistJson {
    success: boolean,
    count: number,
    pagination: Object,
    data: DentistItem[]
  }

export interface BookingItem {
    name: string;
    surname: string;
    id: string;
    dentist: string;
    bookDate: string;
  }