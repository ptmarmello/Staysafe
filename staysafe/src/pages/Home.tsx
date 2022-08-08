import React from 'react';

// import { Container } from './styles';
import { IonApp, IonContent, IonHeader } from '@ionic/react';


const Home: React.FC = () => {
  return(
    <IonApp>
        <IonHeader>
            <p>
                aqui é o header
            </p>
        </IonHeader>

        <IonContent>
            <p>
                aqui é o content
            </p>
        </IonContent>
    </IonApp>
  );
}

export default Home;