const DEFAULT_DELAY = 1000

/* Mock API for demo purposes */
class MockAPIService {
  delay = (ms = DEFAULT_DELAY) => new Promise((resolve) => setTimeout(resolve, ms))

  // eslint-disable-next-line no-magic-numbers
  mockResult = (data, status = 200) => ({
    data,
    status,
  })

  auth = () => ({
    signIn: async ({ email, password }) => {
      await this.delay()

      return this.mockResult({
        token: password,
        user: {
          email,
          id: 1,
        },
      })
    },
    signUp: async ({ email, password }) => {
      await this.delay()

      return this.mockResult({
        token: password,
        user: {
          email,
          id: 1,
        },
      })
    },
  })

  me = () => ({
    books: () => ({
      getAll: async () => {
        await this.delay()

        return this.mockResult([
          { id: 1, name: 'a1' },
          { id: 2, name: 'a2' },
          { id: 3, name: 'a3' },
          { id: 4, name: 'a4' },
        ])
      },
    }),
    get: async () => {
      await this.delay()

      return this.mockResult({
        email: 'email@email.com',
        id: 1,
      })
    },
  })
}

export default new MockAPIService()
