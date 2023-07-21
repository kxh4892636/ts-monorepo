import { styled } from 'styled-components'

const Head = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 40px;
  color: red;
  height: 80vh;
`

const App = () => {
  return (
    <Head>Hello, World!</Head>
  )
}

export default App
