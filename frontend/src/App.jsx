import Header from "./components/Header";
import Clients from "./components/Clients";
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
          <Clients/>
        </div>
      </ApolloProvider>
    </div>
  );
}

export default App;
