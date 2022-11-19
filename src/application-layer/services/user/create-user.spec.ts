import { Http2ServerResponse } from "http2"

export class CreateUser {
    perform(httpRequest: httpRequest): httpResponse {
        if (!httpRequest.body.name || !httpRequest.body.password || !httpRequest.body.email || !httpRequest.body.surname) {

            return { statusCode: 400 }
        }
        return { statusCode: 200 }
    }
}
//production
type httpRequest = {
    body: {
        name?: string
        surname?: string
        password?: string
        email?: string
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

describe('CreateUser', () => {
    it('Should return statusCode 400 if password wasn´t passed by the user input', () => {
        const sut = new CreateUser()
        const httpRequest = {
            body: {
                name: "any_name"
            }
        }
        const httpResponse = sut.perform(httpRequest)


        expect(httpResponse.statusCode).toBe(400)
    })
});

describe('CreateUser', () => {
    it('Should return statusCode 400 if email wasn´t passed by the user input', () => {
        const sut = new CreateUser()
        const httpRequest = {
            body: {
                name: "any_name",
                password: "any_password"
            }
        }
        const httpResponse = sut.perform(httpRequest)


        expect(httpResponse.statusCode).toBe(400)
    })
});

describe('CreateUser', () => {
    it('Should return statusCode 400 if email wasn´t passed by the user input', () => {
        const sut = new CreateUser()
        const httpRequest = {
            body: {
                name: "any_name",
                password: "any_password",
                email: "email@anyemail.com"
            }
        }
        const httpResponse = sut.perform(httpRequest)


        expect(httpResponse.statusCode).toBe(400)
    })
});