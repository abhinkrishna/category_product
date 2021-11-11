export class Exception extends Error {
    public statusCode: number;
    public statusMessage: string;
    public message: string;
    public error: any;
    constructor(statusCode: number, statusMessage: string, message: string, error?: any) {
        super(message);
        this.statusCode = statusCode;
        this.statusMessage = statusMessage;
        this.message = message;
        this.error = error || null;
        Error.captureStackTrace(this, Exception);
    }
}

/** Error Responses */
export class Exception400 extends Exception {
    // The server did not understand the request.
    constructor(message: string, error?: any) {
        super(400, "Bad Request", message, error ? error : {});
    }
}

export class Exception404 extends Exception {
    // The server can not find the requested page.
    constructor(message: string, error?: any) {
        super(404, "Not Found", message, error ? error : {});
    }
}