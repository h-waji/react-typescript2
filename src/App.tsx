import React, { useState } from 'react';
import { UserCard } from './components/UserCard';
import axios from 'axios';
import { User } from './types/api/user';
import { UserProfile } from './types/userProfile';
import { useAllUsers } from './hooks/useAllUsers';

// const user = {
//   id: 1,
//   name: "Hamham",
//   email: "hamham@example.com",
//   address: "0x7fff5fbff94c",
// }

export default function App() {
  // const [userProfiles, setUserProfiles] = useState<Array<UserProfile>>([]);
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(false);

  // const onClickFetchUser = () => {
  //   setLoading(true);
  //   setError(false);

  //   axios
  //     .get<Array<User>>("https://jsonplaceholder.typicode.com/users")
  //     .then((res) => {
  //       const data = res.data.map((user) => ({
  //         id: user.id,
  //         name: `${user.name}(${user.username})`,
  //         email: user.email,
  //         address: `${user.address.city}${user.address.suite}${user.address.street}`,
  //     }));
  //     setUserProfiles(data);
  //   })
  //   .catch(() => {
  //     setError(true);
  //   })
  //   .finally(() => {
  //     setLoading(false);
  //   });
  // }

  const { getUsers, userProfiles, loading, error } = useAllUsers();

  const onClickFetchUser = () => getUsers();

  return (
    <div>
      <h1>🌻Code Sandbox🐹</h1>
      <button onClick={onClickFetchUser}>Fetch Data</button>
      <br />
      {error ? (
        <h2 style={{ color: "red" }}>Data retrieval failed.</h2>
      ) : loading ? (
        <h2>Loading...</h2>
      ) : (
        <>
          {userProfiles.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}  
        </>
      )}
    </div>
  );
}
