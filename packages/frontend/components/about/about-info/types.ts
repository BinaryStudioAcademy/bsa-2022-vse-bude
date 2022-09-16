interface Contributor {
  name: string;
  photo: string;
  role: string;
}

export interface ContributorsProps {
  contributors: Contributor[];
}
