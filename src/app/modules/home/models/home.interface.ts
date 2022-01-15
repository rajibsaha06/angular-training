export interface User {
  meta: string;
  data: {
    id: number;
    name: string;
    email: string;
    gender: string;
    status: string;
  };
}

export interface Advice {
  slip: {
    id: number;
    advice: string;
  };
}
