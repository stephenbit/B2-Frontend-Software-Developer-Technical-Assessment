import React from 'react';
import { useParams } from 'react-router-dom';

type User = {
  id: number;
  name: string;
  email: string;
  address: {
    city: string;
  };
  phone: string;
  website: string;
};

const SingleUser: React.FC<{ users: User[] }> = ({ users }) => {

  const { id } = useParams<{ id: string }>();

  const user = users.find((u) => u.id.toString() === id);
  if (!user) {
    return <div>User not found</div>;
  }

  return (
    <div>
      <h1>{user.name}</h1>
      <p>Email: {user.email}</p>
      <p>City: {user.address.city}</p>
      <p>Phone: {user.phone}</p>
      <p>
        Website:{' '}
        <a href={`https://${user.website}`} target="_blank" rel="noopener noreferrer">
          {user.website}
        </a>
      </p>
    </div>
  );
};
export default SingleUser;
