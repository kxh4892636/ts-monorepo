import { createApp } from './app/server'

createApp(3456)
  .then(async (app) => {
    await app.start()
    return 0
  })
  .catch(() => {
    //
  })
