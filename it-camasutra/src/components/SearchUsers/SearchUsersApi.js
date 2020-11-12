import React, {useState} from "react";
import './SearchUsers.css'
import ava from '../../assets/images/moe-lico-kogda_214679476_orig_.png'
import Preloader from "../Preloader/Preloader";
import {NavLink} from "react-router-dom";


class SearchUsersApi extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pagesNums: 10
    };
  }

  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize)
  }

  onChangePage(el) {
    this.props.getUsers(el, this.props.pageSize)
  }

  componentDidUpdate(prevProps, prevState, snapshot) {

  }

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
                  <button className="btn-success rounded border-0 mr-3"
                          onClick={() => this.setState({pagesNums: this.state.pagesNums - 10})}>prev
                  </button>
                  {pages.map(el => {
                    if (el <= this.state.pagesNums && el >= this.state.pagesNums - 10) {
                      return <span className="m-2 paginator" key={el} onClick={(e) => {
                        this.onChangePage(el)
                      }}>{el}</span>
                    }
                  })}
                  {/* eslint-disable-next-line no-unused-expressions */}
                  <button className="rounded btn-success border-0 ml-3"
                          onClick={() => this.setState({pagesNums: this.state.pagesNums + 10})}>next
                  </button>
                </div>
                {this.props.users.map(user => <section key={user.id} className="container row m-3">
                  <div className="col w-50 mt-auto mb-auto ml-2 text-center">
                    <NavLink to={"/profile" + user.id}>
                      <img src={user.photos.small !== null ? user.photos.small : ava}
                           className="avatar  bg-secondary  " alt="avatar"/></NavLink>
                    {user.followed ?
                        <button disabled={this.props.following}
                                className="bg-success border-0 rounded  mt-3 p-2 text-light"
                                onClick={() => {
                                  this.props.unfollowingUsers(user.id)
                                }}>unFollow</button> :
                        <button disabled={this.props.following}
                                className="bg-success border-0 rounded  mt-3 p-2 text-light"
                                onClick={() => {
                                  this.props.followingUsers(user.id)
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
