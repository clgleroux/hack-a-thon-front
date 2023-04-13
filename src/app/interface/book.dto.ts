export interface Book {
  id: string;
  name: string;
  chapters: [{ text: string; img: string }];
}

export interface CreateBook {
  name: string;
  chapter: string;
  img: string;
}

export interface UpdateBook {
  chapter: string;
  img: string;
  position: number;
}
