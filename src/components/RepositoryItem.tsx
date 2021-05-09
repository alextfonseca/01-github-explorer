// tipagem dos dados
interface RepositoryItemProps {
  repository: {
    name: string;
    description: string;
    html_url: string;
  };
}

// exportação do componente
export const RepositoryItem = (props: RepositoryItemProps) => {
  return (
    <li>
      <strong>{props.repository.name}</strong>
      <p>{props.repository.description}</p>
      <a href={props.repository.html_url}>Acessar repositório</a>
    </li>
  );
};
