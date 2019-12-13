import { IsNotEmpty, IsString, MinLength, Matches } from "class-validator"

export class AuthCredentialsDto {
  @IsNotEmpty()
  @IsString()
  @MinLength(3)
  username: string

  @IsNotEmpty()
  @IsString()
  @MinLength(8)
  @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])/,
    { message: 'Password must contain one uppercase letter, one lowercase letter, and a number or special character.' }
  )
  password: string
}