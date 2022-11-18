
export class ValidateUserInputsService {
    execute(httpRequest: httpRequest) {
        if (!httpRequest.body.email || !httpRequest.body.password) {
            return {
                statusCode: 400
            }
        }
    }
}

export type httpRequest = {
    body: {
        email?: string
        password?: string
    }
}

describe('ValidateUserInputsService', () => {
    it('Should return 400 if no email is provided', () => {
        const sut = new ValidateUserInputsService()
        const httpRequest = {
            body: {
                password: "any_password"
            }
        }
        const httpResponse = sut.execute(httpRequest)
        expect(httpResponse?.statusCode).toBe(400)
    })
});

describe('ValidateUserInputsService', () => {
    it('Should return 400 if no password is provided', () => {
        const sut = new ValidateUserInputsService()
        const httpRequest = {
            body: {
                email: "any_email@mail.com"
            }
        }
        const httpResponse = sut.execute(httpRequest)
        expect(httpResponse?.statusCode).toBe(400)
    })
});

