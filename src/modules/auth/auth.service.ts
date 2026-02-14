import AppError from '../../shared/errors/app.erro';
import UserRepository from '../user/user.repository';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { LoginDto } from './auth.schema';

class AuthService {
    constructor(private readonly userRepository: UserRepository) {}

    async login(loginDto: LoginDto): Promise<{ token_acess: string }> {
        const user = await this.userRepository.findUserByEmail(loginDto.email);

        if (!user) {
            throw new AppError('Invalid credentials', 401);
        }

        const isPasswordValid = await bcrypt.compare(
            loginDto.password,
            user.password,
        );

        if (!isPasswordValid) {
            throw new AppError('Invalid credentials', 401);
        }

        if (!process.env.JWT_SECRET) {
            throw new AppError('JWT secret not configured', 500);
        }

        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
            expiresIn: '1h',
        });

        return { token_acess: token };
    }
}

export default AuthService;
