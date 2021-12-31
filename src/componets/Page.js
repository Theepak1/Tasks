import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteData, getData } from "../actions/DataAction";

export default function Datafunc() {
    const dispatch = useDispatch();
    const [user, setUser] = useState([])
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        await fetch('https://jsonplaceholder.typicode.com/users').then((res) => res.json())
            .then((data) => setUser(data))
        dispatch(getData(user))
        console.log(user);
    }

    function edit(param) {

        const newData = {
            id: param.id,
            name: "theepak",
            email: "theepak@gmail.com"

        }

        setUser(user.map((user) => {
            if (user.id == param.id) {
                return newData;
            }
            else {
                return user;
            }
        }))
        console.log(user);

    }

    const deleted = async (id) => {
        await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
            method: 'DELETE'
        }).then((res) => {
            if (res.status !== 200) {
                return
            }
            else {
                setUser(user.filter((user) => {
                    return user.id !== id;
                }))
            }
        })
        console.log(user)
    }

    return (
        <div>


            <table border="1" bgcolor="white" class="table  table-bordered table-hover" align="center" width="70%" height="70%" >
                <tr>
                    <th align="center"> ID</th>
                    <th align="center">NAME </th>
                    <th align="center">EMAIL </th>
                    <th align="center">EDIT </th>
                    <th align="center">DELETE </th>

                </tr>
                {
                    user.map((user) => {
                        return (

                            <tr key={user.id} >
                                <td align="center">{user.id}</td>
                                <td align="center">{user.name}</td>
                                <td align="center">{user.email}</td>
                                <td align="center"><button onClick={() => edit(user)}>EDIT</button></td>
                                <td align="center"><button onClick={() => deleted(user.id)}>DELETE</button></td>

                            </tr>


                        )


                    })
                }
            </table>
        </div>
    )




}