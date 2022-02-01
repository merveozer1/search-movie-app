import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { addFavList } from "../../reduxStore/users"
const Profile = (props) => {
  function favTutorial() {
    var mylist = document.getElementById("myList");
    document.getElementById("favourite").value = mylist.options[mylist.selectedIndex].text;
  }

  const [userData] = useState({
  "favoritesList": {
    "favoritesFilms": [
    ],
    "totalCount": 0
  }
})

  const { user } = useSelector(state => state)
  console.log(user)
  const dispatch = useDispatch()
  const FavList = (e) => {
    console.log(userData)
    e.preventDefault();
    dispatch(addFavList(userData.userName, userData.movieId))
    if (userData.users.find((user) => user.userName === userData.userName && user.password === userData.password)) {
        localStorage.setItem('isUserLoggedIn', true);
        console.log('logged in');
    } else {
        console.log('giremedin :P');
    }
}
  return (
    <>
      <div>
        <form>
          <h4 > Filter By </h4>
          <select id="myList" onChange={favTutorial} >
            <option> Closest release date</option>
            <option> Favorites </option>
            <option> Seenlist </option>
          </select>
        </form>
        <h3 className="d-flex justify-content-center">Movies User Results:</h3>
        <table className="table mt-3">
          <thead>
            <tr>
              <th className="text-muted" scope="col"><h3>Film Id</h3></th>
              <th className="text-muted" scope="col"><h3>Film Title</h3></th>
              {/* <th className="text-muted" scope="col"><h3>Film Release Date</h3></th> */}
              {/* <th className="text-muted" scope="col"><h3>Icons Actions</h3></th> */}
            </tr>
          </thead>
          <tbody>
            {
              user.favoritesList.favoritesFilms.map((film) => (
                <tr className="text-warning">
                  <td >
                    { film?.id }
                  </td>
                  <td>
                    { film?.title }
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>


    </>
  )
};

export default Profile;