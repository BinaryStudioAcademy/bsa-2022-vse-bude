interface FilterProps {
  filter: string;
}

export const Filter = ({ filter }: FilterProps) => <div>{filter} Filtered posts</div>;
