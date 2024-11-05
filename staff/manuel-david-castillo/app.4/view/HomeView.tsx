import React from "react"
import {getUserName} from "./../logic/getUserName"
import logoutUser from "./../logic/logoutUser"

interface HomeViewProps {
    onLogout: () => void
}

const useState = React.useState
const useEffect = React.useEffect

const HomeView: React.FC<HomeViewProps> = (props) => {
    console.log('HomeView -> render')

    const nameState = useState<string | null>(null)
    const name = nameState[0]
    const setName = nameState[1]

    console.log('HomeView -> state: name = ' + name)

    useEffect(function () {
        const name: string = getUserName()

        setName(name)
    }, [])

    return <main>
        <h2>Home</h2>

        {name && <h3>Hello, {name}!</h3>}

        <button onClick={function () {
            try {
                logoutUser()

                props.onLogout()
            } catch (error) {
                alert(error.message)

                console.error(error)
            }
        }}>Logout</button>
    </main>
}

export default HomeView;