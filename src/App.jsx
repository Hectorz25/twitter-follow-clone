import './App.css'
import { TwitterFollowCard } from './assets/components/TwitterFollowCard'

export function App (){
    const users = [
        {   
            userName: 'GateteZ25',
            name: 'Gatete',
            isFollowing: true
        },
        {   
            userName: 'JasiveWong',
            name: 'JashiPinguin',
            isFollowing: true
        },
        {   
            userName: 'Snoopy',
            name: 'El Esnupi',
            isFollowing: false
        },
        {   
            userName: 'Hirai.Momo',
            name: 'Momorin',
            isFollowing: false
        }
    ]
    return(
        <section className='App'>
            {
                users.map(user => {
                    const {userName, name, isFollowing} = user
                    return(
                        <TwitterFollowCard userName={userName} initialIsFollowing={isFollowing} key={userName}>
                            {name}
                        </TwitterFollowCard>
                    )
                })
            }
        </section>
    )
}