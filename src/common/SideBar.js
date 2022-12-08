import React, { useState, useEffect } from 'react'
import '../style/SideBar.css'
import { Avatar, IconButton } from "@material-ui/core"
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ChatIcon from '@material-ui/icons/Chat';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import SideBarChat from './SideBarChat'
import db from '../fireBase';
import { useStateValue } from '../StateProvider';

function SideBar() {

    const [rooms, setRooms] = useState([]);
    const [{ user}] = useStateValue();



    useEffect(() => {
        const unsuscribe = db.collection("rooms").onSnapshot((snapShot) => setRooms(
            snapShot.docs.map((doc) => ({
                id: doc.id,
                data: doc.data(),
            }))
        )
        );

        return () => {
            unsuscribe();
        };
    }, []);


    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <Avatar src={user?.photoURL} />
                <div className="sidebar__headerRight">
                    <IconButton >
                        <DonutLargeIcon />
                    </IconButton>
                    <IconButton>
                        <ChatIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>
            </div>
            <div className="sidebar__search">
                <div className="sidebar__searchContainer">
                    <SearchOutlinedIcon />
                    <input placeholder="Search or Start a new Chat" type="text" />
                </div>
            </div>
            <div className="sidebar__chats">
                <SideBarChat addNewChat />
                {rooms.map(room => (
                    <SideBarChat key={room.id} id={room.id} name={room.data.name} />

                ))}
            </div>
        </div>
    )
}

export default SideBar
