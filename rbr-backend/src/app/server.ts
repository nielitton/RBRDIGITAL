import app from "./app"

const PORT = process.env.PORT

app.listen(PORT || 8000, () => {
    console.log(`Server is running on port ${PORT}`)
})