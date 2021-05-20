import React from 'react';
import Card from './components/Card';
import Footer from './components/Footer';
import Header from './components/Header';
import api from './commons/api';

interface ResultType {
  [key: string]: string | number;
}

interface InfoType {
  title: string;
  content: string | number;
}


function App() {
  const [info, setInfo] = React.useState<InfoType[]>([]);
  React.useEffect(() => {
    async function searchData() {
      const result: { data: ResultType } = await api.get('/brazil');
      const data = await result.data;
      const items = await Object.keys(await result.data);
      const allInfo = items.map((e: string) => ({ title: e, content: data[e] }));

      setInfo(await allInfo);
    }

    searchData();

  }, []);

  return (
    <div className="App">
      <div className="container">
        <Header />
        <div className="containerCards">
          {
            info.map((e: InfoType) => (<Card key={e.title} title={e.title} content={e.content} />))
          }
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
