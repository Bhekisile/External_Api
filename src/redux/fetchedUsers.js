import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchRandomUser } from './users/usersSlice';

const FetchedUsers = () => {
  const { users, isLoading, error } = useSelector((state) => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRandomUser());
  }, [dispatch]);

  const renderUser = (user, index) => (
    <div key={index}>
      <p>
        {user.name.first}
        {user.name.last}
      </p>
    </div>
  );
  return (
    <div>

      {isLoading && <div>Loading ........</div>}
      {error && <div>Could not fetch data.</div>}
      {users.results && users.results.map(renderUser)}
    </div>
  );
};

export default FetchedUsers;
