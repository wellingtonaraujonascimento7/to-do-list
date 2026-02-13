import AppError from '../../shared/errors/app.erro';
import UserRepository from '../user/user.repository';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

class AuthService {
    constructor(private readonly userRepository: UserRepository) {}

    async login(
        email: string,
        password: string,
    ): Promise<{ token_acess: string }> {
        const user = await this.userRepository.findUserByEmail(email);

        if (!user) {
            throw new AppError('Invalid credentials', 401);
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
            throw new AppError('Invalid credentials', 401);
        }

        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET!, {
            expiresIn: '1h',
        });

        return { token_acess: token };
    }
}

export default AuthService;
