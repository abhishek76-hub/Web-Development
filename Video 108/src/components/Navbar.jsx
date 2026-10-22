import React1, { useEffect } from "react"

const Navbar = ({ color }) => {

  // Case 1: Run on Every Render
  useEffect(() => {
    alert("Hey I Will run on Every Render")
  })

  // Case 2: Run only on First Render
  useEffect(() => {
    alert("Hey welcome to my page... This is the First Render")
  }, [])

  // Case 3: Run only when Certain Value Change
  useEffect(() => {
    alert("Hey am runnig because Color was changed")
  }, [color])

  // Example of Cleanup function
  useEffect(() => {
    alert("Hey welcome to my page. This is the first render of app.jsx")

    return () => {
      alert("component was unmounted")
    }
  }, [])


  return (
    <div>
      I am a Navbar of {color} color
    </div>
  )
}

export default Navbar
