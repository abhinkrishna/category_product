export class SuccessResponses {
    protected getObject = (code: number, data?: any, message?: string) => {
        const successObj: any = {
            200: { statusMessage: "OK", message: "The request is OK." },
            201: { statusMessage: "Created", message: "The request is complete, and a new resource is created." },
            202: { statusMessage: "Accepted", message: "The request is accepted for processing, but the processing is not complete." },
            204: { statusMessage: "Accepted", message: "A status code and a header are given in the response, but there is no entity-body in the reply." }
        };

        return {
            type: "success",
            statusCode: code,
            statusMessage: successObj[code].statusMessage,
            message: message ? message : successObj[code].message,
            data
        };
    }
}