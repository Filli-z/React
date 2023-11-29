
const fetchSearch = async ({ queryKey }) => {
    const { animal, location, breed } = queryKey[1]
    const apiRes = await fetch(`https://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`)
    if (!apiRes.ok) {
        throw new Error(`pet search not ok ${animal}, ${location}, ${breed}`)
    }
    return apiRes.json()
}

export default fetchSearch