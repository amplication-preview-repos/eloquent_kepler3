import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { DvachPostList } from "./dvachPost/DvachPostList";
import { DvachPostCreate } from "./dvachPost/DvachPostCreate";
import { DvachPostEdit } from "./dvachPost/DvachPostEdit";
import { DvachPostShow } from "./dvachPost/DvachPostShow";
import { NeuralNetResponseList } from "./neuralNetResponse/NeuralNetResponseList";
import { NeuralNetResponseCreate } from "./neuralNetResponse/NeuralNetResponseCreate";
import { NeuralNetResponseEdit } from "./neuralNetResponse/NeuralNetResponseEdit";
import { NeuralNetResponseShow } from "./neuralNetResponse/NeuralNetResponseShow";
import { PromptList } from "./prompt/PromptList";
import { PromptCreate } from "./prompt/PromptCreate";
import { PromptEdit } from "./prompt/PromptEdit";
import { PromptShow } from "./prompt/PromptShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"СНАО"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="DvachPost"
          list={DvachPostList}
          edit={DvachPostEdit}
          create={DvachPostCreate}
          show={DvachPostShow}
        />
        <Resource
          name="NeuralNetResponse"
          list={NeuralNetResponseList}
          edit={NeuralNetResponseEdit}
          create={NeuralNetResponseCreate}
          show={NeuralNetResponseShow}
        />
        <Resource
          name="Prompt"
          list={PromptList}
          edit={PromptEdit}
          create={PromptCreate}
          show={PromptShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
