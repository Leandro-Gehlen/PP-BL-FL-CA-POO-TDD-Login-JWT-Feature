
export class ValidateUserInputsService {
    execute(httpRequest: any) {
        if (!httpRequest.body.email) {
            return {
                statusCode: 400
            }
        }
    }
}

export type httpRequest = {
    email: string
    password: string
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

