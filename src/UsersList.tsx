import { Link } from "react-router-dom";
import { User } from "./App";

interface UsersListProps {
  users: User[];
}

const UsersList: React.FC<UsersListProps> = ({ users }) => {

  const formatName = (name: string): string => {
    const formattedName = name
      .replace(/^(mr|mr\.|mrs|mrs\.|ms|ms\.|dr|dr\.|prof|rev|fr|sir|madam|sra|srta|srt|hr)\.? /i, "")
      .charAt(0)
      .toUpperCase() + name.slice(name.indexOf(" ") + 1).charAt(0).toUpperCase();
    return formattedName;
  };

  const formatAriaPhoneNumber = (phoneNumber: string): string => {
    const extensionIndex = phoneNumber.toLowerCase().indexOf("x");
    const extension = extensionIndex > -1 ? " extension " : "";
    const formatted = phoneNumber
      .replace(/[^0-9x]/g, "") // remove anything that’s not a number or x
      .replace(/x/gi, extension); // replace x or X with extension
    return formatted.replace(/(\d)/g, "$1 "); // insert spaces after every digit
  };

  return (
    <>
      <h1>User List</h1>
      <ol>
        {users
          .sort((a, b) => (formatName(a.name) > formatName(b.name) ? 1 : -1))
          .map((user) => (
            <div className='user-container'>
              <li key={user.id}>
                <h2>
                  {user.name}
                </h2>
                <dl>
                  <dt>
                    <span>
                      User ID:
                    </span>
                  </dt>
                  <dd>
                    <span>{user.id}</span>
                  </dd>
                  <dt>
                    <span>
                      Email:
                    </span>
                  </dt>
                  <dd>
                    <span>
                      <a href={`mailto:${user.email}`} aria-label={`Email ${user.name}`}>
                        {user.email}
                      </a>
                    </span>
                  </dd>
                  <dt>
                    <span>
                      City:
                    </span>
                  </dt>
                  <dd>
                    <span>{user.address.city}</span>
                  </dd>
                  <dt>
                    <span>
                      Phone:
                    </span>
                  </dt>
                  <dd>
                    <span aria-label={formatAriaPhoneNumber(user.phone)}>{user.phone}</span>
                  </dd>
                  <dt>
                    <span>
                      Website:
                    </span>
                  </dt>
                  <dd>
                    <span>
                      <a
                        href={`https://${user.website}`}
                        target="_blank"
                        aria-label="Website"
                        rel="noopener noreferrer"
                      >
                        {user.website}
                      </a>
                      {" "}(Opens in a new tab)
                    </span>
                  </dd>
                </dl>
                <Link to={`/users/${user.id}`}>Click</Link>
              </li>
            </div>
          ))}
      </ol>
    </>
  );
};

export default UsersList;
