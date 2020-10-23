import React from "react";
import * as axios from "axios";
import './SearchUsers.css'
import ava from '../../assets/images/moe-lico-kogda_214679476_orig_.png'
import Preloader from "../Preloader/Preloader";
import {NavLink} from "react-router-dom";
import {followUser, getUsers, unfollowUser} from "../../api/api";

class SearchUsersApi extends React.Component {

    componentDidMount() {this.props.setUsersThunk(this.props.currentPage, this.props.pageSize)}
    onChangePage(el) {this.props.setUsersThunk(el,this.props.pageSize)}

    render() {
        let pagesCount = Math.ceil(this.props.totalUsers / this.props.pageSize)
        let pages = []
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }

        return (
            <>
                {this.props.isFetching ? <Preloader/> :
                    <div className="container m-3 p-3 justify-content-center">
                        <h2 className="ml-5">Users</h2>
                        <div className="text-center">
                            {pages.map(el => {
                                return <span className="m-2 paginator" key={el} onClick={(e) => {
                                    this.onChangePage(el)
                                }}>{el}</span>
                            })}
                        </div>
                        {this.props.users.map(user => <section key={user.id} className="container row m-3">
                            <div className="col w-50 mt-auto mb-auto ml-2 text-center">
                                <NavLink to={"/profile" + user.id}>
                                    <img src={user.photos.small !== null ? user.photos.small : ava}
                                         className="avatar  bg-secondary  " alt="avatar"/></NavLink>
                                {user.followed ?
                                    <button disabled={this.props.following} className="bg-success border-0 rounded  mt-3 p-2 text-light"
                                            onClick={() => {
                                                this.props.setFollowing(true)
                                                unfollowUser(user.id)
                                                    .then(res => {
                                                        if (res.data.resultCode === 0) {
                                                            this.props.unFollow(user.id)
                                                        }
                                                        this.props.setFollowing(false)
                                                    })
                                                    .catch(err => console.log(err))
                                            }}>unFollow</button> :
                                    <button disabled={this.props.following} className="bg-success border-0 rounded  mt-3 p-2 text-light"
                                            onClick={() => {
                                                this.props.setFollowing(true)
                                                followUser(user.id)
                                                    .then(res => {
                                                        if (res.data.resultCode === 0) {
                                                            this.props.followId(user.id)
                                                        }
                                                        this.props.setFollowing(false)
                                                    })
                                                    .catch(err => console.log(err))
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
                    </div>}
            </>
        )

    }


}


export default SearchUsersApi