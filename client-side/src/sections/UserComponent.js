import React from 'react';
import styles from '../styles/sections/CommanModel.module.scss';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUserData, createUser, removeUser, modifyUser, getUserRoleData } from '../action/userAction';


const UserComponent = () => {
  const [userData, setUserData] = useState({ firstName: "", lastName: "", email: "", password: "", phoneNumber: "", userRole: "" })
  const [currentId, setCurrentId] = useState(null);


  const fetchedUser = useSelector((state) => state.fetchAllUser);
  const fetchedUserRole = useSelector((state) => state.fetchAllUserRole);
  const fetchedUserInput = useSelector((state) => state.fetchAllUser);
  const createdUser = useSelector((state) => state.createNewUser);
  const deletedUser = useSelector((state) => state.removeSelectedUser);
  const updatedUser = useSelector((state) => state.modifySelectedUser);
  const populatedUser = currentId ? fetchedUserInput.data?.find((p) => p._id === currentId) : null

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserData());
    dispatch(getUserRoleData());
  }, [createdUser, deletedUser, currentId, dispatch])

  console.log(fetchedUserRole)

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentId) {
      dispatch(modifyUser(currentId, userData));
    }
    else {
      dispatch(createUser(userData))
    }
  }


  useEffect(() => {
    if (populatedUser) {
      setUserData({
        firstName: populatedUser.firstName,
        lastName: populatedUser.lastName,
        email: populatedUser.email,
        password: populatedUser.password,
        phoneNumber: populatedUser.phoneNumber,
        userRole: populatedUser.userRole,
      })
    }
    else {
      return;
    }
  }, [populatedUser])



  return (
    <section className={styles.comman_model_main_section}>
      <p id='catBox' className={`${styles.title} text_md`}>{currentId ? "Edit User" : "Add User"}</p>
      <div className={styles.add_card}>
        <div className={styles.input_box}>
          <label htmlFor="">User FirstName:</label>
          <input onChange={(e) => setUserData({ ...userData, firstName: e.target.value })} value={userData.firstName} type="text" name='firstName' placeholder='Enter FirstName' />
          {userData.firstName === " " ?
            <p className={styles.fielderror}>Enter FirstName Field</p>
            :
            null
          }
        </div>
        <div className={styles.input_box}>
          <label htmlFor="">User LastName:</label>
          <input onChange={(e) => setUserData({ ...userData, lastName: e.target.value })} value={userData.lastName} type="text" name='lastName' placeholder='Enter LastName' />
          {userData.lastName === " " ?
            <p className={styles.fielderror}>Enter LastName Field</p>
            :
            null
          }
        </div>
        <div className={styles.input_box}>
          <label htmlFor="">User Email:</label>
          <input onChange={(e) => setUserData({ ...userData, email: e.target.value })} value={userData.email} type="text" name='email' placeholder='Enter Email' />
          {userData.email === " " ?
            <p className={styles.fielderror}>Enter Email Field</p>
            :
            null
          }
        </div>
        <div className={styles.input_box}>
          <label htmlFor="">User Password:</label>
          <input onChange={(e) => setUserData({ ...userData, password: e.target.value })} value={userData.password} type="text" name='password' placeholder='Enter Password' />
          {userData.password === " " ?
            <p className={styles.fielderror}>Enter Password Field</p>
            :
            null
          }
        </div>
        <div className={styles.input_box}>
          <label htmlFor="">User PhoneNumber:</label>
          <input onChange={(e) => setUserData({ ...userData, phoneNumber: e.target.value })} value={userData.phoneNumber} type="text" name='phoneNumber' placeholder='Enter PhoneNumber' />
          {userData.phoneNumber === " " ?
            <p className={styles.fielderror}>Enter PhoneNumber Field</p>
            :
            null
          }
        </div>
        <div className={styles.input_box}>
          <label htmlFor="">User Role</label>
          <select onChange={(e) => setUserData({ ...userData, userRole: e.target.value })}>
            <option selected={false} disabled="disabled">Select a Role</option>
            {fetchedUserRole?.data?.map((item, id) => {
              return (
                <option key={id} value={item._id}>{item._id}</option>
              )
            })}
          </select>
          {userData.userRole === " " ?
            <p className={styles.fielderror}>Enter PhoneNumber Field</p>
            :
            null
          }
        </div>
        {createdUser === "User Successfully Created" || updatedUser ? <p className={styles.success}>{createdUser}{updatedUser}</p> : <p className={styles.error}>{createdUser}</p>}
        <button onClick={handleSubmit} className={styles.add_btn}>{currentId ? "Update User" : "Add User"}</button>
      </div>

      <p className={`${styles.title} text_md`}>User List</p>

      <div className={styles.add_card}>
        <input className={styles.search_inp} placeholder='Start typing to search for user' type="text" name="" id="" />

        <table className={styles.table}>
          <tbody>
            <tr className={styles.tr}>
              <th>User Name</th>
              <th>ID</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
            {fetchedUser.data?.map((item, id) => {
              return (
                <tr key={id}>
                  <td>{`${item.firstName} ${item.lastName}`}</td>
                  <td>{item._id}</td>
                  <td>{item.email}</td>
                  <td>
                    <button onClick={() => dispatch(removeUser(item._id))} className={styles.delete_btn}>Delete</button>
                    <a href='#catBox'><button onClick={() => setCurrentId(item._id)} className={styles.edit_btn}>Edit</button></a>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </section>
  )
}

export default UserComponent