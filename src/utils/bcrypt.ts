import * as bcrypt from "bcrypt";



export const hashPassword = (rawPassword: string) => {
    const salt = bcrypt.genSaltSync();
    return bcrypt.hashSync(rawPassword, salt);
};

export const comparePassword = async (
    rawPassword: string,
    hashedPassword: string
) => {
    return bcrypt.compareSync(rawPassword, hashedPassword);
};