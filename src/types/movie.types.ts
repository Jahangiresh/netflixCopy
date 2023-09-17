export interface IMovieSeries {
  id: number;
  name: string;
  content: string;
}

export interface IMovie {
  id: number;
  name: string;
  content: string;
  coverImg: string;
  series: IMovieSeries[];
}

export interface ICategory {
  categoryName: string;
  movies: IMovie[];
}

export interface IMovieData {
  categories: ICategory[];
  isSuccess: boolean;
}
