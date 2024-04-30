export class CreateUserDto {

  fullName: string;

  userName: string;

  email: string;


  password: string;

  confirmPassword: string;
}

export class loginDTO {
  email: string;

  password: string;
}
function MatchesProperty(arg0: string): (target: CreateUserDto, propertyKey: "confirmedPassword") => void {
  throw new Error('Function not implemented.');
}

