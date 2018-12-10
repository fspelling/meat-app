import { Request, Response } from 'express';
import * as jwt from 'jsonwebtoken';

export const handleAuthorization = (req: Request, res: Response, next) => {
    const token = extractToken(req);

    if (!token) {
        res.setHeader('WWW-Authenticate', 'Bearer token_types="JWT"');
        res.status(401).json('voce precisa se autenticar');
    } else {
        jwt.verify(token, 'meat-api-password', (error, decoded) => {
            if(decoded) {
                next();
            } else {
                res.status(403).json({ message: 'não autorizado' })
            }
        });
    }
};

function extractToken(req: Request): string {
    let token: string = undefined;
    return token;
}