import { Button } from '@/component/ui/button'

const App = () => {
  return (
    <Button
      className="flex-auto text-red-600 h-screen w-screen text-6xl"
      onClick={async () => {
        const response = await fetch('http://localhost:1234/test')
          .then((res) => res.text())
          .then((value) => {
            return value
          })

        alert(response)
      }}
    >
      Hello, World!
    </Button>
  )
}

export default App
