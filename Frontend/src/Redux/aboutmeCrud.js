import { createAsyncThunk } from "@reduxjs/toolkit"

export const getAboutme = createAsyncThunk("getAboutme",async () => {
    const response = await fetch("http://localhost:3001/api/aboutme")
    return response.json()
})
