import React from "react";
import * as axios from "axios";
import './SearchUsers.css'
import ava from '../../assets/images/moe-lico-kogda_214679476_orig_.png'
class SearchUsersApi extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(res => {
                this.props.setUsers(res.data.items);
                this.props.setTotalUsers(res.data.totalCount)
            })
            .catch(err => console.log(err))
    }

    onChangePage(el) {

        this.props.setCurrentPage(el)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${el}&count=${this.props.pageSize}`)
            .then(res => {
                this.props.setUsers(res.data.items)
            })
            .catch(err => console.log(err))
    }

    render() {
        let pagesCount = Math.ceil(this.props.totalUsers / this.props.pageSize)
        let pages = []
        for (let i = 1; i <= 30; i++) {
            pages.push(i)}

            return (
                <div className="container m-3 p-3 justify-content-center">
                    <h2 className="ml-5">Users</h2>
                    <div className="text-center">
                        {pages.map(el => {
                            return <span className="m-2 paginator" onClick={(e) => {
                                this.onChangePage(el)
                            }}>{el}</span>
                        })}
                    </div>
                    {this.props.users.map(user => <section key={user.id} className="container row m-3">
                        <div className="col w-50 mt-auto mb-auto ml-2 text-center">
                            <img src={user.photos.small !== null ? user.photos.small : ava}
                                 className="avatar  bg-secondary  "/>
                            {user.followed ?
                                <button className="bg-success border-0 rounded  mt-3 p-2 text-light" onClick={() => {
                                    this.props.unFollow(user.id)
                                }}> unFollow</button> :
                                <button className="bg-success border-0 rounded  mt-3 p-2 text-light" onClick={() => {
                                    this.props.followId(user.id)
                                }}>follow</button>}
                        </div>
                        <div className=" container col-10 mr-0  border-dark bg-primary text-light rounded p-3 ">
                            <div className="row justify-content-between p-2 ">
                                <p className="text-left d-block ">{user.name}</p>
                                <p className="text-right d-block ">{'user.location.city'}</p>
                            </div>
                            <div className="row justify-content-between p-2">
                                <p className="text-left d-block ">{user.status}</p>
                                <p className="text-right d-block ">{'user.location.country'}</p>
                            </div>
                        </div>

                    </section>)}
                    <div className="container">
                        <button
                            className=" mr-4 border-0 rounded text-justify bg-success p-3 align-items-center text-light  w-auto">Поиск
                            контактов
                        </button>

                    </div>
                </div>
            )

        }


    }


export default SearchUsersApi