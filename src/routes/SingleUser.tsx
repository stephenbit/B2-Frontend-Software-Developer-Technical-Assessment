import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { IUser } from '../helpers/Types';
import { formatAriaPhoneNumber } from '../helpers/HelperFunctions'

interface SingleUserProps {
  users: IUser[];
}

function SingleUser({ users }: SingleUserProps) {
  const { userId } = useParams<{ userId: string }>();
  const user = users.find((user) => user.id.toString() === userId);

  const generateSingleUserDlContents = (user: IUser) => {
    const dlContents = [
      { label: 'ID:', value: user.id },
      { label: 'Username:', value: user.username },
      { label: 'Email:', value: user.email },
      {
        label: 'Address:', value: (
          <address>
            <span>{user.address.street}, {user.address.suite}</span>
            <br />
            <span>{user.address.city}, {user.address.zipcode}</span>
          </address>
        )
      },
      {
        label: 'Location:', value: (
          <span>
            <span>Latitude:</span> {user.address.geo.lat}
            <br />
            <span>Longitude:</span> {user.address.geo.lng}
          </span>
        )
      },
      {
        label: 'Phone:', value: (
          <span aria-label={formatAriaPhoneNumber(user.phone)}>
            {user.phone}
          </span>
        )
      },
      {
        label: 'Website:', value: (
          <span>
            <a
              href={`https://${user.website}`}
              target="_blank"
              rel="noopener noreferrer">
              {user.website}
            </a>
            {' '}
            <wbr />
            (Opens in a new tab)
          </span>
        )
      },
      { label: 'Company:', value: user.company.name },
      { label: 'Catchphrase:', value: user.company.catchPhrase },
      { label: 'BS:', value: user.company.bs },
    ];
    return dlContents.map(({ label, value }, index) => (
      <React.Fragment key={index}>
        <dt><span>{label}</span></dt>
        <dd><span>{value}</span></dd>
      </React.Fragment>
    ));
  };


  if (!user) {
    return <div>User not found</div>;
  }

  return (
    <div className='users-list'>
      <h2>{user.name}</h2>
      <div className='user-container'>
        <dl>
          {generateSingleUserDlContents(user)}

          <Link to={`/`} className="full-details-button">
            <p>Return to the <br />
              list of users</p>
          </Link>
        </dl>
      </div>
    </div>
  );
}
export default SingleUser;
