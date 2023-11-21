import { useState, useEffect } from "react";

const localCache = {};


const useBreedList = (animal) => {
    const [breedlist, setBreedlist] = useState([])
    const [status, setStatus] = useState("unloaded")

    useEffect(() => {
        const requestBreedList = async () => {
            setBreedlist([])
            setStatus("loading")

            const res = await fetch(
                `http://pets-v2.dev-apis.com/breeds?animal=${animal}`
            )
            const json = await res.json()
            localCache[animal] = json.breeds || []
            setBreedlist(localCache[animal])
            setStatus("loaded")
        }

        if (!animal) {
            setBreedlist([]);
        }
        else if (localCache[animal]) {
            setBreedlist(localCache[animal])
        }
        else {
            requestBreedList()
        }

    }, [animal])

    return [breedlist, status]
}

export default useBreedList;