import {
  ProfileContainer,
  InfoContainer,
  FollowersContainer,
  Avatar,
} from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { useEffect, useState } from "react";
import {
  faBuilding,
  faUpRightFromSquare,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

interface UserData {
  name: string;
  bio: string;
  avatar_url: string;
  login: string;
  followers: number;
  company: string;
  html_url: string;
}

export function Profile() {
  const [userData, setUserData] = useState<UserData>({} as UserData);
  async function getData() {
    const response = await fetch(
      "https://api.github.com/users/diego3g"
    ).then((response) => response.json());

    setUserData(response);
  }

  useEffect(() => {
    getData();
  }, []);

  const { name, bio, avatar_url, login, followers, company, html_url } =
    userData;

  return (
    <ProfileContainer>
      <Avatar>
        <img src={avatar_url} alt="" />
      </Avatar>
      <InfoContainer>
        <h1>{name}</h1>
        <p>{bio}</p>
        <FollowersContainer>
          <span>
            <FontAwesomeIcon icon={faGithub} />
            {login}
          </span>

          <span>
            <FontAwesomeIcon icon={faBuilding} />
            {company}
          </span>

          <span>
            <FontAwesomeIcon icon={faUser} />
            {followers} seguidores
          </span>
        </FollowersContainer>
      </InfoContainer>
      <a href={html_url} target="_blank">
        github
        <FontAwesomeIcon icon={faUpRightFromSquare} />
      </a>
    </ProfileContainer>
  );
}
