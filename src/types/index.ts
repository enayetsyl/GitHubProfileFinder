export type ButtonProps = {
  onClick?: () => void
  children: string
  className?: string
}

export type HeadingProps = {
  className?: string 
  children: string 
}

export type ProfileInfo = {
  avatar_url: string;
  bio: string | null;
  blog: string | null;
  company: string | null;
  created_at: string;
  email: string | null;
  events_url: string | null;
  followers: number;
  followers_url: string | null;
  following: number;
  following_url: string | null;
  gists_url: string | null;
  gravatar_id: string | null;
  hireable: boolean;
  html_url: string | null;
  id: number;
  location: string | null;
  login: string | null;
  name: string ;
  node_id: string | null;
  organizations_url: string | null;
  public_gists: number;
  public_repos: number;
  received_events_url: string | null;
  repos_url: string | null;
  site_admin: boolean;
  starred_url: string | null;
  subscriptions_url: string | null;
  twitter_username: string | null;
  type: string | null;
  updated_at: string;
  url: string | null;
};

export type ProfileInfoProp = {
  profileInfo: ProfileInfo
}