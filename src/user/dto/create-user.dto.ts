//'dto - data transfer object';
export class CreateUserDto {
  public name: string;
  public email: string;
  public age: number;
  public city?: string;
  readonly password: string;
}
