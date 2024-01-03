import { styled } from 'styled-components'

const Head = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 40px;
  color: red;
  height: 100vh;
  background-color: green;
`

const App = () => {
  return (
    <Head
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
    </Head>
  )
}

export default App
