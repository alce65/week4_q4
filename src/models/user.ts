type Turn = 'M' | 'T' | 'N';

type Course = 'ng-01' | 'rc-23' | 'nd-02';

export type User = {
  userName: string;
  userSurname: string;
  comments: string;
  turn: Turn | '';
  course: Course | '';
  passwd: string;
  email: string;
  country: string;
  isOk: boolean;
};
