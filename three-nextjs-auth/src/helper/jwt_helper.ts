import { NextRequest } from "next/server";
import jsonwebtoken from 'jsonwebtoken';

function getIdFromJwtToken(req: NextRequest) {
    try {
        const token: string = req.cookies.get('token')?.value || '';
        const decodedToken: any = jsonwebtoken.verify(token, process.env['TOKEN_SECRET']!);

        return decodedToken.id;
    } catch (error: any) {
        throw new Error(error.message);
    }
}

export {getIdFromJwtToken};