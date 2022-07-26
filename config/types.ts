export type Inputs = {
  firstName: string;
  name: string;
  email: string;
  password: string;
  image: [];
};

export type Login = {
  email: string;
  password: string;
};

export type Register = {
  name: string;
  firstName: string;
  email: string;
  password: string;
};

export type foodCategories = {
  imageUrl: string;
  title: string;
  _id: string;
};
