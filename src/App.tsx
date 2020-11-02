import React from "react";
import { Redirect, Route } from "react-router-dom";
import { IonApp, IonHeader, IonContent, IonToolbar, IonTitle, IonRow, IonInput, IonGrid, IonCol, IonItem, IonLabel, IonButton, IonIcon } from "@ionic/react";
import {calculatorOutline,refreshOutline} from "ionicons/icons"
import { IonReactRouter } from "@ionic/react-router";
import Home from "./pages/Home";


/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";

const App: React.FC = () => (
	<IonApp>
		<IonHeader>
			<IonToolbar>
				<IonTitle>BMI Calculator</IonTitle>
			</IonToolbar>
		</IonHeader>
		<IonContent className="ion-padding">
			<IonGrid>
				<IonRow>
					<IonCol>
						<IonItem>
							<IonLabel position="floating">Your Height</IonLabel>
							<IonInput></IonInput>
						</IonItem>
					</IonCol>
				</IonRow>
				<IonRow>
					<IonCol>
						<IonItem>
							<IonLabel position="floating">Your Weight</IonLabel>
							<IonInput></IonInput>
						</IonItem>
					</IonCol>
				</IonRow>
				<IonRow>
					<IonCol className="ion-text-left">
						<IonButton>
							<IonIcon slot="start" icon={calculatorOutline}/>
							Calculate
						</IonButton>
					</IonCol>
					<IonCol className="ion-text-right">
						<IonButton>
							<IonIcon slot="start" icon={refreshOutline}/>
							Reset
						</IonButton>
					</IonCol>
				</IonRow>
				<IonRow>
					<IonCol>

					</IonCol>
				</IonRow>
			</IonGrid>
		</IonContent>
	</IonApp>
);

export default App;