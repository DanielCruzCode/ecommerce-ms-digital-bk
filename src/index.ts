import * as bodyParser from "body-parser";
import type { Request, Response } from "express";
import * as express from "express";
import { ValidationError } from "express-validation";
import { APP_CONFIG } from "./config";
import { AppDataSource } from "./contexts/shared/persistance/typeorm/data-source";
import type { CustomErrorType } from "./lib/requestHandler";
import {
	type BaseResponse,
	HTTP_CODES,
} from "./lib/requestHandler/responseTypes";
import { mainRouter } from "./router";

// Initialize Database
AppDataSource.initialize()
	.then(async () => {
		console.log("Data Source has been initialized!");
	})
	.catch((err) => {
		console.error("Error during Data Source initialization:", err);
	});

const app = express();
app.use(bodyParser.json());

// Routes
app.use("/api", mainRouter);

// Route validator error
app.use((err: unknown, req: Request, res: Response<BaseResponse>, next) => {
	let errorPayload: CustomErrorType = {
		ok: false,
		code: HTTP_CODES.INTERNAL_SERVER_ERROR,
		status: "INTERNAL_SERVER_ERROR",
		message: "Server error - No controlled",
		name: "INTERNAL_SERVER_ERROR",
	};

	if (err instanceof ValidationError) {
		const validationErrorList = err.details.body.map((it) => it.message);

		errorPayload = {
			ok: false,
			code: HTTP_CODES.BAD_REQUEST,
			status: "BAD_REQUEST",
			message: "Parameter not valid",
			name: "PARAMETER_VALIDATION",
			data: validationErrorList,
		};
	}

	return res.status(errorPayload.code).json(errorPayload);
});

// Health check
app.get("/health", (req, res) => {
	res.send("success");
});

// Start server
app.listen(APP_CONFIG.PORT, () => {
	console.log(`Server listening on ${APP_CONFIG.PORT} 🚀`);
});
