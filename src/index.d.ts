interface IUser {
  id: number;
  name: string;
  username: string;
  email: string;
  password: string;
  image: string;
  address: {
    street: string;
    suite: string;
    city: string;
    country: string;
    zipCode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
}
