import React, { useRef, useState } from "react";
import { Redirect, Route } from "react-router-dom";
import { IonApp, IonHeader, IonContent, IonToolbar, IonTitle, IonRow, IonInput, IonGrid, IonCol, IonItem, IonLabel, IonButton, IonIcon, IonCard, IonCardContent } from "@ionic/react";
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

const App: React.FC = () => {
	const [calculatedBmi, setBmiValue] = useState<number>();
	const heightInputRef = useRef<HTMLIonInputElement>(null);
	const weightInputRef = useRef<HTMLIonInputElement>(null);

	const calculateBMI = () => {
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
								<IonInput ref={heightInputRef}></IonInput>
							</IonItem>
						</IonCol>
					</IonRow>
					<IonRow>
						<IonCol>
							<IonItem>
								<IonLabel position="floating">Your Weight</IonLabel>
								<IonInput ref={weightInputRef}></IonInput>
							</IonItem>
						</IonCol>
					</IonRow>
					<IonRow>
						<IonCol className="ion-text-left">
							<IonButton onClick={calculateBMI}>
								<IonIcon slot="start" icon={calculatorOutline} />
								Calculate
							</IonButton>
						</IonCol>
						<IonCol className="ion-text-right">
							<IonButton onClick={resetInputs}>
								<IonIcon slot="start" icon={refreshOutline} />
								Reset
							</IonButton>
						</IonCol>
					</IonRow>
					{calculatedBmi && (<IonRow>
						<IonCol>
							<IonCard>
								<IonCardContent>
									<h2>{calculatedBmi}</h2>
								</IonCardContent>
							</IonCard>
						</IonCol>
					</IonRow>)}
				</IonGrid>
			</IonContent>
		</IonApp>
	);
};

export default App;