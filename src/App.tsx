import React, { useRef, useState } from "react";
import { Redirect, Route } from "react-router-dom";
import { IonApp, IonHeader, IonContent, IonToolbar, IonTitle, IonRow, IonInput, IonGrid, IonCol, IonItem, IonLabel, IonButton, IonIcon, IonCard, IonCardContent } from "@ionic/react";
import {calculatorOutline,refreshOutline} from "ionicons/icons"
import { IonReactRouter } from "@ionic/react-router";
import Home from "./pages/Home";
import BmiControls from "./components/BmiControls"
import BmiResult from "./components/BmiResult"


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

const App: React.FC = () => {
	const [calculatedBmi, setBmiValue] = useState<number>();
	const heightInputRef = useRef<HTMLIonInputElement>(null);
	const weightInputRef = useRef<HTMLIonInputElement>(null);

	const calculateBmI = () => {
		const heightValue = heightInputRef.current!.value;
		const weightValue = weightInputRef.current!.value;

		if(!heightValue || !weightValue){
			setBmiValue(undefined);
			return;
		}

		const bmiValue = +weightValue / (+heightValue * +heightValue);
		if(isNaN(bmiValue)){
			alert("Height and weight must be numbers!");
		} else {
			setBmiValue(bmiValue);
		}
	};
	const resetInputs = () => {
		heightInputRef.current!.value = '';
		weightInputRef.current!.value = '';
		setBmiValue(undefined);
	};

	return (
		<IonApp>
			<IonHeader>
				<IonToolbar color="primary">
					<IonTitle>BMI Calculator</IonTitle>
				</IonToolbar>
			</IonHeader>
			<IonContent className="ion-padding">
				<IonGrid>
					<IonRow>
						<IonCol>
							<IonItem>
								<IonLabel position="floating">Your Height</IonLabel>
								<IonInput type="number" ref={heightInputRef}></IonInput>
							</IonItem>
						</IonCol>
					</IonRow>
					<IonRow>
						<IonCol>
							<IonItem>
								<IonLabel position="floating">Your Weight</IonLabel>
								<IonInput type="number" ref={weightInputRef}></IonInput>
							</IonItem>
						</IonCol>
					</IonRow>
					<BmiControls onCalculate={calculateBmI} onReset={resetInputs} />
					{calculatedBmi && <BmiResult result={calculatedBmi} />}
				</IonGrid>
			</IonContent>
		</IonApp>
	);
};

export default App;