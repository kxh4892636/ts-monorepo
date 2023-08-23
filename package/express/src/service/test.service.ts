class TestService {
  async test() {
    const result = await Promise.resolve(
      `Server is running in ${process.env.NODE_ENV} mode.`,
    )
    return result
  }
}

export const testService = new TestService()
