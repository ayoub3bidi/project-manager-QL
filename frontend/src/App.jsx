import Header from "./components/Header";
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client'

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql',
  cache: new InMemoryCache(),
})

function App() {
  return (
    <div>
      <ApolloProvider client={client}>
        <Header/>
        <div className="container">
          ohayo sekai
        </div>
      </ApolloProvider>
    </div>
  );
}

export default App;
