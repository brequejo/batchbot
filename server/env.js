import "dotenv/config";

const { PORT, DB_URL, SMTP_ADDRESS, SMTP_PASSWORD } = process.env;

export { PORT, DB_URL, SMTP_ADDRESS, SMTP_PASSWORD };
