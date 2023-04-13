export interface Book {
  name: string;
  chapters: [{ text: string; img: string }];
}

export interface CreateBook {
  name: string;
  story: string;
  img: string;
  idUser: number | string;
}

export interface UpdateBook {
  story: string;
  img: string;
  position: number;
  idUser: number | string;
}
