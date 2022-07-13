import { User } from "src/user/user.entity";

export class ResponseLoginDto {
    jwtToken: string;
    userId: User['id'];
}
