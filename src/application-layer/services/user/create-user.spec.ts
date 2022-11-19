import { Http2ServerResponse } from "http2"

export class CreateUser {
    perform(httpRequest: httpRequest): httpResponse {
        if (!httpRequest.body.name) {

            return { statusCode: 400 }
        }
        return { statusCode: 200 }
    }
}
//production
type httpRequest = {
    body: {
        name?: string
    }
}

type httpResponse = {
    statusCode: number
}

// test helpers
describe('CreateUser', () => {
    it('Should return statusCode 400 if name wasn´t passed by the user input', () => {
        const sut = new CreateUser()
        const httpRequest = {
            body: {}
        }
        const httpResponse = sut.perform(httpRequest)


        expect(httpResponse.statusCode).toBe(400)
    })
});
