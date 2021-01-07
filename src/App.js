import "./App.css";
import { useQuery } from "graphql-hooks";

const HOMEPAGE_QUERY = `
  {
    allArticles {
      id
      title,
      description,
    }
  }
`;

function App() {
  const { loading, error, data } = useQuery(HOMEPAGE_QUERY, {
    variables: {
      limit: 10,
    },
  });

  if (loading) return "Loading...";
  if (error) return "Something Bad Happened";

  return (
    <div>
      <h1>Hello Dato CMS</h1>
      <div>
        {data.allArticles.map((el) => (
          <div key={el.id}>
            <h1>{el.title}</h1>
            <p>{el.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
