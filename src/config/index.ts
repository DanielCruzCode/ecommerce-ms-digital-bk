export const DB_CONFIG = {
	DB_HOST: process.env.DB_HOST,
	DB_PORT: Number(process.env.DB_PORT),
	DB_USER: process.env.DB_USER,
	DB_PASS: process.env.DB_PASS,
	DB_NAME: process.env.DB_NAME,
};

export const APP_CONFIG = {
	PORT: Number(process.env.PORT),
};
