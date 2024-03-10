import { ProfileInfoProp } from "../types";
import Heading from "./Heading";

const Profile = (profileInfo: ProfileInfoProp) => {
  console.log(profileInfo?.profileInfo?.name);
  const {
    avatar_url,
    bio,
    blog,
    company,
    created_at,
    email,
    hireable,
    location,
    login,
    name,
    organizations_url,
    public_gists,
    public_repos,
    repos_url,
    twitter_username,
  } = profileInfo.profileInfo;

  const dateSince = new Date(created_at).toLocaleDateString()

  return (
    <div className="max-w-xs mx-auto lg:max-w-4xl lg:mx-auto my-20">
      {profileInfo && (
        <div className=" space-y-5 ">
          {/* name and picture */}
          <div className="flex flex-col lg:flex-row lg:justify-between items-center overflow-x-scroll">
            <Heading className="text-3xl">{name}</Heading>
            <img
              src={avatar_url}
              alt="userPhoto"
              className="h-32 w-32 rounded-full"
            />
          </div>
          <p className="py-4 text-justify px-2 text-xl overflow-x-scroll">
            From - {location}. {bio}
          </p>
          {/* contact info */}
          <div className=" px-4 border border-blue-400 py-5 rounded-lg text-xl overflow-x-scroll">
            <Heading
              className="text-xl
          "
            >
              Contact Info
            </Heading>
            <p className="text-start">
              Email: {email ? email : "Email is classified"}
            </p>
            <p className="text-start">
              Github user Name:{" "}
              {login ? login : "Github user name is classified"}
            </p>
            {blog && (
              <p className="text-start">
                Portfolio:{" "}
                <a
                  href={blog}
                  target="_blank"
                  className="underline cursor-pointer text-blue-8 00"
                >
                  {blog}
                </a>
              </p>
            )}
            {twitter_username && (
              <p className="text-start">
                Twitter UserName:
                {twitter_username}
              </p>
            )}
          </div>
          {/* job info */}
          <div className=" px-4 border border-blue-400 py-5 rounded-lg text-xl overflow-x-scroll">
            <Heading
              className="text-xl
          "
            >
              Job Info
            </Heading>
            <p className="text-start">Working: {hireable ? "No" : "Yes"}</p>
            <p className="text-start">
              Github user Name:{" "}
              {login ? login : "Github user name is classified"}
            </p>
            {hireable !== null ||
              (true && (
                <>
                  <p className="text-start">Company Name:{company}</p>
                  <p>{organizations_url}</p>
                </>
              ))}
          </div>
          {/* work */}
          <div className=" px-4 border border-blue-400 py-5 rounded-lg text-xl overflow-x-scroll">
            <Heading
              className="text-xl
          "
            >
              Work History
            </Heading>
            {
              public_repos !== 0 && (
                <p>Public Repo: {public_repos}</p>
              )
            }
            {
              public_gists !== 0 && (
                <p>Public Gists: {public_gists}</p>
              )
            }
            {
              repos_url  && (
                <p className="">GitHub Repo: {repos_url}
                  </p>
              )
            }
           
            <p>Github Since: {dateSince}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
