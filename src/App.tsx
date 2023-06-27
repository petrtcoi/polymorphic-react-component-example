import { useEffect, useRef } from "react"
import Box from "@/widgets/box"

function App() {
  const ref = useRef(null)

  useEffect(() => {
    console.log("Ref detected: ", ref)
  }, [])

  return (
    <>
      <h1>Box Example</h1>
      <Box
        as="a"
        href="https://google.com"
        target="_blank"
        margin="20px"
        padding="5px"
        background-color="red"
        border="1px solid yellow"
        color="green"
        ref={ref}
      >
        Example
      </Box>
    </>
  )
}

export default App
