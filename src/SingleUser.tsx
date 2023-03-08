import { useParams } from 'react-router-dom';
import { User } from './App';
interface SingleUserProps {
  users: User[];
}
function SingleUser({ users }: SingleUserProps) {
  const { userId } = useParams<{ userId: string }>();
  const user = users.find((user) => user.id.toString() === userId);

  if (!user) {
    return <div>User not found</div>;
  }

  return (
    <div className='user-container'>
      <h1>{user.name}</h1>
      <dl>
        <dt><span>ID:</span></dt>
        <dd><span>{user.id}</span></dd>
        <dt><span>Username:</span></dt>
        <dd><span>{user.username}</span></dd>
        <dt><span>Email:</span></dt>
        <dd><span>{user.email}</span></dd>
        <dt><span>Address:</span></dt>
        <dd>
          <address>
            <span>{user.address.street}, {user.address.suite}</span>
            <br />
            <span>{user.address.city}, {user.address.zipcode}</span>
          </address>
        </dd>
        <dt><span>Location:</span></dt>
        <dd>
          <span><span>Latitude:</span> {user.address.geo.lat}</span>
          <br />
          <span><span>Longitude:</span> {user.address.geo.lng}</span>
        </dd>

        {/* add aria function to read phone number */}
        <dt><span>Phone:</span></dt>
        <dd><span>{user.phone}</span></dd>
        <dt><span>Website:</span></dt>
        <dd>
          <a href={`https://${user.website}`} target="_blank" rel="noopener noreferrer">
            <span>{user.website}</span>
          </a>
        </dd>
        <dt><span>Company:</span></dt>
        <dd><span>{user.company.name}</span></dd>
        <dt><span>Catchphrase:</span></dt>
        <dd><span>{user.company.catchPhrase}</span></dd>
        <dt><span>BS:</span></dt>
        <dd><span>{user.company.bs}</span></dd>
      </dl>
    </div>
  );
}
export default SingleUser;
