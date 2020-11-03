import { IonRow, IonCol, IonCard, IonCardContent } from '@ionic/react'
import React from 'react'


const BmiResult: React.FC<{ result: number }> = (props) => {
	return (
		<IonRow>
			<IonCol>
				<IonCard>
					<IonCardContent className='ion-text-center'>
						<h2>{props.result.toFixed(2)}</h2>
					</IonCardContent>
				</IonCard>
			</IonCol>
		</IonRow>
	);
};


export default BmiResult