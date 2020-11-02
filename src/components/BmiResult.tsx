import { IonRow, IonCol, IonCard, IonCardContent } from '@ionic/react'
import React from 'react'


const BmiResult: React.FC<{ result: number }> = (props) => {
	return (
		<IonRow>
			<IonCol>
				<IonCard>
					<IonCardContent>
						<h2>{props.result}</h2>
					</IonCardContent>
				</IonCard>
			</IonCol>
		</IonRow>
	);
};


export default BmiResult